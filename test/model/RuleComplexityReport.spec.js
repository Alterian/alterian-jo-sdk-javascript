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
    instance = new JourneyOrchestrationApi.RuleComplexityReport();
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

  describe('RuleComplexityReport', function() {
    it('should create an instance of RuleComplexityReport', function() {
      // uncomment below and update the code to test RuleComplexityReport
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be.a(JourneyOrchestrationApi.RuleComplexityReport);
    });

    it('should have the property numberOfRules (base name: "numberOfRules")', function() {
      // uncomment below and update the code to test the property numberOfRules
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property createFutureEventSteps (base name: "createFutureEventSteps")', function() {
      // uncomment below and update the code to test the property createFutureEventSteps
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property processFutureEventSteps (base name: "processFutureEventSteps")', function() {
      // uncomment below and update the code to test the property processFutureEventSteps
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property maxHopCount (base name: "maxHopCount")', function() {
      // uncomment below and update the code to test the property maxHopCount
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property minHopCount (base name: "minHopCount")', function() {
      // uncomment below and update the code to test the property minHopCount
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property averageHopCount (base name: "averageHopCount")', function() {
      // uncomment below and update the code to test the property averageHopCount
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property minActiveCount (base name: "minActiveCount")', function() {
      // uncomment below and update the code to test the property minActiveCount
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property maxActiveCount (base name: "maxActiveCount")', function() {
      // uncomment below and update the code to test the property maxActiveCount
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property averageActiveCount (base name: "averageActiveCount")', function() {
      // uncomment below and update the code to test the property averageActiveCount
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property minStepCount (base name: "minStepCount")', function() {
      // uncomment below and update the code to test the property minStepCount
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property maxStepCount (base name: "maxStepCount")', function() {
      // uncomment below and update the code to test the property maxStepCount
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property averageStepCount (base name: "averageStepCount")', function() {
      // uncomment below and update the code to test the property averageStepCount
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

    it('should have the property cacheReadWriteRatio (base name: "cacheReadWriteRatio")', function() {
      // uncomment below and update the code to test the property cacheReadWriteRatio
      //var instance = new JourneyOrchestrationApi.RuleComplexityReport();
      //expect(instance).to.be();
    });

  });

}));
