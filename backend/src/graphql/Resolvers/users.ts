const User = require("../../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validateRegsiterInputs = require("../../util/validators")


const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    Mutation: {
        register: async (_: any, args: {password: string, username: string, email: string, confirmPassword: string}) => {


            let {password, username, email, confirmPassword} = args

            const { valid, errors } = validateRegsiterInputs(username, email, password, confirmPassword)
          

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
             password = await bcrypt.hash(password, 12);

             const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toDateString()
             });

             const res = await newUser.save();

             const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username,
             }, SECRET_KEY, {expiresIn: '1h'});

             return {
                ...res._doc,
                id: res._id,
                token
             }
            

        }

    }
}