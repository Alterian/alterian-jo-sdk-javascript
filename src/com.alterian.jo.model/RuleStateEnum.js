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
* Enum class RuleStateEnum.
* @enum {}
* @readonly
*/
export default class RuleStateEnum {
    
        /**
         * value: "Running"
         * @const
         */
        "Running" = "Running";

    
        /**
         * value: "Finished"
         * @const
         */
        "Finished" = "Finished";

    
        /**
         * value: "Stopped"
         * @const
         */
        "Stopped" = "Stopped";

    
        /**
         * value: "Waiting"
         * @const
         */
        "Waiting" = "Waiting";

    
        /**
         * value: "Initializing"
         * @const
         */
        "Initializing" = "Initializing";

    
        /**
         * value: "Paused"
         * @const
         */
        "Paused" = "Paused";

    
        /**
         * value: "Preparing executing"
         * @const
         */
        "Preparing executing" = "Preparing executing";

    

    /**
    * Returns a <code>RuleStateEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.jo.model/RuleStateEnum} The enum <code>RuleStateEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

