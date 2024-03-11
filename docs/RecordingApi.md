# JourneyOrchestrationApi.RecordingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recordingClientDelete**](RecordingApi.md#recordingClientDelete) | **DELETE** /recording/{client} | Delete all recordings created by this client.
[**recordingClientGet**](RecordingApi.md#recordingClientGet) | **GET** /recording/{client} | Get details about all recordings created by a specific client
[**recordingClientTargetDelete**](RecordingApi.md#recordingClientTargetDelete) | **DELETE** /recording/{client}/{target} | Delete all recordings created by this client in this target.
[**recordingClientTargetGet**](RecordingApi.md#recordingClientTargetGet) | **GET** /recording/{client}/{target} | Get details about all recordings created by a specific client in a specific target
[**recordingClientTargetNameDelete**](RecordingApi.md#recordingClientTargetNameDelete) | **DELETE** /recording/{client}/{target}/{name} | Delete a specific recording.
[**recordingClientTargetNameEventsGet**](RecordingApi.md#recordingClientTargetNameEventsGet) | **GET** /recording/{client}/{target}/{name}/events | Get raw event traffic associated with this specific recording
[**recordingClientTargetNameGet**](RecordingApi.md#recordingClientTargetNameGet) | **GET** /recording/{client}/{target}/{name} | Get details about a specific recording
[**recordingClientTargetNamePut**](RecordingApi.md#recordingClientTargetNamePut) | **PUT** /recording/{client}/{target}/{name} | Edit the details of a specific recording.
[**recordingClientTargetPost**](RecordingApi.md#recordingClientTargetPost) | **POST** /recording/{client}/{target} | Start or stop recording traffic for this client and target
[**recordingGet**](RecordingApi.md#recordingGet) | **GET** /recording | Get details about all recordings in the cluster



## recordingClientDelete

> recordingClientDelete(client)

Delete all recordings created by this client.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let client = "client_example"; // String | Client name
apiInstance.recordingClientDelete(client).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## recordingClientGet

> recordingClientGet(client, opts)

Get details about all recordings created by a specific client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let client = "client_example"; // String | Client name
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56 // Number | The zero-based index of the last item to return.
};
apiInstance.recordingClientGet(client, opts).then(() => {
  console.log('API called successfully.');
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

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## recordingClientTargetDelete

> recordingClientTargetDelete(client, target)

Delete all recordings created by this client in this target.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let client = "client_example"; // String | Filter recordings to this client
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
apiInstance.recordingClientTargetDelete(client, target).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Filter recordings to this client | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## recordingClientTargetGet

> recordingClientTargetGet(client, target, opts)

Get details about all recordings created by a specific client in a specific target

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Which target should we filter to?
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56 // Number | The zero-based index of the last item to return.
};
apiInstance.recordingClientTargetGet(client, target, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Which target should we filter to? | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## recordingClientTargetNameDelete

> recordingClientTargetNameDelete(client, target, name)

Delete a specific recording.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let client = "client_example"; // String | Filter recordings to this client
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Filter recordings to this target
let name = "name_example"; // String | The name of the recording
apiInstance.recordingClientTargetNameDelete(client, target, name).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Filter recordings to this client | 
 **target** | [**TargetEnum**](.md)| Filter recordings to this target | 
 **name** | **String**| The name of the recording | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## recordingClientTargetNameEventsGet

> recordingClientTargetNameEventsGet(client, target, name, opts)

Get raw event traffic associated with this specific recording

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Which target should we filter to?
let name = "name_example"; // String | The name of the recording
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56 // Number | The zero-based index of the last item to return.
};
apiInstance.recordingClientTargetNameEventsGet(client, target, name, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Which target should we filter to? | 
 **name** | **String**| The name of the recording | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## recordingClientTargetNameGet

> recordingClientTargetNameGet(client, target, name, opts)

Get details about a specific recording

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Which target should we filter to?
let name = "name_example"; // String | The name of the recording
let opts = {
  'analysis': true, // Boolean | Should the server also perform analysis of the recorded data so that common items can be identified?
  'force': true // Boolean | Analysis data is cached. Should the cached data be cleared and the analysis be re-performed on the   raw data?
};
apiInstance.recordingClientTargetNameGet(client, target, name, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Which target should we filter to? | 
 **name** | **String**| The name of the recording | 
 **analysis** | **Boolean**| Should the server also perform analysis of the recorded data so that common items can be identified? | [optional] 
 **force** | **Boolean**| Analysis data is cached. Should the cached data be cleared and the analysis be re-performed on the   raw data? | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## recordingClientTargetNamePut

> ApiResponse recordingClientTargetNamePut(client, target, name, opts)

Edit the details of a specific recording.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let client = "client_example"; // String | The client that this recording belongs to
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | The target that this recording belongs to
let name = "name_example"; // String | The name of the existing recording
let opts = {
  'body': {"name":"my recording"} // String | JSON containing optional additional settings for this recording.
};
apiInstance.recordingClientTargetNamePut(client, target, name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| The client that this recording belongs to | 
 **target** | [**TargetEnum**](.md)| The target that this recording belongs to | 
 **name** | **String**| The name of the existing recording | 
 **body** | **String**| JSON containing optional additional settings for this recording. | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recordingClientTargetPost

> recordingClientTargetPost(client, target, opts)

Start or stop recording traffic for this client and target

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let client = "client_example"; // String | The client to start recording traffic for
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | The target to start recording traffic for
let opts = {
  'action': "action_example", // String | Start or stop recording. Will toggle the current recording state (i.e. start->stop or stop->start) if   not specified.
  'body': {"name":"my recording"} // String | JSON containing optional additional settings for this recording.
};
apiInstance.recordingClientTargetPost(client, target, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| The client to start recording traffic for | 
 **target** | [**TargetEnum**](.md)| The target to start recording traffic for | 
 **action** | **String**| Start or stop recording. Will toggle the current recording state (i.e. start-&gt;stop or stop-&gt;start) if   not specified. | [optional] 
 **body** | **String**| JSON containing optional additional settings for this recording. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## recordingGet

> recordingGet(opts)

Get details about all recordings in the cluster

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RecordingApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56 // Number | The zero-based index of the last item to return.
};
apiInstance.recordingGet(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

