# JourneyOrchestrationApi.ClientApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientClientAliasAliasNameDelete**](ClientApi.md#clientClientAliasAliasNameDelete) | **DELETE** /client/{client}/alias/{aliasName} | Deletes a specific alias from the client
[**clientClientAliasAliasNameGet**](ClientApi.md#clientClientAliasAliasNameGet) | **GET** /client/{client}/alias/{aliasName} | Returns back information about a specific alias
[**clientClientAliasAliasNameTargetRuleorgroupPost**](ClientApi.md#clientClientAliasAliasNameTargetRuleorgroupPost) | **POST** /client/{client}/alias/{aliasName}/{target}/{ruleorgroup} | Creates or updates an alias
[**clientClientAliasAliasNameTargetRuleorgroupPut**](ClientApi.md#clientClientAliasAliasNameTargetRuleorgroupPut) | **PUT** /client/{client}/alias/{aliasName}/{target}/{ruleorgroup} | Create a new alias, must not exist.
[**clientClientAliasGet**](ClientApi.md#clientClientAliasGet) | **GET** /client/{client}/alias | Returns back all aliases which have been defined for a client
[**clientClientCopyDestinationPut**](ClientApi.md#clientClientCopyDestinationPut) | **PUT** /client/{client}/copy/{destination} | Copy an existing client to a client with a new name
[**clientClientDelete**](ClientApi.md#clientClientDelete) | **DELETE** /client/{client} | Delete all client files that have been uploaded to the server.
[**clientClientGet**](ClientApi.md#clientClientGet) | **GET** /client/{client} | Returns extended details about a client.
[**clientClientPost**](ClientApi.md#clientClientPost) | **POST** /client/{client} | Updates a client&#39;s parameters
[**clientClientPut**](ClientApi.md#clientClientPut) | **PUT** /client/{client} | Create a new client.
[**clientCopySourcePut**](ClientApi.md#clientCopySourcePut) | **PUT** /client/copy/{source} | Copy an existing client to a client with a new name
[**clientGet**](ClientApi.md#clientGet) | **GET** /client | Get a list of all clients that your login can access, and all permissions that you have



## clientClientAliasAliasNameDelete

> ApiResponse clientClientAliasAliasNameDelete(client, aliasName)

Deletes a specific alias from the client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | Client name
let aliasName = "aliasName_example"; // String | The name of the alias
apiInstance.clientClientAliasAliasNameDelete(client, aliasName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **aliasName** | **String**| The name of the alias | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientAliasAliasNameGet

> ApiResponse clientClientAliasAliasNameGet(client, aliasName)

Returns back information about a specific alias

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | Client name
let aliasName = "aliasName_example"; // String | The name of the alias
apiInstance.clientClientAliasAliasNameGet(client, aliasName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **aliasName** | **String**| The name of the alias | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientAliasAliasNameTargetRuleorgroupPost

> ApiResponse clientClientAliasAliasNameTargetRuleorgroupPost(client, aliasName, target, ruleorgroup)

Creates or updates an alias

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long
let aliasName = "aliasName_example"; // String | The name of the alias
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let ruleorgroup = "ruleorgroup_example"; // String | The name of the rule or rule group to which this alias should point
apiInstance.clientClientAliasAliasNameTargetRuleorgroupPost(client, aliasName, target, ruleorgroup).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long | 
 **aliasName** | **String**| The name of the alias | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **ruleorgroup** | **String**| The name of the rule or rule group to which this alias should point | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientAliasAliasNameTargetRuleorgroupPut

> ResourceAndStatusResponse clientClientAliasAliasNameTargetRuleorgroupPut(client, aliasName, target, ruleorgroup)

Create a new alias, must not exist.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long
let aliasName = "aliasName_example"; // String | The name of the alias
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let ruleorgroup = "ruleorgroup_example"; // String | The name of the rule or rule group to which this alias should point
apiInstance.clientClientAliasAliasNameTargetRuleorgroupPut(client, aliasName, target, ruleorgroup).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long | 
 **aliasName** | **String**| The name of the alias | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **ruleorgroup** | **String**| The name of the rule or rule group to which this alias should point | 

### Return type

[**ResourceAndStatusResponse**](ResourceAndStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientAliasGet

> ClientResponse clientClientAliasGet(client)

Returns back all aliases which have been defined for a client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | Client name
apiInstance.clientClientAliasGet(client).then((data) => {
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

[**ClientResponse**](ClientResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientCopyDestinationPut

> ApiResponse clientClientCopyDestinationPut(client, opts)

Copy an existing client to a client with a new name

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | The source client
let opts = {
  'destination': "destination_example" // String | The new client name
};
apiInstance.clientClientCopyDestinationPut(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| The source client | 
 **destination** | **String**| The new client name | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientDelete

> ApiResponse clientClientDelete(client)

Delete all client files that have been uploaded to the server.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | Client name
apiInstance.clientClientDelete(client).then((data) => {
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


## clientClientGet

> ClientResponse clientClientGet(client, opts)

Returns extended details about a client.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | client name, you can use * to return all clients to which your account has access
let opts = {
  'aszip': true, // Boolean | Return back the entire client in a zip (compresses everything except files).  Requires ALL   permissions.  Note, you cannot use a wildcard with this option.
  'asdata': true // Boolean | If this is true, it will return just the client list in the data property and exclude permissions,   etc. from the result.  Useful if you simply want a list of clients.
};
apiInstance.clientClientGet(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| client name, you can use * to return all clients to which your account has access | 
 **aszip** | **Boolean**| Return back the entire client in a zip (compresses everything except files).  Requires ALL   permissions.  Note, you cannot use a wildcard with this option. | [optional] 
 **asdata** | **Boolean**| If this is true, it will return just the client list in the data property and exclude permissions,   etc. from the result.  Useful if you simply want a list of clients. | [optional] 

### Return type

[**ClientResponse**](ClientResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientPost

> ApiResponse clientClientPost(client, opts)

Updates a client&#39;s parameters

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | Client name
let opts = {
  'client2': new JourneyOrchestrationApi.Client() // Client | 
};
apiInstance.clientClientPost(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **client2** | [**Client**](Client.md)|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clientClientPut

> ApiResponse clientClientPut(client, opts)

Create a new client.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let client = "client_example"; // String | Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long
let opts = {
  'client2': new JourneyOrchestrationApi.Client() // Client | 
};
apiInstance.clientClientPut(client, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name, must begin with a letter, can only contain alphanumerics and hyphens, and must be no   more than 40 characters long | 
 **client2** | [**Client**](Client.md)|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clientCopySourcePut

> ApiResponse clientCopySourcePut(source, opts)

Copy an existing client to a client with a new name

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
let source = "source_example"; // String | Source client name
let opts = {
  'destination': "destination_example" // String | The new client name
};
apiInstance.clientCopySourcePut(source, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**| Source client name | 
 **destination** | **String**| The new client name | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientGet

> ClientResponse clientGet()

Get a list of all clients that your login can access, and all permissions that you have

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClientApi();
apiInstance.clientGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ClientResponse**](ClientResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

