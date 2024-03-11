# JourneyOrchestrationApi.LogsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logsTypeTargetClientGet**](LogsApi.md#logsTypeTargetClientGet) | **GET** /logs/{type}/{target}/{client} | Search across logs for this client and target
[**logsTypeTargetClientRulenameGet**](LogsApi.md#logsTypeTargetClientRulenameGet) | **GET** /logs/{type}/{target}/{client}/{rulename} | Get logs that have been recorded for this rule



## logsTypeTargetClientGet

> LogsApiResponse logsTypeTargetClientGet(type, target, client, searchPhrase, opts)

Search across logs for this client and target

Provide a search string to search for

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.LogsApi();
let type = new JourneyOrchestrationApi.LogType(); // LogType | What kind of logging do you want to see?
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let searchPhrase = "searchPhrase_example"; // String | The phrase to search for in the logs
let opts = {
  'sequenceNumber': "sequenceNumber_example", // String | Sequence Number to identify rule invoke logs
  'templateUrl': "templateUrl_example", // String | Template url, if you want to filter your request by template url
  'limit': 56, // Number | The maximum number of items to return.
  'source': new JourneyOrchestrationApi.LogSource(), // LogSource | Pick the source of the logs. Currently only elastic search is supported
  'csv': true, // Boolean | if true then returns csv file
  'startdate': new Date("2013-10-20T19:20:30+01:00"), // Date | If you want to filter your request by date range, this is the starting date for the time period,   please provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
  'enddate': new Date("2013-10-20T19:20:30+01:00") // Date | If you want to filter your request by date range, this is the ending date for the time period, please   provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
};
apiInstance.logsTypeTargetClientGet(type, target, client, searchPhrase, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**LogType**](.md)| What kind of logging do you want to see? | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **client** | **String**| Client name | 
 **searchPhrase** | **String**| The phrase to search for in the logs | 
 **sequenceNumber** | **String**| Sequence Number to identify rule invoke logs | [optional] 
 **templateUrl** | **String**| Template url, if you want to filter your request by template url | [optional] 
 **limit** | **Number**| The maximum number of items to return. | [optional] 
 **source** | [**LogSource**](.md)| Pick the source of the logs. Currently only elastic search is supported | [optional] 
 **csv** | **Boolean**| if true then returns csv file | [optional] 
 **startdate** | **Date**| If you want to filter your request by date range, this is the starting date for the time period,   please provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC. | [optional] 
 **enddate** | **Date**| If you want to filter your request by date range, this is the ending date for the time period, please   provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC. | [optional] 

### Return type

[**LogsApiResponse**](LogsApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## logsTypeTargetClientRulenameGet

> LogsApiResponse logsTypeTargetClientRulenameGet(type, target, client, rulename, opts)

Get logs that have been recorded for this rule

If you haven&#39;t invoked the rule since you started logging then the writetolog list will always be empty.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.LogsApi();
let type = new JourneyOrchestrationApi.LogTypeOrTimeseries(); // LogTypeOrTimeseries | What kind of logging do you want to see?
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'searchPhrase': "searchPhrase_example", // String | The phrase to search for in the logs
  'searchQuery': "searchQuery_example", // String | Lucene query string to apply
  'sequenceNumber': "sequenceNumber_example", // String | Sequence Number to identify rule invoke logs
  'tileName': "tileName_example", // String | The name of the tile, if you want to filter your request by tile name
  'tileId': "tileId_example", // String | The id of the tile, if you want to filter your request by tile id
  'templateUrl': "templateUrl_example", // String | Template url, if you want to filter your request by template url
  'limit': 56, // Number | The maximum number of items to return.
  'source': new JourneyOrchestrationApi.LogSource(), // LogSource | Pick the source of the logs. Currently only elastic search is supported
  'csv': true, // Boolean | if true then returns csv file
  'startdate': new Date("2013-10-20T19:20:30+01:00"), // Date | If you want to filter your request by date range, this is the starting date for the time period,   please provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
  'enddate': new Date("2013-10-20T19:20:30+01:00") // Date | If you want to filter your request by date range, this is the ending date for the time period, please   provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC.
};
apiInstance.logsTypeTargetClientRulenameGet(type, target, client, rulename, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**LogTypeOrTimeseries**](.md)| What kind of logging do you want to see? | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **client** | **String**| Client name | 
 **rulename** | **String**| Rule name | 
 **searchPhrase** | **String**| The phrase to search for in the logs | [optional] 
 **searchQuery** | **String**| Lucene query string to apply | [optional] 
 **sequenceNumber** | **String**| Sequence Number to identify rule invoke logs | [optional] 
 **tileName** | **String**| The name of the tile, if you want to filter your request by tile name | [optional] 
 **tileId** | **String**| The id of the tile, if you want to filter your request by tile id | [optional] 
 **templateUrl** | **String**| Template url, if you want to filter your request by template url | [optional] 
 **limit** | **Number**| The maximum number of items to return. | [optional] 
 **source** | [**LogSource**](.md)| Pick the source of the logs. Currently only elastic search is supported | [optional] 
 **csv** | **Boolean**| if true then returns csv file | [optional] 
 **startdate** | **Date**| If you want to filter your request by date range, this is the starting date for the time period,   please provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC. | [optional] 
 **enddate** | **Date**| If you want to filter your request by date range, this is the ending date for the time period, please   provide in ISO-8601 (YYYY-MM-DDThh:mm:ssZ)  All times are UTC. | [optional] 

### Return type

[**LogsApiResponse**](LogsApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv

