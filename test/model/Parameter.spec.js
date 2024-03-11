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
    instance = new JourneyOrchestrationApi.Parameter();
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

  describe('Parameter', function() {
    it('should create an instance of Parameter', function() {
      // uncomment below and update the code to test Parameter
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be.a(JourneyOrchestrationApi.Parameter);
    });

    it('should have the property businessGoal (base name: "businessGoal")', function() {
      // uncomment below and update the code to test the property businessGoal
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property client (base name: "client")', function() {
      // uncomment below and update the code to test the property client
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property dataType (base name: "dataType")', function() {
      // uncomment below and update the code to test the property dataType
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property globalParam (base name: "globalParam")', function() {
      // uncomment below and update the code to test the property globalParam
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property isConfidential (base name: "isConfidential")', function() {
      // uncomment below and update the code to test the property isConfidential
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property isEditable (base name: "isEditable")', function() {
      // uncomment below and update the code to test the property isEditable
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property isForcedValue (base name: "isForcedValue")', function() {
      // uncomment below and update the code to test the property isForcedValue
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property isVisible (base name: "isVisible")', function() {
      // uncomment below and update the code to test the property isVisible
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property picklistItems (base name: "picklistItems")', function() {
      // uncomment below and update the code to test the property picklistItems
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property requiresAdmin (base name: "requiresAdmin")', function() {
      // uncomment below and update the code to test the property requiresAdmin
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property targets (base name: "targets")', function() {
      // uncomment below and update the code to test the property targets
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property units (base name: "units")', function() {
      // uncomment below and update the code to test the property units
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new JourneyOrchestrationApi.Parameter();
      //expect(instance).to.be();
    });

  });

}));