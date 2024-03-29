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
import Parameter from './Parameter';

/**
 * The DataGridDetails model module.
 * @module com.alterian.jo.model/DataGridDetails
 * @version 4.29.139
 */
class DataGridDetails {
    /**
     * Constructs a new <code>DataGridDetails</code>.
     * @alias module:com.alterian.jo.model/DataGridDetails
     * @param columnType {Array.<module:com.alterian.jo.model/DataGridDetails.ColumnTypeEnum>} 
     * @param data {Array.<Array.<String>>} 
     * @param columnHeader {Array.<String>} 
     * @param name {String} 
     * @param columnFormat {Array.<String>} 
     * @param parameters {Array.<module:com.alterian.jo.model/Parameter>} 
     */
    constructor(columnType, data, columnHeader, name, columnFormat, parameters) { 
        
        DataGridDetails.initialize(this, columnType, data, columnHeader, name, columnFormat, parameters);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, columnType, data, columnHeader, name, columnFormat, parameters) { 
        obj['columnType'] = columnType;
        obj['data'] = data;
        obj['columnHeader'] = columnHeader;
        obj['name'] = name;
        obj['columnFormat'] = columnFormat;
        obj['parameters'] = parameters;
    }

    /**
     * Constructs a <code>DataGridDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/DataGridDetails} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/DataGridDetails} The populated <code>DataGridDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataGridDetails();

            if (data.hasOwnProperty('columnType')) {
                obj['columnType'] = ApiClient.convertToType(data['columnType'], ['String']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [['String']]);
            }
            if (data.hasOwnProperty('columnHeader')) {
                obj['columnHeader'] = ApiClient.convertToType(data['columnHeader'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('columnFormat')) {
                obj['columnFormat'] = ApiClient.convertToType(data['columnFormat'], ['String']);
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [Parameter]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataGridDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataGridDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DataGridDetails.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['columnType'])) {
            throw new Error("Expected the field `columnType` to be an array in the JSON data but got " + data['columnType']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['data'])) {
            throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['columnHeader'])) {
            throw new Error("Expected the field `columnHeader` to be an array in the JSON data but got " + data['columnHeader']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['columnFormat'])) {
            throw new Error("Expected the field `columnFormat` to be an array in the JSON data but got " + data['columnFormat']);
        }
        if (data['parameters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parameters'])) {
                throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
            }
            // validate the optional field `parameters` (array)
            for (const item of data['parameters']) {
                Parameter.validateJSON(item);
            };
        }

        return true;
    }


}

DataGridDetails.RequiredProperties = ["columnType", "data", "columnHeader", "name", "columnFormat", "parameters"];

/**
 * @member {Array.<module:com.alterian.jo.model/DataGridDetails.ColumnTypeEnum>} columnType
 */
DataGridDetails.prototype['columnType'] = undefined;

/**
 * @member {Array.<Array.<String>>} data
 */
DataGridDetails.prototype['data'] = undefined;

/**
 * @member {Array.<String>} columnHeader
 */
DataGridDetails.prototype['columnHeader'] = undefined;

/**
 * @member {String} name
 */
DataGridDetails.prototype['name'] = undefined;

/**
 * @member {Array.<String>} columnFormat
 */
DataGridDetails.prototype['columnFormat'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/Parameter>} parameters
 */
DataGridDetails.prototype['parameters'] = undefined;





/**
 * Allowed values for the <code>columnType</code> property.
 * @enum {String}
 * @readonly
 */
DataGridDetails['ColumnTypeEnum'] = {

    /**
     * value: "String"
     * @const
     */
    "String": "String"
};



export default DataGridDetails;

