const { gql } = require("apollo-server-express");

const typeDefs = gql;

const userSchema = new Schema(
    {
username: {
    type: String,
    required: true,
    unique: true,
},
email:{
    type: String,
    required: true,
    unique: true,
    math:[/.+@.+\..+/, 'Must use vlid email address'],
},

password: {
    type: String,
    required: true,
},
savedSchema: [Schema],
    },

    toJSON: {
    virtuals: true,
    },

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }},

module.exports = typeDefs