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
 * The CaseTargetDetails model module.
 * @module com.alterian.jo.model/CaseTargetDetails
 * @version 4.30.49
 */
class CaseTargetDetails {
    /**
     * Constructs a new <code>CaseTargetDetails</code>.
     * @alias module:com.alterian.jo.model/CaseTargetDetails
     */
    constructor() { 
        
        CaseTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CaseTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/CaseTargetDetails} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/CaseTargetDetails} The populated <code>CaseTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CaseTargetDetails();

            if (data.hasOwnProperty('caseValue')) {
                obj['caseValue'] = ApiClient.convertToType(data['caseValue'], 'String');
            }
            if (data.hasOwnProperty('caseTargetStepName')) {
                obj['caseTargetStepName'] = ApiClient.convertToType(data['caseTargetStepName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CaseTargetDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CaseTargetDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['caseValue'] && !(typeof data['caseValue'] === 'string' || data['caseValue'] instanceof String)) {
            throw new Error("Expected the field `caseValue` to be a primitive type in the JSON string but got " + data['caseValue']);
        }
        // ensure the json data is a string
        if (data['caseTargetStepName'] && !(typeof data['caseTargetStepName'] === 'string' || data['caseTargetStepName'] instanceof String)) {
            throw new Error("Expected the field `caseTargetStepName` to be a primitive type in the JSON string but got " + data['caseTargetStepName']);
        }

        return true;
    }


}



/**
 * @member {String} caseValue
 */
CaseTargetDetails.prototype['caseValue'] = undefined;

/**
 * @member {String} caseTargetStepName
 */
CaseTargetDetails.prototype['caseTargetStepName'] = undefined;






export default CaseTargetDetails;

