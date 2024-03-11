/**
 * Journey Orchestration API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.29.139
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JourneyOrchestrationApi);
  }
}(this, function(expect, JourneyOrchestrationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JourneyOrchestrationApi.RulegroupsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RulegroupsApi', function() {
    describe('downloadRulegroupClientTargetRulegroupnameGet', function() {
      it('should call downloadRulegroupClientTargetRulegroupnameGet successfully', function(done) {
        //uncomment below and update the code to test downloadRulegroupClientTargetRulegroupnameGet
        //instance.downloadRulegroupClientTargetRulegroupnameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientDelete', function() {
      it('should call rulegroupClientDelete successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientDelete
        //instance.rulegroupClientDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientGet', function() {
      it('should call rulegroupClientGet successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientGet
        //instance.rulegroupClientGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientTargetDelete', function() {
      it('should call rulegroupClientTargetDelete successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientTargetDelete
        //instance.rulegroupClientTargetDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientTargetGet', function() {
      it('should call rulegroupClientTargetGet successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientTargetGet
        //instance.rulegroupClientTargetGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientTargetRulegroupnameCopytoPost', function() {
      it('should call rulegroupClientTargetRulegroupnameCopytoPost successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientTargetRulegroupnameCopytoPost
        //instance.rulegroupClientTargetRulegroupnameCopytoPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientTargetRulegroupnameDelete', function() {
      it('should call rulegroupClientTargetRulegroupnameDelete successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientTargetRulegroupnameDelete
        //instance.rulegroupClientTargetRulegroupnameDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientTargetRulegroupnameGet', function() {
      it('should call rulegroupClientTargetRulegroupnameGet successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientTargetRulegroupnameGet
        //instance.rulegroupClientTargetRulegroupnameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientTargetRulegroupnamePost', function() {
      it('should call rulegroupClientTargetRulegroupnamePost successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientTargetRulegroupnamePost
        //instance.rulegroupClientTargetRulegroupnamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientTargetRulegroupnamePut', function() {
      it('should call rulegroupClientTargetRulegroupnamePut successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientTargetRulegroupnamePut
        //instance.rulegroupClientTargetRulegroupnamePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientTargetRulegroupnameVersionDelete', function() {
      it('should call rulegroupClientTargetRulegroupnameVersionDelete successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientTargetRulegroupnameVersionDelete
        //instance.rulegroupClientTargetRulegroupnameVersionDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupClientTargetRulegroupnameVersionGet', function() {
      it('should call rulegroupClientTargetRulegroupnameVersionGet successfully', function(done) {
        //uncomment below and update the code to test rulegroupClientTargetRulegroupnameVersionGet
        //instance.rulegroupClientTargetRulegroupnameVersionGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupGet', function() {
      it('should call rulegroupGet successfully', function(done) {
        //uncomment below and update the code to test rulegroupGet
        //instance.rulegroupGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rulegroupPost', function() {
      it('should call rulegroupPost successfully', function(done) {
        //uncomment below and update the code to test rulegroupPost
        //instance.rulegroupPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));