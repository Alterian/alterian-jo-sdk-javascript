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
    instance = new JourneyOrchestrationApi.TemplateData();
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

  describe('TemplateData', function() {
    it('should create an instance of TemplateData', function() {
      // uncomment below and update the code to test TemplateData
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be.a(JourneyOrchestrationApi.TemplateData);
    });

    it('should have the property inputconnectors (base name: "inputconnectors")', function() {
      // uncomment below and update the code to test the property inputconnectors
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property datagrids (base name: "datagrids")', function() {
      // uncomment below and update the code to test the property datagrids
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property datagridsdetails (base name: "datagridsdetails")', function() {
      // uncomment below and update the code to test the property datagridsdetails
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property cxidprovider (base name: "cxidprovider")', function() {
      // uncomment below and update the code to test the property cxidprovider
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property templatelastmodifieddate (base name: "templatelastmodifieddate")', function() {
      // uncomment below and update the code to test the property templatelastmodifieddate
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property serviceCost (base name: "serviceCost")', function() {
      // uncomment below and update the code to test the property serviceCost
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property outputconnectors (base name: "outputconnectors")', function() {
      // uncomment below and update the code to test the property outputconnectors
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property isstarttile (base name: "isstarttile")', function() {
      // uncomment below and update the code to test the property isstarttile
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property templatelastmodifieduser (base name: "templatelastmodifieduser")', function() {
      // uncomment below and update the code to test the property templatelastmodifieduser
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property ktrname (base name: "ktrname")', function() {
      // uncomment below and update the code to test the property ktrname
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property realtimeRuleSteps (base name: "realtimeRuleSteps")', function() {
      // uncomment below and update the code to test the property realtimeRuleSteps
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property helpLink (base name: "helpLink")', function() {
      // uncomment below and update the code to test the property helpLink
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property realtimeInputSteps (base name: "realtimeInputSteps")', function() {
      // uncomment below and update the code to test the property realtimeInputSteps
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property switchcases (base name: "switchcases")', function() {
      // uncomment below and update the code to test the property switchcases
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property controlEnabled (base name: "controlEnabled")', function() {
      // uncomment below and update the code to test the property controlEnabled
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property client (base name: "client")', function() {
      // uncomment below and update the code to test the property client
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property templatename (base name: "templatename")', function() {
      // uncomment below and update the code to test the property templatename
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property mabsteps (base name: "mabsteps")', function() {
      // uncomment below and update the code to test the property mabsteps
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property jsonDecoders (base name: "jsonDecoders")', function() {
      // uncomment below and update the code to test the property jsonDecoders
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

    it('should have the property templatedescription (base name: "templatedescription")', function() {
      // uncomment below and update the code to test the property templatedescription
      //var instance = new JourneyOrchestrationApi.TemplateData();
      //expect(instance).to.be();
    });

  });

}));
