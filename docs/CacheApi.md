# JourneyOrchestrationApi.CacheApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cacheClientGet**](CacheApi.md#cacheClientGet) | **GET** /cache/{client} | Get information about cache tables, filtered by client.
[**cacheClientTargetExecutePost**](CacheApi.md#cacheClientTargetExecutePost) | **POST** /cache/{client}/{target}/execute | Execute a limited set of cql commands against the cache
[**cacheClientTargetGet**](CacheApi.md#cacheClientTargetGet) | **GET** /cache/{client}/{target} | Get information about cache tables, filtered by client and target.
[**cacheClientTargetTableColumnDelete**](CacheApi.md#cacheClientTargetTableColumnDelete) | **DELETE** /cache/{client}/{target}/{table}/{column} | Delete column from a cache table.
[**cacheClientTargetTableColumnsDelete**](CacheApi.md#cacheClientTargetTableColumnsDelete) | **DELETE** /cache/{client}/{target}/{table}/columns | Delete unused cache table and columns
[**cacheClientTargetTableDelete**](CacheApi.md#cacheClientTargetTableDelete) | **DELETE** /cache/{client}/{target}/{table} | Delete data from a cache table.
[**cacheClientTargetTableGet**](CacheApi.md#cacheClientTargetTableGet) | **GET** /cache/{client}/{target}/{table} | Get information about a specific cache table.
[**cacheClientTargetTablePost**](CacheApi.md#cacheClientTargetTablePost) | **POST** /cache/{client}/{target}/table | Alter a cache table



## cacheClientGet

> CacheDetailsResponse cacheClientGet(client)

Get information about cache tables, filtered by client.

Get information about cache tables, filtered by client.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.CacheApi();
let client = "client_example"; // String | Client name
apiInstance.cacheClientGet(client).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 

### Return type

[**CacheDetailsResponse**](CacheDetailsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## cacheClientTargetExecutePost

> CacheExecuteResponse cacheClientTargetExecutePost(client, target, opts)

Execute a limited set of cql commands against the cache

insert, select, update or delete a single row of data from a single table

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.CacheApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let opts = {
  'cacheCQL': new JourneyOrchestrationApi.CacheCQL() // CacheCQL | 
};
apiInstance.cacheClientTargetExecutePost(client, target, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **cacheCQL** | [**CacheCQL**](CacheCQL.md)|  | [optional] 

### Return type

[**CacheExecuteResponse**](CacheExecuteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/csv


## cacheClientTargetGet

> CacheDetailsResponse cacheClientTargetGet(client, target, opts)

Get information about cache tables, filtered by client and target.

Get information about cache tables, filtered by client and target.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.CacheApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let opts = {
  'tabletype': new JourneyOrchestrationApi.TableTypeEnum() // TableTypeEnum | If you only want a certain type of table, provide it here
};
apiInstance.cacheClientTargetGet(client, target, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **tabletype** | [**TableTypeEnum**](.md)| If you only want a certain type of table, provide it here | [optional] 

### Return type

[**CacheDetailsResponse**](CacheDetailsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## cacheClientTargetTableColumnDelete

> CacheApiResponse cacheClientTargetTableColumnDelete(client, target, table, column, opts)

Delete column from a cache table.

Removes a column from a cache table.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.CacheApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let table = "table_example"; // String | Table name
let column = "column_example"; // String | Column name
let opts = {
  'key': "key_example", // String | Pass DESTROY_COLUMN if you would like to remove a column.  Note, there is no recovery for these   actions and removing a column which is used will cause your rules to cease functioning.
  'keys': ["null"] // [String] | Values for clustering keys. If the table has a composite key, provide the values in order.
};
apiInstance.cacheClientTargetTableColumnDelete(client, target, table, column, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **table** | **String**| Table name | 
 **column** | **String**| Column name | 
 **key** | **String**| Pass DESTROY_COLUMN if you would like to remove a column.  Note, there is no recovery for these   actions and removing a column which is used will cause your rules to cease functioning. | [optional] 
 **keys** | [**[String]**](String.md)| Values for clustering keys. If the table has a composite key, provide the values in order. | [optional] 

### Return type

[**CacheApiResponse**](CacheApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cacheClientTargetTableColumnsDelete

> CacheApiDeleteResponse cacheClientTargetTableColumnsDelete(client, target, table, preview)

Delete unused cache table and columns

Removes the columns and tables that are no longer used by any of the rules

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.CacheApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let table = "table_example"; // String | Table name
let preview = true; // Boolean | By default API works in preview mode and returns a list of cache columns and tables that would be   dropped. Only when preview set to false the columns are actually dropped
apiInstance.cacheClientTargetTableColumnsDelete(client, target, table, preview).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **table** | **String**| Table name | 
 **preview** | **Boolean**| By default API works in preview mode and returns a list of cache columns and tables that would be   dropped. Only when preview set to false the columns are actually dropped | 

### Return type

[**CacheApiDeleteResponse**](CacheApiDeleteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cacheClientTargetTableDelete

> CacheApiResponse cacheClientTargetTableDelete(client, target, table, opts)

Delete data from a cache table.

Removes data from a cache table.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.CacheApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let table = "table_example"; // String | Table name
let opts = {
  'key': "key_example", // String | Key to delete from cache tables; provide DELETE_ALL to clear the table and DESTROY_TABLE if you would   like to remove the table.  Note, there is no recovery for these actions and removing a table which is used will cause   your rules to cease functioning.
  'keys': ["null"] // [String] | Values for clustering keys. If the table has a composite key, provide the values in order.
};
apiInstance.cacheClientTargetTableDelete(client, target, table, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **table** | **String**| Table name | 
 **key** | **String**| Key to delete from cache tables; provide DELETE_ALL to clear the table and DESTROY_TABLE if you would   like to remove the table.  Note, there is no recovery for these actions and removing a table which is used will cause   your rules to cease functioning. | [optional] 
 **keys** | [**[String]**](String.md)| Values for clustering keys. If the table has a composite key, provide the values in order. | [optional] 

### Return type

[**CacheApiResponse**](CacheApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cacheClientTargetTableGet

> CacheDetailsResponse cacheClientTargetTableGet(client, target, table, opts)

Get information about a specific cache table.

Get information about a specific cache table.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.CacheApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let table = "table_example"; // String | Table name
let opts = {
  'key': "key_example", // String | If you want a row of data to be returned, provide the partition key
  'keys': ["null"], // [String] | Values for clustering keys. If the table has a composite key, provide the values in order.
  'sample': 56, // Number | return a sample of n rows from the table
  'pivot': true, // Boolean | Would you like the data pivoted? (Only for CSV report)
  'fieldvalue': "fieldvalue_example", // String | If this is a fieldvalue type table, you can ask for a list of keys or values.  If you specify   fieldvalues, you must also provide a key
  'limit': 56 // Number | If you are asking for a list of values from a fieldvalue table, you can request to return only the   most recent, limited to this number.  If not provided, a system limit will be used.
};
apiInstance.cacheClientTargetTableGet(client, target, table, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **table** | **String**| Table name | 
 **key** | **String**| If you want a row of data to be returned, provide the partition key | [optional] 
 **keys** | [**[String]**](String.md)| Values for clustering keys. If the table has a composite key, provide the values in order. | [optional] 
 **sample** | **Number**| return a sample of n rows from the table | [optional] 
 **pivot** | **Boolean**| Would you like the data pivoted? (Only for CSV report) | [optional] 
 **fieldvalue** | **String**| If this is a fieldvalue type table, you can ask for a list of keys or values.  If you specify   fieldvalues, you must also provide a key | [optional] 
 **limit** | **Number**| If you are asking for a list of values from a fieldvalue table, you can request to return only the   most recent, limited to this number.  If not provided, a system limit will be used. | [optional] 

### Return type

[**CacheDetailsResponse**](CacheDetailsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## cacheClientTargetTablePost

> CacheChangesResponse cacheClientTargetTablePost(client, target, opts)

Alter a cache table

Ensure that the cache table includes at least the set of columns requested

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.CacheApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let opts = {
  'cacheTableDefinition': new JourneyOrchestrationApi.CacheTableDefinition() // CacheTableDefinition | 
};
apiInstance.cacheClientTargetTablePost(client, target, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **cacheTableDefinition** | [**CacheTableDefinition**](CacheTableDefinition.md)|  | [optional] 

### Return type

[**CacheChangesResponse**](CacheChangesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/csv

