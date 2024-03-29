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
import AckMessage from '../com.alterian.jo.model/AckMessage';
import ApiResponse from '../com.alterian.jo.model/ApiResponse';
import TargetEnum from '../com.alterian.jo.model/TargetEnum';

/**
* Queue service.
* @module api/QueueApi
* @version 4.29.139
*/
export default class QueueApi {

    /**
    * Constructs a new QueueApi. 
    * @alias module:api/QueueApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete all queues that this client owns.
     * Delete all queues that this client owns, across all targets.
     * @param {String} client Client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientDeleteWithHttpInfo(client) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientDelete");
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
        '/queue/{client}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete all queues that this client owns.
     * Delete all queues that this client owns, across all targets.
     * @param {String} client Client name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientDelete(client) {
      return this.queueClientDeleteWithHttpInfo(client)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all of the queues for a specific client, across all targets.
     * Find the full details of all queues that this client owns, across all targets
     * @param {String} client Client name
     * @param {Object} opts Optional parameters
     * @param {Number} [from] The zero-based index of the first item to return.
     * @param {Number} [to] The zero-based index of the last item to return.
     * @param {Boolean} [includeStatistics] Should the results include the execution statistics for each rule? Default true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientGetWithHttpInfo(client, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientGet");
      }

      let pathParams = {
        'client': client
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'includeStatistics': opts['includeStatistics']
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
        '/queue/{client}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all of the queues for a specific client, across all targets.
     * Find the full details of all queues that this client owns, across all targets
     * @param {String} client Client name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from The zero-based index of the first item to return.
     * @param {Number} opts.to The zero-based index of the last item to return.
     * @param {Boolean} opts.includeStatistics Should the results include the execution statistics for each rule? Default true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientGet(client, opts) {
      return this.queueClientGetWithHttpInfo(client, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all of the queues within a specific target for the given client
     * Delete all of the queues within a specific target for the given client
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetDeleteWithHttpInfo(client, target) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetDelete");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetDelete");
      }

      let pathParams = {
        'client': client,
        'target': target
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
        '/queue/{client}/{target}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete all of the queues within a specific target for the given client
     * Delete all of the queues within a specific target for the given client
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetDelete(client, target) {
      return this.queueClientTargetDeleteWithHttpInfo(client, target)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details about all of the queues within a specific target for this client.
     * Get details about all of the queues within a specific target for this client.
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {Object} opts Optional parameters
     * @param {Number} [from] The zero-based index of the first item to return.
     * @param {Number} [to] The zero-based index of the last item to return.
     * @param {Boolean} [includeStatistics] Should the results include the execution statistics for each rule? Default true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetGetWithHttpInfo(client, target, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetGet");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetGet");
      }

      let pathParams = {
        'client': client,
        'target': target
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'includeStatistics': opts['includeStatistics']
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
        '/queue/{client}/{target}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get details about all of the queues within a specific target for this client.
     * Get details about all of the queues within a specific target for this client.
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from The zero-based index of the first item to return.
     * @param {Number} opts.to The zero-based index of the last item to return.
     * @param {Boolean} opts.includeStatistics Should the results include the execution statistics for each rule? Default true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetGet(client, target, opts) {
      return this.queueClientTargetGetWithHttpInfo(client, target, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a set of messages from a given queue.
     * If the message was read with 'deleteAfterRead=false' then you must call this API to remove the message   from the queue after your code has successfully processed it
     * @param {String} client The client name for the queue
     * @param {module:com.alterian.jo.model/TargetEnum} target The target in which the queue is located
     * @param {String} queueName The name of queue which contains the message you want to acknowledge
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.alterian.jo.model/AckMessage>} [ackMessage] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetQueueNameAckPostWithHttpInfo(client, target, queueName, opts) {
      opts = opts || {};
      let postBody = opts['ackMessage'];
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetQueueNameAckPost");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetQueueNameAckPost");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling queueClientTargetQueueNameAckPost");
      }

      let pathParams = {
        'client': client,
        'target': target,
        'queueName': queueName
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
        '/queue/{client}/{target}/{queueName}/ack', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove a set of messages from a given queue.
     * If the message was read with 'deleteAfterRead=false' then you must call this API to remove the message   from the queue after your code has successfully processed it
     * @param {String} client The client name for the queue
     * @param {module:com.alterian.jo.model/TargetEnum} target The target in which the queue is located
     * @param {String} queueName The name of queue which contains the message you want to acknowledge
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.alterian.jo.model/AckMessage>} opts.ackMessage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetQueueNameAckPost(client, target, queueName, opts) {
      return this.queueClientTargetQueueNameAckPostWithHttpInfo(client, target, queueName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a specific named queue
     * Delete a queue and all the messages within it
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} queueName The name of the queue that should be deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetQueueNameDeleteWithHttpInfo(client, target, queueName) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetQueueNameDelete");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetQueueNameDelete");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling queueClientTargetQueueNameDelete");
      }

      let pathParams = {
        'client': client,
        'target': target,
        'queueName': queueName
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
        '/queue/{client}/{target}/{queueName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a specific named queue
     * Delete a queue and all the messages within it
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} queueName The name of the queue that should be deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetQueueNameDelete(client, target, queueName) {
      return this.queueClientTargetQueueNameDeleteWithHttpInfo(client, target, queueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets information about a specific named queue.
     * Information returned is filtered by user permissions.
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} queueName The name of queue that you want to get the information for.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [includeStatistics] Should the results include the execution statistics for each rule? Default true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetQueueNameGetWithHttpInfo(client, target, queueName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetQueueNameGet");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetQueueNameGet");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling queueClientTargetQueueNameGet");
      }

      let pathParams = {
        'client': client,
        'target': target,
        'queueName': queueName
      };
      let queryParams = {
        'includeStatistics': opts['includeStatistics']
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
        '/queue/{client}/{target}/{queueName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets information about a specific named queue.
     * Information returned is filtered by user permissions.
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} queueName The name of queue that you want to get the information for.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeStatistics Should the results include the execution statistics for each rule? Default true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetQueueNameGet(client, target, queueName, opts) {
      return this.queueClientTargetQueueNameGetWithHttpInfo(client, target, queueName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets one or more messages from the queue
     * Return a JSON array containing zero or more messages
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - the target of where the queue is stored.
     * @param {String} queueName The name of the queue to read messages from
     * @param {Object} opts Optional parameters
     * @param {Number} [numberOfMessages] The number of messages to read in this request. Default 1. If messages are bundled together then more   messages may be returned than requested. If deleteAfterRead is false then the maximum is 10, and you must call `POST   /queue/{client}/{target}/{queueName}/ack` on the current messages before any more will be available to read
     * @param {Number} [maxWaitTimeInSeconds] If the queue currently contains fewer than the numberOfMessages requested, how long (in seconds)   should we wait for new messages to arrive? Default 0
     * @param {Boolean} [deleteAfterRead] Should the messages being read be automatically removed from the queue? Default true. If this is   false then the `POST /queue/{client}/{target}/{queueName}/ack` API must be called with the message details once the   data has been processed
     * @param {String} [lock] If the queue is locked, you must provide the key in this parameter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetQueueNameMessagesGetWithHttpInfo(client, target, queueName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetQueueNameMessagesGet");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetQueueNameMessagesGet");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling queueClientTargetQueueNameMessagesGet");
      }

      let pathParams = {
        'client': client,
        'target': target,
        'queueName': queueName
      };
      let queryParams = {
        'numberOfMessages': opts['numberOfMessages'],
        'maxWaitTimeInSeconds': opts['maxWaitTimeInSeconds'],
        'deleteAfterRead': opts['deleteAfterRead'],
        'lock': opts['lock']
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
        '/queue/{client}/{target}/{queueName}/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets one or more messages from the queue
     * Return a JSON array containing zero or more messages
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - the target of where the queue is stored.
     * @param {String} queueName The name of the queue to read messages from
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numberOfMessages The number of messages to read in this request. Default 1. If messages are bundled together then more   messages may be returned than requested. If deleteAfterRead is false then the maximum is 10, and you must call `POST   /queue/{client}/{target}/{queueName}/ack` on the current messages before any more will be available to read
     * @param {Number} opts.maxWaitTimeInSeconds If the queue currently contains fewer than the numberOfMessages requested, how long (in seconds)   should we wait for new messages to arrive? Default 0
     * @param {Boolean} opts.deleteAfterRead Should the messages being read be automatically removed from the queue? Default true. If this is   false then the `POST /queue/{client}/{target}/{queueName}/ack` API must be called with the message details once the   data has been processed
     * @param {String} opts.lock If the queue is locked, you must provide the key in this parameter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetQueueNameMessagesGet(client, target, queueName, opts) {
      return this.queueClientTargetQueueNameMessagesGetWithHttpInfo(client, target, queueName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add a message to the named queue
     * Used for posting messages to a queue. The data passed in the message is not validated in any way
     * @param {String} client client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - the target of where the queue is stored.
     * @param {String} queueName The name of the queue that the message will be posted to..
     * @param {String} body The message that should be posted on to the queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetQueueNameMessagesPostWithHttpInfo(client, target, queueName, body) {
      let postBody = body;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetQueueNameMessagesPost");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetQueueNameMessagesPost");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling queueClientTargetQueueNameMessagesPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling queueClientTargetQueueNameMessagesPost");
      }

      let pathParams = {
        'client': client,
        'target': target,
        'queueName': queueName
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
        '/queue/{client}/{target}/{queueName}/messages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a message to the named queue
     * Used for posting messages to a queue. The data passed in the message is not validated in any way
     * @param {String} client client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - the target of where the queue is stored.
     * @param {String} queueName The name of the queue that the message will be posted to..
     * @param {String} body The message that should be posted on to the queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetQueueNameMessagesPost(client, target, queueName, body) {
      return this.queueClientTargetQueueNameMessagesPostWithHttpInfo(client, target, queueName, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new queue, passing a block of JSON that is associated with the queue
     * Used for creating a new queue.
     * @param {String} client The name of the client.
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is what the queue will be tagged with.
     * @param {String} queueName The name of the queue that should be created.
     * @param {String} body A block of JSON that contains information about the contents of the messages in the queue
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetQueueNamePostWithHttpInfo(client, target, queueName, body) {
      let postBody = body;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetQueueNamePost");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetQueueNamePost");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling queueClientTargetQueueNamePost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling queueClientTargetQueueNamePost");
      }

      let pathParams = {
        'client': client,
        'target': target,
        'queueName': queueName
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
        '/queue/{client}/{target}/{queueName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new queue, passing a block of JSON that is associated with the queue
     * Used for creating a new queue.
     * @param {String} client The name of the client.
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is what the queue will be tagged with.
     * @param {String} queueName The name of the queue that should be created.
     * @param {String} body A block of JSON that contains information about the contents of the messages in the queue
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetQueueNamePost(client, target, queueName, body) {
      return this.queueClientTargetQueueNamePostWithHttpInfo(client, target, queueName, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove all messages from the named queue
     * Used to clear messages from a queue.
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - the target of where the queue is stored.
     * @param {String} queueName The name of the queue that the message will be posted to..
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetQueueNamePurgePostWithHttpInfo(client, target, queueName) {
      let postBody = null;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetQueueNamePurgePost");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetQueueNamePurgePost");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling queueClientTargetQueueNamePurgePost");
      }

      let pathParams = {
        'client': client,
        'target': target,
        'queueName': queueName
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
        '/queue/{client}/{target}/{queueName}/purge', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove all messages from the named queue
     * Used to clear messages from a queue.
     * @param {String} client Client name
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - the target of where the queue is stored.
     * @param {String} queueName The name of the queue that the message will be posted to..
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetQueueNamePurgePost(client, target, queueName) {
      return this.queueClientTargetQueueNamePurgePostWithHttpInfo(client, target, queueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Edit an existing queue
     * Edit the block of JSON that is associated with the queue. This is only permitted if the queue is empty   (has zero messages)
     * @param {String} client The name of the client.
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is what the queue will be tagged with.
     * @param {String} queueName The name of the queue that should be created.
     * @param {String} body A block of JSON that contains information about the contents of the messages in the queue
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueClientTargetQueueNamePutWithHttpInfo(client, target, queueName, body) {
      let postBody = body;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling queueClientTargetQueueNamePut");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling queueClientTargetQueueNamePut");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling queueClientTargetQueueNamePut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling queueClientTargetQueueNamePut");
      }

      let pathParams = {
        'client': client,
        'target': target,
        'queueName': queueName
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
        '/queue/{client}/{target}/{queueName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Edit an existing queue
     * Edit the block of JSON that is associated with the queue. This is only permitted if the queue is empty   (has zero messages)
     * @param {String} client The name of the client.
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is what the queue will be tagged with.
     * @param {String} queueName The name of the queue that should be created.
     * @param {String} body A block of JSON that contains information about the contents of the messages in the queue
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueClientTargetQueueNamePut(client, target, queueName, body) {
      return this.queueClientTargetQueueNamePutWithHttpInfo(client, target, queueName, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get information about all queues on the server.
     * Get information about all queues that this user can access.
     * @param {Object} opts Optional parameters
     * @param {Number} [from] The zero-based index of the first item to return.
     * @param {Number} [to] The zero-based index of the last item to return.
     * @param {Boolean} [includeStatistics] Should the results include the execution statistics for each rule? Default true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    queueGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'includeStatistics': opts['includeStatistics']
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
        '/queue', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get information about all queues on the server.
     * Get information about all queues that this user can access.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from The zero-based index of the first item to return.
     * @param {Number} opts.to The zero-based index of the last item to return.
     * @param {Boolean} opts.includeStatistics Should the results include the execution statistics for each rule? Default true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    queueGet(opts) {
      return this.queueGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
