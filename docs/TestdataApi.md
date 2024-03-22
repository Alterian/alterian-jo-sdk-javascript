# JourneyOrchestrationApi.TestdataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadTestdataTargetClientRulenameGet**](TestdataApi.md#downloadTestdataTargetClientRulenameGet) | **GET** /download/testdata/{target}/{client}/{rulename} | Download user defined test data for a specific rule as JSON
[**testdataGet**](TestdataApi.md#testdataGet) | **GET** /testdata | List all user defined test data across all rules.



## downloadTestdataTargetClientRulenameGet

> File downloadTestdataTargetClientRulenameGet(target, client, rulename)

Download user defined test data for a specific rule as JSON

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TestdataApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.downloadTestdataTargetClientRulenameGet(target, client, rulename).then((data) => {
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

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## testdataGet

> TestDataListingResponse testdataGet(opts)

List all user defined test data across all rules.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TestdataApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56 // Number | The zero-based index of the last item to return.
};
apiInstance.testdataGet(opts).then((data) => {
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

### Return type

[**TestDataListingResponse**](TestDataListingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

