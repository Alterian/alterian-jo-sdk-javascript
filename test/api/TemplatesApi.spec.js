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
    instance = new JourneyOrchestrationApi.TemplatesApi();
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

  describe('TemplatesApi', function() {
    describe('downloadTemplateClientTemplatenameGet', function() {
      it('should call downloadTemplateClientTemplatenameGet successfully', function(done) {
        //uncomment below and update the code to test downloadTemplateClientTemplatenameGet
        //instance.downloadTemplateClientTemplatenameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadTemplateClientTemplatenameVersionGet', function() {
      it('should call downloadTemplateClientTemplatenameVersionGet successfully', function(done) {
        //uncomment below and update the code to test downloadTemplateClientTemplatenameVersionGet
        //instance.downloadTemplateClientTemplatenameVersionGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateClientDelete', function() {
      it('should call templateClientDelete successfully', function(done) {
        //uncomment below and update the code to test templateClientDelete
        //instance.templateClientDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateClientGet', function() {
      it('should call templateClientGet successfully', function(done) {
        //uncomment below and update the code to test templateClientGet
        //instance.templateClientGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateClientTemplatenameDelete', function() {
      it('should call templateClientTemplatenameDelete successfully', function(done) {
        //uncomment below and update the code to test templateClientTemplatenameDelete
        //instance.templateClientTemplatenameDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateClientTemplatenameGet', function() {
      it('should call templateClientTemplatenameGet successfully', function(done) {
        //uncomment below and update the code to test templateClientTemplatenameGet
        //instance.templateClientTemplatenameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateClientTemplatenamePost', function() {
      it('should call templateClientTemplatenamePost successfully', function(done) {
        //uncomment below and update the code to test templateClientTemplatenamePost
        //instance.templateClientTemplatenamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateClientTemplatenamePut', function() {
      it('should call templateClientTemplatenamePut successfully', function(done) {
        //uncomment below and update the code to test templateClientTemplatenamePut
        //instance.templateClientTemplatenamePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateClientTemplatenameVersionDelete', function() {
      it('should call templateClientTemplatenameVersionDelete successfully', function(done) {
        //uncomment below and update the code to test templateClientTemplatenameVersionDelete
        //instance.templateClientTemplatenameVersionDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateClientTemplatenameVersionGet', function() {
      it('should call templateClientTemplatenameVersionGet successfully', function(done) {
        //uncomment below and update the code to test templateClientTemplatenameVersionGet
        //instance.templateClientTemplatenameVersionGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateClientTemplatenameVersionPost', function() {
      it('should call templateClientTemplatenameVersionPost successfully', function(done) {
        //uncomment below and update the code to test templateClientTemplatenameVersionPost
        //instance.templateClientTemplatenameVersionPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateGet', function() {
      it('should call templateGet successfully', function(done) {
        //uncomment below and update the code to test templateGet
        //instance.templateGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateTargetClientTemplatenameVersionPost', function() {
      it('should call templateTargetClientTemplatenameVersionPost successfully', function(done) {
        //uncomment below and update the code to test templateTargetClientTemplatenameVersionPost
        //instance.templateTargetClientTemplatenameVersionPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateTargetClientTemplatenameVersionPut', function() {
      it('should call templateTargetClientTemplatenameVersionPut successfully', function(done) {
        //uncomment below and update the code to test templateTargetClientTemplatenameVersionPut
        //instance.templateTargetClientTemplatenameVersionPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
