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
import InputConnector from './InputConnector';
import OutputConnector from './OutputConnector';

/**
 * The Metadata model module.
 * @module com.alterian.jo.model/Metadata
 * @version 4.29.139
 */
class Metadata {
    /**
     * Constructs a new <code>Metadata</code>.
     * @alias module:com.alterian.jo.model/Metadata
     */
    constructor() { 
        
        Metadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/Metadata} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/Metadata} The populated <code>Metadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Metadata();

            if (data.hasOwnProperty('in')) {
                obj['in'] = InputConnector.constructFromObject(data['in']);
            }
            if (data.hasOwnProperty('out')) {
                obj['out'] = OutputConnector.constructFromObject(data['out']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Metadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Metadata</code>.
     */
    static validateJSON(data) {
        // validate the optional field `in`
        if (data['in']) { // data not null
          InputConnector.validateJSON(data['in']);
        }
        // validate the optional field `out`
        if (data['out']) { // data not null
          OutputConnector.validateJSON(data['out']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.jo.model/InputConnector} in
 */
Metadata.prototype['in'] = undefined;

/**
 * @member {module:com.alterian.jo.model/OutputConnector} out
 */
Metadata.prototype['out'] = undefined;

/**
 * @member {String} name
 */
Metadata.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
Metadata.prototype['active'] = undefined;






export default Metadata;

