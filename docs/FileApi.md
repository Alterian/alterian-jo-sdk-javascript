# JourneyOrchestrationApi.FileApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileClientGet**](FileApi.md#fileClientGet) | **GET** /file/{client} | Lists files
[**fileClientTargetFilenameDelete**](FileApi.md#fileClientTargetFilenameDelete) | **DELETE** /file/{client}/{target}/{filename} | Remove a file from the server
[**fileClientTargetFilenameGet**](FileApi.md#fileClientTargetFilenameGet) | **GET** /file/{client}/{target}/{filename} | Download a file from the server
[**fileClientTargetFilenamePost**](FileApi.md#fileClientTargetFilenamePost) | **POST** /file/{client}/{target}/{filename} | Upload a file to the server
[**fileClientTargetGet**](FileApi.md#fileClientTargetGet) | **GET** /file/{client}/{target} | Lists files



## fileClientGet

> ApiResponse fileClientGet(client, opts)

Lists files

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.FileApi();
let client = "client_example"; // String | Client name
let opts = {
  'searchText': "searchText_example" // String | Filter results to those which contain this text
};
apiInstance.fileClientGet(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **searchText** | **String**| Filter results to those which contain this text | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fileClientTargetFilenameDelete

> fileClientTargetFilenameDelete(target, client, filename)

Remove a file from the server

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.FileApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let filename = "filename_example"; // String | file name
apiInstance.fileClientTargetFilenameDelete(target, client, filename).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **client** | **String**| Client name | 
 **filename** | **String**| file name | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## fileClientTargetFilenameGet

> fileClientTargetFilenameGet(target, client, filename, opts)

Download a file from the server

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.FileApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let filename = "filename_example"; // String | file name
let opts = {
  'searchText': "searchText_example" // String | Filter results to those which contain this text
};
apiInstance.fileClientTargetFilenameGet(target, client, filename, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **client** | **String**| Client name | 
 **filename** | **String**| file name | 
 **searchText** | **String**| Filter results to those which contain this text | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## fileClientTargetFilenamePost

> fileClientTargetFilenamePost(target, client, filename, opts)

Upload a file to the server

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.FileApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target for the file
let client = "client_example"; // String | client name
let filename = "filename_example"; // String | file name
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.fileClientTargetFilenamePost(target, client, filename, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | [**TargetEnum**](.md)| Target for the file | 
 **client** | **String**| client name | 
 **filename** | **String**| file name | 
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## fileClientTargetGet

> ApiResponse fileClientTargetGet(target, client, opts)

Lists files

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.FileApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let opts = {
  'searchText': "searchText_example" // String | Filter results to those which contain this text
};
apiInstance.fileClientTargetGet(target, client, opts).then((data) => {
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
 **searchText** | **String**| Filter results to those which contain this text | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

