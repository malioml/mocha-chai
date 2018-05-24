const { assert } = require('chai').assert
const { app } = require('../app')

describe('App', () => {
        describe('sayHello()', () => {
                it('sayHello should return hello', () => {
                        assert.equal(app.sayHello(), 'hello')
                })
                it('sayHello should return a string' () => {
                        assert.typeOf(app.sayHello(), 'string')
                })
        })
        
        describe('addNumbers()', () => {
                it('addNumbers should be above 5', () => {
                        asset.isAbove(app.addNumbers(5,5), 5)
                })
                it('addNumbers should return a number', () => {
                        asset.typeOf(app.addNumbers(5,5), 'number')
                })
        })
})