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
* Enum class CacheFieldType.
* @enum {}
* @readonly
*/
export default class CacheFieldType {
    
        /**
         * value: "ascii"
         * @const
         */
        "ascii" = "ascii";

    
        /**
         * value: "bigint"
         * @const
         */
        "bigint" = "bigint";

    
        /**
         * value: "blob"
         * @const
         */
        "blob" = "blob";

    
        /**
         * value: "boolean"
         * @const
         */
        "boolean" = "boolean";

    
        /**
         * value: "counter"
         * @const
         */
        "counter" = "counter";

    
        /**
         * value: "date"
         * @const
         */
        "date" = "date";

    
        /**
         * value: "double"
         * @const
         */
        "double" = "double";

    
        /**
         * value: "duration"
         * @const
         */
        "duration" = "duration";

    
        /**
         * value: "float"
         * @const
         */
        "float" = "float";

    
        /**
         * value: "inet"
         * @const
         */
        "inet" = "inet";

    
        /**
         * value: "int"
         * @const
         */
        "int" = "int";

    
        /**
         * value: "smallint"
         * @const
         */
        "smallint" = "smallint";

    
        /**
         * value: "test"
         * @const
         */
        "test" = "test";

    
        /**
         * value: "time"
         * @const
         */
        "time" = "time";

    
        /**
         * value: "timestamp"
         * @const
         */
        "timestamp" = "timestamp";

    
        /**
         * value: "timeuuid"
         * @const
         */
        "timeuuid" = "timeuuid";

    
        /**
         * value: "tinyint"
         * @const
         */
        "tinyint" = "tinyint";

    
        /**
         * value: "uuid"
         * @const
         */
        "uuid" = "uuid";

    
        /**
         * value: "varchar"
         * @const
         */
        "varchar" = "varchar";

    
        /**
         * value: "varint"
         * @const
         */
        "varint" = "varint";

    
        /**
         * value: "long"
         * @const
         */
        "long" = "long";

    
        /**
         * value: "text"
         * @const
         */
        "text" = "text";

    

    /**
    * Returns a <code>CacheFieldType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.jo.model/CacheFieldType} The enum <code>CacheFieldType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

