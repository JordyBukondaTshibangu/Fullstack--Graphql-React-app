const { resolverPerson } = require('./person')
const { resolverUser } = require('./user')

module.exports.resolvers = {
    Query : {
		...resolverUser.Query,
		...resolverPerson.Query
    },
    Mutation : {
		...resolverUser.Mutation,
		...resolverPerson.Mutation
    }
}
