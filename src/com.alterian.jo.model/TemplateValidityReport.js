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
 * The TemplateValidityReport model module.
 * @module com.alterian.jo.model/TemplateValidityReport
 * @version 4.30.49
 */
class TemplateValidityReport {
    /**
     * Constructs a new <code>TemplateValidityReport</code>.
     * @alias module:com.alterian.jo.model/TemplateValidityReport
     */
    constructor() { 
        
        TemplateValidityReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateValidityReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/TemplateValidityReport} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/TemplateValidityReport} The populated <code>TemplateValidityReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateValidityReport();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateValidityReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateValidityReport</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['client'] && !(typeof data['client'] === 'string' || data['client'] instanceof String)) {
            throw new Error("Expected the field `client` to be a primitive type in the JSON string but got " + data['client']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }

        return true;
    }


}



/**
 * @member {String} url
 */
TemplateValidityReport.prototype['url'] = undefined;

/**
 * @member {String} name
 */
TemplateValidityReport.prototype['name'] = undefined;

/**
 * @member {String} client
 */
TemplateValidityReport.prototype['client'] = undefined;

/**
 * @member {String} version
 */
TemplateValidityReport.prototype['version'] = undefined;

/**
 * @member {String} reason
 */
TemplateValidityReport.prototype['reason'] = undefined;






export default TemplateValidityReport;
