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
import FieldUsageReport from './FieldUsageReport';
import Success from './Success';
import SuccessCursor from './SuccessCursor';

/**
 * The FieldUsageReportResponse model module.
 * @module com.alterian.jo.model/FieldUsageReportResponse
 * @version 4.30.49
 */
class FieldUsageReportResponse {
    /**
     * Constructs a new <code>FieldUsageReportResponse</code>.
     * @alias module:com.alterian.jo.model/FieldUsageReportResponse
     * @implements module:com.alterian.jo.model/Success
     * @implements module:com.alterian.jo.model/ApiError
     */
    constructor() { 
        Success.initialize(this);ApiError.initialize(this);
        FieldUsageReportResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldUsageReportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/FieldUsageReportResponse} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/FieldUsageReportResponse} The populated <code>FieldUsageReportResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldUsageReportResponse();
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
                obj['data'] = ApiClient.convertToType(data['data'], [FieldUsageReport]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FieldUsageReportResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FieldUsageReportResponse</code>.
     */
    static validateJSON(data) {
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
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                FieldUsageReport.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.jo.model/SuccessCursor} cursor
 */
FieldUsageReportResponse.prototype['cursor'] = undefined;

/**
 * @member {String} debug
 */
FieldUsageReportResponse.prototype['debug'] = undefined;

/**
 * @member {String} exceptionType
 */
FieldUsageReportResponse.prototype['exceptionType'] = undefined;

/**
 * @member {String} message
 */
FieldUsageReportResponse.prototype['message'] = undefined;

/**
 * @member {String} status
 */
FieldUsageReportResponse.prototype['status'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/FieldUsageReport>} data
 */
FieldUsageReportResponse.prototype['data'] = undefined;


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




export default FieldUsageReportResponse;

