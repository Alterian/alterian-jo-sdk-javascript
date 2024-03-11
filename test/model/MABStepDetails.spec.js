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
    instance = new JourneyOrchestrationApi.MABStepDetails();
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

  describe('MABStepDetails', function() {
    it('should create an instance of MABStepDetails', function() {
      // uncomment below and update the code to test MABStepDetails
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be.a(JourneyOrchestrationApi.MABStepDetails);
    });

    it('should have the property field (base name: "field")', function() {
      // uncomment below and update the code to test the property field
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property fieldKey (base name: "fieldKey")', function() {
      // uncomment below and update the code to test the property fieldKey
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property parameterKey (base name: "parameterKey")', function() {
      // uncomment below and update the code to test the property parameterKey
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property parameterExperimentationFrequency (base name: "parameterExperimentationFrequency")', function() {
      // uncomment below and update the code to test the property parameterExperimentationFrequency
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property parameterMabMode (base name: "parameterMabMode")', function() {
      // uncomment below and update the code to test the property parameterMabMode
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property parameterStatisticalSignificance (base name: "parameterStatisticalSignificance")', function() {
      // uncomment below and update the code to test the property parameterStatisticalSignificance
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property parameterTable (base name: "parameterTable")', function() {
      // uncomment below and update the code to test the property parameterTable
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property reportingFields (base name: "reportingFields")', function() {
      // uncomment below and update the code to test the property reportingFields
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property seed (base name: "seed")', function() {
      // uncomment below and update the code to test the property seed
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property staticMabMode (base name: "staticMabMode")', function() {
      // uncomment below and update the code to test the property staticMabMode
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property staticExperimentationFrequency (base name: "staticExperimentationFrequency")', function() {
      // uncomment below and update the code to test the property staticExperimentationFrequency
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property staticKey (base name: "staticKey")', function() {
      // uncomment below and update the code to test the property staticKey
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property staticStatisticalSignificance (base name: "staticStatisticalSignificance")', function() {
      // uncomment below and update the code to test the property staticStatisticalSignificance
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property staticTable (base name: "staticTable")', function() {
      // uncomment below and update the code to test the property staticTable
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property stepName (base name: "stepName")', function() {
      // uncomment below and update the code to test the property stepName
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

    it('should have the property variants (base name: "variants")', function() {
      // uncomment below and update the code to test the property variants
      //var instance = new JourneyOrchestrationApi.MABStepDetails();
      //expect(instance).to.be();
    });

  });

}));