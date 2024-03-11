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
    instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
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

  describe('RealtimeInputStepDetails', function() {
    it('should create an instance of RealtimeInputStepDetails', function() {
      // uncomment below and update the code to test RealtimeInputStepDetails
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be.a(JourneyOrchestrationApi.RealtimeInputStepDetails);
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property repeatTestData (base name: "repeatTestData")', function() {
      // uncomment below and update the code to test the property repeatTestData
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property timeoutHttpCode (base name: "timeoutHttpCode")', function() {
      // uncomment below and update the code to test the property timeoutHttpCode
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property defaultResponseContentType (base name: "defaultResponseContentType")', function() {
      // uncomment below and update the code to test the property defaultResponseContentType
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property overflowProtection (base name: "overflowProtection")', function() {
      // uncomment below and update the code to test the property overflowProtection
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property defaultHttpCode (base name: "defaultHttpCode")', function() {
      // uncomment below and update the code to test the property defaultHttpCode
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property stepName (base name: "stepName")', function() {
      // uncomment below and update the code to test the property stepName
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property defaultValue (base name: "defaultValue")', function() {
      // uncomment below and update the code to test the property defaultValue
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property useTestData (base name: "useTestData")', function() {
      // uncomment below and update the code to test the property useTestData
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property timeoutValue (base name: "timeoutValue")', function() {
      // uncomment below and update the code to test the property timeoutValue
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property timeoutMilliseconds (base name: "timeoutMilliseconds")', function() {
      // uncomment below and update the code to test the property timeoutMilliseconds
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property requestContentType (base name: "requestContentType")', function() {
      // uncomment below and update the code to test the property requestContentType
      //var instance = new JourneyOrchestrationApi.RealtimeInputStepDetails();
      //expect(instance).to.be();
    });

  });

}));
