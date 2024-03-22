# JourneyOrchestrationApi.ClusterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusterDecommissionDelete**](ClusterApi.md#clusterDecommissionDelete) | **DELETE** /cluster/decommission | Remove this node from the cluster
[**clusterDelete**](ClusterApi.md#clusterDelete) | **DELETE** /cluster | Removes from the cluster a down node that has not been seen for the longest
[**clusterDiscoverPost**](ClusterApi.md#clusterDiscoverPost) | **POST** /cluster/discover | Ask the cluster to rerun the discovery process.
[**clusterFlushPost**](ClusterApi.md#clusterFlushPost) | **POST** /cluster/flush | Make sure all data in internal caches across the entire cluster are written to disk
[**clusterGet**](ClusterApi.md#clusterGet) | **GET** /cluster | Find out what instances are in the cluster
[**clusterPost**](ClusterApi.md#clusterPost) | **POST** /cluster | Register an instance with the cluster
[**clusterPut**](ClusterApi.md#clusterPut) | **PUT** /cluster | Update an advanced cluster setting
[**clusterReregisterPost**](ClusterApi.md#clusterReregisterPost) | **POST** /cluster/reregister | Make this note reregister itself with all the other nodes in the cluster without requiring a restart
[**clusterStreamGet**](ClusterApi.md#clusterStreamGet) | **GET** /cluster/stream | Find out the streaming status of an instance in the cluster
[**clusterStreamThroughputGet**](ClusterApi.md#clusterStreamThroughputGet) | **GET** /cluster/stream/throughput | Find out the current stream throughput (Mb per sec) of an instance in the cluster
[**clusterStreamThroughputPost**](ClusterApi.md#clusterStreamThroughputPost) | **POST** /cluster/stream/throughput | Set the current stream throughput (Mb per sec) of an instance in the cluster



## clusterDecommissionDelete

> ClusterResponse clusterDecommissionDelete(targetnode)

Remove this node from the cluster

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
let targetnode = "targetnode_example"; // String | Must match the private IP address of the node, so there is no ambiguity when decommissioning
apiInstance.clusterDecommissionDelete(targetnode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetnode** | **String**| Must match the private IP address of the node, so there is no ambiguity when decommissioning | 

### Return type

[**ClusterResponse**](ClusterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clusterDelete

> ClusterResponse clusterDelete()

Removes from the cluster a down node that has not been seen for the longest

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
apiInstance.clusterDelete().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ClusterResponse**](ClusterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clusterDiscoverPost

> ClusterResponse clusterDiscoverPost()

Ask the cluster to rerun the discovery process.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
apiInstance.clusterDiscoverPost().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ClusterResponse**](ClusterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clusterFlushPost

> ApiResponse clusterFlushPost()

Make sure all data in internal caches across the entire cluster are written to disk

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
apiInstance.clusterFlushPost().then((data) => {
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


## clusterGet

> ClusterResponse clusterGet(opts)

Find out what instances are in the cluster

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
let opts = {
  'update': true, // Boolean | Also ping the other instances in the cluster to check that they are present.
  'repair': true, // Boolean | Request an immediate repair so this instance will definitely contain the same rules, templates, etc   as the other instances in this cluster. Only works if all instances are up
  'includeSettings': true // Boolean | Include extended details
};
apiInstance.clusterGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update** | **Boolean**| Also ping the other instances in the cluster to check that they are present. | [optional] 
 **repair** | **Boolean**| Request an immediate repair so this instance will definitely contain the same rules, templates, etc   as the other instances in this cluster. Only works if all instances are up | [optional] 
 **includeSettings** | **Boolean**| Include extended details | [optional] 

### Return type

[**ClusterResponse**](ClusterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clusterPost

> ClusterResponse clusterPost(opts)

Register an instance with the cluster

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
let opts = {
  'cluster': new JourneyOrchestrationApi.Cluster() // Cluster | 
};
apiInstance.clusterPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster** | [**Cluster**](Cluster.md)|  | [optional] 

### Return type

[**ClusterResponse**](ClusterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clusterPut

> ApiResponse clusterPut(opts)

Update an advanced cluster setting

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
let opts = {
  'clusterSetting': new JourneyOrchestrationApi.ClusterSetting() // ClusterSetting | 
};
apiInstance.clusterPut(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterSetting** | [**ClusterSetting**](ClusterSetting.md)|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clusterReregisterPost

> ClusterResponse clusterReregisterPost(opts)

Make this note reregister itself with all the other nodes in the cluster without requiring a restart

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
let opts = {
  'body': "body_example" // String | Optional address of one seed node to register with. Same syntax as seed parameter in web.xml,   ipaddress:port
};
apiInstance.clusterReregisterPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| Optional address of one seed node to register with. Same syntax as seed parameter in web.xml,   ipaddress:port | [optional] 

### Return type

[**ClusterResponse**](ClusterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/text
- **Accept**: application/json


## clusterStreamGet

> ClusterStreamResponse clusterStreamGet(opts)

Find out the streaming status of an instance in the cluster

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
let opts = {
  'targetnode': "targetnode_example" // String | Which instance (identified by host name) do you want to query? Leave blank to pick an instance   randomly
};
apiInstance.clusterStreamGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetnode** | **String**| Which instance (identified by host name) do you want to query? Leave blank to pick an instance   randomly | [optional] 

### Return type

[**ClusterStreamResponse**](ClusterStreamResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clusterStreamThroughputGet

> ClusterThroughputResponse clusterStreamThroughputGet(opts)

Find out the current stream throughput (Mb per sec) of an instance in the cluster

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
let opts = {
  'targetnode': "targetnode_example" // String | Which instance (identified by host name) do you want to query? Leave blank to pick an instance   randomly
};
apiInstance.clusterStreamThroughputGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetnode** | **String**| Which instance (identified by host name) do you want to query? Leave blank to pick an instance   randomly | [optional] 

### Return type

[**ClusterThroughputResponse**](ClusterThroughputResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clusterStreamThroughputPost

> ClusterThroughputResponse clusterStreamThroughputPost(throughput, opts)

Set the current stream throughput (Mb per sec) of an instance in the cluster

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.ClusterApi();
let throughput = 50; // Number | The maximum data rate in Mb/s that this node can send across all streams.
let opts = {
  'targetnode': "targetnode_example" // String | Which instance (identified by host name) do you want to query? Leave blank to pick an instance   randomly
};
apiInstance.clusterStreamThroughputPost(throughput, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **throughput** | **Number**| The maximum data rate in Mb/s that this node can send across all streams. | [default to 50]
 **targetnode** | **String**| Which instance (identified by host name) do you want to query? Leave blank to pick an instance   randomly | [optional] 

### Return type

[**ClusterThroughputResponse**](ClusterThroughputResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

