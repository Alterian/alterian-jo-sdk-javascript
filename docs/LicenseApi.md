# JourneyOrchestrationApi.LicenseApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**licenseClientActiveGet**](LicenseApi.md#licenseClientActiveGet) | **GET** /license/{client}/active | Get the currently active license for a client
[**licenseClientGet**](LicenseApi.md#licenseClientGet) | **GET** /license/{client} | Get all licenses for the specified client
[**licenseClientLicenseDelete**](LicenseApi.md#licenseClientLicenseDelete) | **DELETE** /license/{client}/{license} | Delete specified license
[**licenseClientLicenseGet**](LicenseApi.md#licenseClientLicenseGet) | **GET** /license/{client}/{license} | Get a specific license
[**licenseClientLicensePost**](LicenseApi.md#licenseClientLicensePost) | **POST** /license/{client}/{license} | Create a new license
[**licenseClientLicensePut**](LicenseApi.md#licenseClientLicensePut) | **PUT** /license/{client}/{license} | Create or update a license
[**licenseGet**](LicenseApi.md#licenseGet) | **GET** /license | Get all licenses for all clients that your login can access



## licenseClientActiveGet

> LicenseList licenseClientActiveGet(client)

Get the currently active license for a client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.LicenseApi();
let client = "client_example"; // String | Client name
apiInstance.licenseClientActiveGet(client).then((data) => {
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

[**LicenseList**](LicenseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## licenseClientGet

> LicenseList licenseClientGet(client)

Get all licenses for the specified client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.LicenseApi();
let client = "client_example"; // String | Client name
apiInstance.licenseClientGet(client).then((data) => {
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

[**LicenseList**](LicenseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## licenseClientLicenseDelete

> ApiResponse licenseClientLicenseDelete(client, license)

Delete specified license

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.LicenseApi();
let client = "client_example"; // String | Client name
let license = "license_example"; // String | License to delete
apiInstance.licenseClientLicenseDelete(client, license).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **license** | **String**| License to delete | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## licenseClientLicenseGet

> LicenseList licenseClientLicenseGet(client, opts)

Get a specific license

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.LicenseApi();
let client = "client_example"; // String | Client name
let opts = {
  'license': "license_example" // String | License to get
};
apiInstance.licenseClientLicenseGet(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **license** | **String**| License to get | [optional] 

### Return type

[**LicenseList**](LicenseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## licenseClientLicensePost

> ApiResponse licenseClientLicensePost(client, licenseData, opts)

Create a new license

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.LicenseApi();
let client = "client_example"; // String | Client name
let licenseData = new JourneyOrchestrationApi.LicenseData(); // LicenseData | 
let opts = {
  'license': "license_example" // String | License name to post; has the same name requirements as the name of a rule; must not contain invalid   characters like \"..\", etc.
};
apiInstance.licenseClientLicensePost(client, licenseData, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **licenseData** | [**LicenseData**](LicenseData.md)|  | 
 **license** | **String**| License name to post; has the same name requirements as the name of a rule; must not contain invalid   characters like \&quot;..\&quot;, etc. | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## licenseClientLicensePut

> ApiResponse licenseClientLicensePut(client, body, opts)

Create or update a license

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.LicenseApi();
let client = "client_example"; // String | Client name
let body = {"blockOverage":"False","conversationQuota":100000,"endDate":"","startDate":"2021-01-01T12:00:00.000Z"}; // String | A block of JSON describing the license
let opts = {
  'license': "license_example" // String | License name to put; has the same name requirements as the name of a rule; must not contain invalid   characters like \"..\", etc.
};
apiInstance.licenseClientLicensePut(client, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **body** | **String**| A block of JSON describing the license | 
 **license** | **String**| License name to put; has the same name requirements as the name of a rule; must not contain invalid   characters like \&quot;..\&quot;, etc. | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## licenseGet

> LicenseList licenseGet()

Get all licenses for all clients that your login can access

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.LicenseApi();
apiInstance.licenseGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LicenseList**](LicenseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

