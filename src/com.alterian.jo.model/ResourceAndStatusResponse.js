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
 * The ResourceAndStatusResponse model module.
 * @module com.alterian.jo.model/ResourceAndStatusResponse
 * @version 4.29.139
 */
class ResourceAndStatusResponse {
    /**
     * Constructs a new <code>ResourceAndStatusResponse</code>.
     * @alias module:com.alterian.jo.model/ResourceAndStatusResponse
     * @param status {String} 
     * @param url {String} 
     */
    constructor(status, url) { 
        
        ResourceAndStatusResponse.initialize(this, status, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, url) { 
        obj['status'] = status;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>ResourceAndStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/ResourceAndStatusResponse} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/ResourceAndStatusResponse} The populated <code>ResourceAndStatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceAndStatusResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResourceAndStatusResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResourceAndStatusResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ResourceAndStatusResponse.RequiredProperties) {
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

        return true;
    }


}

ResourceAndStatusResponse.RequiredProperties = ["status", "url"];

/**
 * @member {String} status
 */
ResourceAndStatusResponse.prototype['status'] = undefined;

/**
 * @member {String} url
 */
ResourceAndStatusResponse.prototype['url'] = undefined;






export default ResourceAndStatusResponse;
