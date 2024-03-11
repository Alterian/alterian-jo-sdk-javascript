# JourneyOrchestrationApi.TemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadTemplateClientTemplatenameGet**](TemplatesApi.md#downloadTemplateClientTemplatenameGet) | **GET** /download/template/{client}/{templatename} | Download the rule file for a specific version of a specific template for a specific client
[**downloadTemplateClientTemplatenameVersionGet**](TemplatesApi.md#downloadTemplateClientTemplatenameVersionGet) | **GET** /download/template/{client}/{templatename}/{version} | Download the rule file for a specific version of a specific template for a specific client
[**templateClientDelete**](TemplatesApi.md#templateClientDelete) | **DELETE** /template/{client} | Delete all templates uploaded by this client.
[**templateClientGet**](TemplatesApi.md#templateClientGet) | **GET** /template/{client} | Get details about all templates uploaded by a specific client
[**templateClientTemplatenameDelete**](TemplatesApi.md#templateClientTemplatenameDelete) | **DELETE** /template/{client}/{templatename} | Delete all versions of a specific template.
[**templateClientTemplatenameGet**](TemplatesApi.md#templateClientTemplatenameGet) | **GET** /template/{client}/{templatename} | Get details about all versions of a specified template
[**templateClientTemplatenamePost**](TemplatesApi.md#templateClientTemplatenamePost) | **POST** /template/{client}/{templatename} | Upload a KTR file which defines the functionality of the template. This will generate and return a version   number.
[**templateClientTemplatenamePut**](TemplatesApi.md#templateClientTemplatenamePut) | **PUT** /template/{client}/{templatename} | Alter the settings of the most recent version of an existing template. This will generate and return a new   version number.
[**templateClientTemplatenameVersionDelete**](TemplatesApi.md#templateClientTemplatenameVersionDelete) | **DELETE** /template/{client}/{templatename}/{version} | Delete a specific version of a specific template on the server.
[**templateClientTemplatenameVersionGet**](TemplatesApi.md#templateClientTemplatenameVersionGet) | **GET** /template/{client}/{templatename}/{version} | Get details about a specific version of a specific template for a specific client
[**templateClientTemplatenameVersionPost**](TemplatesApi.md#templateClientTemplatenameVersionPost) | **POST** /template/{client}/{templatename}/{version} | Get an upgraded version of template
[**templateGet**](TemplatesApi.md#templateGet) | **GET** /template | Get details about all templates on the server
[**templateTargetClientTemplatenameVersionPost**](TemplatesApi.md#templateTargetClientTemplatenameVersionPost) | **POST** /template/{target}/{client}/{templatename}/{version} | Take a specific version of a template and publish it as a rule.
[**templateTargetClientTemplatenameVersionPut**](TemplatesApi.md#templateTargetClientTemplatenameVersionPut) | **PUT** /template/{target}/{client}/{templatename}/{version} | Take a specific version of a template and publish it as a rule. and check if overwriting an existing rule   which has a different template



## downloadTemplateClientTemplatenameGet

> downloadTemplateClientTemplatenameGet(client, templatename)

Download the rule file for a specific version of a specific template for a specific client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
apiInstance.downloadTemplateClientTemplatenameGet(client, templatename).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **templatename** | **String**| The name of the template | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadTemplateClientTemplatenameVersionGet

> downloadTemplateClientTemplatenameVersionGet(client, templatename, version)

Download the rule file for a specific version of a specific template for a specific client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
let version = 56; // Number | The version of the file you want to download.
apiInstance.downloadTemplateClientTemplatenameVersionGet(client, templatename, version).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **templatename** | **String**| The name of the template | 
 **version** | **Number**| The version of the file you want to download. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## templateClientDelete

> ApiResponse templateClientDelete(client)

Delete all templates uploaded by this client.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
apiInstance.templateClientDelete(client).then((data) => {
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


## templateClientGet

> TemplateList templateClientGet(client, opts)

Get details about all templates uploaded by a specific client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'allversions': true, // Boolean | Do we want all versions of the file listed?
  'getAllDetails': true, // Boolean | Do we want to retrieve details of Data Grids present in this template.
  'basicInfo': true, // Boolean | Only retrieve the basic information about this template, like name, client and url template.
  'targetClient': "targetClient_example", // String | Request template's Data Grids' details with parameter information for this client.
  'searchText': "searchText_example", // String | Filter results to those which contain this text
  'includePublic': true, // Boolean | Flag to indicate whether rules from the public client should be included in the results, please use   iClients=public instead
  'iClients': ["null"] // [String] | Only include these client(s)
};
apiInstance.templateClientGet(client, opts).then((data) => {
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
 **allversions** | **Boolean**| Do we want all versions of the file listed? | [optional] 
 **getAllDetails** | **Boolean**| Do we want to retrieve details of Data Grids present in this template. | [optional] 
 **basicInfo** | **Boolean**| Only retrieve the basic information about this template, like name, client and url template. | [optional] 
 **targetClient** | **String**| Request template&#39;s Data Grids&#39; details with parameter information for this client. | [optional] 
 **searchText** | **String**| Filter results to those which contain this text | [optional] 
 **includePublic** | **Boolean**| Flag to indicate whether rules from the public client should be included in the results, please use   iClients&#x3D;public instead | [optional] 
 **iClients** | [**[String]**](String.md)| Only include these client(s) | [optional] 

### Return type

[**TemplateList**](TemplateList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateClientTemplatenameDelete

> ApiResponse templateClientTemplatenameDelete(client, templatename)

Delete all versions of a specific template.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template you want to delete
apiInstance.templateClientTemplatenameDelete(client, templatename).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **templatename** | **String**| The name of the template you want to delete | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateClientTemplatenameGet

> TemplateList templateClientTemplatenameGet(client, templatename, opts)

Get details about all versions of a specified template

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'allversions': true, // Boolean | Do we want all versions of the file listed?
  'getAllDetails': true, // Boolean | Do we want to retrieve details of Data Grids present in this template.
  'targetClient': "targetClient_example" // String | Request template's Data Grids' details with parameter information for this client.
};
apiInstance.templateClientTemplatenameGet(client, templatename, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **templatename** | **String**| The name of the template | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **allversions** | **Boolean**| Do we want all versions of the file listed? | [optional] 
 **getAllDetails** | **Boolean**| Do we want to retrieve details of Data Grids present in this template. | [optional] 
 **targetClient** | **String**| Request template&#39;s Data Grids&#39; details with parameter information for this client. | [optional] 

### Return type

[**TemplateList**](TemplateList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateClientTemplatenamePost

> ResourceAndStatusResponse templateClientTemplatenamePost(client, templatename, opts)

Upload a KTR file which defines the functionality of the template. This will generate and return a version   number.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
let opts = {
  'validate': true, // Boolean | Set to 'True' to only validate the JSON (and not save it)
  'file': "/path/to/file", // File | 
  'settings': "settings_example" // String | 
};
apiInstance.templateClientTemplatenamePost(client, templatename, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **templatename** | **String**| The name of the template | 
 **validate** | **Boolean**| Set to &#39;True&#39; to only validate the JSON (and not save it) | [optional] 
 **file** | **File**|  | [optional] 
 **settings** | **String**|  | [optional] 

### Return type

[**ResourceAndStatusResponse**](ResourceAndStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## templateClientTemplatenamePut

> ResourceAndStatusResponse templateClientTemplatenamePut(client, templatename, opts)

Alter the settings of the most recent version of an existing template. This will generate and return a new   version number.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
let opts = {
  'body': {key: null} // Object | The JSON containing additional settings for this template.
};
apiInstance.templateClientTemplatenamePut(client, templatename, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **templatename** | **String**| The name of the template | 
 **body** | **Object**| The JSON containing additional settings for this template. | [optional] 

### Return type

[**ResourceAndStatusResponse**](ResourceAndStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## templateClientTemplatenameVersionDelete

> ApiResponse templateClientTemplatenameVersionDelete(client, templatename, version)

Delete a specific version of a specific template on the server.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
let version = 56; // Number | The version of the template
apiInstance.templateClientTemplatenameVersionDelete(client, templatename, version).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **templatename** | **String**| The name of the template | 
 **version** | **Number**| The version of the template | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateClientTemplatenameVersionGet

> TemplateList templateClientTemplatenameVersionGet(client, templatename, version, opts)

Get details about a specific version of a specific template for a specific client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
let version = 56; // Number | The version of the template
let opts = {
  'getAllDetails': true, // Boolean | Do we want to retrieve details of Data Grids present in this template.
  'targetClient': "targetClient_example" // String | Request template's Data Grids' details with parameter information for this client.
};
apiInstance.templateClientTemplatenameVersionGet(client, templatename, version, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **templatename** | **String**| The name of the template | 
 **version** | **Number**| The version of the template | 
 **getAllDetails** | **Boolean**| Do we want to retrieve details of Data Grids present in this template. | [optional] 
 **targetClient** | **String**| Request template&#39;s Data Grids&#39; details with parameter information for this client. | [optional] 

### Return type

[**TemplateList**](TemplateList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateClientTemplatenameVersionPost

> TemplateUpgradeResponse templateClientTemplatenameVersionPost(client, templatename, version, opts)

Get an upgraded version of template

Post a JSON representing a Rule Designer&#39;s tile to retrieve a JSON tile where the template version has   been upgraded

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
let version = 56; // Number | The version of the template
let opts = {
  'body': {key: null} // Object | JSON representing the current template to upgrade
};
apiInstance.templateClientTemplatenameVersionPost(client, templatename, version, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **templatename** | **String**| The name of the template | 
 **version** | **Number**| The version of the template | 
 **body** | **Object**| JSON representing the current template to upgrade | [optional] 

### Return type

[**TemplateUpgradeResponse**](TemplateUpgradeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## templateGet

> TemplateList templateGet(opts)

Get details about all templates on the server

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'allversions': true, // Boolean | Do we want all versions of the file listed?
  'getAllDetails': true, // Boolean | Do we want to retrieve details of Data Grids present in this template.
  'basicInfo': true, // Boolean | Only retrieve the basic information about this template, like name, client and url template.
  'targetClient': "targetClient_example", // String | Request template's Data Grids' details with parameter information for this client.
  'searchText': "searchText_example", // String | Filter results to those which contain this text
  'includePublic': true, // Boolean | Flag to indicate whether rules from the public client should be included in the results, please use   iClients=public instead
  'iClients': ["null"] // [String] | Only include these client(s)
};
apiInstance.templateGet(opts).then((data) => {
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
 **allversions** | **Boolean**| Do we want all versions of the file listed? | [optional] 
 **getAllDetails** | **Boolean**| Do we want to retrieve details of Data Grids present in this template. | [optional] 
 **basicInfo** | **Boolean**| Only retrieve the basic information about this template, like name, client and url template. | [optional] 
 **targetClient** | **String**| Request template&#39;s Data Grids&#39; details with parameter information for this client. | [optional] 
 **searchText** | **String**| Filter results to those which contain this text | [optional] 
 **includePublic** | **Boolean**| Flag to indicate whether rules from the public client should be included in the results, please use   iClients&#x3D;public instead | [optional] 
 **iClients** | [**[String]**](String.md)| Only include these client(s) | [optional] 

### Return type

[**TemplateList**](TemplateList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateTargetClientTemplatenameVersionPost

> ResourceAndStatusResponse templateTargetClientTemplatenameVersionPost(target, client, templatename, version, opts)

Take a specific version of a template and publish it as a rule.

If a rule is already published at this target then it will be &#39;hot-swapped&#39; with this new version with no   interruption to service.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
let version = 56; // Number | The version of the template
let opts = {
  'paramSource': "paramSource_example", // String | When overwriting an existing rule, this determines which value to use
  'targetClient': "targetClient_example", // String | Request template's Data Grids' details with parameter information for this client.
  'templatePublishSettings': new JourneyOrchestrationApi.TemplatePublishSettings() // TemplatePublishSettings | The JSON containing additional settings for this template.
};
apiInstance.templateTargetClientTemplatenameVersionPost(target, client, templatename, version, opts).then((data) => {
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
 **templatename** | **String**| The name of the template | 
 **version** | **Number**| The version of the template | 
 **paramSource** | **String**| When overwriting an existing rule, this determines which value to use | [optional] 
 **targetClient** | **String**| Request template&#39;s Data Grids&#39; details with parameter information for this client. | [optional] 
 **templatePublishSettings** | [**TemplatePublishSettings**](TemplatePublishSettings.md)| The JSON containing additional settings for this template. | [optional] 

### Return type

[**ResourceAndStatusResponse**](ResourceAndStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## templateTargetClientTemplatenameVersionPut

> ApiResponse templateTargetClientTemplatenameVersionPut(target, client, templatename, version, opts)

Take a specific version of a template and publish it as a rule. and check if overwriting an existing rule   which has a different template

If a rule is already published at this target then it will be &#39;hot-swapped&#39; with this new version with no   interruption to service.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.TemplatesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let templatename = "templatename_example"; // String | The name of the template
let version = 56; // Number | The version of the template
let opts = {
  'targetClient': "targetClient_example", // String | Request template's Data Grids' details with parameter information for this client.
  'client2': new JourneyOrchestrationApi.Client() // Client | 
};
apiInstance.templateTargetClientTemplatenameVersionPut(target, client, templatename, version, opts).then((data) => {
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
 **templatename** | **String**| The name of the template | 
 **version** | **Number**| The version of the template | 
 **targetClient** | **String**| Request template&#39;s Data Grids&#39; details with parameter information for this client. | [optional] 
 **client2** | [**Client**](Client.md)|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

