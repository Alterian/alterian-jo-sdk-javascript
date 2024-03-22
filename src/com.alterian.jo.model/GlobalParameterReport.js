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
 * The GlobalParameterReport model module.
 * @module com.alterian.jo.model/GlobalParameterReport
 * @version 4.30.49
 */
class GlobalParameterReport {
    /**
     * Constructs a new <code>GlobalParameterReport</code>.
     * @alias module:com.alterian.jo.model/GlobalParameterReport
     */
    constructor() { 
        
        GlobalParameterReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GlobalParameterReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/GlobalParameterReport} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/GlobalParameterReport} The populated <code>GlobalParameterReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalParameterReport();

            if (data.hasOwnProperty('Client')) {
                obj['Client'] = ApiClient.convertToType(data['Client'], 'String');
            }
            if (data.hasOwnProperty('ParamName')) {
                obj['ParamName'] = ApiClient.convertToType(data['ParamName'], 'String');
            }
            if (data.hasOwnProperty('ParamValue')) {
                obj['ParamValue'] = ApiClient.convertToType(data['ParamValue'], 'String');
            }
            if (data.hasOwnProperty('Rules')) {
                obj['Rules'] = ApiClient.convertToType(data['Rules'], ['String']);
            }
            if (data.hasOwnProperty('globalParam')) {
                obj['globalParam'] = ApiClient.convertToType(data['globalParam'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GlobalParameterReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalParameterReport</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Client'] && !(typeof data['Client'] === 'string' || data['Client'] instanceof String)) {
            throw new Error("Expected the field `Client` to be a primitive type in the JSON string but got " + data['Client']);
        }
        // ensure the json data is a string
        if (data['ParamName'] && !(typeof data['ParamName'] === 'string' || data['ParamName'] instanceof String)) {
            throw new Error("Expected the field `ParamName` to be a primitive type in the JSON string but got " + data['ParamName']);
        }
        // ensure the json data is a string
        if (data['ParamValue'] && !(typeof data['ParamValue'] === 'string' || data['ParamValue'] instanceof String)) {
            throw new Error("Expected the field `ParamValue` to be a primitive type in the JSON string but got " + data['ParamValue']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Rules'])) {
            throw new Error("Expected the field `Rules` to be an array in the JSON data but got " + data['Rules']);
        }

        return true;
    }


}



/**
 * @member {String} Client
 */
GlobalParameterReport.prototype['Client'] = undefined;

/**
 * @member {String} ParamName
 */
GlobalParameterReport.prototype['ParamName'] = undefined;

/**
 * @member {String} ParamValue
 */
GlobalParameterReport.prototype['ParamValue'] = undefined;

/**
 * @member {Array.<String>} Rules
 */
GlobalParameterReport.prototype['Rules'] = undefined;

/**
 * @member {Boolean} globalParam
 */
GlobalParameterReport.prototype['globalParam'] = undefined;






export default GlobalParameterReport;
