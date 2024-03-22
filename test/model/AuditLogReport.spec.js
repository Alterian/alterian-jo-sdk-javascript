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
    instance = new JourneyOrchestrationApi.AuditLogReport();
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

  describe('AuditLogReport', function() {
    it('should create an instance of AuditLogReport', function() {
      // uncomment below and update the code to test AuditLogReport
      //var instance = new JourneyOrchestrationApi.AuditLogReport();
      //expect(instance).to.be.a(JourneyOrchestrationApi.AuditLogReport);
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instance = new JourneyOrchestrationApi.AuditLogReport();
      //expect(instance).to.be();
    });

    it('should have the property client (base name: "client")', function() {
      // uncomment below and update the code to test the property client
      //var instance = new JourneyOrchestrationApi.AuditLogReport();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JourneyOrchestrationApi.AuditLogReport();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new JourneyOrchestrationApi.AuditLogReport();
      //expect(instance).to.be();
    });

    it('should have the property auditlog (base name: "auditlog")', function() {
      // uncomment below and update the code to test the property auditlog
      //var instance = new JourneyOrchestrationApi.AuditLogReport();
      //expect(instance).to.be();
    });

    it('should have the property isrule (base name: "isrule")', function() {
      // uncomment below and update the code to test the property isrule
      //var instance = new JourneyOrchestrationApi.AuditLogReport();
      //expect(instance).to.be();
    });

  });

}));
