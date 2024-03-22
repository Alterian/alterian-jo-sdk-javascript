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
 * The ConversationUsageReport model module.
 * @module com.alterian.jo.model/ConversationUsageReport
 * @version 4.30.49
 */
class ConversationUsageReport {
    /**
     * Constructs a new <code>ConversationUsageReport</code>.
     * @alias module:com.alterian.jo.model/ConversationUsageReport
     */
    constructor() { 
        
        ConversationUsageReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationUsageReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/ConversationUsageReport} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/ConversationUsageReport} The populated <code>ConversationUsageReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationUsageReport();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('conversations')) {
                obj['conversations'] = ApiClient.convertToType(data['conversations'], 'Number');
            }
            if (data.hasOwnProperty('activeConversations')) {
                obj['activeConversations'] = ApiClient.convertToType(data['activeConversations'], 'Number');
            }
            if (data.hasOwnProperty('bulkLoads')) {
                obj['bulkLoads'] = ApiClient.convertToType(data['bulkLoads'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConversationUsageReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConversationUsageReport</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['timestamp'] && !(typeof data['timestamp'] === 'string' || data['timestamp'] instanceof String)) {
            throw new Error("Expected the field `timestamp` to be a primitive type in the JSON string but got " + data['timestamp']);
        }

        return true;
    }


}



/**
 * @member {String} timestamp
 */
ConversationUsageReport.prototype['timestamp'] = undefined;

/**
 * @member {Number} conversations
 */
ConversationUsageReport.prototype['conversations'] = undefined;

/**
 * @member {Number} activeConversations
 */
ConversationUsageReport.prototype['activeConversations'] = undefined;

/**
 * @member {Number} bulkLoads
 */
ConversationUsageReport.prototype['bulkLoads'] = undefined;






export default ConversationUsageReport;
