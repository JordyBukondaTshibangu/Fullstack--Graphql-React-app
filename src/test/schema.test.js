const { describe, it } =  require('mocha')
const chai = require('chai')
const { schema } = require('../schema')

chai.should()
const schemaTest = describe('Test Static Schema Snapshot', () => {
    
    it('schema should contain types', () => {
    //   chai.assert.isNotNull(schema.getType("Person"))
    //   chai.assert.isDefined(schema.getType("Person"))
    })
    
    it('scheme should not contain unregistered types', () => {
      chai.assert.isUndefined(schema.getType("NotADefinedType", "Type should not be defined"))
    })
})

module.exports = schemaTest