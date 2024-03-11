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
import LastModified from './LastModified';

/**
 * The User model module.
 * @module com.alterian.jo.model/User
 * @version 4.29.139
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:com.alterian.jo.model/User
     * @implements module:com.alterian.jo.model/LastModified
     */
    constructor() { 
        LastModified.initialize(this);
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/User} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();
            LastModified.constructFromObject(data, obj);

            if (data.hasOwnProperty('lastModifiedDate')) {
                obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedUser')) {
                obj['lastModifiedUser'] = ApiClient.convertToType(data['lastModifiedUser'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('clients')) {
                obj['clients'] = ApiClient.convertToType(data['clients'], ['String']);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
            if (data.hasOwnProperty('staticTokens')) {
                obj['staticTokens'] = ApiClient.convertToType(data['staticTokens'], ['String']);
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>User</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User</code>.
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['clients'])) {
            throw new Error("Expected the field `clients` to be an array in the JSON data but got " + data['clients']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['permissions'])) {
            throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['roles'])) {
            throw new Error("Expected the field `roles` to be an array in the JSON data but got " + data['roles']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['staticTokens'])) {
            throw new Error("Expected the field `staticTokens` to be an array in the JSON data but got " + data['staticTokens']);
        }

        return true;
    }


}



/**
 * When was this object last modified? Timestamp in ISO-8601 format
 * @member {String} lastModifiedDate
 */
User.prototype['lastModifiedDate'] = undefined;

/**
 * What is the name of the user who last modified this object?
 * @member {String} lastModifiedUser
 */
User.prototype['lastModifiedUser'] = undefined;

/**
 * The unique name to identify this user
 * @member {String} name
 */
User.prototype['name'] = undefined;

/**
 * @member {Array.<String>} clients
 */
User.prototype['clients'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
User.prototype['permissions'] = undefined;

/**
 * @member {Array.<String>} roles
 */
User.prototype['roles'] = undefined;

/**
 * @member {Array.<String>} staticTokens
 */
User.prototype['staticTokens'] = undefined;

/**
 * Is this a system user
 * @member {Boolean} system
 */
User.prototype['system'] = undefined;


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




export default User;
