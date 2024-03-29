# JourneyOrchestrationApi.InfoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**infoAuditlogClientGet**](InfoApi.md#infoAuditlogClientGet) | **GET** /info/auditlog/{client} | Get audit log report
[**infoCachedataClientGet**](InfoApi.md#infoCachedataClientGet) | **GET** /info/cachedata/{client} | Get cache data report
[**infoCacheunusedcolumnsClientGet**](InfoApi.md#infoCacheunusedcolumnsClientGet) | **GET** /info/cacheunusedcolumns/{client} | Get a report on all the cache columns that are no longer used by any rules
[**infoClientaccessreportClientGet**](InfoApi.md#infoClientaccessreportClientGet) | **GET** /info/clientaccessreport/{client} | Report on the users able to access given client
[**infoConsistencyreportGet**](InfoApi.md#infoConsistencyreportGet) | **GET** /info/consistencyreport | Get the consistency report
[**infoConversationusagereportClientTimeseriesGet**](InfoApi.md#infoConversationusagereportClientTimeseriesGet) | **GET** /info/conversationusagereport/{client}/{timeseries} | Report on the conversation usage by a specific client
[**infoFieldusageTargetClientRulenameGet**](InfoApi.md#infoFieldusageTargetClientRulenameGet) | **GET** /info/fieldusage/{target}/{client}/{rulename} | Report on how fields are created, read and written within a rule
[**infoFlowTargetClientRulenameGet**](InfoApi.md#infoFlowTargetClientRulenameGet) | **GET** /info/flow/{target}/{client}/{rulename} | Get the JSON representation of the steps within a rule, suitable for displaying as a flowchart
[**infoGlobalparamreportClientGet**](InfoApi.md#infoGlobalparamreportClientGet) | **GET** /info/globalparamreport/{client} | Get report on global parameters
[**infoInternalrulecallreportClientTargetRulenameGet**](InfoApi.md#infoInternalrulecallreportClientTargetRulenameGet) | **GET** /info/internalrulecallreport/{client}/{target}/{rulename} | For a given rule, find all the rules that call this rule internally
[**infoLogged404sClientGet**](InfoApi.md#infoLogged404sClientGet) | **GET** /info/logged404s/{client} | Get report on logged 404 errors
[**infoResourceexistsreportPost**](InfoApi.md#infoResourceexistsreportPost) | **POST** /info/resourceexistsreport | Pass in an array of any size containing resource URL&#39;s (rules, templates, etc) to see if they exist and can   be accessed by this user.
[**infoRulecomplexityreportClientGet**](InfoApi.md#infoRulecomplexityreportClientGet) | **GET** /info/rulecomplexityreport/{client} | Report on the complexity of the various rules for a client
[**infoSnoozeGet**](InfoApi.md#infoSnoozeGet) | **GET** /info/snooze | Report on whether rules can be snoozed
[**infoSteptypestatisticsDelete**](InfoApi.md#infoSteptypestatisticsDelete) | **DELETE** /info/steptypestatistics | Clear the execution statistics histogram for all step types
[**infoSteptypestatisticsGet**](InfoApi.md#infoSteptypestatisticsGet) | **GET** /info/steptypestatistics | Find out the execution statistics histogram for each step type
[**infoSteptypeusagereportClientGet**](InfoApi.md#infoSteptypeusagereportClientGet) | **GET** /info/steptypeusagereport/{client} | Report on the steps being used by this client
[**infoStepusagereportClientStepnameGet**](InfoApi.md#infoStepusagereportClientStepnameGet) | **GET** /info/stepusagereport/{client}/{stepname} | Find out which rules are using a specific step type
[**infoTemplatecolumnreportClientGet**](InfoApi.md#infoTemplatecolumnreportClientGet) | **GET** /info/templatecolumnreport/{client} | Report on the names of the columns in the cache used by templates
[**infoTemplateinputreportClientGet**](InfoApi.md#infoTemplateinputreportClientGet) | **GET** /info/templateinputreport/{client} | List all templates that expect given input fields
[**infoTemplateusagereportClientTemplatenameGet**](InfoApi.md#infoTemplateusagereportClientTemplatenameGet) | **GET** /info/templateusagereport/{client}/{templatename} | Find a list of rules which use a specific template
[**infoTemplatevalidityreportClientGet**](InfoApi.md#infoTemplatevalidityreportClientGet) | **GET** /info/templatevalidityreport/{client} | Reports on validity of uploaded templates
[**infoTokenusereportGet**](InfoApi.md#infoTokenusereportGet) | **GET** /info/tokenusereport | Reports on token access and last used date.
[**infoWorkerthreadusageGet**](InfoApi.md#infoWorkerthreadusageGet) | **GET** /info/workerthreadusage | Worker thread usage



## infoAuditlogClientGet

> ApiResponse infoAuditlogClientGet(client, opts)

Get audit log report

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let client = "client_example"; // String | Client name
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'target': new JourneyOrchestrationApi.TargetEnum(), // TargetEnum | Filters on target
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoAuditlogClientGet(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **target** | [**TargetEnum**](.md)| Filters on target | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoCachedataClientGet

> ApiResponse infoCachedataClientGet(opts)

Get cache data report

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'client': "client_example", // String | Client name
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'target': new JourneyOrchestrationApi.TargetEnum(), // TargetEnum | Filters on target
  'rulename': "rulename_example", // String | Filter for specific rule name
  'cachedirection': "cachedirection_example", // String | Get only cache read or writes
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoCachedataClientGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | [optional] 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **target** | [**TargetEnum**](.md)| Filters on target | [optional] 
 **rulename** | **String**| Filter for specific rule name | [optional] 
 **cachedirection** | **String**| Get only cache read or writes | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoCacheunusedcolumnsClientGet

> ApiResponse infoCacheunusedcolumnsClientGet(client, opts)

Get a report on all the cache columns that are no longer used by any rules

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let client = "client_example"; // String | Client name
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'target': new JourneyOrchestrationApi.TargetEnum(), // TargetEnum | Filters on target
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoCacheunusedcolumnsClientGet(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **target** | [**TargetEnum**](.md)| Filters on target | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoClientaccessreportClientGet

> ApiResponse infoClientaccessreportClientGet(opts)

Report on the users able to access given client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'client': "client_example", // String | Which client would you like the access information for? You must be able to access this client to   report on it.
  'includeClientAll': true, // Boolean | Should users with access to all clients be included
  'includePermissionAll': true, // Boolean | Should users with permission ALL be included
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoClientaccessreportClientGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Which client would you like the access information for? You must be able to access this client to   report on it. | [optional] 
 **includeClientAll** | **Boolean**| Should users with access to all clients be included | [optional] [default to true]
 **includePermissionAll** | **Boolean**| Should users with permission ALL be included | [optional] [default to true]
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoConsistencyreportGet

> ApiResponse infoConsistencyreportGet(opts)

Get the consistency report

Compares this nodes resources with other nodes to see if node has latest information

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoConsistencyreportGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoConversationusagereportClientTimeseriesGet

> ApiResponse infoConversationusagereportClientTimeseriesGet(timeseries, opts)

Report on the conversation usage by a specific client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let timeseries = "'day'"; // String | Report on either the last 60 minutes, the last 48 hours or the last 60 days
let opts = {
  'client': "client_example", // String | Which client would you like the conversation statistics for? You must be able to access this client   to report on it.
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoConversationusagereportClientTimeseriesGet(timeseries, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeseries** | **String**| Report on either the last 60 minutes, the last 48 hours or the last 60 days | [default to &#39;day&#39;]
 **client** | **String**| Which client would you like the conversation statistics for? You must be able to access this client   to report on it. | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoFieldusageTargetClientRulenameGet

> ApiResponse infoFieldusageTargetClientRulenameGet(target, client, rulename, opts)

Report on how fields are created, read and written within a rule

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'format': new JourneyOrchestrationApi.CsvEnum(), // CsvEnum | If you want CSV, enter csv here
  'mergefields': false // Boolean | Should fields that have been renamed be merged together?
};
apiInstance.infoFieldusageTargetClientRulenameGet(target, client, rulename, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **client** | **String**| Client name | 
 **rulename** | **String**| Rule name | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 
 **mergefields** | **Boolean**| Should fields that have been renamed be merged together? | [optional] [default to false]

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoFlowTargetClientRulenameGet

> ApiResponse infoFlowTargetClientRulenameGet(target, client, rulename)

Get the JSON representation of the steps within a rule, suitable for displaying as a flowchart

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.infoFlowTargetClientRulenameGet(target, client, rulename).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **client** | **String**| Client name | 
 **rulename** | **String**| Rule name | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoGlobalparamreportClientGet

> ApiResponse infoGlobalparamreportClientGet(opts)

Get report on global parameters

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'client': "client_example", // String | Client name
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'parameterName': "parameterName_example", // String | Get the report for a specific parameter
  'parameterValue': "parameterValue_example", // String | Get the report for a specific parameter's value
  'onlyGlobalParameters': true, // Boolean | Only include global parameters. When false will also list rules that would use global parameter if   one with given name was created
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoGlobalparamreportClientGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | [optional] 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **parameterName** | **String**| Get the report for a specific parameter | [optional] 
 **parameterValue** | **String**| Get the report for a specific parameter&#39;s value | [optional] 
 **onlyGlobalParameters** | **Boolean**| Only include global parameters. When false will also list rules that would use global parameter if   one with given name was created | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoInternalrulecallreportClientTargetRulenameGet

> ApiResponse infoInternalrulecallreportClientTargetRulenameGet(client, target, rulename, opts)

For a given rule, find all the rules that call this rule internally

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let client = "client_example"; // String | Rule client
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoInternalrulecallreportClientTargetRulenameGet(client, target, rulename, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Rule client | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **rulename** | **String**| Rule name | 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoLogged404sClientGet

> ApiResponse infoLogged404sClientGet(opts)

Get report on logged 404 errors

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'client': "client_example", // String | Client name
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'limit': 56, // Number | Limit the number of results returned. By default set to 100 when not provided.
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoLogged404sClientGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | [optional] 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **limit** | **Number**| Limit the number of results returned. By default set to 100 when not provided. | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoResourceexistsreportPost

> ApiResponse infoResourceexistsreportPost(body)

Pass in an array of any size containing resource URL&#39;s (rules, templates, etc) to see if they exist and can   be accessed by this user.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let body = ["rule/target/client/rulename","template/client/templatename","queue/client/target/queuename","globalparameter/client/globalparametername","rulegroup/client/target/rulegroupname"]; // String | A json array of any number of resource urls prefixed by type. Supports rule, template, queue,   globalparameter and rulegroup
apiInstance.infoResourceexistsreportPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| A json array of any number of resource urls prefixed by type. Supports rule, template, queue,   globalparameter and rulegroup | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## infoRulecomplexityreportClientGet

> ApiResponse infoRulecomplexityreportClientGet(client, opts)

Report on the complexity of the various rules for a client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let client = "client_example"; // String | Limit the report to only the rules used by this client. You must be able to access this client to   report on it.
let opts = {
  'format': new JourneyOrchestrationApi.CsvEnum(), // CsvEnum | If you want CSV, enter csv here
  'target': new JourneyOrchestrationApi.TargetEnum() // TargetEnum | Filters on target
};
apiInstance.infoRulecomplexityreportClientGet(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Limit the report to only the rules used by this client. You must be able to access this client to   report on it. | 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 
 **target** | [**TargetEnum**](.md)| Filters on target | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoSnoozeGet

> ApiResponse infoSnoozeGet(opts)

Report on whether rules can be snoozed

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'format': new JourneyOrchestrationApi.CsvEnum(), // CsvEnum | If you want CSV, enter csv here
  'target': new JourneyOrchestrationApi.TargetEnum() // TargetEnum | Filters on target
};
apiInstance.infoSnoozeGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 
 **target** | [**TargetEnum**](.md)| Filters on target | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoSteptypestatisticsDelete

> ApiResponse infoSteptypestatisticsDelete()

Clear the execution statistics histogram for all step types

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
apiInstance.infoSteptypestatisticsDelete().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoSteptypestatisticsGet

> ApiResponse infoSteptypestatisticsGet(opts)

Find out the execution statistics histogram for each step type

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoSteptypestatisticsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoSteptypeusagereportClientGet

> ApiResponse infoSteptypeusagereportClientGet(client, opts)

Report on the steps being used by this client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let client = "client_example"; // String | Limit the report to only the steps used by this client. You must be able to access this client to   report on it.
let opts = {
  'format': new JourneyOrchestrationApi.CsvEnum(), // CsvEnum | If you want CSV, enter csv here
  'target': new JourneyOrchestrationApi.TargetEnum() // TargetEnum | Filters on target
};
apiInstance.infoSteptypeusagereportClientGet(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Limit the report to only the steps used by this client. You must be able to access this client to   report on it. | 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 
 **target** | [**TargetEnum**](.md)| Filters on target | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoStepusagereportClientStepnameGet

> ApiResponse infoStepusagereportClientStepnameGet(stepname, opts)

Find out which rules are using a specific step type

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let stepname = "stepname_example"; // String | type of step that must exist in the rules returned
let opts = {
  'client': "client_example", // String | Filter the rules returned to only the ones in this client. Use * to match all clients visible to your   user
  'target': new JourneyOrchestrationApi.TargetEnum(), // TargetEnum | Filters on target
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoStepusagereportClientStepnameGet(stepname, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stepname** | **String**| type of step that must exist in the rules returned | 
 **client** | **String**| Filter the rules returned to only the ones in this client. Use * to match all clients visible to your   user | [optional] 
 **target** | [**TargetEnum**](.md)| Filters on target | [optional] 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoTemplatecolumnreportClientGet

> ApiResponse infoTemplatecolumnreportClientGet(opts)

Report on the names of the columns in the cache used by templates

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'client': "client_example", // String | Limit the report to only the templates used by this client. You must be able to access this client to   report on it.
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoTemplatecolumnreportClientGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Limit the report to only the templates used by this client. You must be able to access this client to   report on it. | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoTemplateinputreportClientGet

> ApiResponse infoTemplateinputreportClientGet(opts)

List all templates that expect given input fields

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'client': "client_example", // String | Limit the report to only the templates used by this client. You must be able to access this client to   report on it.
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'inputFields': ["null"], // [String] | Name of input fields to search for
  'allversions': true, // Boolean | Do we want to check all template versions or only latest?
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoTemplateinputreportClientGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Limit the report to only the templates used by this client. You must be able to access this client to   report on it. | [optional] 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **inputFields** | [**[String]**](String.md)| Name of input fields to search for | [optional] 
 **allversions** | **Boolean**| Do we want to check all template versions or only latest? | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoTemplateusagereportClientTemplatenameGet

> ApiResponse infoTemplateusagereportClientTemplatenameGet(templatename, opts)

Find a list of rules which use a specific template

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let templatename = "templatename_example"; // String | The name of the template that is used by the rule
let opts = {
  'client': "client_example", // String | Filter the rules returned to only this client. Use * to match all clients
  'templateClient': "templateClient_example", // String | Filter to only templates with this client
  'templateVersion': "templateVersion_example", // String | Filter to only templates with this version
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'target': new JourneyOrchestrationApi.TargetEnum(), // TargetEnum | Filters on target
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoTemplateusagereportClientTemplatenameGet(templatename, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templatename** | **String**| The name of the template that is used by the rule | 
 **client** | **String**| Filter the rules returned to only this client. Use * to match all clients | [optional] 
 **templateClient** | **String**| Filter to only templates with this client | [optional] 
 **templateVersion** | **String**| Filter to only templates with this version | [optional] 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **target** | [**TargetEnum**](.md)| Filters on target | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoTemplatevalidityreportClientGet

> ApiResponse infoTemplatevalidityreportClientGet(opts)

Reports on validity of uploaded templates

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'client': "client_example", // String | Client name
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoTemplatevalidityreportClientGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | [optional] 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoTokenusereportGet

> ApiResponse infoTokenusereportGet(opts)

Reports on token access and last used date.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'user': "user_example", // String | Optional query parameter to specify the user
  'format': new JourneyOrchestrationApi.CsvEnum(), // CsvEnum | If you want CSV, enter csv here
  'token': "token_example" // String | Optional token for which to obtain the last used report
};
apiInstance.infoTokenusereportGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **user** | **String**| Optional query parameter to specify the user | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 
 **token** | **String**| Optional token for which to obtain the last used report | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infoWorkerthreadusageGet

> ApiResponse infoWorkerthreadusageGet(opts)

Worker thread usage

Worker threads execute steps within rules. This report shows what they are doing

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.InfoApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.infoWorkerthreadusageGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

