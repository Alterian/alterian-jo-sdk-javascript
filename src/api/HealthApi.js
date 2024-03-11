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

/**
* Health service.
* @module api/HealthApi
* @version 4.29.139
*/
export default class HealthApi {

    /**
    * Constructs a new HealthApi. 
    * @alias module:api/HealthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Find out the health of this node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    healthGetWithHttpInfo() {
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
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/health', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find out the health of this node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    healthGet() {
      return this.healthGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Trigger a watchdog check immediately, instead of waiting for the regular polling cycle
     * @param {module:com.alterian.jo.model/String} check Which watchdog checks would you like to trigger?
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/ApiResponse} and HTTP response
     */
    healthWatchdogPostWithHttpInfo(check) {
      let postBody = null;
      // verify the required parameter 'check' is set
      if (check === undefined || check === null) {
        throw new Error("Missing the required parameter 'check' when calling healthWatchdogPost");
      }

      let pathParams = {
        'check': check
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
        '/health/watchdog', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Trigger a watchdog check immediately, instead of waiting for the regular polling cycle
     * @param {module:com.alterian.jo.model/String} check Which watchdog checks would you like to trigger?
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/ApiResponse}
     */
    healthWatchdogPost(check) {
      return this.healthWatchdogPostWithHttpInfo(check)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}