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

/**
 * The Icon model module.
 * @module com.alterian.jo.model/Icon
 * @version 4.29.139
 */
class Icon {
    /**
     * Constructs a new <code>Icon</code>.
     * @alias module:com.alterian.jo.model/Icon
     * @param background {String} 
     * @param foreground {String} 
     */
    constructor(background, foreground) { 
        
        Icon.initialize(this, background, foreground);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, background, foreground) { 
        obj['background'] = background;
        obj['foreground'] = foreground;
    }

    /**
     * Constructs a <code>Icon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.jo.model/Icon} obj Optional instance to populate.
     * @return {module:com.alterian.jo.model/Icon} The populated <code>Icon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Icon();

            if (data.hasOwnProperty('background')) {
                obj['background'] = ApiClient.convertToType(data['background'], 'String');
            }
            if (data.hasOwnProperty('svgIcon')) {
                obj['svgIcon'] = ApiClient.convertToType(data['svgIcon'], 'String');
            }
            if (data.hasOwnProperty('foreground')) {
                obj['foreground'] = ApiClient.convertToType(data['foreground'], 'String');
            }
            if (data.hasOwnProperty('matIcon')) {
                obj['matIcon'] = ApiClient.convertToType(data['matIcon'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Icon</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Icon</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Icon.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['background'] && !(typeof data['background'] === 'string' || data['background'] instanceof String)) {
            throw new Error("Expected the field `background` to be a primitive type in the JSON string but got " + data['background']);
        }
        // ensure the json data is a string
        if (data['svgIcon'] && !(typeof data['svgIcon'] === 'string' || data['svgIcon'] instanceof String)) {
            throw new Error("Expected the field `svgIcon` to be a primitive type in the JSON string but got " + data['svgIcon']);
        }
        // ensure the json data is a string
        if (data['foreground'] && !(typeof data['foreground'] === 'string' || data['foreground'] instanceof String)) {
            throw new Error("Expected the field `foreground` to be a primitive type in the JSON string but got " + data['foreground']);
        }
        // ensure the json data is a string
        if (data['matIcon'] && !(typeof data['matIcon'] === 'string' || data['matIcon'] instanceof String)) {
            throw new Error("Expected the field `matIcon` to be a primitive type in the JSON string but got " + data['matIcon']);
        }

        return true;
    }


}

Icon.RequiredProperties = ["background", "foreground"];

/**
 * @member {String} background
 */
Icon.prototype['background'] = undefined;

/**
 * @member {String} svgIcon
 */
Icon.prototype['svgIcon'] = undefined;

/**
 * @member {String} foreground
 */
Icon.prototype['foreground'] = undefined;

/**
 * @member {String} matIcon
 */
Icon.prototype['matIcon'] = undefined;






export default Icon;

