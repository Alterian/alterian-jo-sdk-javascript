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
    instance = new JourneyOrchestrationApi.FieldUsageReport();
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

  describe('FieldUsageReport', function() {
    it('should create an instance of FieldUsageReport', function() {
      // uncomment below and update the code to test FieldUsageReport
      //var instance = new JourneyOrchestrationApi.FieldUsageReport();
      //expect(instance).to.be.a(JourneyOrchestrationApi.FieldUsageReport);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new JourneyOrchestrationApi.FieldUsageReport();
      //expect(instance).to.be();
    });

    it('should have the property fieldName (base name: "fieldName")', function() {
      // uncomment below and update the code to test the property fieldName
      //var instance = new JourneyOrchestrationApi.FieldUsageReport();
      //expect(instance).to.be();
    });

    it('should have the property rename (base name: "rename")', function() {
      // uncomment below and update the code to test the property rename
      //var instance = new JourneyOrchestrationApi.FieldUsageReport();
      //expect(instance).to.be();
    });

    it('should have the property usage (base name: "usage")', function() {
      // uncomment below and update the code to test the property usage
      //var instance = new JourneyOrchestrationApi.FieldUsageReport();
      //expect(instance).to.be();
    });

  });

}));
