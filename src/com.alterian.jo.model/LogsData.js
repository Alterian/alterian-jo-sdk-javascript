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
import LogLevelEnum from './LogLevelEnum';
import LogsDataAgent from './LogsDataAgent';
import LogsDataEcs from './LogsDataEcs';
import LogsDataEvent from './LogsDataEvent';
import LogsDataFields from './LogsDataFields';
import LogsDataHost from './LogsDataHost';
import LogsDataInput from './LogsDataInput';
import LogsDataLog from './LogsDataLog';

/**
 * The LogsData model module.
 * @module com.alterian.jo.model/LogsData
 * @version 4.30.49
 */
class LogsData {
    /**
     * Constructs a new <code>LogsData</code>.
     * @alias module:com.alterian.jo.model/LogsData
     * @extends Object
     */
    constructor() { 
        
        LogsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/LogsData} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/LogsData} The populated <code>LogsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogsData();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('agent')) {
                obj['agent'] = LogsDataAgent.constructFromObject(data['agent']);
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'String');
            }
            if (data.hasOwnProperty('ecs')) {
                obj['ecs'] = LogsDataEcs.constructFromObject(data['ecs']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = LogsDataEvent.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = LogsDataFields.constructFromObject(data['fields']);
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = LogsDataHost.constructFromObject(data['host']);
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], 'String');
            }
            if (data.hasOwnProperty('input')) {
                obj['input'] = LogsDataInput.constructFromObject(data['input']);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'String');
            }
            if (data.hasOwnProperty('log')) {
                obj['log'] = LogsDataLog.constructFromObject(data['log']);
            }
            if (data.hasOwnProperty('log_type')) {
                obj['log_type'] = ApiClient.convertToType(data['log_type'], 'String');
            }
            if (data.hasOwnProperty('loglevel')) {
                obj['loglevel'] = LogLevelEnum.constructFromObject(data['loglevel']);
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('node')) {
                obj['node'] = ApiClient.convertToType(data['node'], 'String');
            }
            if (data.hasOwnProperty('nodeName')) {
                obj['nodeName'] = ApiClient.convertToType(data['nodeName'], 'String');
            }
            if (data.hasOwnProperty('node_desc')) {
                obj['node_desc'] = ApiClient.convertToType(data['node_desc'], 'String');
            }
            if (data.hasOwnProperty('restartSequence')) {
                obj['restartSequence'] = ApiClient.convertToType(data['restartSequence'], 'String');
            }
            if (data.hasOwnProperty('rule')) {
                obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
            }
            if (data.hasOwnProperty('rule_log_entry')) {
                obj['rule_log_entry'] = ApiClient.convertToType(data['rule_log_entry'], 'String');
            }
            if (data.hasOwnProperty('seq')) {
                obj['seq'] = ApiClient.convertToType(data['seq'], 'String');
            }
            if (data.hasOwnProperty('step')) {
                obj['step'] = ApiClient.convertToType(data['step'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('templateUrl')) {
                obj['templateUrl'] = ApiClient.convertToType(data['templateUrl'], 'String');
            }
            if (data.hasOwnProperty('tileId')) {
                obj['tileId'] = ApiClient.convertToType(data['tileId'], 'String');
            }
            if (data.hasOwnProperty('tileName')) {
                obj['tileName'] = ApiClient.convertToType(data['tileName'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LogsData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogsData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['client'] && !(typeof data['client'] === 'string' || data['client'] instanceof String)) {
            throw new Error("Expected the field `client` to be a primitive type in the JSON string but got " + data['client']);
        }
        // ensure the json data is a string
        if (data['info'] && !(typeof data['info'] === 'string' || data['info'] instanceof String)) {
            throw new Error("Expected the field `info` to be a primitive type in the JSON string but got " + data['info']);
        }
        // ensure the json data is a string
        if (data['level'] && !(typeof data['level'] === 'string' || data['level'] instanceof String)) {
            throw new Error("Expected the field `level` to be a primitive type in the JSON string but got " + data['level']);
        }
        // ensure the json data is a string
        if (data['log_type'] && !(typeof data['log_type'] === 'string' || data['log_type'] instanceof String)) {
            throw new Error("Expected the field `log_type` to be a primitive type in the JSON string but got " + data['log_type']);
        }
        // ensure the json data is a string
        if (data['msg'] && !(typeof data['msg'] === 'string' || data['msg'] instanceof String)) {
            throw new Error("Expected the field `msg` to be a primitive type in the JSON string but got " + data['msg']);
        }
        // ensure the json data is a string
        if (data['node'] && !(typeof data['node'] === 'string' || data['node'] instanceof String)) {
            throw new Error("Expected the field `node` to be a primitive type in the JSON string but got " + data['node']);
        }
        // ensure the json data is a string
        if (data['nodeName'] && !(typeof data['nodeName'] === 'string' || data['nodeName'] instanceof String)) {
            throw new Error("Expected the field `nodeName` to be a primitive type in the JSON string but got " + data['nodeName']);
        }
        // ensure the json data is a string
        if (data['node_desc'] && !(typeof data['node_desc'] === 'string' || data['node_desc'] instanceof String)) {
            throw new Error("Expected the field `node_desc` to be a primitive type in the JSON string but got " + data['node_desc']);
        }
        // ensure the json data is a string
        if (data['restartSequence'] && !(typeof data['restartSequence'] === 'string' || data['restartSequence'] instanceof String)) {
            throw new Error("Expected the field `restartSequence` to be a primitive type in the JSON string but got " + data['restartSequence']);
        }
        // ensure the json data is a string
        if (data['rule'] && !(typeof data['rule'] === 'string' || data['rule'] instanceof String)) {
            throw new Error("Expected the field `rule` to be a primitive type in the JSON string but got " + data['rule']);
        }
        // ensure the json data is a string
        if (data['rule_log_entry'] && !(typeof data['rule_log_entry'] === 'string' || data['rule_log_entry'] instanceof String)) {
            throw new Error("Expected the field `rule_log_entry` to be a primitive type in the JSON string but got " + data['rule_log_entry']);
        }
        // ensure the json data is a string
        if (data['seq'] && !(typeof data['seq'] === 'string' || data['seq'] instanceof String)) {
            throw new Error("Expected the field `seq` to be a primitive type in the JSON string but got " + data['seq']);
        }
        // ensure the json data is a string
        if (data['step'] && !(typeof data['step'] === 'string' || data['step'] instanceof String)) {
            throw new Error("Expected the field `step` to be a primitive type in the JSON string but got " + data['step']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['templateUrl'] && !(typeof data['templateUrl'] === 'string' || data['templateUrl'] instanceof String)) {
            throw new Error("Expected the field `templateUrl` to be a primitive type in the JSON string but got " + data['templateUrl']);
        }
        // ensure the json data is a string
        if (data['tileId'] && !(typeof data['tileId'] === 'string' || data['tileId'] instanceof String)) {
            throw new Error("Expected the field `tileId` to be a primitive type in the JSON string but got " + data['tileId']);
        }
        // ensure the json data is a string
        if (data['tileName'] && !(typeof data['tileName'] === 'string' || data['tileName'] instanceof String)) {
            throw new Error("Expected the field `tileName` to be a primitive type in the JSON string but got " + data['tileName']);
        }
        // ensure the json data is a string
        if (data['timestamp'] && !(typeof data['timestamp'] === 'string' || data['timestamp'] instanceof String)) {
            throw new Error("Expected the field `timestamp` to be a primitive type in the JSON string but got " + data['timestamp']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.jo.model/LogsDataAgent} agent
 */
LogsData.prototype['agent'] = undefined;

/**
 * @member {String} client
 */
LogsData.prototype['client'] = undefined;

/**
 * @member {module:com.alterian.jo.model/LogsDataEcs} ecs
 */
LogsData.prototype['ecs'] = undefined;

/**
 * @member {module:com.alterian.jo.model/LogsDataEvent} event
 */
LogsData.prototype['event'] = undefined;

/**
 * @member {module:com.alterian.jo.model/LogsDataFields} fields
 */
LogsData.prototype['fields'] = undefined;

/**
 * @member {module:com.alterian.jo.model/LogsDataHost} host
 */
LogsData.prototype['host'] = undefined;

/**
 * @member {String} info
 */
LogsData.prototype['info'] = undefined;

/**
 * @member {module:com.alterian.jo.model/LogsDataInput} input
 */
LogsData.prototype['input'] = undefined;

/**
 * @member {String} level
 */
LogsData.prototype['level'] = undefined;

/**
 * @member {module:com.alterian.jo.model/LogsDataLog} log
 */
LogsData.prototype['log'] = undefined;

/**
 * @member {String} log_type
 */
LogsData.prototype['log_type'] = undefined;

/**
 * @member {module:com.alterian.jo.model/LogLevelEnum} loglevel
 */
LogsData.prototype['loglevel'] = undefined;

/**
 * @member {String} msg
 */
LogsData.prototype['msg'] = undefined;

/**
 * @member {String} node
 */
LogsData.prototype['node'] = undefined;

/**
 * @member {String} nodeName
 */
LogsData.prototype['nodeName'] = undefined;

/**
 * @member {String} node_desc
 */
LogsData.prototype['node_desc'] = undefined;

/**
 * @member {String} restartSequence
 */
LogsData.prototype['restartSequence'] = undefined;

/**
 * @member {String} rule
 */
LogsData.prototype['rule'] = undefined;

/**
 * @member {String} rule_log_entry
 */
LogsData.prototype['rule_log_entry'] = undefined;

/**
 * @member {String} seq
 */
LogsData.prototype['seq'] = undefined;

/**
 * @member {String} step
 */
LogsData.prototype['step'] = undefined;

/**
 * @member {Array.<String>} tags
 */
LogsData.prototype['tags'] = undefined;

/**
 * @member {String} target
 */
LogsData.prototype['target'] = undefined;

/**
 * @member {String} templateUrl
 */
LogsData.prototype['templateUrl'] = undefined;

/**
 * @member {String} tileId
 */
LogsData.prototype['tileId'] = undefined;

/**
 * @member {String} tileName
 */
LogsData.prototype['tileName'] = undefined;

/**
 * @member {String} timestamp
 */
LogsData.prototype['timestamp'] = undefined;

/**
 * @member {String} version
 */
LogsData.prototype['version'] = undefined;






export default LogsData;

