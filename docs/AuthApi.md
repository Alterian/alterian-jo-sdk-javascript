# JourneyOrchestrationApi.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authPermissionGet**](AuthApi.md#authPermissionGet) | **GET** /auth/permission | Get a list of all permissions
[**authRoleGet**](AuthApi.md#authRoleGet) | **GET** /auth/role | Get a list of roles
[**authRoleNameClientClientNameDelete**](AuthApi.md#authRoleNameClientClientNameDelete) | **DELETE** /auth/role/{name}/client/{clientName} | Remove client from a role
[**authRoleNameClientClientNamePost**](AuthApi.md#authRoleNameClientClientNamePost) | **POST** /auth/role/{name}/client/{clientName} | Add client to a role
[**authRoleNameClientGet**](AuthApi.md#authRoleNameClientGet) | **GET** /auth/role/{name}/client | Get the list of clients for a role
[**authRoleNameDelete**](AuthApi.md#authRoleNameDelete) | **DELETE** /auth/role/{name} | Remove a role
[**authRoleNameGet**](AuthApi.md#authRoleNameGet) | **GET** /auth/role/{name} | Get information about a specific role
[**authRoleNamePermissionDelete**](AuthApi.md#authRoleNamePermissionDelete) | **DELETE** /auth/role/{name}/{permission} | Remove permission from a role
[**authRoleNamePermissionGet**](AuthApi.md#authRoleNamePermissionGet) | **GET** /auth/role/{name}/permission | Get the list of permissions granted by a specific role
[**authRoleNamePermissionPost**](AuthApi.md#authRoleNamePermissionPost) | **POST** /auth/role/{name}/{permission} | Add permission to a role
[**authRolePost**](AuthApi.md#authRolePost) | **POST** /auth/role | Create a new role
[**authSiteGet**](AuthApi.md#authSiteGet) | **GET** /auth/site | Get a list of sites
[**authSiteIdDelete**](AuthApi.md#authSiteIdDelete) | **DELETE** /auth/site/{id} | Remove a site
[**authSiteIdGet**](AuthApi.md#authSiteIdGet) | **GET** /auth/site/{id} | Get information about specified site
[**authSiteIdUserGet**](AuthApi.md#authSiteIdUserGet) | **GET** /auth/site/{id}/user | Get the list of site users
[**authSiteIdUserNameDelete**](AuthApi.md#authSiteIdUserNameDelete) | **DELETE** /auth/site/{id}/user/{name} | Remove user from a site
[**authSiteIdUserNamePost**](AuthApi.md#authSiteIdUserNamePost) | **POST** /auth/site/{id}/user/{name} | Add user to a site
[**authSitePost**](AuthApi.md#authSitePost) | **POST** /auth/site | Create a new site
[**authUserGet**](AuthApi.md#authUserGet) | **GET** /auth/user | Get a list of users
[**authUserNameClientClientNameDelete**](AuthApi.md#authUserNameClientClientNameDelete) | **DELETE** /auth/user/{name}/client/{clientName} | Remove client access from user
[**authUserNameClientClientNamePost**](AuthApi.md#authUserNameClientClientNamePost) | **POST** /auth/user/{name}/client/{clientName} | Add client access to user
[**authUserNameClientGet**](AuthApi.md#authUserNameClientGet) | **GET** /auth/user/{name}/client | Get the list of clients to which a user has been granted access
[**authUserNameDelete**](AuthApi.md#authUserNameDelete) | **DELETE** /auth/user/{name} | Remove a user
[**authUserNameGet**](AuthApi.md#authUserNameGet) | **GET** /auth/user/{name} | Get information about specified user
[**authUserNamePermissionGet**](AuthApi.md#authUserNamePermissionGet) | **GET** /auth/user/{name}/permission | Get the list of user permission
[**authUserNamePermissionPermissionDelete**](AuthApi.md#authUserNamePermissionPermissionDelete) | **DELETE** /auth/user/{name}/permission/{permission} | Remove permission from a user
[**authUserNamePermissionPermissionPost**](AuthApi.md#authUserNamePermissionPermissionPost) | **POST** /auth/user/{name}/permission/{permission} | Add permission to a user
[**authUserNameRoleGet**](AuthApi.md#authUserNameRoleGet) | **GET** /auth/user/{name}/role | Get the list of the roles which have been assigned to a user
[**authUserNameRoleRoleNameDelete**](AuthApi.md#authUserNameRoleRoleNameDelete) | **DELETE** /auth/user/{name}/role/{roleName} | Remove role from a user
[**authUserNameRoleRoleNamePost**](AuthApi.md#authUserNameRoleRoleNamePost) | **POST** /auth/user/{name}/role/{roleName} | Assign role to user
[**authUserNameTokenTokenNameDelete**](AuthApi.md#authUserNameTokenTokenNameDelete) | **DELETE** /auth/user/{name}/token/{tokenName} | Remove static access token from user
[**authUserNameTokenTokenNamePost**](AuthApi.md#authUserNameTokenTokenNamePost) | **POST** /auth/user/{name}/token/{tokenName} | Add static access token to user
[**authUserPost**](AuthApi.md#authUserPost) | **POST** /auth/user | Create a new user



## authPermissionGet

> PermissionList authPermissionGet(opts)

Get a list of all permissions

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56 // Number | The zero-based index of the last item to return.
};
apiInstance.authPermissionGet(opts).then((data) => {
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

[**PermissionList**](PermissionList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRoleGet

> RoleList authRoleGet(opts)

Get a list of roles

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56 // Number | The zero-based index of the last item to return.
};
apiInstance.authRoleGet(opts).then((data) => {
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

[**RoleList**](RoleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRoleNameClientClientNameDelete

> ApiResponse authRoleNameClientClientNameDelete(name, clientName)

Remove client from a role

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | Role Name
let clientName = "clientName_example"; // String | Client that will have this role removed from it
apiInstance.authRoleNameClientClientNameDelete(name, clientName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Role Name | 
 **clientName** | **String**| Client that will have this role removed from it | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRoleNameClientClientNamePost

> ApiResponse authRoleNameClientClientNamePost(name, clientName)

Add client to a role

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | Role Name
let clientName = "clientName_example"; // String | Client to add
apiInstance.authRoleNameClientClientNamePost(name, clientName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Role Name | 
 **clientName** | **String**| Client to add | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRoleNameClientGet

> RefList authRoleNameClientGet(name)

Get the list of clients for a role

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | Role Name
apiInstance.authRoleNameClientGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Role Name | 

### Return type

[**RefList**](RefList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRoleNameDelete

> ApiResponse authRoleNameDelete(name)

Remove a role

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | Name of role to delete
apiInstance.authRoleNameDelete(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of role to delete | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRoleNameGet

> RoleList authRoleNameGet(name)

Get information about a specific role

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | The role to retrieve
apiInstance.authRoleNameGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The role to retrieve | 

### Return type

[**RoleList**](RoleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRoleNamePermissionDelete

> ApiResponse authRoleNamePermissionDelete(name, permission)

Remove permission from a role

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | Role to alter
let permission = "permission_example"; // String | Permission to remove from role
apiInstance.authRoleNamePermissionDelete(name, permission).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Role to alter | 
 **permission** | **String**| Permission to remove from role | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRoleNamePermissionGet

> PermissionList authRoleNamePermissionGet(name)

Get the list of permissions granted by a specific role

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | Role Name
apiInstance.authRoleNamePermissionGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Role Name | 

### Return type

[**PermissionList**](PermissionList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRoleNamePermissionPost

> ApiResponse authRoleNamePermissionPost(name, permission)

Add permission to a role

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | Role to alter
let permission = "permission_example"; // String | Permission to add
apiInstance.authRoleNamePermissionPost(name, permission).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Role to alter | 
 **permission** | **String**| Permission to add | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authRolePost

> ApiResponse authRolePost(role)

Create a new role

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let role = new JourneyOrchestrationApi.Role(); // Role | 
apiInstance.authRolePost(role).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | [**Role**](Role.md)|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authSiteGet

> SiteList authSiteGet(opts)

Get a list of sites

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56 // Number | The zero-based index of the last item to return.
};
apiInstance.authSiteGet(opts).then((data) => {
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

[**SiteList**](SiteList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authSiteIdDelete

> ApiResponse authSiteIdDelete(id)

Remove a site

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let id = "id_example"; // String | Site identifer
apiInstance.authSiteIdDelete(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Site identifer | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authSiteIdGet

> SiteList authSiteIdGet(id)

Get information about specified site

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let id = "id_example"; // String | The site to retrieve
apiInstance.authSiteIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The site to retrieve | 

### Return type

[**SiteList**](SiteList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authSiteIdUserGet

> RefList authSiteIdUserGet(id)

Get the list of site users

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let id = "id_example"; // String | Site identifier
apiInstance.authSiteIdUserGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Site identifier | 

### Return type

[**RefList**](RefList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authSiteIdUserNameDelete

> ApiResponse authSiteIdUserNameDelete(id, name)

Remove user from a site

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let id = "id_example"; // String | Site identifier
let name = "name_example"; // String | User to remove from site
apiInstance.authSiteIdUserNameDelete(id, name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Site identifier | 
 **name** | **String**| User to remove from site | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authSiteIdUserNamePost

> ApiResponse authSiteIdUserNamePost(id, name)

Add user to a site

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let id = "id_example"; // String | Site identifier
let name = "name_example"; // String | User Name
apiInstance.authSiteIdUserNamePost(id, name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Site identifier | 
 **name** | **String**| User Name | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authSitePost

> ApiResponse authSitePost(body)

Create a new site

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let body = {"extendedInfo":"a site","siteId":"abcde-12345"}; // String | A block of JSON describing the resource to create
apiInstance.authSitePost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| A block of JSON describing the resource to create | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authUserGet

> UserList authUserGet(opts)

Get a list of users

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'getAllDetails': true // Boolean | Do we want to retrieve details of user tokens. (default) false will return only token names
};
apiInstance.authUserGet(opts).then((data) => {
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
 **getAllDetails** | **Boolean**| Do we want to retrieve details of user tokens. (default) false will return only token names | [optional] 

### Return type

[**UserList**](UserList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameClientClientNameDelete

> ApiResponse authUserNameClientClientNameDelete(name, clientName)

Remove client access from user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | user Name
let clientName = "clientName_example"; // String | Client to remove from user
apiInstance.authUserNameClientClientNameDelete(name, clientName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| user Name | 
 **clientName** | **String**| Client to remove from user | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameClientClientNamePost

> ApiResponse authUserNameClientClientNamePost(name, clientName)

Add client access to user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | User Name
let clientName = "clientName_example"; // String | Client name
apiInstance.authUserNameClientClientNamePost(name, clientName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| User Name | 
 **clientName** | **String**| Client name | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameClientGet

> RefList authUserNameClientGet(name)

Get the list of clients to which a user has been granted access

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | user Name
apiInstance.authUserNameClientGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| user Name | 

### Return type

[**RefList**](RefList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameDelete

> ApiResponse authUserNameDelete(name)

Remove a user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | user Name
apiInstance.authUserNameDelete(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| user Name | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameGet

> UserList authUserNameGet(name, opts)

Get information about specified user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | The user to retrieve
let opts = {
  'getAllDetails': true // Boolean | Do we want to retrieve details of user tokens. (default) false will return only token names
};
apiInstance.authUserNameGet(name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The user to retrieve | 
 **getAllDetails** | **Boolean**| Do we want to retrieve details of user tokens. (default) false will return only token names | [optional] 

### Return type

[**UserList**](UserList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNamePermissionGet

> PermissionList authUserNamePermissionGet(name)

Get the list of user permission

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | user Name
apiInstance.authUserNamePermissionGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| user Name | 

### Return type

[**PermissionList**](PermissionList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNamePermissionPermissionDelete

> ApiResponse authUserNamePermissionPermissionDelete(name, permission)

Remove permission from a user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | user Name
let permission = "permission_example"; // String | Permission to remove from user
apiInstance.authUserNamePermissionPermissionDelete(name, permission).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| user Name | 
 **permission** | **String**| Permission to remove from user | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNamePermissionPermissionPost

> ApiResponse authUserNamePermissionPermissionPost(name, permission)

Add permission to a user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | User Name
let permission = "permission_example"; // String | Permission to add to user
apiInstance.authUserNamePermissionPermissionPost(name, permission).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| User Name | 
 **permission** | **String**| Permission to add to user | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameRoleGet

> RefList authUserNameRoleGet(name)

Get the list of the roles which have been assigned to a user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | user Name
apiInstance.authUserNameRoleGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| user Name | 

### Return type

[**RefList**](RefList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameRoleRoleNameDelete

> ApiResponse authUserNameRoleRoleNameDelete(name, roleName)

Remove role from a user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | user Name
let roleName = "roleName_example"; // String | Role to remove from user
apiInstance.authUserNameRoleRoleNameDelete(name, roleName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| user Name | 
 **roleName** | **String**| Role to remove from user | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameRoleRoleNamePost

> ApiResponse authUserNameRoleRoleNamePost(name, roleName)

Assign role to user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | user Name
let roleName = "roleName_example"; // String | Role to add
apiInstance.authUserNameRoleRoleNamePost(name, roleName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| user Name | 
 **roleName** | **String**| Role to add | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameTokenTokenNameDelete

> ApiResponse authUserNameTokenTokenNameDelete(name, tokenName)

Remove static access token from user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | user Name
let tokenName = "tokenName_example"; // String | Descriptive name for the token
apiInstance.authUserNameTokenTokenNameDelete(name, tokenName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| user Name | 
 **tokenName** | **String**| Descriptive name for the token | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserNameTokenTokenNamePost

> ApiResponse authUserNameTokenTokenNamePost(name, tokenName)

Add static access token to user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let name = "name_example"; // String | User Name
let tokenName = "tokenName_example"; // String | Descriptive name for the token
apiInstance.authUserNameTokenTokenNamePost(name, tokenName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| User Name | 
 **tokenName** | **String**| Descriptive name for the token | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authUserPost

> ApiResponse authUserPost(body)

Create a new user

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.AuthApi();
let body = {"name":"name"}; // String | A block of JSON describing the resource to create
apiInstance.authUserPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| A block of JSON describing the resource to create | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

