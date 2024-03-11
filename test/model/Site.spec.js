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
    instance = new JourneyOrchestrationApi.Site();
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

  describe('Site', function() {
    it('should create an instance of Site', function() {
      // uncomment below and update the code to test Site
      //var instance = new JourneyOrchestrationApi.Site();
      //expect(instance).to.be.a(JourneyOrchestrationApi.Site);
    });

    it('should have the property lastModifiedDate (base name: "lastModifiedDate")', function() {
      // uncomment below and update the code to test the property lastModifiedDate
      //var instance = new JourneyOrchestrationApi.Site();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedUser (base name: "lastModifiedUser")', function() {
      // uncomment below and update the code to test the property lastModifiedUser
      //var instance = new JourneyOrchestrationApi.Site();
      //expect(instance).to.be();
    });

    it('should have the property siteId (base name: "siteId")', function() {
      // uncomment below and update the code to test the property siteId
      //var instance = new JourneyOrchestrationApi.Site();
      //expect(instance).to.be();
    });

    it('should have the property extendedInfo (base name: "extendedInfo")', function() {
      // uncomment below and update the code to test the property extendedInfo
      //var instance = new JourneyOrchestrationApi.Site();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instance = new JourneyOrchestrationApi.Site();
      //expect(instance).to.be();
    });

  });

}));
