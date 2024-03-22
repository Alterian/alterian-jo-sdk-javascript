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
    instance = new JourneyOrchestrationApi.ResourceAndStatusResponse();
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

  describe('ResourceAndStatusResponse', function() {
    it('should create an instance of ResourceAndStatusResponse', function() {
      // uncomment below and update the code to test ResourceAndStatusResponse
      //var instance = new JourneyOrchestrationApi.ResourceAndStatusResponse();
      //expect(instance).to.be.a(JourneyOrchestrationApi.ResourceAndStatusResponse);
    });

    it('should have the property debug (base name: "debug")', function() {
      // uncomment below and update the code to test the property debug
      //var instance = new JourneyOrchestrationApi.ResourceAndStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property exceptionType (base name: "exceptionType")', function() {
      // uncomment below and update the code to test the property exceptionType
      //var instance = new JourneyOrchestrationApi.ResourceAndStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new JourneyOrchestrationApi.ResourceAndStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new JourneyOrchestrationApi.ResourceAndStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new JourneyOrchestrationApi.ResourceAndStatusResponse();
      //expect(instance).to.be();
    });

  });

}));
