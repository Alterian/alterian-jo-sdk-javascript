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
 * The Client model module.
 * @module com.alterian.jo.model/Client
 * @version 4.29.139
 */
class Client {
    /**
     * Constructs a new <code>Client</code>.
     * @alias module:com.alterian.jo.model/Client
     */
    constructor() { 
        
        Client.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/Client} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/Client} The populated <code>Client</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Client();

            if (data.hasOwnProperty('defaultCacheDuration')) {
                obj['defaultCacheDuration'] = ApiClient.convertToType(data['defaultCacheDuration'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Client</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Client</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * When you add a new table to the cache, this is the default (in seconds) for how long data will say in   that table if it has not been written recently.
 * @member {Number} defaultCacheDuration
 */
Client.prototype['defaultCacheDuration'] = undefined;






export default Client;
