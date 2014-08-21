// Dependencies
// --------------------------------------------------------------

// Test environment
var chai = require('chai'); // Test assertions that are expressive and readable
var should = chai.should();
var expect = chai.expect;

var Store = require('../index');

// Tests
// ----------------------------------------------------------------
describe('Store', function(){

        var store;

        it('Should throw an error if not initialized with a name', function () {
            var fn = function () { return new Store() };
            expect(fn).to.throw(/give the store a name/);
        });

        it('Should have a type', function () {
            store = new Store('test', []);
            store.type.should.equal('array');
        });

        describe('Array as Store', function () {

            // Setup each test
            beforeEach(function(){
                store = new Store('test', [1, {name: 'thing'}]);
            });

            it('should accept new items', function(){
                store.add(2);
                expect(store.items[2]).to.equal(2);
            });

            it('should be able to retrieve items', function(){
                expect(store.get(1)[0]).to.equal(1);
            });

            it('should be able to remove items', function(){
                store.remove(1)
                expect(store.get(1)[0]).to.equal(undefined);
            });

            it('should accept multiple values at once', function(){
                store = new Store('test', []);
                store.populate([1,2,3,4,5])
                store.items.length.should.equal(5);
            });
        });

        describe('Object as Store', function () {

            // Setup each test
            beforeEach(function(){
                store = new Store('test', {
                    test: {name: 'test', value: 1}
                });
            });

            it('should accept new items with a name as key', function(){
                store.add({
                    name:'component', value:1
                });
                expect(store.items['component']['value']).to.equal(1);
            });

            it('should be able to retrieve items', function(){
                expect(store.get('test').value).to.equal(1);
            });

            it('should be able to remove items', function(){
                store.remove('test');
                expect(store.get('test').value).to.equal(1);
            });
            it('should accept multiple values at once', function(){
                var length = 0;
                store = new Store('test', {})
                    .populate([{name:1},{name:2},{name:3},{name:4},{name:5}])

                for (key in store['items']) {
                    length +=1;
                }
                length.should.equal(5);
            });
        });

});