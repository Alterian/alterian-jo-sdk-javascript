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
import RuleStateEnum from './RuleStateEnum';

/**
 * The RuleAndStateResponse model module.
 * @module com.alterian.jo.model/RuleAndStateResponse
 * @version 4.29.139
 */
class RuleAndStateResponse {
    /**
     * Constructs a new <code>RuleAndStateResponse</code>.
     * @alias module:com.alterian.jo.model/RuleAndStateResponse
     * @param state {module:com.alterian.jo.model/RuleStateEnum} 
     * @param url {String} 
     */
    constructor(state, url) { 
        
        RuleAndStateResponse.initialize(this, state, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, state, url) { 
        obj['state'] = state;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>RuleAndStateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/RuleAndStateResponse} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/RuleAndStateResponse} The populated <code>RuleAndStateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleAndStateResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = RuleStateEnum.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('modifiedDate')) {
                obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RuleAndStateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RuleAndStateResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RuleAndStateResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['modifiedDate'] && !(typeof data['modifiedDate'] === 'string' || data['modifiedDate'] instanceof String)) {
            throw new Error("Expected the field `modifiedDate` to be a primitive type in the JSON string but got " + data['modifiedDate']);
        }

        return true;
    }


}

RuleAndStateResponse.RequiredProperties = ["state", "url"];

/**
 * @member {String} status
 */
RuleAndStateResponse.prototype['status'] = undefined;

/**
 * @member {module:com.alterian.jo.model/RuleStateEnum} state
 */
RuleAndStateResponse.prototype['state'] = undefined;

/**
 * @member {String} url
 */
RuleAndStateResponse.prototype['url'] = undefined;

/**
 * @member {String} version
 */
RuleAndStateResponse.prototype['version'] = undefined;

/**
 * @member {String} modifiedDate
 */
RuleAndStateResponse.prototype['modifiedDate'] = undefined;






export default RuleAndStateResponse;
