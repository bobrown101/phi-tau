import chai from 'chai';
import initialState from './initialState.js';

let assert = chai.assert;

describe('initial state', function(){

  it('should export currentRoute: home',function(){
    assert.equal(initialState.currentRoute, "home");
  });
});
