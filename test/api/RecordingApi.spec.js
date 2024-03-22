/**
 * Journey Orchestration API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.30.49
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
    instance = new JourneyOrchestrationApi.RecordingApi();
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

  describe('RecordingApi', function() {
    describe('recordingClientDelete', function() {
      it('should call recordingClientDelete successfully', function(done) {
        //uncomment below and update the code to test recordingClientDelete
        //instance.recordingClientDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordingClientGet', function() {
      it('should call recordingClientGet successfully', function(done) {
        //uncomment below and update the code to test recordingClientGet
        //instance.recordingClientGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordingClientTargetDelete', function() {
      it('should call recordingClientTargetDelete successfully', function(done) {
        //uncomment below and update the code to test recordingClientTargetDelete
        //instance.recordingClientTargetDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordingClientTargetGet', function() {
      it('should call recordingClientTargetGet successfully', function(done) {
        //uncomment below and update the code to test recordingClientTargetGet
        //instance.recordingClientTargetGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordingClientTargetNameDelete', function() {
      it('should call recordingClientTargetNameDelete successfully', function(done) {
        //uncomment below and update the code to test recordingClientTargetNameDelete
        //instance.recordingClientTargetNameDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordingClientTargetNameEventsGet', function() {
      it('should call recordingClientTargetNameEventsGet successfully', function(done) {
        //uncomment below and update the code to test recordingClientTargetNameEventsGet
        //instance.recordingClientTargetNameEventsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordingClientTargetNameGet', function() {
      it('should call recordingClientTargetNameGet successfully', function(done) {
        //uncomment below and update the code to test recordingClientTargetNameGet
        //instance.recordingClientTargetNameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordingClientTargetNamePut', function() {
      it('should call recordingClientTargetNamePut successfully', function(done) {
        //uncomment below and update the code to test recordingClientTargetNamePut
        //instance.recordingClientTargetNamePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordingClientTargetPost', function() {
      it('should call recordingClientTargetPost successfully', function(done) {
        //uncomment below and update the code to test recordingClientTargetPost
        //instance.recordingClientTargetPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordingGet', function() {
      it('should call recordingGet successfully', function(done) {
        //uncomment below and update the code to test recordingGet
        //instance.recordingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
