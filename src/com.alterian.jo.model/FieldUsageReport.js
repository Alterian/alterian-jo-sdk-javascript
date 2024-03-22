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
import FieldUsage from './FieldUsage';

/**
 * The FieldUsageReport model module.
 * @module com.alterian.jo.model/FieldUsageReport
 * @version 4.30.49
 */
class FieldUsageReport {
    /**
     * Constructs a new <code>FieldUsageReport</code>.
     * @alias module:com.alterian.jo.model/FieldUsageReport
     */
    constructor() { 
        
        FieldUsageReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldUsageReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/FieldUsageReport} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/FieldUsageReport} The populated <code>FieldUsageReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldUsageReport();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('fieldName')) {
                obj['fieldName'] = ApiClient.convertToType(data['fieldName'], 'String');
            }
            if (data.hasOwnProperty('rename')) {
                obj['rename'] = ApiClient.convertToType(data['rename'], ['String']);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = ApiClient.convertToType(data['usage'], [FieldUsage]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FieldUsageReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FieldUsageReport</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['fieldName'] && !(typeof data['fieldName'] === 'string' || data['fieldName'] instanceof String)) {
            throw new Error("Expected the field `fieldName` to be a primitive type in the JSON string but got " + data['fieldName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rename'])) {
            throw new Error("Expected the field `rename` to be an array in the JSON data but got " + data['rename']);
        }
        if (data['usage']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['usage'])) {
                throw new Error("Expected the field `usage` to be an array in the JSON data but got " + data['usage']);
            }
            // validate the optional field `usage` (array)
            for (const item of data['usage']) {
                FieldUsage.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} key
 */
FieldUsageReport.prototype['key'] = undefined;

/**
 * @member {String} fieldName
 */
FieldUsageReport.prototype['fieldName'] = undefined;

/**
 * @member {Array.<String>} rename
 */
FieldUsageReport.prototype['rename'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/FieldUsage>} usage
 */
FieldUsageReport.prototype['usage'] = undefined;






export default FieldUsageReport;
