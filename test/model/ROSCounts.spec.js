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
    instance = new JourneyOrchestrationApi.ROSCounts();
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

  describe('ROSCounts', function() {
    it('should create an instance of ROSCounts', function() {
      // uncomment below and update the code to test ROSCounts
      //var instance = new JourneyOrchestrationApi.ROSCounts();
      //expect(instance).to.be.a(JourneyOrchestrationApi.ROSCounts);
    });

    it('should have the property stepName (base name: "stepName")', function() {
      // uncomment below and update the code to test the property stepName
      //var instance = new JourneyOrchestrationApi.ROSCounts();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new JourneyOrchestrationApi.ROSCounts();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new JourneyOrchestrationApi.ROSCounts();
      //expect(instance).to.be();
    });

    it('should have the property returnType (base name: "returnType")', function() {
      // uncomment below and update the code to test the property returnType
      //var instance = new JourneyOrchestrationApi.ROSCounts();
      //expect(instance).to.be();
    });

  });

}));
