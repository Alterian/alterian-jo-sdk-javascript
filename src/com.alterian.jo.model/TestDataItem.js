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
import TestData from './TestData';

/**
 * The TestDataItem model module.
 * @module com.alterian.jo.model/TestDataItem
 * @version 4.29.139
 */
class TestDataItem {
    /**
     * Constructs a new <code>TestDataItem</code>.
     * @alias module:com.alterian.jo.model/TestDataItem
     */
    constructor() { 
        
        TestDataItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/TestDataItem} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/TestDataItem} The populated <code>TestDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestDataItem();

            if (data.hasOwnProperty('testData')) {
                obj['testData'] = ApiClient.convertToType(data['testData'], [TestData]);
            }
            if (data.hasOwnProperty('stepType')) {
                obj['stepType'] = ApiClient.convertToType(data['stepType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TestDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestDataItem</code>.
     */
    static validateJSON(data) {
        if (data['testData']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['testData'])) {
                throw new Error("Expected the field `testData` to be an array in the JSON data but got " + data['testData']);
            }
            // validate the optional field `testData` (array)
            for (const item of data['testData']) {
                TestData.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['stepType'] && !(typeof data['stepType'] === 'string' || data['stepType'] instanceof String)) {
            throw new Error("Expected the field `stepType` to be a primitive type in the JSON string but got " + data['stepType']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.alterian.jo.model/TestData>} testData
 */
TestDataItem.prototype['testData'] = undefined;

/**
 * @member {String} stepType
 */
TestDataItem.prototype['stepType'] = undefined;






export default TestDataItem;

