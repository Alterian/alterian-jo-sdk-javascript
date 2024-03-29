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
import CacheConsistencyLevel from './CacheConsistencyLevel';

/**
 * The CacheCQL model module.
 * @module com.alterian.jo.model/CacheCQL
 * @version 4.29.139
 */
class CacheCQL {
    /**
     * Constructs a new <code>CacheCQL</code>.
     * @alias module:com.alterian.jo.model/CacheCQL
     */
    constructor() { 
        
        CacheCQL.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CacheCQL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/CacheCQL} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/CacheCQL} The populated <code>CacheCQL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CacheCQL();

            if (data.hasOwnProperty('consistency')) {
                obj['consistency'] = CacheConsistencyLevel.constructFromObject(data['consistency']);
            }
            if (data.hasOwnProperty('cql')) {
                obj['cql'] = ApiClient.convertToType(data['cql'], 'String');
            }
            if (data.hasOwnProperty('retries')) {
                obj['retries'] = ApiClient.convertToType(data['retries'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CacheCQL</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CacheCQL</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cql'] && !(typeof data['cql'] === 'string' || data['cql'] instanceof String)) {
            throw new Error("Expected the field `cql` to be a primitive type in the JSON string but got " + data['cql']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.jo.model/CacheConsistencyLevel} consistency
 */
CacheCQL.prototype['consistency'] = undefined;

/**
 * The insert, select or delete CQL command
 * @member {String} cql
 */
CacheCQL.prototype['cql'] = undefined;

/**
 * Number of retries, before giving up
 * @member {Number} retries
 */
CacheCQL.prototype['retries'] = undefined;






export default CacheCQL;

