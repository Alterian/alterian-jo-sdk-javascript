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
import DataGridDetails from './DataGridDetails';
import RuleGroupParameterDefaultValueOneOf from './RuleGroupParameterDefaultValueOneOf';

/**
 * The RuleGroupParameterDefaultValue model module.
 * @module com.alterian.jo.model/RuleGroupParameterDefaultValue
 * @version 4.30.49
 */
class RuleGroupParameterDefaultValue {
    /**
     * Constructs a new <code>RuleGroupParameterDefaultValue</code>.
     * @alias module:com.alterian.jo.model/RuleGroupParameterDefaultValue
     * @param {(module:com.alterian.jo.model/RuleGroupParameterDefaultValueOneOf|module:com.alterian.jo.model/String)} instance The actual instance to initialize RuleGroupParameterDefaultValue.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            // validate string
            if (!(typeof instance === 'string')) {
                throw new Error("Invalid value. Must be string. Input: " + JSON.stringify(instance));
            }
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into String
            errorMessages.push("Failed to construct String: " + err)
        }

        try {
            if (typeof instance === "RuleGroupParameterDefaultValueOneOf") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RuleGroupParameterDefaultValueOneOf.validateJSON(instance); // throw an exception if no match
                // create RuleGroupParameterDefaultValueOneOf from JS object
                this.actualInstance = RuleGroupParameterDefaultValueOneOf.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RuleGroupParameterDefaultValueOneOf
            errorMessages.push("Failed to construct RuleGroupParameterDefaultValueOneOf: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `RuleGroupParameterDefaultValue` with oneOf schemas RuleGroupParameterDefaultValueOneOf, String. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `RuleGroupParameterDefaultValue` with oneOf schemas RuleGroupParameterDefaultValueOneOf, String. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>RuleGroupParameterDefaultValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/RuleGroupParameterDefaultValue} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/RuleGroupParameterDefaultValue} The populated <code>RuleGroupParameterDefaultValue</code> instance.
     */
    static constructFromObject(data, obj) {
        return new RuleGroupParameterDefaultValue(data);
    }

    /**
     * Gets the actual instance, which can be <code>RuleGroupParameterDefaultValueOneOf</code>, <code>String</code>.
     * @return {(module:com.alterian.jo.model/RuleGroupParameterDefaultValueOneOf|module:com.alterian.jo.model/String)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>RuleGroupParameterDefaultValueOneOf</code>, <code>String</code>.
     * @param {(module:com.alterian.jo.model/RuleGroupParameterDefaultValueOneOf|module:com.alterian.jo.model/String)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = RuleGroupParameterDefaultValue.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of RuleGroupParameterDefaultValue from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:com.alterian.jo.model/RuleGroupParameterDefaultValue} An instance of RuleGroupParameterDefaultValue.
     */
    static fromJSON = function(json_string){
        return RuleGroupParameterDefaultValue.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:com.alterian.jo.model/DataGridDetails} detailsOfDataGrid
 */
RuleGroupParameterDefaultValue.prototype['detailsOfDataGrid'] = undefined;


RuleGroupParameterDefaultValue.OneOf = ["RuleGroupParameterDefaultValueOneOf", "String"];

export default RuleGroupParameterDefaultValue;
