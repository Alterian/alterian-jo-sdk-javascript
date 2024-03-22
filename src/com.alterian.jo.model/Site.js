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
import LastModified from './LastModified';

/**
 * The Site model module.
 * @module com.alterian.jo.model/Site
 * @version 4.30.49
 */
class Site {
    /**
     * Constructs a new <code>Site</code>.
     * @alias module:com.alterian.jo.model/Site
     * @implements module:com.alterian.jo.model/LastModified
     */
    constructor() { 
        LastModified.initialize(this);
        Site.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Site</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/Site} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/Site} The populated <code>Site</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Site();
            LastModified.constructFromObject(data, obj);

            if (data.hasOwnProperty('lastModifiedDate')) {
                obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedUser')) {
                obj['lastModifiedUser'] = ApiClient.convertToType(data['lastModifiedUser'], 'String');
            }
            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
            }
            if (data.hasOwnProperty('extendedInfo')) {
                obj['extendedInfo'] = ApiClient.convertToType(data['extendedInfo'], 'String');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Site</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Site</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['lastModifiedDate'] && !(typeof data['lastModifiedDate'] === 'string' || data['lastModifiedDate'] instanceof String)) {
            throw new Error("Expected the field `lastModifiedDate` to be a primitive type in the JSON string but got " + data['lastModifiedDate']);
        }
        // ensure the json data is a string
        if (data['lastModifiedUser'] && !(typeof data['lastModifiedUser'] === 'string' || data['lastModifiedUser'] instanceof String)) {
            throw new Error("Expected the field `lastModifiedUser` to be a primitive type in the JSON string but got " + data['lastModifiedUser']);
        }
        // ensure the json data is a string
        if (data['siteId'] && !(typeof data['siteId'] === 'string' || data['siteId'] instanceof String)) {
            throw new Error("Expected the field `siteId` to be a primitive type in the JSON string but got " + data['siteId']);
        }
        // ensure the json data is a string
        if (data['extendedInfo'] && !(typeof data['extendedInfo'] === 'string' || data['extendedInfo'] instanceof String)) {
            throw new Error("Expected the field `extendedInfo` to be a primitive type in the JSON string but got " + data['extendedInfo']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['users'])) {
            throw new Error("Expected the field `users` to be an array in the JSON data but got " + data['users']);
        }

        return true;
    }


}



/**
 * When was this object last modified? Timestamp in ISO-8601 format
 * @member {String} lastModifiedDate
 */
Site.prototype['lastModifiedDate'] = undefined;

/**
 * What is the name of the user who last modified this object?
 * @member {String} lastModifiedUser
 */
Site.prototype['lastModifiedUser'] = undefined;

/**
 * A UUID to uniquely identify this site
 * @member {String} siteId
 */
Site.prototype['siteId'] = undefined;

/**
 * Additional site-specific information
 * @member {String} extendedInfo
 */
Site.prototype['extendedInfo'] = undefined;

/**
 * @member {Array.<String>} users
 */
Site.prototype['users'] = undefined;


// Implement LastModified interface:
/**
 * When was this object last modified? Timestamp in ISO-8601 format
 * @member {String} lastModifiedDate
 */
LastModified.prototype['lastModifiedDate'] = undefined;
/**
 * What is the name of the user who last modified this object?
 * @member {String} lastModifiedUser
 */
LastModified.prototype['lastModifiedUser'] = undefined;




export default Site;

