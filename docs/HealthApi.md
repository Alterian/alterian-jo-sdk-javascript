# JourneyOrchestrationApi.HealthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthGet**](HealthApi.md#healthGet) | **GET** /health | Find out the health of this node
[**healthWatchdogPost**](HealthApi.md#healthWatchdogPost) | **POST** /health/watchdog | Trigger a watchdog check immediately, instead of waiting for the regular polling cycle



## healthGet

> ApiResponse healthGet()

Find out the health of this node

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.HealthApi();
apiInstance.healthGet().then((data) => {
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


## healthWatchdogPost

> ApiResponse healthWatchdogPost(check)

Trigger a watchdog check immediately, instead of waiting for the regular polling cycle

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.HealthApi();
let check = "'all'"; // String | Which watchdog checks would you like to trigger?
apiInstance.healthWatchdogPost(check).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check** | **String**| Which watchdog checks would you like to trigger? | [default to &#39;all&#39;]

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

