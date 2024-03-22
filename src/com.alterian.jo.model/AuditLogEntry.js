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
 * The AuditLogEntry model module.
 * @module com.alterian.jo.model/AuditLogEntry
 * @version 4.30.49
 */
class AuditLogEntry {
    /**
     * Constructs a new <code>AuditLogEntry</code>.
     * @alias module:com.alterian.jo.model/AuditLogEntry
     */
    constructor() { 
        
        AuditLogEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuditLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/AuditLogEntry} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/AuditLogEntry} The populated <code>AuditLogEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuditLogEntry();

            if (data.hasOwnProperty('modifiedon')) {
                obj['modifiedon'] = ApiClient.convertToType(data['modifiedon'], 'String');
            }
            if (data.hasOwnProperty('modifiedby')) {
                obj['modifiedby'] = ApiClient.convertToType(data['modifiedby'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuditLogEntry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuditLogEntry</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['modifiedon'] && !(typeof data['modifiedon'] === 'string' || data['modifiedon'] instanceof String)) {
            throw new Error("Expected the field `modifiedon` to be a primitive type in the JSON string but got " + data['modifiedon']);
        }
        // ensure the json data is a string
        if (data['modifiedby'] && !(typeof data['modifiedby'] === 'string' || data['modifiedby'] instanceof String)) {
            throw new Error("Expected the field `modifiedby` to be a primitive type in the JSON string but got " + data['modifiedby']);
        }

        return true;
    }


}



/**
 * The date and time when the modification was made, in a custom format.
 * @member {String} modifiedon
 */
AuditLogEntry.prototype['modifiedon'] = undefined;

/**
 * Identifier of the user who made the modification.
 * @member {String} modifiedby
 */
AuditLogEntry.prototype['modifiedby'] = undefined;






export default AuditLogEntry;
