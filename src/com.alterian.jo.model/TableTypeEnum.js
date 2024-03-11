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
* Enum class TableTypeEnum.
* @enum {}
* @readonly
*/
export default class TableTypeEnum {
    
        /**
         * value: "normal"
         * @const
         */
        "normal" = "normal";

    
        /**
         * value: "fieldvalue"
         * @const
         */
        "fieldvalue" = "fieldvalue";

    
        /**
         * value: "futureevent"
         * @const
         */
        "futureevent" = "futureevent";

    

    /**
    * Returns a <code>TableTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.jo.model/TableTypeEnum} The enum <code>TableTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
