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
 * The LogsDataEcs model module.
 * @module com.alterian.jo.model/LogsDataEcs
 * @version 4.30.49
 */
class LogsDataEcs {
    /**
     * Constructs a new <code>LogsDataEcs</code>.
     * @alias module:com.alterian.jo.model/LogsDataEcs
     * @extends Object
     */
    constructor() { 
        
        LogsDataEcs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogsDataEcs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/LogsDataEcs} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/LogsDataEcs} The populated <code>LogsDataEcs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogsDataEcs();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LogsDataEcs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogsDataEcs</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }

        return true;
    }


}



/**
 * @member {String} version
 */
LogsDataEcs.prototype['version'] = undefined;






export default LogsDataEcs;

