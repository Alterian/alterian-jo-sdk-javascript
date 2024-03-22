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
import Opportunitygrid from './Opportunitygrid';
import RuleGroupParameter from './RuleGroupParameter';
import RuleGroupStatistics from './RuleGroupStatistics';
import TargetEnum from './TargetEnum';

/**
 * The RuleGroupListing model module.
 * @module com.alterian.jo.model/RuleGroupListing
 * @version 4.30.49
 */
class RuleGroupListing {
    /**
     * Constructs a new <code>RuleGroupListing</code>.
     * @alias module:com.alterian.jo.model/RuleGroupListing
     */
    constructor() { 
        
        RuleGroupListing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleGroupListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/RuleGroupListing} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/RuleGroupListing} The populated <code>RuleGroupListing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleGroupListing();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = TargetEnum.constructFromObject(data['target']);
            }
            if (data.hasOwnProperty('invokeName')) {
                obj['invokeName'] = ApiClient.convertToType(data['invokeName'], 'String');
            }
            if (data.hasOwnProperty('folder')) {
                obj['folder'] = ApiClient.convertToType(data['folder'], 'String');
            }
            if (data.hasOwnProperty('enableInvoke')) {
                obj['enableInvoke'] = ApiClient.convertToType(data['enableInvoke'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('modifiedDate')) {
                obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'String');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'String');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
            }
            if (data.hasOwnProperty('opportunitygrid')) {
                obj['opportunitygrid'] = ApiClient.convertToType(data['opportunitygrid'], [Opportunitygrid]);
            }
            if (data.hasOwnProperty('referencedRules')) {
                obj['referencedRules'] = ApiClient.convertToType(data['referencedRules'], ['String']);
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [RuleGroupParameter]);
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = RuleGroupStatistics.constructFromObject(data['statistics']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RuleGroupListing</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RuleGroupListing</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
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
        if (data['invokeName'] && !(typeof data['invokeName'] === 'string' || data['invokeName'] instanceof String)) {
            throw new Error("Expected the field `invokeName` to be a primitive type in the JSON string but got " + data['invokeName']);
        }
        // ensure the json data is a string
        if (data['folder'] && !(typeof data['folder'] === 'string' || data['folder'] instanceof String)) {
            throw new Error("Expected the field `folder` to be a primitive type in the JSON string but got " + data['folder']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['modifiedDate'] && !(typeof data['modifiedDate'] === 'string' || data['modifiedDate'] instanceof String)) {
            throw new Error("Expected the field `modifiedDate` to be a primitive type in the JSON string but got " + data['modifiedDate']);
        }
        // ensure the json data is a string
        if (data['client'] && !(typeof data['client'] === 'string' || data['client'] instanceof String)) {
            throw new Error("Expected the field `client` to be a primitive type in the JSON string but got " + data['client']);
        }
        // ensure the json data is a string
        if (data['modifiedBy'] && !(typeof data['modifiedBy'] === 'string' || data['modifiedBy'] instanceof String)) {
            throw new Error("Expected the field `modifiedBy` to be a primitive type in the JSON string but got " + data['modifiedBy']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['opportunitygrid'])) {
            throw new Error("Expected the field `opportunitygrid` to be an array in the JSON data but got " + data['opportunitygrid']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['referencedRules'])) {
            throw new Error("Expected the field `referencedRules` to be an array in the JSON data but got " + data['referencedRules']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['parameters'])) {
            throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
        }
        // validate the optional field `statistics`
        if (data['statistics']) { // data not null
          RuleGroupStatistics.validateJSON(data['statistics']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
RuleGroupListing.prototype['description'] = undefined;

/**
 * @member {String} version
 */
RuleGroupListing.prototype['version'] = undefined;

/**
 * @member {String} url
 */
RuleGroupListing.prototype['url'] = undefined;

/**
 * @member {module:com.alterian.jo.model/TargetEnum} target
 */
RuleGroupListing.prototype['target'] = undefined;

/**
 * @member {String} invokeName
 */
RuleGroupListing.prototype['invokeName'] = undefined;

/**
 * @member {String} folder
 */
RuleGroupListing.prototype['folder'] = undefined;

/**
 * @member {Boolean} enableInvoke
 */
RuleGroupListing.prototype['enableInvoke'] = undefined;

/**
 * @member {String} name
 */
RuleGroupListing.prototype['name'] = undefined;

/**
 * @member {String} modifiedDate
 */
RuleGroupListing.prototype['modifiedDate'] = undefined;

/**
 * @member {String} client
 */
RuleGroupListing.prototype['client'] = undefined;

/**
 * @member {String} modifiedBy
 */
RuleGroupListing.prototype['modifiedBy'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/Opportunitygrid>} opportunitygrid
 */
RuleGroupListing.prototype['opportunitygrid'] = undefined;

/**
 * @member {Array.<String>} referencedRules
 */
RuleGroupListing.prototype['referencedRules'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/RuleGroupParameter>} parameters
 */
RuleGroupListing.prototype['parameters'] = undefined;

/**
 * @member {module:com.alterian.jo.model/RuleGroupStatistics} statistics
 */
RuleGroupListing.prototype['statistics'] = undefined;






export default RuleGroupListing;

