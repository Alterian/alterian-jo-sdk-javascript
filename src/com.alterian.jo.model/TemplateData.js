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
import DataGridDetails from './DataGridDetails';
import Icon from './Icon';
import InputConnector from './InputConnector';
import JsonDecoderDetails from './JsonDecoderDetails';
import MABStepDetails from './MABStepDetails';
import OutputConnector from './OutputConnector';
import RealtimeInputStepDetails from './RealtimeInputStepDetails';
import RuleCallDetails from './RuleCallDetails';
import RuleParameter from './RuleParameter';
import SwitchCaseDetails from './SwitchCaseDetails';

/**
 * The TemplateData model module.
 * @module com.alterian.jo.model/TemplateData
 * @version 4.29.139
 */
class TemplateData {
    /**
     * Constructs a new <code>TemplateData</code>.
     * @alias module:com.alterian.jo.model/TemplateData
     */
    constructor() { 
        
        TemplateData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/TemplateData} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/TemplateData} The populated <code>TemplateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateData();

            if (data.hasOwnProperty('inputconnectors')) {
                obj['inputconnectors'] = ApiClient.convertToType(data['inputconnectors'], [InputConnector]);
            }
            if (data.hasOwnProperty('datagrids')) {
                obj['datagrids'] = ApiClient.convertToType(data['datagrids'], ['String']);
            }
            if (data.hasOwnProperty('datagridsdetails')) {
                obj['datagridsdetails'] = ApiClient.convertToType(data['datagridsdetails'], [DataGridDetails]);
            }
            if (data.hasOwnProperty('cxidprovider')) {
                obj['cxidprovider'] = ApiClient.convertToType(data['cxidprovider'], 'Boolean');
            }
            if (data.hasOwnProperty('templatelastmodifieddate')) {
                obj['templatelastmodifieddate'] = ApiClient.convertToType(data['templatelastmodifieddate'], 'String');
            }
            if (data.hasOwnProperty('serviceCost')) {
                obj['serviceCost'] = ApiClient.convertToType(data['serviceCost'], 'Number');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = Icon.constructFromObject(data['icon']);
            }
            if (data.hasOwnProperty('outputconnectors')) {
                obj['outputconnectors'] = ApiClient.convertToType(data['outputconnectors'], [OutputConnector]);
            }
            if (data.hasOwnProperty('isstarttile')) {
                obj['isstarttile'] = ApiClient.convertToType(data['isstarttile'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('templatelastmodifieduser')) {
                obj['templatelastmodifieduser'] = ApiClient.convertToType(data['templatelastmodifieduser'], 'String');
            }
            if (data.hasOwnProperty('ktrname')) {
                obj['ktrname'] = ApiClient.convertToType(data['ktrname'], 'String');
            }
            if (data.hasOwnProperty('realtimeRuleSteps')) {
                obj['realtimeRuleSteps'] = ApiClient.convertToType(data['realtimeRuleSteps'], [RuleCallDetails]);
            }
            if (data.hasOwnProperty('helpLink')) {
                obj['helpLink'] = ApiClient.convertToType(data['helpLink'], 'String');
            }
            if (data.hasOwnProperty('realtimeInputSteps')) {
                obj['realtimeInputSteps'] = ApiClient.convertToType(data['realtimeInputSteps'], [RealtimeInputStepDetails]);
            }
            if (data.hasOwnProperty('switchcases')) {
                obj['switchcases'] = ApiClient.convertToType(data['switchcases'], [SwitchCaseDetails]);
            }
            if (data.hasOwnProperty('controlEnabled')) {
                obj['controlEnabled'] = ApiClient.convertToType(data['controlEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'String');
            }
            if (data.hasOwnProperty('templatename')) {
                obj['templatename'] = ApiClient.convertToType(data['templatename'], 'String');
            }
            if (data.hasOwnProperty('mabsteps')) {
                obj['mabsteps'] = ApiClient.convertToType(data['mabsteps'], [MABStepDetails]);
            }
            if (data.hasOwnProperty('jsonDecoders')) {
                obj['jsonDecoders'] = ApiClient.convertToType(data['jsonDecoders'], [JsonDecoderDetails]);
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [RuleParameter]);
            }
            if (data.hasOwnProperty('templatedescription')) {
                obj['templatedescription'] = ApiClient.convertToType(data['templatedescription'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateData</code>.
     */
    static validateJSON(data) {
        if (data['inputconnectors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['inputconnectors'])) {
                throw new Error("Expected the field `inputconnectors` to be an array in the JSON data but got " + data['inputconnectors']);
            }
            // validate the optional field `inputconnectors` (array)
            for (const item of data['inputconnectors']) {
                InputConnector.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['datagrids'])) {
            throw new Error("Expected the field `datagrids` to be an array in the JSON data but got " + data['datagrids']);
        }
        if (data['datagridsdetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['datagridsdetails'])) {
                throw new Error("Expected the field `datagridsdetails` to be an array in the JSON data but got " + data['datagridsdetails']);
            }
            // validate the optional field `datagridsdetails` (array)
            for (const item of data['datagridsdetails']) {
                DataGridDetails.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['templatelastmodifieddate'] && !(typeof data['templatelastmodifieddate'] === 'string' || data['templatelastmodifieddate'] instanceof String)) {
            throw new Error("Expected the field `templatelastmodifieddate` to be a primitive type in the JSON string but got " + data['templatelastmodifieddate']);
        }
        // validate the optional field `icon`
        if (data['icon']) { // data not null
          Icon.validateJSON(data['icon']);
        }
        if (data['outputconnectors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['outputconnectors'])) {
                throw new Error("Expected the field `outputconnectors` to be an array in the JSON data but got " + data['outputconnectors']);
            }
            // validate the optional field `outputconnectors` (array)
            for (const item of data['outputconnectors']) {
                OutputConnector.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['templatelastmodifieduser'] && !(typeof data['templatelastmodifieduser'] === 'string' || data['templatelastmodifieduser'] instanceof String)) {
            throw new Error("Expected the field `templatelastmodifieduser` to be a primitive type in the JSON string but got " + data['templatelastmodifieduser']);
        }
        // ensure the json data is a string
        if (data['ktrname'] && !(typeof data['ktrname'] === 'string' || data['ktrname'] instanceof String)) {
            throw new Error("Expected the field `ktrname` to be a primitive type in the JSON string but got " + data['ktrname']);
        }
        if (data['realtimeRuleSteps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['realtimeRuleSteps'])) {
                throw new Error("Expected the field `realtimeRuleSteps` to be an array in the JSON data but got " + data['realtimeRuleSteps']);
            }
            // validate the optional field `realtimeRuleSteps` (array)
            for (const item of data['realtimeRuleSteps']) {
                RuleCallDetails.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['helpLink'] && !(typeof data['helpLink'] === 'string' || data['helpLink'] instanceof String)) {
            throw new Error("Expected the field `helpLink` to be a primitive type in the JSON string but got " + data['helpLink']);
        }
        if (data['realtimeInputSteps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['realtimeInputSteps'])) {
                throw new Error("Expected the field `realtimeInputSteps` to be an array in the JSON data but got " + data['realtimeInputSteps']);
            }
            // validate the optional field `realtimeInputSteps` (array)
            for (const item of data['realtimeInputSteps']) {
                RealtimeInputStepDetails.validateJSON(item);
            };
        }
        if (data['switchcases']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['switchcases'])) {
                throw new Error("Expected the field `switchcases` to be an array in the JSON data but got " + data['switchcases']);
            }
            // validate the optional field `switchcases` (array)
            for (const item of data['switchcases']) {
                SwitchCaseDetails.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['client'] && !(typeof data['client'] === 'string' || data['client'] instanceof String)) {
            throw new Error("Expected the field `client` to be a primitive type in the JSON string but got " + data['client']);
        }
        // ensure the json data is a string
        if (data['templatename'] && !(typeof data['templatename'] === 'string' || data['templatename'] instanceof String)) {
            throw new Error("Expected the field `templatename` to be a primitive type in the JSON string but got " + data['templatename']);
        }
        if (data['mabsteps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['mabsteps'])) {
                throw new Error("Expected the field `mabsteps` to be an array in the JSON data but got " + data['mabsteps']);
            }
            // validate the optional field `mabsteps` (array)
            for (const item of data['mabsteps']) {
                MABStepDetails.validateJSON(item);
            };
        }
        if (data['jsonDecoders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['jsonDecoders'])) {
                throw new Error("Expected the field `jsonDecoders` to be an array in the JSON data but got " + data['jsonDecoders']);
            }
            // validate the optional field `jsonDecoders` (array)
            for (const item of data['jsonDecoders']) {
                JsonDecoderDetails.validateJSON(item);
            };
        }
        if (data['parameters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parameters'])) {
                throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
            }
            // validate the optional field `parameters` (array)
            for (const item of data['parameters']) {
                RuleParameter.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['templatedescription'] && !(typeof data['templatedescription'] === 'string' || data['templatedescription'] instanceof String)) {
            throw new Error("Expected the field `templatedescription` to be a primitive type in the JSON string but got " + data['templatedescription']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.alterian.jo.model/InputConnector>} inputconnectors
 */
TemplateData.prototype['inputconnectors'] = undefined;

/**
 * @member {Array.<String>} datagrids
 */
TemplateData.prototype['datagrids'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/DataGridDetails>} datagridsdetails
 */
TemplateData.prototype['datagridsdetails'] = undefined;

/**
 * @member {Boolean} cxidprovider
 */
TemplateData.prototype['cxidprovider'] = undefined;

/**
 * @member {String} templatelastmodifieddate
 */
TemplateData.prototype['templatelastmodifieddate'] = undefined;

/**
 * @member {Number} serviceCost
 */
TemplateData.prototype['serviceCost'] = undefined;

/**
 * @member {module:com.alterian.jo.model/Icon} icon
 */
TemplateData.prototype['icon'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/OutputConnector>} outputconnectors
 */
TemplateData.prototype['outputconnectors'] = undefined;

/**
 * @member {Boolean} isstarttile
 */
TemplateData.prototype['isstarttile'] = undefined;

/**
 * @member {String} version
 */
TemplateData.prototype['version'] = undefined;

/**
 * @member {String} url
 */
TemplateData.prototype['url'] = undefined;

/**
 * @member {String} templatelastmodifieduser
 */
TemplateData.prototype['templatelastmodifieduser'] = undefined;

/**
 * @member {String} ktrname
 */
TemplateData.prototype['ktrname'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/RuleCallDetails>} realtimeRuleSteps
 */
TemplateData.prototype['realtimeRuleSteps'] = undefined;

/**
 * @member {String} helpLink
 */
TemplateData.prototype['helpLink'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/RealtimeInputStepDetails>} realtimeInputSteps
 */
TemplateData.prototype['realtimeInputSteps'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/SwitchCaseDetails>} switchcases
 */
TemplateData.prototype['switchcases'] = undefined;

/**
 * @member {Boolean} controlEnabled
 */
TemplateData.prototype['controlEnabled'] = undefined;

/**
 * @member {String} client
 */
TemplateData.prototype['client'] = undefined;

/**
 * @member {String} templatename
 */
TemplateData.prototype['templatename'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/MABStepDetails>} mabsteps
 */
TemplateData.prototype['mabsteps'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/JsonDecoderDetails>} jsonDecoders
 */
TemplateData.prototype['jsonDecoders'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/RuleParameter>} parameters
 */
TemplateData.prototype['parameters'] = undefined;

/**
 * @member {String} templatedescription
 */
TemplateData.prototype['templatedescription'] = undefined;






export default TemplateData;
