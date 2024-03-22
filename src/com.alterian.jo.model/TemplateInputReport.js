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
 * The TemplateInputReport model module.
 * @module com.alterian.jo.model/TemplateInputReport
 * @version 4.30.49
 */
class TemplateInputReport {
    /**
     * Constructs a new <code>TemplateInputReport</code>.
     * @alias module:com.alterian.jo.model/TemplateInputReport
     */
    constructor() { 
        
        TemplateInputReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateInputReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/TemplateInputReport} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/TemplateInputReport} The populated <code>TemplateInputReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateInputReport();

            if (data.hasOwnProperty('templateUrl')) {
                obj['templateUrl'] = ApiClient.convertToType(data['templateUrl'], 'String');
            }
            if (data.hasOwnProperty('inputFields')) {
                obj['inputFields'] = ApiClient.convertToType(data['inputFields'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateInputReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateInputReport</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['templateUrl'] && !(typeof data['templateUrl'] === 'string' || data['templateUrl'] instanceof String)) {
            throw new Error("Expected the field `templateUrl` to be a primitive type in the JSON string but got " + data['templateUrl']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['inputFields'])) {
            throw new Error("Expected the field `inputFields` to be an array in the JSON data but got " + data['inputFields']);
        }

        return true;
    }


}



/**
 * @member {String} templateUrl
 */
TemplateInputReport.prototype['templateUrl'] = undefined;

/**
 * @member {Array.<String>} inputFields
 */
TemplateInputReport.prototype['inputFields'] = undefined;






export default TemplateInputReport;
