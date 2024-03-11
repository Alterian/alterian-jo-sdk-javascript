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
 * The ClusterPostRequest model module.
 * @module com.alterian.jo.model/ClusterPostRequest
 * @version 4.29.139
 */
class ClusterPostRequest {
    /**
     * Constructs a new <code>ClusterPostRequest</code>.
     * @alias module:com.alterian.jo.model/ClusterPostRequest
     */
    constructor() { 
        
        ClusterPostRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/ClusterPostRequest} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/ClusterPostRequest} The populated <code>ClusterPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterPostRequest();

            if (data.hasOwnProperty('bootstrapVersion')) {
                obj['bootstrapVersion'] = ApiClient.convertToType(data['bootstrapVersion'], 'Number');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('public_ip')) {
                obj['public_ip'] = ApiClient.convertToType(data['public_ip'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClusterPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClusterPostRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['public_ip'] && !(typeof data['public_ip'] === 'string' || data['public_ip'] instanceof String)) {
            throw new Error("Expected the field `public_ip` to be a primitive type in the JSON string but got " + data['public_ip']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }

        return true;
    }


}



/**
 * When adding a new node, pass this as 0
 * @member {Number} bootstrapVersion
 */
ClusterPostRequest.prototype['bootstrapVersion'] = undefined;

/**
 * The internal ip address of the new instance
 * @member {String} host
 */
ClusterPostRequest.prototype['host'] = undefined;

/**
 * The public ip of the new instance
 * @member {String} public_ip
 */
ClusterPostRequest.prototype['public_ip'] = undefined;

/**
 * The version number of the new instance
 * @member {String} version
 */
ClusterPostRequest.prototype['version'] = undefined;






export default ClusterPostRequest;
