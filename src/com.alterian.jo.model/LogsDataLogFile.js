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
 * The LogsDataLogFile model module.
 * @module com.alterian.jo.model/LogsDataLogFile
 * @version 4.29.139
 */
class LogsDataLogFile {
    /**
     * Constructs a new <code>LogsDataLogFile</code>.
     * @alias module:com.alterian.jo.model/LogsDataLogFile
     * @extends Object
     */
    constructor() { 
        
        LogsDataLogFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogsDataLogFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/LogsDataLogFile} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/LogsDataLogFile} The populated <code>LogsDataLogFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogsDataLogFile();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LogsDataLogFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogsDataLogFile</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}



/**
 * @member {String} path
 */
LogsDataLogFile.prototype['path'] = undefined;






export default LogsDataLogFile;

