const { describe, before } =  require('mocha')
const { resolvers } = require('../resolver')
const EasyGraphQLTester = require('easygraphql-tester')
const { typeDefs } = require('../schema')

describe('Test Queries', () => {
    let tester
        
    before(() => {
        tester = new EasyGraphQLTester(typeDefs, resolvers)
    })
    
    it('Should pass if the query is valid', () => {
        const validQuery = `
        {
          allPeople {
            name
          }
        }
        `
        tester.test(true, validQuery, {
          books: books
        })
      })
      it('Should fail if the query is invalid', () => {
        const invalidQuery = `
        {
          allPeople {
            # Not a field!
            fullName
          }
        }
        `
        tester.test(false, invalidQuery)
      })
})