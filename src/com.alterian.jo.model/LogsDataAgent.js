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

import ApiClient from '../ApiClient';

/**
 * The LogsDataAgent model module.
 * @module com.alterian.jo.model/LogsDataAgent
 * @version 4.29.139
 */
class LogsDataAgent {
    /**
     * Constructs a new <code>LogsDataAgent</code>.
     * @alias module:com.alterian.jo.model/LogsDataAgent
     * @extends Object
     */
    constructor() { 
        
        LogsDataAgent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogsDataAgent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/LogsDataAgent} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/LogsDataAgent} The populated <code>LogsDataAgent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogsDataAgent();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LogsDataAgent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogsDataAgent</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }

        return true;
    }


}



/**
 * @member {String} type
 */
LogsDataAgent.prototype['type'] = undefined;

/**
 * @member {String} version
 */
LogsDataAgent.prototype['version'] = undefined;






export default LogsDataAgent;

