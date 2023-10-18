const User = require("../../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validateRegsiterInputs = require("../../util/validators")
const validateLoginInputs = require("../../util/validators")
import { GraphQLError } from "graphql";
 


const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    Mutation: {

        login: async (_: any, args: {username: string, password: string}) => {
            const {username, password} = args;
            const {errors, valid} = validateLoginInputs(username, password);

            //make sure username exists in database
            const user = await User.findOne({username})

            if(!user) {
                throw new GraphQLError("Username is Not Found")
            }

            //make sure validatelogininputs is not returning any errors

            if(!valid) {
                return errors;
            }

            //make sure passwords match the database

            const match = await bcrypt.conpare(password, user.password)

            if(!match) {
                throw new Error("Passwords do not match")

                
            }



        },





        register: async (_: any, args: {password: string, username: string, email: string, confirmPassword: string}) => {

            //code out vladiateRegisterInputs
            let {password, username, email, confirmPassword} = args

            const { valid, errors } = validateRegsiterInputs(username, email, password, confirmPassword)

            if (!valid) {
                throw new Error(errors)
            }
          
            //Makes sure there is no duplicate username
            const existingUser = await User.findUnique({
                where: {
                    username
                }
            })

            if (existingUser) {
                return {
                    error:"This username is taken"
                }
            }

            //Hash user and create Auth token
            password = bcrypt.hash(password, 12)

            const newUser = await new User({
                username,
                password,
                email,
                confirmPassword,
            })

            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                username: res.username,
                email: res.email,
            }, SECRET_KEY, {expiresIn: "1hr"})

            return {
                ...res._doc,
                id: res._id,
                token,
            }


            

        }

    }
}