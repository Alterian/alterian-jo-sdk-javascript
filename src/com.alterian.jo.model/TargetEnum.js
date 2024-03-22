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
* Enum class TargetEnum.
* @enum {}
* @readonly
*/
export default class TargetEnum {
    
        /**
         * value: "dev"
         * @const
         */
        "dev" = "dev";

    
        /**
         * value: "test"
         * @const
         */
        "test" = "test";

    
        /**
         * value: "prod"
         * @const
         */
        "prod" = "prod";

    

    /**
    * Returns a <code>TargetEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.jo.model/TargetEnum} The enum <code>TargetEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

