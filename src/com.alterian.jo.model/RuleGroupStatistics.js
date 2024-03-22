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

import ApiClient from '../ApiClient';

/**
 * The RuleGroupStatistics model module.
 * @module com.alterian.jo.model/RuleGroupStatistics
 * @version 4.30.49
 */
class RuleGroupStatistics {
    /**
     * Constructs a new <code>RuleGroupStatistics</code>.
     * @alias module:com.alterian.jo.model/RuleGroupStatistics
     */
    constructor() { 
        
        RuleGroupStatistics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleGroupStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/RuleGroupStatistics} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/RuleGroupStatistics} The populated <code>RuleGroupStatistics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleGroupStatistics();

            if (data.hasOwnProperty('relativeTime')) {
                obj['relativeTime'] = ApiClient.convertToType(data['relativeTime'], 'String');
            }
            if (data.hasOwnProperty('lastSeen')) {
                obj['lastSeen'] = ApiClient.convertToType(data['lastSeen'], 'String');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'String');
            }
            if (data.hasOwnProperty('totalTime')) {
                obj['totalTime'] = ApiClient.convertToType(data['totalTime'], 'String');
            }
            if (data.hasOwnProperty('newActiveConversation')) {
                obj['newActiveConversation'] = ApiClient.convertToType(data['newActiveConversation'], 'String');
            }
            if (data.hasOwnProperty('bulkLoad')) {
                obj['bulkLoad'] = ApiClient.convertToType(data['bulkLoad'], 'String');
            }
            if (data.hasOwnProperty('invalidCount')) {
                obj['invalidCount'] = ApiClient.convertToType(data['invalidCount'], 'String');
            }
            if (data.hasOwnProperty('matchedCount')) {
                obj['matchedCount'] = ApiClient.convertToType(data['matchedCount'], 'String');
            }
            if (data.hasOwnProperty('newConversation')) {
                obj['newConversation'] = ApiClient.convertToType(data['newConversation'], 'String');
            }
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'String');
            }
            if (data.hasOwnProperty('timeoutCount')) {
                obj['timeoutCount'] = ApiClient.convertToType(data['timeoutCount'], 'String');
            }
            if (data.hasOwnProperty('errorCount')) {
                obj['errorCount'] = ApiClient.convertToType(data['errorCount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RuleGroupStatistics</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RuleGroupStatistics</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['relativeTime'] && !(typeof data['relativeTime'] === 'string' || data['relativeTime'] instanceof String)) {
            throw new Error("Expected the field `relativeTime` to be a primitive type in the JSON string but got " + data['relativeTime']);
        }
        // ensure the json data is a string
        if (data['lastSeen'] && !(typeof data['lastSeen'] === 'string' || data['lastSeen'] instanceof String)) {
            throw new Error("Expected the field `lastSeen` to be a primitive type in the JSON string but got " + data['lastSeen']);
        }
        // ensure the json data is a string
        if (data['cost'] && !(typeof data['cost'] === 'string' || data['cost'] instanceof String)) {
            throw new Error("Expected the field `cost` to be a primitive type in the JSON string but got " + data['cost']);
        }
        // ensure the json data is a string
        if (data['totalTime'] && !(typeof data['totalTime'] === 'string' || data['totalTime'] instanceof String)) {
            throw new Error("Expected the field `totalTime` to be a primitive type in the JSON string but got " + data['totalTime']);
        }
        // ensure the json data is a string
        if (data['newActiveConversation'] && !(typeof data['newActiveConversation'] === 'string' || data['newActiveConversation'] instanceof String)) {
            throw new Error("Expected the field `newActiveConversation` to be a primitive type in the JSON string but got " + data['newActiveConversation']);
        }
        // ensure the json data is a string
        if (data['bulkLoad'] && !(typeof data['bulkLoad'] === 'string' || data['bulkLoad'] instanceof String)) {
            throw new Error("Expected the field `bulkLoad` to be a primitive type in the JSON string but got " + data['bulkLoad']);
        }
        // ensure the json data is a string
        if (data['invalidCount'] && !(typeof data['invalidCount'] === 'string' || data['invalidCount'] instanceof String)) {
            throw new Error("Expected the field `invalidCount` to be a primitive type in the JSON string but got " + data['invalidCount']);
        }
        // ensure the json data is a string
        if (data['matchedCount'] && !(typeof data['matchedCount'] === 'string' || data['matchedCount'] instanceof String)) {
            throw new Error("Expected the field `matchedCount` to be a primitive type in the JSON string but got " + data['matchedCount']);
        }
        // ensure the json data is a string
        if (data['newConversation'] && !(typeof data['newConversation'] === 'string' || data['newConversation'] instanceof String)) {
            throw new Error("Expected the field `newConversation` to be a primitive type in the JSON string but got " + data['newConversation']);
        }
        // ensure the json data is a string
        if (data['totalCount'] && !(typeof data['totalCount'] === 'string' || data['totalCount'] instanceof String)) {
            throw new Error("Expected the field `totalCount` to be a primitive type in the JSON string but got " + data['totalCount']);
        }
        // ensure the json data is a string
        if (data['timeoutCount'] && !(typeof data['timeoutCount'] === 'string' || data['timeoutCount'] instanceof String)) {
            throw new Error("Expected the field `timeoutCount` to be a primitive type in the JSON string but got " + data['timeoutCount']);
        }
        // ensure the json data is a string
        if (data['errorCount'] && !(typeof data['errorCount'] === 'string' || data['errorCount'] instanceof String)) {
            throw new Error("Expected the field `errorCount` to be a primitive type in the JSON string but got " + data['errorCount']);
        }

        return true;
    }


}



/**
 * @member {String} relativeTime
 */
RuleGroupStatistics.prototype['relativeTime'] = undefined;

/**
 * @member {String} lastSeen
 */
RuleGroupStatistics.prototype['lastSeen'] = undefined;

/**
 * @member {String} cost
 */
RuleGroupStatistics.prototype['cost'] = undefined;

/**
 * @member {String} totalTime
 */
RuleGroupStatistics.prototype['totalTime'] = undefined;

/**
 * @member {String} newActiveConversation
 */
RuleGroupStatistics.prototype['newActiveConversation'] = undefined;

/**
 * @member {String} bulkLoad
 */
RuleGroupStatistics.prototype['bulkLoad'] = undefined;

/**
 * @member {String} invalidCount
 */
RuleGroupStatistics.prototype['invalidCount'] = undefined;

/**
 * @member {String} matchedCount
 */
RuleGroupStatistics.prototype['matchedCount'] = undefined;

/**
 * @member {String} newConversation
 */
RuleGroupStatistics.prototype['newConversation'] = undefined;

/**
 * @member {String} totalCount
 */
RuleGroupStatistics.prototype['totalCount'] = undefined;

/**
 * @member {String} timeoutCount
 */
RuleGroupStatistics.prototype['timeoutCount'] = undefined;

/**
 * @member {String} errorCount
 */
RuleGroupStatistics.prototype['errorCount'] = undefined;






export default RuleGroupStatistics;

