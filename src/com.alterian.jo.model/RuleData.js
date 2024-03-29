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
import LogLevelEnum from './LogLevelEnum';
import PriorityWeighting from './PriorityWeighting';
import RuleParameter from './RuleParameter';
import RuleStateEnum from './RuleStateEnum';
import Statistics from './Statistics';

/**
 * The RuleData model module.
 * @module com.alterian.jo.model/RuleData
 * @version 4.29.139
 */
class RuleData {
    /**
     * Constructs a new <code>RuleData</code>.
     * @alias module:com.alterian.jo.model/RuleData
     */
    constructor() { 
        
        RuleData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/RuleData} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/RuleData} The populated <code>RuleData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleData();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('autoloader')) {
                obj['autoloader'] = ApiClient.convertToType(data['autoloader'], Object);
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'String');
            }
            if (data.hasOwnProperty('datagrids')) {
                obj['datagrids'] = ApiClient.convertToType(data['datagrids'], [Object]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('edges')) {
                obj['edges'] = ApiClient.convertToType(data['edges'], [Object]);
            }
            if (data.hasOwnProperty('exampleData')) {
                obj['exampleData'] = ApiClient.convertToType(data['exampleData'], 'String');
            }
            if (data.hasOwnProperty('hasAutoloader')) {
                obj['hasAutoloader'] = ApiClient.convertToType(data['hasAutoloader'], 'Boolean');
            }
            if (data.hasOwnProperty('hasRuledesigner')) {
                obj['hasRuledesigner'] = ApiClient.convertToType(data['hasRuledesigner'], 'Boolean');
            }
            if (data.hasOwnProperty('helpLink')) {
                obj['helpLink'] = ApiClient.convertToType(data['helpLink'], 'String');
            }
            if (data.hasOwnProperty('isValid')) {
                obj['isValid'] = ApiClient.convertToType(data['isValid'], 'Boolean');
            }
            if (data.hasOwnProperty('journeys')) {
                obj['journeys'] = ApiClient.convertToType(data['journeys'], ['String']);
            }
            if (data.hasOwnProperty('lastSeen')) {
                obj['lastSeen'] = ApiClient.convertToType(data['lastSeen'], 'String');
            }
            if (data.hasOwnProperty('latestTemplateVersions')) {
                obj['latestTemplateVersions'] = ApiClient.convertToType(data['latestTemplateVersions'], 'Boolean');
            }
            if (data.hasOwnProperty('logLevel')) {
                obj['logLevel'] = LogLevelEnum.constructFromObject(data['logLevel']);
            }
            if (data.hasOwnProperty('modifiedDate')) {
                obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('newerTemplateVersion')) {
                obj['newerTemplateVersion'] = ApiClient.convertToType(data['newerTemplateVersion'], 'Number');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [RuleParameter]);
            }
            if (data.hasOwnProperty('priorityWeighting')) {
                obj['priorityWeighting'] = PriorityWeighting.constructFromObject(data['priorityWeighting']);
            }
            if (data.hasOwnProperty('relativeTime')) {
                obj['relativeTime'] = ApiClient.convertToType(data['relativeTime'], 'String');
            }
            if (data.hasOwnProperty('requestedAt')) {
                obj['requestedAt'] = ApiClient.convertToType(data['requestedAt'], 'String');
            }
            if (data.hasOwnProperty('rulegroups')) {
                obj['rulegroups'] = ApiClient.convertToType(data['rulegroups'], ['String']);
            }
            if (data.hasOwnProperty('securityOption')) {
                obj['securityOption'] = ApiClient.convertToType(data['securityOption'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = RuleStateEnum.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('stateModifiedDate')) {
                obj['stateModifiedDate'] = ApiClient.convertToType(data['stateModifiedDate'], 'String');
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = Statistics.constructFromObject(data['statistics']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('templateName')) {
                obj['templateName'] = ApiClient.convertToType(data['templateName'], 'String');
            }
            if (data.hasOwnProperty('templateURL')) {
                obj['templateURL'] = ApiClient.convertToType(data['templateURL'], 'String');
            }
            if (data.hasOwnProperty('templateVersion')) {
                obj['templateVersion'] = ApiClient.convertToType(data['templateVersion'], 'Number');
            }
            if (data.hasOwnProperty('tiles')) {
                obj['tiles'] = ApiClient.convertToType(data['tiles'], [Object]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('urlPath')) {
                obj['urlPath'] = ApiClient.convertToType(data['urlPath'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('wtlLoggingActive')) {
                obj['wtlLoggingActive'] = ApiClient.convertToType(data['wtlLoggingActive'], 'Boolean');
            }
            if (data.hasOwnProperty('wtlLoggingAllowed')) {
                obj['wtlLoggingAllowed'] = ApiClient.convertToType(data['wtlLoggingAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('requestContentType')) {
                obj['requestContentType'] = ApiClient.convertToType(data['requestContentType'], 'String');
            }
            if (data.hasOwnProperty('snoozed')) {
                obj['snoozed'] = ApiClient.convertToType(data['snoozed'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RuleData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RuleData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['apiVersion'] && !(typeof data['apiVersion'] === 'string' || data['apiVersion'] instanceof String)) {
            throw new Error("Expected the field `apiVersion` to be a primitive type in the JSON string but got " + data['apiVersion']);
        }
        // ensure the json data is a string
        if (data['client'] && !(typeof data['client'] === 'string' || data['client'] instanceof String)) {
            throw new Error("Expected the field `client` to be a primitive type in the JSON string but got " + data['client']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['datagrids'])) {
            throw new Error("Expected the field `datagrids` to be an array in the JSON data but got " + data['datagrids']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['edges'])) {
            throw new Error("Expected the field `edges` to be an array in the JSON data but got " + data['edges']);
        }
        // ensure the json data is a string
        if (data['exampleData'] && !(typeof data['exampleData'] === 'string' || data['exampleData'] instanceof String)) {
            throw new Error("Expected the field `exampleData` to be a primitive type in the JSON string but got " + data['exampleData']);
        }
        // ensure the json data is a string
        if (data['helpLink'] && !(typeof data['helpLink'] === 'string' || data['helpLink'] instanceof String)) {
            throw new Error("Expected the field `helpLink` to be a primitive type in the JSON string but got " + data['helpLink']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['journeys'])) {
            throw new Error("Expected the field `journeys` to be an array in the JSON data but got " + data['journeys']);
        }
        // ensure the json data is a string
        if (data['lastSeen'] && !(typeof data['lastSeen'] === 'string' || data['lastSeen'] instanceof String)) {
            throw new Error("Expected the field `lastSeen` to be a primitive type in the JSON string but got " + data['lastSeen']);
        }
        // ensure the json data is a string
        if (data['modifiedDate'] && !(typeof data['modifiedDate'] === 'string' || data['modifiedDate'] instanceof String)) {
            throw new Error("Expected the field `modifiedDate` to be a primitive type in the JSON string but got " + data['modifiedDate']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
        // validate the optional field `priorityWeighting`
        if (data['priorityWeighting']) { // data not null
          PriorityWeighting.validateJSON(data['priorityWeighting']);
        }
        // ensure the json data is a string
        if (data['relativeTime'] && !(typeof data['relativeTime'] === 'string' || data['relativeTime'] instanceof String)) {
            throw new Error("Expected the field `relativeTime` to be a primitive type in the JSON string but got " + data['relativeTime']);
        }
        // ensure the json data is a string
        if (data['requestedAt'] && !(typeof data['requestedAt'] === 'string' || data['requestedAt'] instanceof String)) {
            throw new Error("Expected the field `requestedAt` to be a primitive type in the JSON string but got " + data['requestedAt']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rulegroups'])) {
            throw new Error("Expected the field `rulegroups` to be an array in the JSON data but got " + data['rulegroups']);
        }
        // ensure the json data is a string
        if (data['securityOption'] && !(typeof data['securityOption'] === 'string' || data['securityOption'] instanceof String)) {
            throw new Error("Expected the field `securityOption` to be a primitive type in the JSON string but got " + data['securityOption']);
        }
        // ensure the json data is a string
        if (data['stateModifiedDate'] && !(typeof data['stateModifiedDate'] === 'string' || data['stateModifiedDate'] instanceof String)) {
            throw new Error("Expected the field `stateModifiedDate` to be a primitive type in the JSON string but got " + data['stateModifiedDate']);
        }
        // validate the optional field `statistics`
        if (data['statistics']) { // data not null
          Statistics.validateJSON(data['statistics']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['templateName'] && !(typeof data['templateName'] === 'string' || data['templateName'] instanceof String)) {
            throw new Error("Expected the field `templateName` to be a primitive type in the JSON string but got " + data['templateName']);
        }
        // ensure the json data is a string
        if (data['templateURL'] && !(typeof data['templateURL'] === 'string' || data['templateURL'] instanceof String)) {
            throw new Error("Expected the field `templateURL` to be a primitive type in the JSON string but got " + data['templateURL']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tiles'])) {
            throw new Error("Expected the field `tiles` to be an array in the JSON data but got " + data['tiles']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['urlPath'] && !(typeof data['urlPath'] === 'string' || data['urlPath'] instanceof String)) {
            throw new Error("Expected the field `urlPath` to be a primitive type in the JSON string but got " + data['urlPath']);
        }
        // ensure the json data is a string
        if (data['requestContentType'] && !(typeof data['requestContentType'] === 'string' || data['requestContentType'] instanceof String)) {
            throw new Error("Expected the field `requestContentType` to be a primitive type in the JSON string but got " + data['requestContentType']);
        }

        return true;
    }


}



/**
 * @member {String} apiVersion
 */
RuleData.prototype['apiVersion'] = undefined;

/**
 * @member {Object} autoloader
 */
RuleData.prototype['autoloader'] = undefined;

/**
 * @member {String} client
 */
RuleData.prototype['client'] = undefined;

/**
 * @member {Array.<Object>} datagrids
 */
RuleData.prototype['datagrids'] = undefined;

/**
 * A description of the rule
 * @member {String} description
 */
RuleData.prototype['description'] = undefined;

/**
 * @member {Array.<Object>} edges
 */
RuleData.prototype['edges'] = undefined;

/**
 * @member {String} exampleData
 */
RuleData.prototype['exampleData'] = undefined;

/**
 * @member {Boolean} hasAutoloader
 */
RuleData.prototype['hasAutoloader'] = undefined;

/**
 * @member {Boolean} hasRuledesigner
 */
RuleData.prototype['hasRuledesigner'] = undefined;

/**
 * @member {String} helpLink
 */
RuleData.prototype['helpLink'] = undefined;

/**
 * @member {Boolean} isValid
 */
RuleData.prototype['isValid'] = undefined;

/**
 * @member {Array.<String>} journeys
 */
RuleData.prototype['journeys'] = undefined;

/**
 * @member {String} lastSeen
 */
RuleData.prototype['lastSeen'] = undefined;

/**
 * @member {Boolean} latestTemplateVersions
 */
RuleData.prototype['latestTemplateVersions'] = undefined;

/**
 * @member {module:com.alterian.jo.model/LogLevelEnum} logLevel
 */
RuleData.prototype['logLevel'] = undefined;

/**
 * @member {String} modifiedDate
 */
RuleData.prototype['modifiedDate'] = undefined;

/**
 * @member {String} name
 */
RuleData.prototype['name'] = undefined;

/**
 * @member {Number} newerTemplateVersion
 */
RuleData.prototype['newerTemplateVersion'] = undefined;

/**
 * @member {Array.<module:com.alterian.jo.model/RuleParameter>} parameters
 */
RuleData.prototype['parameters'] = undefined;

/**
 * @member {module:com.alterian.jo.model/PriorityWeighting} priorityWeighting
 */
RuleData.prototype['priorityWeighting'] = undefined;

/**
 * @member {String} relativeTime
 */
RuleData.prototype['relativeTime'] = undefined;

/**
 * @member {String} requestedAt
 */
RuleData.prototype['requestedAt'] = undefined;

/**
 * @member {Array.<String>} rulegroups
 */
RuleData.prototype['rulegroups'] = undefined;

/**
 * @member {String} securityOption
 */
RuleData.prototype['securityOption'] = undefined;

/**
 * @member {module:com.alterian.jo.model/RuleStateEnum} state
 */
RuleData.prototype['state'] = undefined;

/**
 * @member {String} stateModifiedDate
 */
RuleData.prototype['stateModifiedDate'] = undefined;

/**
 * @member {module:com.alterian.jo.model/Statistics} statistics
 */
RuleData.prototype['statistics'] = undefined;

/**
 * @member {String} target
 */
RuleData.prototype['target'] = undefined;

/**
 * @member {String} templateName
 */
RuleData.prototype['templateName'] = undefined;

/**
 * @member {String} templateURL
 */
RuleData.prototype['templateURL'] = undefined;

/**
 * @member {Number} templateVersion
 */
RuleData.prototype['templateVersion'] = undefined;

/**
 * @member {Array.<Object>} tiles
 */
RuleData.prototype['tiles'] = undefined;

/**
 * @member {String} type
 */
RuleData.prototype['type'] = undefined;

/**
 * @member {String} urlPath
 */
RuleData.prototype['urlPath'] = undefined;

/**
 * @member {Number} version
 */
RuleData.prototype['version'] = undefined;

/**
 * @member {Boolean} wtlLoggingActive
 */
RuleData.prototype['wtlLoggingActive'] = undefined;

/**
 * @member {Boolean} wtlLoggingAllowed
 */
RuleData.prototype['wtlLoggingAllowed'] = undefined;

/**
 * @member {String} requestContentType
 */
RuleData.prototype['requestContentType'] = undefined;

/**
 * @member {Boolean} snoozed
 */
RuleData.prototype['snoozed'] = undefined;






export default RuleData;

