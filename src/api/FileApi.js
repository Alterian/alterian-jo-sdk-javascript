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


import ApiClient from "../ApiClient";
import ApiResponse from '../com.alterian.jo.model/ApiResponse';
import TargetEnum from '../com.alterian.jo.model/TargetEnum';

/**
* File service.
* @module api/FileApi
* @version 4.29.139
*/
export default class FileApi {

    /**
    * Constructs a new FileApi. 
    * @alias module:api/FileApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Lists files
     * @param {String} client Client name
     * @param {Object} opts Optional parameters
     * @param {String} [searchText] Filter results to those which contain this text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    fileClientGetWithHttpInfo(client, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling fileClientGet");
      }

      let pathParams = {
        'client': client
      };
      let queryParams = {
        'searchText': opts['searchText']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/file/{client}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Lists files
     * @param {String} client Client name
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Filter results to those which contain this text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    fileClientGet(client, opts) {
      return this.fileClientGetWithHttpInfo(client, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a file from the server
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {String} filename file name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    fileClientTargetFilenameDeleteWithHttpInfo(target, client, filename) {
      let postBody = null;
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling fileClientTargetFilenameDelete");
      }
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling fileClientTargetFilenameDelete");
      }
      // verify the required parameter 'filename' is set
      if (filename === undefined || filename === null) {
        throw new Error("Missing the required parameter 'filename' when calling fileClientTargetFilenameDelete");
      }

      let pathParams = {
        'target': target,
        'client': client,
        'filename': filename
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/file/{client}/{target}/{filename}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove a file from the server
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {String} filename file name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    fileClientTargetFilenameDelete(target, client, filename) {
      return this.fileClientTargetFilenameDeleteWithHttpInfo(target, client, filename)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download a file from the server
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {String} filename file name
     * @param {Object} opts Optional parameters
     * @param {String} [searchText] Filter results to those which contain this text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    fileClientTargetFilenameGetWithHttpInfo(target, client, filename, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling fileClientTargetFilenameGet");
      }
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling fileClientTargetFilenameGet");
      }
      // verify the required parameter 'filename' is set
      if (filename === undefined || filename === null) {
        throw new Error("Missing the required parameter 'filename' when calling fileClientTargetFilenameGet");
      }

      let pathParams = {
        'target': target,
        'client': client,
        'filename': filename
      };
      let queryParams = {
        'searchText': opts['searchText']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/file/{client}/{target}/{filename}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download a file from the server
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {String} filename file name
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Filter results to those which contain this text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    fileClientTargetFilenameGet(target, client, filename, opts) {
      return this.fileClientTargetFilenameGetWithHttpInfo(target, client, filename, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload a file to the server
     * @param {module:com.alterian.jo.model/TargetEnum} target Target for the file
     * @param {String} client client name
     * @param {String} filename file name
     * @param {Object} opts Optional parameters
     * @param {File} [file] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    fileClientTargetFilenamePostWithHttpInfo(target, client, filename, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling fileClientTargetFilenamePost");
      }
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling fileClientTargetFilenamePost");
      }
      // verify the required parameter 'filename' is set
      if (filename === undefined || filename === null) {
        throw new Error("Missing the required parameter 'filename' when calling fileClientTargetFilenamePost");
      }

      let pathParams = {
        'target': target,
        'client': client,
        'filename': filename
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/file/{client}/{target}/{filename}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload a file to the server
     * @param {module:com.alterian.jo.model/TargetEnum} target Target for the file
     * @param {String} client client name
     * @param {String} filename file name
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    fileClientTargetFilenamePost(target, client, filename, opts) {
      return this.fileClientTargetFilenamePostWithHttpInfo(target, client, filename, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists files
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {Object} opts Optional parameters
     * @param {String} [searchText] Filter results to those which contain this text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    fileClientTargetGetWithHttpInfo(target, client, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling fileClientTargetGet");
      }
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling fileClientTargetGet");
      }

      let pathParams = {
        'target': target,
        'client': client
      };
      let queryParams = {
        'searchText': opts['searchText']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/file/{client}/{target}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Lists files
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Filter results to those which contain this text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    fileClientTargetGet(target, client, opts) {
      return this.fileClientTargetGetWithHttpInfo(target, client, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
