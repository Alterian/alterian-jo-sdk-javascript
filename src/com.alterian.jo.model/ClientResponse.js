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
import ApiError from './ApiError';
import ClientData from './ClientData';
import Success from './Success';
import SuccessCursor from './SuccessCursor';

/**
 * The ClientResponse model module.
 * @module com.alterian.jo.model/ClientResponse
 * @version 4.30.49
 */
class ClientResponse {
    /**
     * Constructs a new <code>ClientResponse</code>.
     * @alias module:com.alterian.jo.model/ClientResponse
     * @implements module:com.alterian.jo.model/Success
     * @implements module:com.alterian.jo.model/ApiError
     * @param status {String} 
     */
    constructor(status) { 
        Success.initialize(this);ApiError.initialize(this);
        ClientResponse.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>ClientResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/ClientResponse} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/ClientResponse} The populated <code>ClientResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientResponse();
            Success.constructFromObject(data, obj);
            ApiError.constructFromObject(data, obj);

            if (data.hasOwnProperty('cursor')) {
                obj['cursor'] = SuccessCursor.constructFromObject(data['cursor']);
            }
            if (data.hasOwnProperty('debug')) {
                obj['debug'] = ApiClient.convertToType(data['debug'], 'String');
            }
            if (data.hasOwnProperty('exceptionType')) {
                obj['exceptionType'] = ApiClient.convertToType(data['exceptionType'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ClientData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClientResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClientResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ClientResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `cursor`
        if (data['cursor']) { // data not null
          SuccessCursor.validateJSON(data['cursor']);
        }
        // ensure the json data is a string
        if (data['debug'] && !(typeof data['debug'] === 'string' || data['debug'] instanceof String)) {
            throw new Error("Expected the field `debug` to be a primitive type in the JSON string but got " + data['debug']);
        }
        // ensure the json data is a string
        if (data['exceptionType'] && !(typeof data['exceptionType'] === 'string' || data['exceptionType'] instanceof String)) {
            throw new Error("Expected the field `exceptionType` to be a primitive type in the JSON string but got " + data['exceptionType']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          ClientData.validateJSON(data['data']);
        }

        return true;
    }


}

ClientResponse.RequiredProperties = ["status"];

/**
 * @member {module:com.alterian.jo.model/SuccessCursor} cursor
 */
ClientResponse.prototype['cursor'] = undefined;

/**
 * @member {String} debug
 */
ClientResponse.prototype['debug'] = undefined;

/**
 * @member {String} exceptionType
 */
ClientResponse.prototype['exceptionType'] = undefined;

/**
 * @member {String} message
 */
ClientResponse.prototype['message'] = undefined;

/**
 * @member {String} status
 */
ClientResponse.prototype['status'] = undefined;

/**
 * @member {module:com.alterian.jo.model/ClientData} data
 */
ClientResponse.prototype['data'] = undefined;


// Implement Success interface:
/**
 * @member {module:com.alterian.jo.model/SuccessCursor} cursor
 */
Success.prototype['cursor'] = undefined;
// Implement ApiError interface:
/**
 * @member {String} debug
 */
ApiError.prototype['debug'] = undefined;
/**
 * @member {String} exceptionType
 */
ApiError.prototype['exceptionType'] = undefined;
/**
 * @member {String} message
 */
ApiError.prototype['message'] = undefined;
/**
 * @member {String} status
 */
ApiError.prototype['status'] = undefined;




export default ClientResponse;

