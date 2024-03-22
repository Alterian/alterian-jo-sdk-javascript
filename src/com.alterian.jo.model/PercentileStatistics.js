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

/**
 * The PercentileStatistics model module.
 * @module com.alterian.jo.model/PercentileStatistics
 * @version 4.30.49
 */
class PercentileStatistics {
    /**
     * Constructs a new <code>PercentileStatistics</code>.
     * @alias module:com.alterian.jo.model/PercentileStatistics
     */
    constructor() { 
        
        PercentileStatistics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PercentileStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/PercentileStatistics} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/PercentileStatistics} The populated <code>PercentileStatistics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PercentileStatistics();

            if (data.hasOwnProperty('p10')) {
                obj['p10'] = ApiClient.convertToType(data['p10'], 'String');
            }
            if (data.hasOwnProperty('p20')) {
                obj['p20'] = ApiClient.convertToType(data['p20'], 'String');
            }
            if (data.hasOwnProperty('p30')) {
                obj['p30'] = ApiClient.convertToType(data['p30'], 'String');
            }
            if (data.hasOwnProperty('p40')) {
                obj['p40'] = ApiClient.convertToType(data['p40'], 'String');
            }
            if (data.hasOwnProperty('p50')) {
                obj['p50'] = ApiClient.convertToType(data['p50'], 'String');
            }
            if (data.hasOwnProperty('p60')) {
                obj['p60'] = ApiClient.convertToType(data['p60'], 'String');
            }
            if (data.hasOwnProperty('p70')) {
                obj['p70'] = ApiClient.convertToType(data['p70'], 'String');
            }
            if (data.hasOwnProperty('p80')) {
                obj['p80'] = ApiClient.convertToType(data['p80'], 'String');
            }
            if (data.hasOwnProperty('p90')) {
                obj['p90'] = ApiClient.convertToType(data['p90'], 'String');
            }
            if (data.hasOwnProperty('p99')) {
                obj['p99'] = ApiClient.convertToType(data['p99'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'String');
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PercentileStatistics</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PercentileStatistics</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['p10'] && !(typeof data['p10'] === 'string' || data['p10'] instanceof String)) {
            throw new Error("Expected the field `p10` to be a primitive type in the JSON string but got " + data['p10']);
        }
        // ensure the json data is a string
        if (data['p20'] && !(typeof data['p20'] === 'string' || data['p20'] instanceof String)) {
            throw new Error("Expected the field `p20` to be a primitive type in the JSON string but got " + data['p20']);
        }
        // ensure the json data is a string
        if (data['p30'] && !(typeof data['p30'] === 'string' || data['p30'] instanceof String)) {
            throw new Error("Expected the field `p30` to be a primitive type in the JSON string but got " + data['p30']);
        }
        // ensure the json data is a string
        if (data['p40'] && !(typeof data['p40'] === 'string' || data['p40'] instanceof String)) {
            throw new Error("Expected the field `p40` to be a primitive type in the JSON string but got " + data['p40']);
        }
        // ensure the json data is a string
        if (data['p50'] && !(typeof data['p50'] === 'string' || data['p50'] instanceof String)) {
            throw new Error("Expected the field `p50` to be a primitive type in the JSON string but got " + data['p50']);
        }
        // ensure the json data is a string
        if (data['p60'] && !(typeof data['p60'] === 'string' || data['p60'] instanceof String)) {
            throw new Error("Expected the field `p60` to be a primitive type in the JSON string but got " + data['p60']);
        }
        // ensure the json data is a string
        if (data['p70'] && !(typeof data['p70'] === 'string' || data['p70'] instanceof String)) {
            throw new Error("Expected the field `p70` to be a primitive type in the JSON string but got " + data['p70']);
        }
        // ensure the json data is a string
        if (data['p80'] && !(typeof data['p80'] === 'string' || data['p80'] instanceof String)) {
            throw new Error("Expected the field `p80` to be a primitive type in the JSON string but got " + data['p80']);
        }
        // ensure the json data is a string
        if (data['p90'] && !(typeof data['p90'] === 'string' || data['p90'] instanceof String)) {
            throw new Error("Expected the field `p90` to be a primitive type in the JSON string but got " + data['p90']);
        }
        // ensure the json data is a string
        if (data['p99'] && !(typeof data['p99'] === 'string' || data['p99'] instanceof String)) {
            throw new Error("Expected the field `p99` to be a primitive type in the JSON string but got " + data['p99']);
        }
        // ensure the json data is a string
        if (data['max'] && !(typeof data['max'] === 'string' || data['max'] instanceof String)) {
            throw new Error("Expected the field `max` to be a primitive type in the JSON string but got " + data['max']);
        }
        // ensure the json data is a string
        if (data['min'] && !(typeof data['min'] === 'string' || data['min'] instanceof String)) {
            throw new Error("Expected the field `min` to be a primitive type in the JSON string but got " + data['min']);
        }

        return true;
    }


}



/**
 * @member {String} p10
 */
PercentileStatistics.prototype['p10'] = undefined;

/**
 * @member {String} p20
 */
PercentileStatistics.prototype['p20'] = undefined;

/**
 * @member {String} p30
 */
PercentileStatistics.prototype['p30'] = undefined;

/**
 * @member {String} p40
 */
PercentileStatistics.prototype['p40'] = undefined;

/**
 * @member {String} p50
 */
PercentileStatistics.prototype['p50'] = undefined;

/**
 * @member {String} p60
 */
PercentileStatistics.prototype['p60'] = undefined;

/**
 * @member {String} p70
 */
PercentileStatistics.prototype['p70'] = undefined;

/**
 * @member {String} p80
 */
PercentileStatistics.prototype['p80'] = undefined;

/**
 * @member {String} p90
 */
PercentileStatistics.prototype['p90'] = undefined;

/**
 * @member {String} p99
 */
PercentileStatistics.prototype['p99'] = undefined;

/**
 * @member {Number} count
 */
PercentileStatistics.prototype['count'] = undefined;

/**
 * @member {String} max
 */
PercentileStatistics.prototype['max'] = undefined;

/**
 * @member {String} min
 */
PercentileStatistics.prototype['min'] = undefined;






export default PercentileStatistics;
