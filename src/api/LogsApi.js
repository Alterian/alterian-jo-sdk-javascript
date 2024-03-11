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
import LogSource from '../com.alterian.jo.model/LogSource';
import LogType from '../com.alterian.jo.model/LogType';
import LogTypeOrTimeseries from '../com.alterian.jo.model/LogTypeOrTimeseries';
import LogsApiResponse from '../com.alterian.jo.model/LogsApiResponse';
import TargetEnum from '../com.alterian.jo.model/TargetEnum';

/**
* Logs service.
* @module api/LogsApi
* @version 4.29.139
*/
export default class LogsApi {

    /**
    * Constructs a new LogsApi. 
    * @alias module:api/LogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Search across logs for this client and target
     * Provide a search string to search for
     * @param {module:com.alterian.jo.model/LogType} type What kind of logging do you want to see?
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {String} searchPhrase The phrase to search for in the logs
     * @param {Object} opts Optional parameters
     * @param {String} [sequenceNumber] Sequence Number to identify rule invoke logs
     * @param {String} [templateUrl] Template url, if you want to filter your request by template url
     * @param {Number} [limit] The maximum number of items to return.
     * @param {module:com.alterian.jo.model/LogSource} [source] Pick the source of the logs. Currently only elastic search is supported
     * @param {Boolean} [csv] if true then returns csv file
     * @param {Date} [startdate] If you want to filter your request by date range, this is the starting date for the time period,   please provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
     * @param {Date} [enddate] If you want to filter your request by date range, this is the ending date for the time period, please   provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/LogsApiResponse} and HTTP response
     */
    logsTypeTargetClientGetWithHttpInfo(type, target, client, searchPhrase, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling logsTypeTargetClientGet");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling logsTypeTargetClientGet");
      }
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling logsTypeTargetClientGet");
      }
      // verify the required parameter 'searchPhrase' is set
      if (searchPhrase === undefined || searchPhrase === null) {
        throw new Error("Missing the required parameter 'searchPhrase' when calling logsTypeTargetClientGet");
      }

      let pathParams = {
        'type': type,
        'target': target,
        'client': client
      };
      let queryParams = {
        'searchPhrase': searchPhrase,
        'sequenceNumber': opts['sequenceNumber'],
        'templateUrl': opts['templateUrl'],
        'limit': opts['limit'],
        'source': opts['source'],
        'csv': opts['csv'],
        'startdate': opts['startdate'],
        'enddate': opts['enddate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/csv'];
      let returnType = LogsApiResponse;
      return this.apiClient.callApi(
        '/logs/{type}/{target}/{client}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search across logs for this client and target
     * Provide a search string to search for
     * @param {module:com.alterian.jo.model/LogType} type What kind of logging do you want to see?
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {String} searchPhrase The phrase to search for in the logs
     * @param {Object} opts Optional parameters
     * @param {String} opts.sequenceNumber Sequence Number to identify rule invoke logs
     * @param {String} opts.templateUrl Template url, if you want to filter your request by template url
     * @param {Number} opts.limit The maximum number of items to return.
     * @param {module:com.alterian.jo.model/LogSource} opts.source Pick the source of the logs. Currently only elastic search is supported
     * @param {Boolean} opts.csv if true then returns csv file
     * @param {Date} opts.startdate If you want to filter your request by date range, this is the starting date for the time period,   please provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
     * @param {Date} opts.enddate If you want to filter your request by date range, this is the ending date for the time period, please   provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/LogsApiResponse}
     */
    logsTypeTargetClientGet(type, target, client, searchPhrase, opts) {
      return this.logsTypeTargetClientGetWithHttpInfo(type, target, client, searchPhrase, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get logs that have been recorded for this rule
     * If you haven't invoked the rule since you started logging then the writetolog list will always be empty.
     * @param {module:com.alterian.jo.model/LogTypeOrTimeseries} type What kind of logging do you want to see?
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {String} rulename Rule name
     * @param {Object} opts Optional parameters
     * @param {String} [searchPhrase] The phrase to search for in the logs
     * @param {String} [searchQuery] Lucene query string to apply
     * @param {String} [sequenceNumber] Sequence Number to identify rule invoke logs
     * @param {String} [tileName] The name of the tile, if you want to filter your request by tile name
     * @param {String} [tileId] The id of the tile, if you want to filter your request by tile id
     * @param {String} [templateUrl] Template url, if you want to filter your request by template url
     * @param {Number} [limit] The maximum number of items to return.
     * @param {module:com.alterian.jo.model/LogSource} [source] Pick the source of the logs. Currently only elastic search is supported
     * @param {Boolean} [csv] if true then returns csv file
     * @param {Date} [startdate] If you want to filter your request by date range, this is the starting date for the time period,   please provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
     * @param {Date} [enddate] If you want to filter your request by date range, this is the ending date for the time period, please   provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.jo.model/LogsApiResponse} and HTTP response
     */
    logsTypeTargetClientRulenameGetWithHttpInfo(type, target, client, rulename, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling logsTypeTargetClientRulenameGet");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling logsTypeTargetClientRulenameGet");
      }
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling logsTypeTargetClientRulenameGet");
      }
      // verify the required parameter 'rulename' is set
      if (rulename === undefined || rulename === null) {
        throw new Error("Missing the required parameter 'rulename' when calling logsTypeTargetClientRulenameGet");
      }

      let pathParams = {
        'type': type,
        'target': target,
        'client': client,
        'rulename': rulename
      };
      let queryParams = {
        'searchPhrase': opts['searchPhrase'],
        'searchQuery': opts['searchQuery'],
        'sequenceNumber': opts['sequenceNumber'],
        'tileName': opts['tileName'],
        'tileId': opts['tileId'],
        'templateUrl': opts['templateUrl'],
        'limit': opts['limit'],
        'source': opts['source'],
        'csv': opts['csv'],
        'startdate': opts['startdate'],
        'enddate': opts['enddate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/csv'];
      let returnType = LogsApiResponse;
      return this.apiClient.callApi(
        '/logs/{type}/{target}/{client}/{rulename}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get logs that have been recorded for this rule
     * If you haven't invoked the rule since you started logging then the writetolog list will always be empty.
     * @param {module:com.alterian.jo.model/LogTypeOrTimeseries} type What kind of logging do you want to see?
     * @param {module:com.alterian.jo.model/TargetEnum} target Target - is where rule is published.
     * @param {String} client Client name
     * @param {String} rulename Rule name
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchPhrase The phrase to search for in the logs
     * @param {String} opts.searchQuery Lucene query string to apply
     * @param {String} opts.sequenceNumber Sequence Number to identify rule invoke logs
     * @param {String} opts.tileName The name of the tile, if you want to filter your request by tile name
     * @param {String} opts.tileId The id of the tile, if you want to filter your request by tile id
     * @param {String} opts.templateUrl Template url, if you want to filter your request by template url
     * @param {Number} opts.limit The maximum number of items to return.
     * @param {module:com.alterian.jo.model/LogSource} opts.source Pick the source of the logs. Currently only elastic search is supported
     * @param {Boolean} opts.csv if true then returns csv file
     * @param {Date} opts.startdate If you want to filter your request by date range, this is the starting date for the time period,   please provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
     * @param {Date} opts.enddate If you want to filter your request by date range, this is the ending date for the time period, please   provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.jo.model/LogsApiResponse}
     */
    logsTypeTargetClientRulenameGet(type, target, client, rulename, opts) {
      return this.logsTypeTargetClientRulenameGetWithHttpInfo(type, target, client, rulename, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}