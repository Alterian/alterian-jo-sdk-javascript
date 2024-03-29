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
* Enum class CacheConsistencyLevel.
* @enum {}
* @readonly
*/
export default class CacheConsistencyLevel {
    
        /**
         * value: "ANY"
         * @const
         */
        "ANY" = "ANY";

    
        /**
         * value: "ONE"
         * @const
         */
        "ONE" = "ONE";

    
        /**
         * value: "TWO"
         * @const
         */
        "TWO" = "TWO";

    
        /**
         * value: "THREE"
         * @const
         */
        "THREE" = "THREE";

    
        /**
         * value: "QUORUM"
         * @const
         */
        "QUORUM" = "QUORUM";

    
        /**
         * value: "ALL"
         * @const
         */
        "ALL" = "ALL";

    
        /**
         * value: "LOCAL_ONE"
         * @const
         */
        "LOCAL_ONE" = "LOCAL_ONE";

    
        /**
         * value: "LOCAL_QUORUM"
         * @const
         */
        "LOCAL_QUORUM" = "LOCAL_QUORUM";

    
        /**
         * value: "EACH_QUORUM"
         * @const
         */
        "EACH_QUORUM" = "EACH_QUORUM";

    
        /**
         * value: "SERIAL"
         * @const
         */
        "SERIAL" = "SERIAL";

    
        /**
         * value: "LOCAL_SERIA"
         * @const
         */
        "LOCAL_SERIA" = "LOCAL_SERIA";

    

    /**
    * Returns a <code>CacheConsistencyLevel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.jo.model/CacheConsistencyLevel} The enum <code>CacheConsistencyLevel</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

