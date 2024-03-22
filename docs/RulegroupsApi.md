# JourneyOrchestrationApi.RulegroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadRulegroupClientTargetRulegroupnameGet**](RulegroupsApi.md#downloadRulegroupClientTargetRulegroupnameGet) | **GET** /download/rulegroup/{client}/{target}/{rulegroupname} | Download the rulegroup file (JSON)
[**rulegroupClientDelete**](RulegroupsApi.md#rulegroupClientDelete) | **DELETE** /rulegroup/{client} | Delete all rule groups uploaded by this client.
[**rulegroupClientGet**](RulegroupsApi.md#rulegroupClientGet) | **GET** /rulegroup/{client} | Get details about all rule groups uploaded by a specific client
[**rulegroupClientTargetDelete**](RulegroupsApi.md#rulegroupClientTargetDelete) | **DELETE** /rulegroup/{client}/{target} | Delete all rule groups uploaded by this client in this target.
[**rulegroupClientTargetGet**](RulegroupsApi.md#rulegroupClientTargetGet) | **GET** /rulegroup/{client}/{target} | Get details about all rule groups uploaded by a specific client in a specific target
[**rulegroupClientTargetRulegroupnameCopytoPost**](RulegroupsApi.md#rulegroupClientTargetRulegroupnameCopytoPost) | **POST** /rulegroup/{client}/{target}/{rulegroupname}/copyto | Copy this rule group to the given target.  Also replicates any missing rules
[**rulegroupClientTargetRulegroupnameDelete**](RulegroupsApi.md#rulegroupClientTargetRulegroupnameDelete) | **DELETE** /rulegroup/{client}/{target}/{rulegroupname} | Delete all versions of a specific rulegroup.
[**rulegroupClientTargetRulegroupnameGet**](RulegroupsApi.md#rulegroupClientTargetRulegroupnameGet) | **GET** /rulegroup/{client}/{target}/{rulegroupname} | Get details about all versions of a specified rulegroup
[**rulegroupClientTargetRulegroupnamePost**](RulegroupsApi.md#rulegroupClientTargetRulegroupnamePost) | **POST** /rulegroup/{client}/{target}/{rulegroupname} | Upload a file which defines the rulegroup. This will generate and return a version number number.
[**rulegroupClientTargetRulegroupnamePut**](RulegroupsApi.md#rulegroupClientTargetRulegroupnamePut) | **PUT** /rulegroup/{client}/{target}/{rulegroupname} | Update an existing rulegroup. This will generate and return a version number.
[**rulegroupClientTargetRulegroupnameVersionDelete**](RulegroupsApi.md#rulegroupClientTargetRulegroupnameVersionDelete) | **DELETE** /rulegroup/{client}/{target}/{rulegroupname}/{version} | Delete a specific version of a specific rulegroup on the server.
[**rulegroupClientTargetRulegroupnameVersionGet**](RulegroupsApi.md#rulegroupClientTargetRulegroupnameVersionGet) | **GET** /rulegroup/{client}/{target}/{rulegroupname}/{version} | Get details about a specific version of a specific rulegroup for a specific client
[**rulegroupGet**](RulegroupsApi.md#rulegroupGet) | **GET** /rulegroup | Get details about all rule groups on the server
[**rulegroupPost**](RulegroupsApi.md#rulegroupPost) | **POST** /rulegroup | upload a file which defines the rulegroup. This will generate and return a version number.  Please use the   /rulegroup/client/target/name post version now.



## downloadRulegroupClientTargetRulegroupnameGet

> File downloadRulegroupClientTargetRulegroupnameGet(client, target, rulegroupname)

Download the rulegroup file (JSON)

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let rulegroupname = "rulegroupname_example"; // String | The name of the rule group
apiInstance.downloadRulegroupClientTargetRulegroupnameGet(client, target, rulegroupname).then((data) => {
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
 **rulegroupname** | **String**| The name of the rule group | 

### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## rulegroupClientDelete

> ApiResponse rulegroupClientDelete(client)

Delete all rule groups uploaded by this client.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
apiInstance.rulegroupClientDelete(client).then((data) => {
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

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rulegroupClientGet

> RuleGroupListingResponse rulegroupClientGet(client, opts)

Get details about all rule groups uploaded by a specific client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'includeproperties': true, // Boolean | Do we want all details of each rule group? (default is true).
  'allversions': true // Boolean | Do we want all versions of the file listed?
};
apiInstance.rulegroupClientGet(client, opts).then((data) => {
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
 **includeproperties** | **Boolean**| Do we want all details of each rule group? (default is true). | [optional] 
 **allversions** | **Boolean**| Do we want all versions of the file listed? | [optional] 

### Return type

[**RuleGroupListingResponse**](RuleGroupListingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rulegroupClientTargetDelete

> ApiResponse rulegroupClientTargetDelete(client, target)

Delete all rule groups uploaded by this client in this target.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Where rulegroup should be published.
apiInstance.rulegroupClientTargetDelete(client, target).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Where rulegroup should be published. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rulegroupClientTargetGet

> RuleGroupListingResponse rulegroupClientTargetGet(client, target, opts)

Get details about all rule groups uploaded by a specific client in a specific target

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Where rule group should be published.
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'includeproperties': true, // Boolean | Do we want all details of each rule group? (default is true).
  'allversions': true // Boolean | Do we want all versions of the file listed?
};
apiInstance.rulegroupClientTargetGet(client, target, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Where rule group should be published. | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **includeproperties** | **Boolean**| Do we want all details of each rule group? (default is true). | [optional] 
 **allversions** | **Boolean**| Do we want all versions of the file listed? | [optional] 

### Return type

[**RuleGroupListingResponse**](RuleGroupListingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rulegroupClientTargetRulegroupnameCopytoPost

> ResourceAndStatusResponse rulegroupClientTargetRulegroupnameCopytoPost(client, target, rulegroupname, opts)

Copy this rule group to the given target.  Also replicates any missing rules

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Possible values: dev | test | prod.
let rulegroupname = "rulegroupname_example"; // String | The name of the rule group
let opts = {
  'ruleGroupDestinationTarget': new JourneyOrchestrationApi.RuleGroupDestinationTarget() // RuleGroupDestinationTarget | 
};
apiInstance.rulegroupClientTargetRulegroupnameCopytoPost(client, target, rulegroupname, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Possible values: dev | test | prod. | 
 **rulegroupname** | **String**| The name of the rule group | 
 **ruleGroupDestinationTarget** | [**RuleGroupDestinationTarget**](RuleGroupDestinationTarget.md)|  | [optional] 

### Return type

[**ResourceAndStatusResponse**](ResourceAndStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rulegroupClientTargetRulegroupnameDelete

> ApiResponse rulegroupClientTargetRulegroupnameDelete(client, target, rulegroupname)

Delete all versions of a specific rulegroup.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let rulegroupname = "rulegroupname_example"; // String | The name of the rule group
apiInstance.rulegroupClientTargetRulegroupnameDelete(client, target, rulegroupname).then((data) => {
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
 **rulegroupname** | **String**| The name of the rule group | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rulegroupClientTargetRulegroupnameGet

> RuleGroupListingResponse rulegroupClientTargetRulegroupnameGet(client, target, rulegroupname, opts)

Get details about all versions of a specified rulegroup

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let rulegroupname = "rulegroupname_example"; // String | The name of the rule group
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'includeproperties': true, // Boolean | Do we want all details of each rule group? (default is true).
  'allversions': true // Boolean | Do we want all versions of the file listed?
};
apiInstance.rulegroupClientTargetRulegroupnameGet(client, target, rulegroupname, opts).then((data) => {
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
 **rulegroupname** | **String**| The name of the rule group | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **includeproperties** | **Boolean**| Do we want all details of each rule group? (default is true). | [optional] 
 **allversions** | **Boolean**| Do we want all versions of the file listed? | [optional] 

### Return type

[**RuleGroupListingResponse**](RuleGroupListingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rulegroupClientTargetRulegroupnamePost

> ResourceAndStatusResponse rulegroupClientTargetRulegroupnamePost(client, target, rulegroupname, ruleGroup)

Upload a file which defines the rulegroup. This will generate and return a version number number.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Possible values: dev | test | prod.
let rulegroupname = "rulegroupname_example"; // String | The name of the rule group
let ruleGroup = new JourneyOrchestrationApi.RuleGroup(); // RuleGroup | A block of JSON containing the rule group information you want to create.  Note there are many more   properties which you can set to allow you to override parameters of the rules, etc. but the simplest is provided as an   example.
apiInstance.rulegroupClientTargetRulegroupnamePost(client, target, rulegroupname, ruleGroup).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Possible values: dev | test | prod. | 
 **rulegroupname** | **String**| The name of the rule group | 
 **ruleGroup** | [**RuleGroup**](RuleGroup.md)| A block of JSON containing the rule group information you want to create.  Note there are many more   properties which you can set to allow you to override parameters of the rules, etc. but the simplest is provided as an   example. | 

### Return type

[**ResourceAndStatusResponse**](ResourceAndStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rulegroupClientTargetRulegroupnamePut

> ResourceAndStatusResponse rulegroupClientTargetRulegroupnamePut(client, target, rulegroupname, ruleGroup)

Update an existing rulegroup. This will generate and return a version number.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Possible values: dev | test | prod.
let rulegroupname = "rulegroupname_example"; // String | The name of the rule group
let ruleGroup = new JourneyOrchestrationApi.RuleGroup(); // RuleGroup | A block of JSON containing the rule group information you want to create.  Note there are many more   properties which you can set to allow you to override parameters of the rules, etc. but the simplest is provided as an   example.
apiInstance.rulegroupClientTargetRulegroupnamePut(client, target, rulegroupname, ruleGroup).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Possible values: dev | test | prod. | 
 **rulegroupname** | **String**| The name of the rule group | 
 **ruleGroup** | [**RuleGroup**](RuleGroup.md)| A block of JSON containing the rule group information you want to create.  Note there are many more   properties which you can set to allow you to override parameters of the rules, etc. but the simplest is provided as an   example. | 

### Return type

[**ResourceAndStatusResponse**](ResourceAndStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rulegroupClientTargetRulegroupnameVersionDelete

> ApiResponse rulegroupClientTargetRulegroupnameVersionDelete(client, target, rulegroupname, version)

Delete a specific version of a specific rulegroup on the server.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let rulegroupname = "rulegroupname_example"; // String | The name of the rule group
let version = 56; // Number | The version of the rule group
apiInstance.rulegroupClientTargetRulegroupnameVersionDelete(client, target, rulegroupname, version).then((data) => {
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
 **rulegroupname** | **String**| The name of the rule group | 
 **version** | **Number**| The version of the rule group | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rulegroupClientTargetRulegroupnameVersionGet

> RuleGroupListingResponse rulegroupClientTargetRulegroupnameVersionGet(client, target, rulegroupname, version)

Get details about a specific version of a specific rulegroup for a specific client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let rulegroupname = "rulegroupname_example"; // String | The name of the rule group
let version = 56; // Number | The version of the rule group
apiInstance.rulegroupClientTargetRulegroupnameVersionGet(client, target, rulegroupname, version).then((data) => {
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
 **rulegroupname** | **String**| The name of the rule group | 
 **version** | **Number**| The version of the rule group | 

### Return type

[**RuleGroupListingResponse**](RuleGroupListingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rulegroupGet

> RuleGroupListingResponse rulegroupGet(opts)

Get details about all rule groups on the server

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'includeproperties': true, // Boolean | Do we want all details of each rule group? (default is true).
  'allversions': true, // Boolean | Do we want all versions of the file listed?
  'iClients': ["null"] // [String] | Only include these client(s)
};
apiInstance.rulegroupGet(opts).then((data) => {
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
 **includeproperties** | **Boolean**| Do we want all details of each rule group? (default is true). | [optional] 
 **allversions** | **Boolean**| Do we want all versions of the file listed? | [optional] 
 **iClients** | [**[String]**](String.md)| Only include these client(s) | [optional] 

### Return type

[**RuleGroupListingResponse**](RuleGroupListingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rulegroupPost

> ApiResponse rulegroupPost(ruleGroup)

upload a file which defines the rulegroup. This will generate and return a version number.  Please use the   /rulegroup/client/target/name post version now.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulegroupsApi();
let ruleGroup = new JourneyOrchestrationApi.RuleGroup(); // RuleGroup | A block of JSON containing the rule group information you want to create.  Note there are many more   properties which you can set to allow you to override parameters of the rules, etc. but the simplest is provided as an   example.
apiInstance.rulegroupPost(ruleGroup).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleGroup** | [**RuleGroup**](RuleGroup.md)| A block of JSON containing the rule group information you want to create.  Note there are many more   properties which you can set to allow you to override parameters of the rules, etc. but the simplest is provided as an   example. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

