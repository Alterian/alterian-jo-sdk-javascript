# JourneyOrchestrationApi.GlobalparameterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadGlobalparameterClientParamnameGet**](GlobalparameterApi.md#downloadGlobalparameterClientParamnameGet) | **GET** /download/globalparameter/{client}/{paramname} | Download global parameter
[**globalparameterClientGet**](GlobalparameterApi.md#globalparameterClientGet) | **GET** /globalparameter/{client} | Get target parameter for for specific client
[**globalparameterClientParamnameCopyPost**](GlobalparameterApi.md#globalparameterClientParamnameCopyPost) | **POST** /globalparameter/{client}/{paramname}/copy | Create a copy of a Global Parameter and, optionally, delete the original
[**globalparameterClientParamnameCopyPut**](GlobalparameterApi.md#globalparameterClientParamnameCopyPut) | **PUT** /globalparameter/{client}/{paramname}/copy | Create a copy of a Global Parameter overwriting the target if it exists and, optionally, delete the original
[**globalparameterClientParamnameDelete**](GlobalparameterApi.md#globalparameterClientParamnameDelete) | **DELETE** /globalparameter/{client}/{paramname} | Delete a global parameter
[**globalparameterClientParamnameGet**](GlobalparameterApi.md#globalparameterClientParamnameGet) | **GET** /globalparameter/{client}/{paramname} | Get individual Global Parameter
[**globalparameterClientParamnamePut**](GlobalparameterApi.md#globalparameterClientParamnamePut) | **PUT** /globalparameter/{client}/{paramname} | Update Global Parameter
[**globalparameterGet**](GlobalparameterApi.md#globalparameterGet) | **GET** /globalparameter | Get global parameters for all clients
[**globalparameterPost**](GlobalparameterApi.md#globalparameterPost) | **POST** /globalparameter | Create Global Parameter (will fail if already exists)



## downloadGlobalparameterClientParamnameGet

> File downloadGlobalparameterClientParamnameGet(client, paramname)

Download global parameter

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.GlobalparameterApi();
let client = "client_example"; // String | Client name
let paramname = "paramname_example"; // String | parameter name
apiInstance.downloadGlobalparameterClientParamnameGet(client, paramname).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **paramname** | **String**| parameter name | 

### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## globalparameterClientGet

> ParameterList globalparameterClientGet(client, opts)

Get target parameter for for specific client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.GlobalparameterApi();
let client = "client_example"; // String | Client name
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'sortProperty': "sortProperty_example", // String | List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue.
  'sortDescending': "sortDescending_example", // String | List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty
  'searchText': "searchText_example", // String | Filter results to those which contain this text
  'iClients': ["null"] // [String] | Only include these client(s)
};
apiInstance.globalparameterClientGet(client, opts).then((data) => {
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
 **sortProperty** | **String**| List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue. | [optional] 
 **sortDescending** | **String**| List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty | [optional] 
 **searchText** | **String**| Filter results to those which contain this text | [optional] 
 **iClients** | [**[String]**](String.md)| Only include these client(s) | [optional] 

### Return type

[**ParameterList**](ParameterList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## globalparameterClientParamnameCopyPost

> ParameterApiResponse globalparameterClientParamnameCopyPost(client, paramname, parameterCopyDetails)

Create a copy of a Global Parameter and, optionally, delete the original

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.GlobalparameterApi();
let client = "client_example"; // String | Client name
let paramname = "paramname_example"; // String | parameter name
let parameterCopyDetails = new JourneyOrchestrationApi.ParameterCopyDetails(); // ParameterCopyDetails | 
apiInstance.globalparameterClientParamnameCopyPost(client, paramname, parameterCopyDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **paramname** | **String**| parameter name | 
 **parameterCopyDetails** | [**ParameterCopyDetails**](ParameterCopyDetails.md)|  | 

### Return type

[**ParameterApiResponse**](ParameterApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## globalparameterClientParamnameCopyPut

> ParameterApiResponse globalparameterClientParamnameCopyPut(client, paramname, parameterCopyDetails)

Create a copy of a Global Parameter overwriting the target if it exists and, optionally, delete the original

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.GlobalparameterApi();
let client = "client_example"; // String | Client name
let paramname = "paramname_example"; // String | parameter name
let parameterCopyDetails = new JourneyOrchestrationApi.ParameterCopyDetails(); // ParameterCopyDetails | 
apiInstance.globalparameterClientParamnameCopyPut(client, paramname, parameterCopyDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **paramname** | **String**| parameter name | 
 **parameterCopyDetails** | [**ParameterCopyDetails**](ParameterCopyDetails.md)|  | 

### Return type

[**ParameterApiResponse**](ParameterApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## globalparameterClientParamnameDelete

> ApiResponse globalparameterClientParamnameDelete(client, paramname)

Delete a global parameter

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.GlobalparameterApi();
let client = "client_example"; // String | Client name
let paramname = "paramname_example"; // String | parameter name
apiInstance.globalparameterClientParamnameDelete(client, paramname).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **paramname** | **String**| parameter name | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## globalparameterClientParamnameGet

> ParameterList globalparameterClientParamnameGet(client, paramname)

Get individual Global Parameter

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.GlobalparameterApi();
let client = "client_example"; // String | Client name
let paramname = "paramname_example"; // String | parameter name
apiInstance.globalparameterClientParamnameGet(client, paramname).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **paramname** | **String**| parameter name | 

### Return type

[**ParameterList**](ParameterList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## globalparameterClientParamnamePut

> ParameterApiResponse globalparameterClientParamnamePut(client, paramname, parameter)

Update Global Parameter

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.GlobalparameterApi();
let client = "client_example"; // String | Client name
let paramname = "paramname_example"; // String | parameter name
let parameter = new JourneyOrchestrationApi.Parameter(); // Parameter | 
apiInstance.globalparameterClientParamnamePut(client, paramname, parameter).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **paramname** | **String**| parameter name | 
 **parameter** | [**Parameter**](Parameter.md)|  | 

### Return type

[**ParameterApiResponse**](ParameterApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## globalparameterGet

> ParameterList globalparameterGet(opts)

Get global parameters for all clients

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.GlobalparameterApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'sortProperty': "sortProperty_example", // String | List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue.
  'sortDescending': "sortDescending_example", // String | List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty
  'searchText': "searchText_example", // String | Filter results to those which contain this text
  'iClients': ["null"] // [String] | Only include these client(s)
};
apiInstance.globalparameterGet(opts).then((data) => {
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
 **sortProperty** | **String**| List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue. | [optional] 
 **sortDescending** | **String**| List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty | [optional] 
 **searchText** | **String**| Filter results to those which contain this text | [optional] 
 **iClients** | [**[String]**](String.md)| Only include these client(s) | [optional] 

### Return type

[**ParameterList**](ParameterList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## globalparameterPost

> ParameterApiResponse globalparameterPost(opts)

Create Global Parameter (will fail if already exists)

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.GlobalparameterApi();
let opts = {
  'parameter': new JourneyOrchestrationApi.Parameter() // Parameter | 
};
apiInstance.globalparameterPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameter** | [**Parameter**](Parameter.md)|  | [optional] 

### Return type

[**ParameterApiResponse**](ParameterApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

