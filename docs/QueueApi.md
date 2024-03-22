# JourneyOrchestrationApi.QueueApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queueClientDelete**](QueueApi.md#queueClientDelete) | **DELETE** /queue/{client}/ | Delete all queues that this client owns.
[**queueClientGet**](QueueApi.md#queueClientGet) | **GET** /queue/{client}/ | Get all of the queues for a specific client, across all targets.
[**queueClientTargetDelete**](QueueApi.md#queueClientTargetDelete) | **DELETE** /queue/{client}/{target}/ | Delete all of the queues within a specific target for the given client
[**queueClientTargetGet**](QueueApi.md#queueClientTargetGet) | **GET** /queue/{client}/{target}/ | Get details about all of the queues within a specific target for this client.
[**queueClientTargetQueueNameAckPost**](QueueApi.md#queueClientTargetQueueNameAckPost) | **POST** /queue/{client}/{target}/{queueName}/ack | Remove a set of messages from a given queue.
[**queueClientTargetQueueNameDelete**](QueueApi.md#queueClientTargetQueueNameDelete) | **DELETE** /queue/{client}/{target}/{queueName} | Delete a specific named queue
[**queueClientTargetQueueNameGet**](QueueApi.md#queueClientTargetQueueNameGet) | **GET** /queue/{client}/{target}/{queueName} | Gets information about a specific named queue.
[**queueClientTargetQueueNameMessagesGet**](QueueApi.md#queueClientTargetQueueNameMessagesGet) | **GET** /queue/{client}/{target}/{queueName}/messages | Gets one or more messages from the queue
[**queueClientTargetQueueNameMessagesPost**](QueueApi.md#queueClientTargetQueueNameMessagesPost) | **POST** /queue/{client}/{target}/{queueName}/messages | Add a message to the named queue
[**queueClientTargetQueueNamePost**](QueueApi.md#queueClientTargetQueueNamePost) | **POST** /queue/{client}/{target}/{queueName} | Create a new queue, passing a block of JSON that is associated with the queue
[**queueClientTargetQueueNamePurgePost**](QueueApi.md#queueClientTargetQueueNamePurgePost) | **POST** /queue/{client}/{target}/{queueName}/purge | Remove all messages from the named queue
[**queueClientTargetQueueNamePut**](QueueApi.md#queueClientTargetQueueNamePut) | **PUT** /queue/{client}/{target}/{queueName} | Edit an existing queue
[**queueGet**](QueueApi.md#queueGet) | **GET** /queue | Get information about all queues on the server.



## queueClientDelete

> ApiResponse queueClientDelete(client)

Delete all queues that this client owns.

Delete all queues that this client owns, across all targets.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
apiInstance.queueClientDelete(client).then((data) => {
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


## queueClientGet

> QueueResponse queueClientGet(client, opts)

Get all of the queues for a specific client, across all targets.

Find the full details of all queues that this client owns, across all targets

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'includeStatistics': true // Boolean | Should the results include the execution statistics for each rule? Default true
};
apiInstance.queueClientGet(client, opts).then((data) => {
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
 **includeStatistics** | **Boolean**| Should the results include the execution statistics for each rule? Default true | [optional] 

### Return type

[**QueueResponse**](QueueResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queueClientTargetDelete

> ApiResponse queueClientTargetDelete(client, target)

Delete all of the queues within a specific target for the given client

Delete all of the queues within a specific target for the given client

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
apiInstance.queueClientTargetDelete(client, target).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queueClientTargetGet

> QueueResponse queueClientTargetGet(client, target, opts)

Get details about all of the queues within a specific target for this client.

Get details about all of the queues within a specific target for this client.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'includeStatistics': true // Boolean | Should the results include the execution statistics for each rule? Default true
};
apiInstance.queueClientTargetGet(client, target, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **includeStatistics** | **Boolean**| Should the results include the execution statistics for each rule? Default true | [optional] 

### Return type

[**QueueResponse**](QueueResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queueClientTargetQueueNameAckPost

> QueueMessageResponse queueClientTargetQueueNameAckPost(client, target, queueName, opts)

Remove a set of messages from a given queue.

If the message was read with &#39;deleteAfterRead&#x3D;false&#39; then you must call this API to remove the message   from the queue after your code has successfully processed it

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | The target in which the queue is located
let queueName = "''"; // String | The name of queue which contains the message you want to acknowledge
let opts = {
  'ackMessage': [new JourneyOrchestrationApi.AckMessage()] // [AckMessage] | 
};
apiInstance.queueClientTargetQueueNameAckPost(client, target, queueName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| The target in which the queue is located | 
 **queueName** | **String**| The name of queue which contains the message you want to acknowledge | [default to &#39;&#39;]
 **ackMessage** | [**[AckMessage]**](AckMessage.md)|  | [optional] 

### Return type

[**QueueMessageResponse**](QueueMessageResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queueClientTargetQueueNameDelete

> ApiResponse queueClientTargetQueueNameDelete(client, target, queueName)

Delete a specific named queue

Delete a queue and all the messages within it

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let queueName = "queueName_example"; // String | The name of the queue that should be deleted.
apiInstance.queueClientTargetQueueNameDelete(client, target, queueName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **queueName** | **String**| The name of the queue that should be deleted. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queueClientTargetQueueNameGet

> QueueResponse queueClientTargetQueueNameGet(client, target, queueName, opts)

Gets information about a specific named queue.

Information returned is filtered by user permissions.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let queueName = "''"; // String | The name of queue that you want to get the information for.
let opts = {
  'includeStatistics': true // Boolean | Should the results include the execution statistics for each rule? Default true
};
apiInstance.queueClientTargetQueueNameGet(client, target, queueName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **queueName** | **String**| The name of queue that you want to get the information for. | [default to &#39;&#39;]
 **includeStatistics** | **Boolean**| Should the results include the execution statistics for each rule? Default true | [optional] 

### Return type

[**QueueResponse**](QueueResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queueClientTargetQueueNameMessagesGet

> QueueMessageResponse queueClientTargetQueueNameMessagesGet(client, target, queueName, opts)

Gets one or more messages from the queue

Return a JSON array containing zero or more messages

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - the target of where the queue is stored.
let queueName = "queueName_example"; // String | The name of the queue to read messages from
let opts = {
  'numberOfMessages': 56, // Number | The number of messages to read in this request. Default 1. If messages are bundled together then more   messages may be returned than requested. If deleteAfterRead is false then the maximum is 10, and you must call `POST   /queue/{client}/{target}/{queueName}/ack` on the current messages before any more will be available to read
  'maxWaitTimeInSeconds': 56, // Number | If the queue currently contains fewer than the numberOfMessages requested, how long (in seconds)   should we wait for new messages to arrive? Default 0
  'deleteAfterRead': true, // Boolean | Should the messages being read be automatically removed from the queue? Default true. If this is   false then the `POST /queue/{client}/{target}/{queueName}/ack` API must be called with the message details once the   data has been processed
  'lock': "lock_example" // String | If the queue is locked, you must provide the key in this parameter
};
apiInstance.queueClientTargetQueueNameMessagesGet(client, target, queueName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - the target of where the queue is stored. | 
 **queueName** | **String**| The name of the queue to read messages from | 
 **numberOfMessages** | **Number**| The number of messages to read in this request. Default 1. If messages are bundled together then more   messages may be returned than requested. If deleteAfterRead is false then the maximum is 10, and you must call &#x60;POST   /queue/{client}/{target}/{queueName}/ack&#x60; on the current messages before any more will be available to read | [optional] 
 **maxWaitTimeInSeconds** | **Number**| If the queue currently contains fewer than the numberOfMessages requested, how long (in seconds)   should we wait for new messages to arrive? Default 0 | [optional] 
 **deleteAfterRead** | **Boolean**| Should the messages being read be automatically removed from the queue? Default true. If this is   false then the &#x60;POST /queue/{client}/{target}/{queueName}/ack&#x60; API must be called with the message details once the   data has been processed | [optional] 
 **lock** | **String**| If the queue is locked, you must provide the key in this parameter | [optional] 

### Return type

[**QueueMessageResponse**](QueueMessageResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queueClientTargetQueueNameMessagesPost

> QueuePostMessageResponse queueClientTargetQueueNameMessagesPost(client, target, queueName, body)

Add a message to the named queue

Used for posting messages to a queue. The data passed in the message is not validated in any way

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - the target of where the queue is stored.
let queueName = "queueName_example"; // String | The name of the queue that the message will be posted to..
let body = "body_example"; // String | The message that should be posted on to the queue.
apiInstance.queueClientTargetQueueNameMessagesPost(client, target, queueName, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| client name | 
 **target** | [**TargetEnum**](.md)| Target - the target of where the queue is stored. | 
 **queueName** | **String**| The name of the queue that the message will be posted to.. | 
 **body** | **String**| The message that should be posted on to the queue. | 

### Return type

[**QueuePostMessageResponse**](QueuePostMessageResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queueClientTargetQueueNamePost

> ResourceAndStatusResponse queueClientTargetQueueNamePost(client, target, queueName, queueDetails)

Create a new queue, passing a block of JSON that is associated with the queue

Used for creating a new queue.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is what the queue will be tagged with.
let queueName = "queueName_example"; // String | The name of the queue that should be created.
let queueDetails = {"fifo":true,"queueBackend":"sqs","schema":{"Schema1":[{"isSystem":true,"streamKey":"Visitor","indexLevel":0,"storageHint":null,"dataType":"text","name":"cxid","width":36,"required":false},{"isSystem":true,"streamKey":null,"indexLevel":0,"storageHint":null,"dataType":"integer","name":"is known","width":1,"required":false}],"Schema2":[{"isSystem":true,"streamKey":null,"indexLevel":0,"storageHint":null,"dataType":"text","name":"existing cxid","width":36,"required":false},{"isSystem":true,"streamKey":null,"indexLevel":0,"storageHint":null,"dataType":"text","name":"new cxid","width":36,"required":false}]}}; // QueueDetails | A block of JSON that contains information about the contents of the messages in the queue
apiInstance.queueClientTargetQueueNamePost(client, target, queueName, queueDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is what the queue will be tagged with. | 
 **queueName** | **String**| The name of the queue that should be created. | 
 **queueDetails** | [**QueueDetails**](QueueDetails.md)| A block of JSON that contains information about the contents of the messages in the queue | 

### Return type

[**ResourceAndStatusResponse**](ResourceAndStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queueClientTargetQueueNamePurgePost

> ApiResponse queueClientTargetQueueNamePurgePost(client, target, queueName)

Remove all messages from the named queue

Used to clear messages from a queue.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - the target of where the queue is stored.
let queueName = "queueName_example"; // String | The name of the queue that the message will be posted to..
apiInstance.queueClientTargetQueueNamePurgePost(client, target, queueName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - the target of where the queue is stored. | 
 **queueName** | **String**| The name of the queue that the message will be posted to.. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queueClientTargetQueueNamePut

> ResourceAndStatusResponse queueClientTargetQueueNamePut(client, target, queueName, queueDetails)

Edit an existing queue

Edit the block of JSON that is associated with the queue. This is only permitted if the queue is empty   (has zero messages)

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let client = "client_example"; // String | Client name
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is what the queue will be tagged with.
let queueName = "queueName_example"; // String | The name of the queue that should be created.
let queueDetails = {"fifo":true,"queueBackend":"sqs","schema":{"Schema1":[{"isSystem":true,"streamKey":"Visitor","indexLevel":0,"storageHint":null,"dataType":"text","name":"cxid","width":36,"required":false},{"isSystem":true,"streamKey":null,"indexLevel":0,"storageHint":null,"dataType":"integer","name":"is known","width":1,"required":false}],"Schema2":[{"isSystem":true,"streamKey":null,"indexLevel":0,"storageHint":null,"dataType":"text","name":"existing cxid","width":36,"required":false},{"isSystem":true,"streamKey":null,"indexLevel":0,"storageHint":null,"dataType":"text","name":"new cxid","width":36,"required":false}]}}; // QueueDetails | A block of JSON that contains information about the contents of the messages in the queue
apiInstance.queueClientTargetQueueNamePut(client, target, queueName, queueDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**| Client name | 
 **target** | [**TargetEnum**](.md)| Target - is what the queue will be tagged with. | 
 **queueName** | **String**| The name of the queue that should be created. | 
 **queueDetails** | [**QueueDetails**](QueueDetails.md)| A block of JSON that contains information about the contents of the messages in the queue | 

### Return type

[**ResourceAndStatusResponse**](ResourceAndStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queueGet

> QueueResponse queueGet(opts)

Get information about all queues on the server.

Get information about all queues that this user can access.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.QueueApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'includeStatistics': true // Boolean | Should the results include the execution statistics for each rule? Default true
};
apiInstance.queueGet(opts).then((data) => {
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
 **includeStatistics** | **Boolean**| Should the results include the execution statistics for each rule? Default true | [optional] 

### Return type

[**QueueResponse**](QueueResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

