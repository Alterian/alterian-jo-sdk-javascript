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
import CacheFieldType from './CacheFieldType';

/**
 * The CacheField model module.
 * @module com.alterian.jo.model/CacheField
 * @version 4.29.139
 */
class CacheField {
    /**
     * Constructs a new <code>CacheField</code>.
     * @alias module:com.alterian.jo.model/CacheField
     * @param name {String} 
     * @param type {module:com.alterian.jo.model/CacheFieldType} 
     */
    constructor(name, type) { 
        
        CacheField.initialize(this, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type) { 
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CacheField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/CacheField} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/CacheField} The populated <code>CacheField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CacheField();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = CacheFieldType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('writetime')) {
                obj['writetime'] = ApiClient.convertToType(data['writetime'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CacheField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CacheField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CacheField.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['writetime'] && !(typeof data['writetime'] === 'string' || data['writetime'] instanceof String)) {
            throw new Error("Expected the field `writetime` to be a primitive type in the JSON string but got " + data['writetime']);
        }
        // ensure the json data is a string
        if (data['ttl'] && !(typeof data['ttl'] === 'string' || data['ttl'] instanceof String)) {
            throw new Error("Expected the field `ttl` to be a primitive type in the JSON string but got " + data['ttl']);
        }

        return true;
    }


}

CacheField.RequiredProperties = ["name", "type"];

/**
 * @member {String} name
 */
CacheField.prototype['name'] = undefined;

/**
 * @member {module:com.alterian.jo.model/CacheFieldType} type
 */
CacheField.prototype['type'] = undefined;

/**
 * @member {String} value
 */
CacheField.prototype['value'] = undefined;

/**
 * @member {String} writetime
 */
CacheField.prototype['writetime'] = undefined;

/**
 * @member {String} ttl
 */
CacheField.prototype['ttl'] = undefined;






export default CacheField;

