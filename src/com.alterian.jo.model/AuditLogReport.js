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
import AuditLogEntry from './AuditLogEntry';

/**
 * The AuditLogReport model module.
 * @module com.alterian.jo.model/AuditLogReport
 * @version 4.30.49
 */
class AuditLogReport {
    /**
     * Constructs a new <code>AuditLogReport</code>.
     * @alias module:com.alterian.jo.model/AuditLogReport
     */
    constructor() { 
        
        AuditLogReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuditLogReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/AuditLogReport} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/AuditLogReport} The populated <code>AuditLogReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuditLogReport();

            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('auditlog')) {
                obj['auditlog'] = ApiClient.convertToType(data['auditlog'], [AuditLogEntry]);
            }
            if (data.hasOwnProperty('isrule')) {
                obj['isrule'] = ApiClient.convertToType(data['isrule'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuditLogReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuditLogReport</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['client'] && !(typeof data['client'] === 'string' || data['client'] instanceof String)) {
            throw new Error("Expected the field `client` to be a primitive type in the JSON string but got " + data['client']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        if (data['auditlog']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['auditlog'])) {
                throw new Error("Expected the field `auditlog` to be an array in the JSON data but got " + data['auditlog']);
            }
            // validate the optional field `auditlog` (array)
            for (const item of data['auditlog']) {
                AuditLogEntry.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} target
 */
AuditLogReport.prototype['target'] = undefined;

/**
 * @member {String} client
 */
AuditLogReport.prototype['client'] = undefined;

/**
 * @member {String} name
 */
AuditLogReport.prototype['name'] = undefined;

/**
 * @member {String} url
 */
AuditLogReport.prototype['url'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/AuditLogEntry>} auditlog
 */
AuditLogReport.prototype['auditlog'] = undefined;

/**
 * @member {Boolean} isrule
 */
AuditLogReport.prototype['isrule'] = undefined;






export default AuditLogReport;

