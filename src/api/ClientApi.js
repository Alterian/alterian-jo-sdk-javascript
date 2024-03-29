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
import Client from '../com.alterian.jo.model/Client';
import ClientResponse from '../com.alterian.jo.model/ClientResponse';
import ResourceAndStatusResponse from '../com.alterian.jo.model/ResourceAndStatusResponse';
import TargetEnum from '../com.alterian.jo.model/TargetEnum';

/**
* Client service.
* @module api/ClientApi
* @version 4.29.139
*/
export default class ClientApi {

    /**
    * Constructs a new ClientApi. 
    * @alias module:api/ClientApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deletes a specific alias from the client
     * @param {String} client Client name
     * @param {String} aliasName The name of the alias
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    clientClientAliasAliasNameDeleteWithHttpInfo(client, aliasName) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientAliasAliasNameDelete");
      }
      // verify the required parameter 'aliasName' is set
      if (aliasName === undefined || aliasName === null) {
        throw new Error("Missing the required parameter 'aliasName' when calling clientClientAliasAliasNameDelete");
      }

      let pathParams = {
        'client': client,
        'aliasName': aliasName
      };
      let queryParams = {
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
        '/client/{client}/alias/{aliasName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a specific alias from the client
     * @param {String} client Client name
     * @param {String} aliasName The name of the alias
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    clientClientAliasAliasNameDelete(client, aliasName) {
      return this.clientClientAliasAliasNameDeleteWithHttpInfo(client, aliasName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns back information about a specific alias
     * @param {String} client Client name
     * @param {String} aliasName The name of the alias
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    clientClientAliasAliasNameGetWithHttpInfo(client, aliasName) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientAliasAliasNameGet");
      }
      // verify the required parameter 'aliasName' is set
      if (aliasName === undefined || aliasName === null) {
        throw new Error("Missing the required parameter 'aliasName' when calling clientClientAliasAliasNameGet");
      }

      let pathParams = {
        'client': client,
        'aliasName': aliasName
      };
      let queryParams = {
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
        '/client/{client}/alias/{aliasName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns back information about a specific alias
     * @param {String} client Client name
     * @param {String} aliasName The name of the alias
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    clientClientAliasAliasNameGet(client, aliasName) {
      return this.clientClientAliasAliasNameGetWithHttpInfo(client, aliasName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates or updates an alias
     * @param {String} client Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long
     * @param {String} aliasName The name of the alias
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} ruleorgroup The name of the rule or rule group to which this alias should point
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    clientClientAliasAliasNameTargetRuleorgroupPostWithHttpInfo(client, aliasName, target, ruleorgroup) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientAliasAliasNameTargetRuleorgroupPost");
      }
      // verify the required parameter 'aliasName' is set
      if (aliasName === undefined || aliasName === null) {
        throw new Error("Missing the required parameter 'aliasName' when calling clientClientAliasAliasNameTargetRuleorgroupPost");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling clientClientAliasAliasNameTargetRuleorgroupPost");
      }
      // verify the required parameter 'ruleorgroup' is set
      if (ruleorgroup === undefined || ruleorgroup === null) {
        throw new Error("Missing the required parameter 'ruleorgroup' when calling clientClientAliasAliasNameTargetRuleorgroupPost");
      }

      let pathParams = {
        'client': client,
        'aliasName': aliasName,
        'target': target,
        'ruleorgroup': ruleorgroup
      };
      let queryParams = {
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
        '/client/{client}/alias/{aliasName}/{target}/{ruleorgroup}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates or updates an alias
     * @param {String} client Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long
     * @param {String} aliasName The name of the alias
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} ruleorgroup The name of the rule or rule group to which this alias should point
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    clientClientAliasAliasNameTargetRuleorgroupPost(client, aliasName, target, ruleorgroup) {
      return this.clientClientAliasAliasNameTargetRuleorgroupPostWithHttpInfo(client, aliasName, target, ruleorgroup)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new alias, must not exist.
     * @param {String} client Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long
     * @param {String} aliasName The name of the alias
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} ruleorgroup The name of the rule or rule group to which this alias should point
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ResourceAndStatusResponse} and HTTP response
     */
    clientClientAliasAliasNameTargetRuleorgroupPutWithHttpInfo(client, aliasName, target, ruleorgroup) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientAliasAliasNameTargetRuleorgroupPut");
      }
      // verify the required parameter 'aliasName' is set
      if (aliasName === undefined || aliasName === null) {
        throw new Error("Missing the required parameter 'aliasName' when calling clientClientAliasAliasNameTargetRuleorgroupPut");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling clientClientAliasAliasNameTargetRuleorgroupPut");
      }
      // verify the required parameter 'ruleorgroup' is set
      if (ruleorgroup === undefined || ruleorgroup === null) {
        throw new Error("Missing the required parameter 'ruleorgroup' when calling clientClientAliasAliasNameTargetRuleorgroupPut");
      }

      let pathParams = {
        'client': client,
        'aliasName': aliasName,
        'target': target,
        'ruleorgroup': ruleorgroup
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResourceAndStatusResponse;
      return this.apiClient.callApi(
        '/client/{client}/alias/{aliasName}/{target}/{ruleorgroup}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new alias, must not exist.
     * @param {String} client Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long
     * @param {String} aliasName The name of the alias
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} ruleorgroup The name of the rule or rule group to which this alias should point
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ResourceAndStatusResponse}
     */
    clientClientAliasAliasNameTargetRuleorgroupPut(client, aliasName, target, ruleorgroup) {
      return this.clientClientAliasAliasNameTargetRuleorgroupPutWithHttpInfo(client, aliasName, target, ruleorgroup)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns back all aliases which have been defined for a client
     * @param {String} client Client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ClientResponse} and HTTP response
     */
    clientClientAliasGetWithHttpInfo(client) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientAliasGet");
      }

      let pathParams = {
        'client': client
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientResponse;
      return this.apiClient.callApi(
        '/client/{client}/alias', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns back all aliases which have been defined for a client
     * @param {String} client Client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ClientResponse}
     */
    clientClientAliasGet(client) {
      return this.clientClientAliasGetWithHttpInfo(client)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Copy an existing client to a client with a new name
     * @param {String} client The source client
     * @param {Object} opts Optional parameters
     * @param {String} [destination] The new client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    clientClientCopyDestinationPutWithHttpInfo(client, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientCopyDestinationPut");
      }

      let pathParams = {
        'client': client,
        'destination': opts['destination']
      };
      let queryParams = {
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
        '/client/{client}/copy/{destination}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Copy an existing client to a client with a new name
     * @param {String} client The source client
     * @param {Object} opts Optional parameters
     * @param {String} opts.destination The new client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    clientClientCopyDestinationPut(client, opts) {
      return this.clientClientCopyDestinationPutWithHttpInfo(client, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all client files that have been uploaded to the server.
     * @param {String} client Client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    clientClientDeleteWithHttpInfo(client) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientDelete");
      }

      let pathParams = {
        'client': client
      };
      let queryParams = {
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
        '/client/{client}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete all client files that have been uploaded to the server.
     * @param {String} client Client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    clientClientDelete(client) {
      return this.clientClientDeleteWithHttpInfo(client)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns extended details about a client.
     * @param {String} client client name, you can use * to return all clients to which your account has access
     * @param {Object} opts Optional parameters
     * @param {Boolean} [aszip] Return back the entire client in a zip (compresses everything except files).  Requires ALL   permissions.  Note, you cannot use a wildcard with this option.
     * @param {Boolean} [asdata] If this is true, it will return just the client list in the data property and exclude permissions,   etc. from the result.  Useful if you simply want a list of clients.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ClientResponse} and HTTP response
     */
    clientClientGetWithHttpInfo(client, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientGet");
      }

      let pathParams = {
        'client': client
      };
      let queryParams = {
        'aszip': opts['aszip'],
        'asdata': opts['asdata']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientResponse;
      return this.apiClient.callApi(
        '/client/{client}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns extended details about a client.
     * @param {String} client client name, you can use * to return all clients to which your account has access
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.aszip Return back the entire client in a zip (compresses everything except files).  Requires ALL   permissions.  Note, you cannot use a wildcard with this option.
     * @param {Boolean} opts.asdata If this is true, it will return just the client list in the data property and exclude permissions,   etc. from the result.  Useful if you simply want a list of clients.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ClientResponse}
     */
    clientClientGet(client, opts) {
      return this.clientClientGetWithHttpInfo(client, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a client's parameters
     * @param {String} client Client name
     * @param {Object} opts Optional parameters
     * @param {module:com.alterian.jo.model/Client} [client2] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    clientClientPostWithHttpInfo(client, opts) {
      opts = opts || {};
      let postBody = opts['client2'];
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientPost");
      }

      let pathParams = {
        'client': client
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/client/{client}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a client's parameters
     * @param {String} client Client name
     * @param {Object} opts Optional parameters
     * @param {module:com.alterian.jo.model/Client} opts.client2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    clientClientPost(client, opts) {
      return this.clientClientPostWithHttpInfo(client, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new client.
     * @param {String} client Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long
     * @param {Object} opts Optional parameters
     * @param {module:com.alterian.jo.model/Client} [client2] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    clientClientPutWithHttpInfo(client, opts) {
      opts = opts || {};
      let postBody = opts['client2'];
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling clientClientPut");
      }

      let pathParams = {
        'client': client
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/client/{client}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new client.
     * @param {String} client Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long
     * @param {Object} opts Optional parameters
     * @param {module:com.alterian.jo.model/Client} opts.client2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    clientClientPut(client, opts) {
      return this.clientClientPutWithHttpInfo(client, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Copy an existing client to a client with a new name
     * @param {String} source Source client name
     * @param {Object} opts Optional parameters
     * @param {String} [destination] The new client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    clientCopySourcePutWithHttpInfo(source, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling clientCopySourcePut");
      }

      let pathParams = {
        'source': source
      };
      let queryParams = {
        'destination': opts['destination']
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
        '/client/copy/{source}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Copy an existing client to a client with a new name
     * @param {String} source Source client name
     * @param {Object} opts Optional parameters
     * @param {String} opts.destination The new client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    clientCopySourcePut(source, opts) {
      return this.clientCopySourcePutWithHttpInfo(source, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of all clients that your login can access, and all permissions that you have
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ClientResponse} and HTTP response
     */
    clientGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientResponse;
      return this.apiClient.callApi(
        '/client', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of all clients that your login can access, and all permissions that you have
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ClientResponse}
     */
    clientGet() {
      return this.clientGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
