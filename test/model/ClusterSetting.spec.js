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
    instance = new JourneyOrchestrationApi.ClusterSetting();
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

  describe('ClusterSetting', function() {
    it('should create an instance of ClusterSetting', function() {
      // uncomment below and update the code to test ClusterSetting
      //var instance = new JourneyOrchestrationApi.ClusterSetting();
      //expect(instance).to.be.a(JourneyOrchestrationApi.ClusterSetting);
    });

    it('should have the property attributeName (base name: "attributeName")', function() {
      // uncomment below and update the code to test the property attributeName
      //var instance = new JourneyOrchestrationApi.ClusterSetting();
      //expect(instance).to.be();
    });

    it('should have the property attributeValue (base name: "attributeValue")', function() {
      // uncomment below and update the code to test the property attributeValue
      //var instance = new JourneyOrchestrationApi.ClusterSetting();
      //expect(instance).to.be();
    });

    it('should have the property collectionName (base name: "collectionName")', function() {
      // uncomment below and update the code to test the property collectionName
      //var instance = new JourneyOrchestrationApi.ClusterSetting();
      //expect(instance).to.be();
    });

  });

}));