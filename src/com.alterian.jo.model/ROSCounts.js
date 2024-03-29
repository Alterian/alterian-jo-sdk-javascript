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
 * The ROSCounts model module.
 * @module com.alterian.jo.model/ROSCounts
 * @version 4.29.139
 */
class ROSCounts {
    /**
     * Constructs a new <code>ROSCounts</code>.
     * @alias module:com.alterian.jo.model/ROSCounts
     */
    constructor() { 
        
        ROSCounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ROSCounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/ROSCounts} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/ROSCounts} The populated <code>ROSCounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ROSCounts();

            if (data.hasOwnProperty('stepName')) {
                obj['stepName'] = ApiClient.convertToType(data['stepName'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], Array);
            }
            if (data.hasOwnProperty('returnType')) {
                obj['returnType'] = ApiClient.convertToType(data['returnType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ROSCounts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ROSCounts</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['stepName'] && !(typeof data['stepName'] === 'string' || data['stepName'] instanceof String)) {
            throw new Error("Expected the field `stepName` to be a primitive type in the JSON string but got " + data['stepName']);
        }
        // ensure the json data is a string
        if (data['returnType'] && !(typeof data['returnType'] === 'string' || data['returnType'] instanceof String)) {
            throw new Error("Expected the field `returnType` to be a primitive type in the JSON string but got " + data['returnType']);
        }

        return true;
    }


}



/**
 * @member {String} stepName
 */
ROSCounts.prototype['stepName'] = undefined;

/**
 * @member {Number} count
 */
ROSCounts.prototype['count'] = undefined;

/**
 * @member {Array} fields
 */
ROSCounts.prototype['fields'] = undefined;

/**
 * @member {String} returnType
 */
ROSCounts.prototype['returnType'] = undefined;






export default ROSCounts;

