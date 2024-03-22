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
    instance = new JourneyOrchestrationApi.QueueMessage();
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

  describe('QueueMessage', function() {
    it('should create an instance of QueueMessage', function() {
      // uncomment below and update the code to test QueueMessage
      //var instance = new JourneyOrchestrationApi.QueueMessage();
      //expect(instance).to.be.a(JourneyOrchestrationApi.QueueMessage);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new JourneyOrchestrationApi.QueueMessage();
      //expect(instance).to.be();
    });

    it('should have the property sentTimestamp (base name: "sentTimestamp")', function() {
      // uncomment below and update the code to test the property sentTimestamp
      //var instance = new JourneyOrchestrationApi.QueueMessage();
      //expect(instance).to.be();
    });

    it('should have the property bundleId (base name: "bundleId")', function() {
      // uncomment below and update the code to test the property bundleId
      //var instance = new JourneyOrchestrationApi.QueueMessage();
      //expect(instance).to.be();
    });

    it('should have the property receipt (base name: "receipt")', function() {
      // uncomment below and update the code to test the property receipt
      //var instance = new JourneyOrchestrationApi.QueueMessage();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new JourneyOrchestrationApi.QueueMessage();
      //expect(instance).to.be();
    });

    it('should have the property nonjsonmessage (base name: "nonjsonmessage")', function() {
      // uncomment below and update the code to test the property nonjsonmessage
      //var instance = new JourneyOrchestrationApi.QueueMessage();
      //expect(instance).to.be();
    });

  });

}));
