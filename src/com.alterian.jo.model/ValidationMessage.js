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
 * The ValidationMessage model module.
 * @module com.alterian.jo.model/ValidationMessage
 * @version 4.29.139
 */
class ValidationMessage {
    /**
     * Constructs a new <code>ValidationMessage</code>.
     * @alias module:com.alterian.jo.model/ValidationMessage
     */
    constructor() { 
        
        ValidationMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidationMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/ValidationMessage} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/ValidationMessage} The populated <code>ValidationMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidationMessage();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('tileId')) {
                obj['tileId'] = ApiClient.convertToType(data['tileId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidationMessage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidationMessage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['tileId'] && !(typeof data['tileId'] === 'string' || data['tileId'] instanceof String)) {
            throw new Error("Expected the field `tileId` to be a primitive type in the JSON string but got " + data['tileId']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
ValidationMessage.prototype['message'] = undefined;

/**
 * @member {String} tileId
 */
ValidationMessage.prototype['tileId'] = undefined;






export default ValidationMessage;

