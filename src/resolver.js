/*
const bcrypt = require('bcrypt');
const { sign, verify } = require('jsonwebtoken');
const { checkAuth } = require('./middleware/auth-middleware')

const resolvers = {
    Query : {

        allPeople : (_,{skip,take}, { dataSources }) => {
            return dataSources.PeopleAPI.getAllPeople(take);
        },
        person : async(_,{filter}, { dataSources }) => {
            return dataSources.PeopleAPI.getPerson(filter)
        },

        me : async(_, { email }, {prisma, req}) => {

            const user = checkAuth(req)

            const me = await prisma.user.findMany({ where : { email : user.email}})
            
            return me[0]
        }
    },
    Mutation : {

        createPerson : (_, { createdPersonInput : { name ,height ,mass ,gender ,homeworld } } , context) => {

            const newPerson = context.prisma.person.create({
                data : {
                    name ,height ,mass ,gender ,homeworld 
                }
            });
            return newPerson;
        },
        updatePerson : (_, { updatedPerson : { name ,height ,mass ,gender ,homeworld } }, context ) => {
            
            const updatePerson = context.prisma.person.update({
                where : { name }, 
                data : {
                     height ,mass ,gender ,homeworld 
                }
            });

            return updatePerson;
        },
        deletePerson : (_, { name }, context) => {
            const deletePerson = context.prisma.person.delete({ 
                where : { name }
            });

            return deletePerson;
        },

        register : async(_, { createdUser :  { name ,email, password }}, context) => {

            const encryptedPassword = await bcrypt.hash(password,8)
            
            const newUser = await context.prisma.user.create({
                data : {
                    name ,
                    email, 
                    password : encryptedPassword 
                }
            });
            
            const token = await sign({ email }, 'Thisismysecretkey', {
                expiresIn : '3h'
            })
            
            return {
                ...newUser,
                token
            };
        },
        login : async(_, { email, password }, context) => {

            const user =  await context.prisma.user.findMany({
                where: {
                  email,
                },
              })

            const userRetrieved = user[0];
            const result = await bcrypt.compare(password, userRetrieved.password)

            const token = await sign({ email }, 'Thisismysecretkey', {
                expiresIn : '3h'
            })
            
            if(result){
                return {
                    ...userRetrieved,
                    token
                }
            }
            
        },
        updateProfile : (_, { updatedUser : {  name ,email }  }, {prisma, req} ) => {

           const user = checkAuth(req)
           
            const updateUser = prisma.user.update({
                where : {
                    email : user.email
                }, 
                data : {
                    name,
                    email,
                }
            })
            return updateUser
        },
        deleteProfile : (_, { email }, { prisma, req}) => {

            const user = checkAuth(req)

            const deleteUser = prisma.user.delete({
                where : { email : user.email }
            })

            return deleteUser
        }
    }
}

module.exports =  resolvers;
*/