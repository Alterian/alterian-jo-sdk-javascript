# JourneyOrchestrationApi.RulesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadRuleTargetClientRulenameGet**](RulesApi.md#downloadRuleTargetClientRulenameGet) | **GET** /download/rule/{target}/{client}/{rulename} | Download the rule file (KTR) for a running rule
[**ruleGet**](RulesApi.md#ruleGet) | **GET** /rule | Get information about all published rules on the server
[**ruleTargetClientDelete**](RulesApi.md#ruleTargetClientDelete) | **DELETE** /rule/{target}/{client} | Unpublish all rules that this client has published to the given target.
[**ruleTargetClientDesignerPut**](RulesApi.md#ruleTargetClientDesignerPut) | **PUT** /rule/{target}/{client}/designer | Validate a new Rule Designer JSON
[**ruleTargetClientGet**](RulesApi.md#ruleTargetClientGet) | **GET** /rule/{target}/{client} | Get information about all rules published by this client to the given target.
[**ruleTargetClientRulenameAutoloaderGet**](RulesApi.md#ruleTargetClientRulenameAutoloaderGet) | **GET** /rule/{target}/{client}/{rulename}/autoloader | Get the autoloader JSON for a specific rule. This is normally used by the Rule plugin within Spoon
[**ruleTargetClientRulenameAutoloaderPost**](RulesApi.md#ruleTargetClientRulenameAutoloaderPost) | **POST** /rule/{target}/{client}/{rulename}/autoloader | Save the JSON for an autoloader rule
[**ruleTargetClientRulenameCopytoPost**](RulesApi.md#ruleTargetClientRulenameCopytoPost) | **POST** /rule/{target}/{client}/{rulename}/copyto | Copy this rule to the given target.
[**ruleTargetClientRulenameDatagridDataGridNameGet**](RulesApi.md#ruleTargetClientRulenameDatagridDataGridNameGet) | **GET** /rule/{target}/{client}/{rulename}/datagrid/{dataGridName} | Get information about the data grid for a specific, published rule.
[**ruleTargetClientRulenameDatagridDataGridNamePost**](RulesApi.md#ruleTargetClientRulenameDatagridDataGridNamePost) | **POST** /rule/{target}/{client}/{rulename}/datagrid/{dataGridName} | Enter new data for an exisiting data grid and update
[**ruleTargetClientRulenameDatagridDataGridNameRowsPost**](RulesApi.md#ruleTargetClientRulenameDatagridDataGridNameRowsPost) | **POST** /rule/{target}/{client}/{rulename}/datagrid/{dataGridName}/rows | Add new data grid rows to a rule&#39;s Data Grid
[**ruleTargetClientRulenameDelete**](RulesApi.md#ruleTargetClientRulenameDelete) | **DELETE** /rule/{target}/{client}/{rulename} | Unpublish a specific rule.
[**ruleTargetClientRulenameDesignerGet**](RulesApi.md#ruleTargetClientRulenameDesignerGet) | **GET** /rule/{target}/{client}/{rulename}/designer | Get the rule designer JSON for a specific rule. This is normally used by the Rule designer user interface
[**ruleTargetClientRulenameDesignerPost**](RulesApi.md#ruleTargetClientRulenameDesignerPost) | **POST** /rule/{target}/{client}/{rulename}/designer | Save or validate the rule designer JSON for a rule
[**ruleTargetClientRulenameDesignerPut**](RulesApi.md#ruleTargetClientRulenameDesignerPut) | **PUT** /rule/{target}/{client}/{rulename}/designer | Add a new rule via the rule designer JSON.
[**ruleTargetClientRulenameGet**](RulesApi.md#ruleTargetClientRulenameGet) | **GET** /rule/{target}/{client}/{rulename} | Get information about one specific, published rule.
[**ruleTargetClientRulenameParameterPost**](RulesApi.md#ruleTargetClientRulenameParameterPost) | **POST** /rule/{target}/{client}/{rulename}/parameter | update the default values for parameters.
[**ruleTargetClientRulenamePauseDelete**](RulesApi.md#ruleTargetClientRulenamePauseDelete) | **DELETE** /rule/{target}/{client}/{rulename}/pause | Pause this rule
[**ruleTargetClientRulenamePost**](RulesApi.md#ruleTargetClientRulenamePost) | **POST** /rule/{target}/{client}/{rulename} | Start or restart one specific, published rule.
[**ruleTargetClientRulenamePriorityWeightingPost**](RulesApi.md#ruleTargetClientRulenamePriorityWeightingPost) | **POST** /rule/{target}/{client}/{rulename}/priorityWeighting | Update the rule&#39;s priority weighting
[**ruleTargetClientRulenameResetDelete**](RulesApi.md#ruleTargetClientRulenameResetDelete) | **DELETE** /rule/{target}/{client}/{rulename}/reset | Perform extended actions to rules
[**ruleTargetClientRulenameSampleDataGet**](RulesApi.md#ruleTargetClientRulenameSampleDataGet) | **GET** /rule/{target}/{client}/{rulename}/sampleData | Get JSON Schema representation of the data expected by the rule
[**ruleTargetClientRulenameSnoozePost**](RulesApi.md#ruleTargetClientRulenameSnoozePost) | **POST** /rule/{target}/{client}/{rulename}/snooze | Make this rule start snoozing
[**ruleTargetClientRulenameTestDataDelete**](RulesApi.md#ruleTargetClientRulenameTestDataDelete) | **DELETE** /rule/{target}/{client}/{rulename}/testData | Delete all test data
[**ruleTargetClientRulenameTestDataGet**](RulesApi.md#ruleTargetClientRulenameTestDataGet) | **GET** /rule/{target}/{client}/{rulename}/testData | Get the rule&#39;s test data and headers information
[**ruleTargetClientRulenameTestDataPost**](RulesApi.md#ruleTargetClientRulenameTestDataPost) | **POST** /rule/{target}/{client}/{rulename}/testData | Add test data to rule
[**ruleTargetGet**](RulesApi.md#ruleTargetGet) | **GET** /rule/{target} | Get information about all rules published by all clients to the given target



## downloadRuleTargetClientRulenameGet

> File downloadRuleTargetClientRulenameGet(target, client, rulename)

Download the rule file (KTR) for a running rule

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.downloadRuleTargetClientRulenameGet(target, client, rulename).then((data) => {
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


## ruleGet

> RuleList ruleGet(opts)

Get information about all published rules on the server

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

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'sortProperty': "sortProperty_example", // String | List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue.
  'sortDescending': "sortDescending_example", // String | List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty
  'createdRuleUrl': "createdRuleUrl_example", // String | The url the rule was published to. Only rule with this url will be returned. In the format of:   target/client/rule_name
  'healthScore': new JourneyOrchestrationApi.HealthScoreTimeFrame(), // HealthScoreTimeFrame | Time Frame for calculating the health score of a rule. Allowed values are hour, day, min
  'includeStatistics': true, // Boolean | Should the results include the execution statistics for each rule? Default true
  'searchText': "searchText_example", // String | Filter results to those which contain this text
  'parameterName': "parameterName_example", // String | Get the report for a specific parameter
  'parameterValue': "parameterValue_example", // String | Get a list of rules which have a specific parameter value
  'templateFilter': "templateFilter_example", // String | Filter to return only rules using specified template
  'includePublic': true, // Boolean | Flag to indicate whether rules from the public client should be included in the results, please use   iClients=public instead
  'checkTemplateLatestVersion': true, // Boolean | Should a check to verify rule has the latest templates version be performed?
  'iClients': ["null"] // [String] | Only include these client(s)
};
apiInstance.ruleGet(opts).then((data) => {
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
 **sortProperty** | **String**| List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue. | [optional] 
 **sortDescending** | **String**| List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty | [optional] 
 **createdRuleUrl** | **String**| The url the rule was published to. Only rule with this url will be returned. In the format of:   target/client/rule_name | [optional] 
 **healthScore** | [**HealthScoreTimeFrame**](.md)| Time Frame for calculating the health score of a rule. Allowed values are hour, day, min | [optional] 
 **includeStatistics** | **Boolean**| Should the results include the execution statistics for each rule? Default true | [optional] 
 **searchText** | **String**| Filter results to those which contain this text | [optional] 
 **parameterName** | **String**| Get the report for a specific parameter | [optional] 
 **parameterValue** | **String**| Get a list of rules which have a specific parameter value | [optional] 
 **templateFilter** | **String**| Filter to return only rules using specified template | [optional] 
 **includePublic** | **Boolean**| Flag to indicate whether rules from the public client should be included in the results, please use   iClients&#x3D;public instead | [optional] 
 **checkTemplateLatestVersion** | **Boolean**| Should a check to verify rule has the latest templates version be performed? | [optional] 
 **iClients** | [**[String]**](String.md)| Only include these client(s) | [optional] 

### Return type

[**RuleList**](RuleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientDelete

> RuleList ruleTargetClientDelete(target, client)

Unpublish all rules that this client has published to the given target.



### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
apiInstance.ruleTargetClientDelete(target, client).then((data) => {
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

### Return type

[**RuleList**](RuleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientDesignerPut

> RuleDesignerResponse ruleTargetClientDesignerPut(target, client, opts)

Validate a new Rule Designer JSON

This will validate a new Rule Designer JSON and return validations if problems detected without saving the rule

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let opts = {
  'ruleData': new JourneyOrchestrationApi.RuleData() // RuleData | Specify the rule designer JSON for the updated rule. Ensure wrapped in {}
};
apiInstance.ruleTargetClientDesignerPut(target, client, opts).then((data) => {
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
 **ruleData** | [**RuleData**](RuleData.md)| Specify the rule designer JSON for the updated rule. Ensure wrapped in {} | [optional] 

### Return type

[**RuleDesignerResponse**](RuleDesignerResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ruleTargetClientGet

> RuleList ruleTargetClientGet(target, client, opts)

Get information about all rules published by this client to the given target.

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

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'sortProperty': "sortProperty_example", // String | List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue.
  'sortDescending': "sortDescending_example", // String | List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty
  'createdRuleUrl': "createdRuleUrl_example", // String | The url the rule was published to. Only rule with this url will be returned. In the format of:   target/client/rule_name
  'healthScore': new JourneyOrchestrationApi.HealthScoreTimeFrame(), // HealthScoreTimeFrame | Time Frame for calculating the health score of a rule. Allowed values are hour, day, min
  'includeStatistics': true, // Boolean | Should the results include the execution statistics for each rule? Default true
  'searchText': "searchText_example", // String | Filter results to those which contain this text
  'parameterName': "parameterName_example", // String | Get the report for a specific parameter
  'parameterValue': "parameterValue_example", // String | Get a list of rules which have a specific parameter value
  'templateFilter': "templateFilter_example", // String | Filter to return only rules using specified template
  'includePublic': true, // Boolean | Flag to indicate whether rules from the public client should be included in the results, please use   iClients=public instead
  'checkTemplateLatestVersion': true, // Boolean | Should a check to verify rule has the latest templates version be performed?
  'iClients': ["null"] // [String] | Only include these client(s)
};
apiInstance.ruleTargetClientGet(target, client, opts).then((data) => {
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
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **sortProperty** | **String**| List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue. | [optional] 
 **sortDescending** | **String**| List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty | [optional] 
 **createdRuleUrl** | **String**| The url the rule was published to. Only rule with this url will be returned. In the format of:   target/client/rule_name | [optional] 
 **healthScore** | [**HealthScoreTimeFrame**](.md)| Time Frame for calculating the health score of a rule. Allowed values are hour, day, min | [optional] 
 **includeStatistics** | **Boolean**| Should the results include the execution statistics for each rule? Default true | [optional] 
 **searchText** | **String**| Filter results to those which contain this text | [optional] 
 **parameterName** | **String**| Get the report for a specific parameter | [optional] 
 **parameterValue** | **String**| Get a list of rules which have a specific parameter value | [optional] 
 **templateFilter** | **String**| Filter to return only rules using specified template | [optional] 
 **includePublic** | **Boolean**| Flag to indicate whether rules from the public client should be included in the results, please use   iClients&#x3D;public instead | [optional] 
 **checkTemplateLatestVersion** | **Boolean**| Should a check to verify rule has the latest templates version be performed? | [optional] 
 **iClients** | [**[String]**](String.md)| Only include these client(s) | [optional] 

### Return type

[**RuleList**](RuleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameAutoloaderGet

> RuleList ruleTargetClientRulenameAutoloaderGet(target, client, rulename)

Get the autoloader JSON for a specific rule. This is normally used by the Rule plugin within Spoon

This will be parsed by the Spoon plugin so that a rule created as an autoloader can be edited

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenameAutoloaderGet(target, client, rulename).then((data) => {
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

[**RuleList**](RuleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameAutoloaderPost

> RuleAndStateResponse ruleTargetClientRulenameAutoloaderPost(target, client, rulename, opts)

Save the JSON for an autoloader rule

This will automatically change the structure and the values within the rule so that it can load the data   required. Tis is normally called by the Rule plugin from within Spoon. Only rules that were created as an autoloader can   be altered.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'body': {key: null} // Object | Specify the autoloader JSON for the updated rule. Ensure wrapped in {}
};
apiInstance.ruleTargetClientRulenameAutoloaderPost(target, client, rulename, opts).then((data) => {
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
 **body** | **Object**| Specify the autoloader JSON for the updated rule. Ensure wrapped in {} | [optional] 

### Return type

[**RuleAndStateResponse**](RuleAndStateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ruleTargetClientRulenameCopytoPost

> RuleAndStateResponse ruleTargetClientRulenameCopytoPost(target, client, rulename, opts)

Copy this rule to the given target.

A copy of this rule will be started in the given target.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'destinationtarget': new JourneyOrchestrationApi.TargetEnum(), // TargetEnum | The target to copy the rule to - must be different from the current target.  Can optionally be   provided in the requestBody as JSON instead if preferred
  'destinationTarget': {"destinationtarget":"dev"} // DestinationTarget | Where the copy will run.
};
apiInstance.ruleTargetClientRulenameCopytoPost(target, client, rulename, opts).then((data) => {
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
 **destinationtarget** | [**TargetEnum**](.md)| The target to copy the rule to - must be different from the current target.  Can optionally be   provided in the requestBody as JSON instead if preferred | [optional] 
 **destinationTarget** | [**DestinationTarget**](DestinationTarget.md)| Where the copy will run. | [optional] 

### Return type

[**RuleAndStateResponse**](RuleAndStateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ruleTargetClientRulenameDatagridDataGridNameGet

> DataGridApiResponse ruleTargetClientRulenameDatagridDataGridNameGet(target, client, rulename, dataGridName, opts)

Get information about the data grid for a specific, published rule.

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

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let dataGridName = "dataGridName_example"; // String | Name of the Data Grid that will be updated
let opts = {
  'format': new JourneyOrchestrationApi.CsvEnum() // CsvEnum | If you want CSV, enter csv here
};
apiInstance.ruleTargetClientRulenameDatagridDataGridNameGet(target, client, rulename, dataGridName, opts).then((data) => {
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
 **dataGridName** | **String**| Name of the Data Grid that will be updated | 
 **format** | [**CsvEnum**](.md)| If you want CSV, enter csv here | [optional] 

### Return type

[**DataGridApiResponse**](DataGridApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameDatagridDataGridNamePost

> RuleAndStateResponse ruleTargetClientRulenameDatagridDataGridNamePost(target, client, rulename, dataGridName, opts)

Enter new data for an exisiting data grid and update

If a rule already has an associated data grid, here it is possible to enter new data and change the grid   contents.  Note, you cannot add or remove columns but you can change their format.  Do a get on the data grid to get the   existing structure.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let dataGridName = "dataGridName_example"; // String | Name of the Data Grid that will be updated
let opts = {
  'dataGridDetails': {"detailsOfDataGrid":{"columnFormat":["","yyyy/MM/dd","","",""],"columnHeader":["busgoal","adate","header","hero","skyscraper"],"columnType":["String","Date","String","String","String"],"data":[["upsell","2010-12-25T12:00:00Z","default.jpg","default.jpg","default.jpg"]]}} // [DataGridDetails] | Specify the data for the updated data grid. Ensure wrapped in {}
};
apiInstance.ruleTargetClientRulenameDatagridDataGridNamePost(target, client, rulename, dataGridName, opts).then((data) => {
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
 **dataGridName** | **String**| Name of the Data Grid that will be updated | 
 **dataGridDetails** | [**[DataGridDetails]**](DataGridDetails.md)| Specify the data for the updated data grid. Ensure wrapped in {} | [optional] 

### Return type

[**RuleAndStateResponse**](RuleAndStateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ruleTargetClientRulenameDatagridDataGridNameRowsPost

> RuleAndStateResponse ruleTargetClientRulenameDatagridDataGridNameRowsPost(target, client, rulename, dataGridName, opts)

Add new data grid rows to a rule&#39;s Data Grid

This is to append new data only. Existing data remains unchanged

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let dataGridName = "dataGridName_example"; // String | Name of the Data Grid that will be updated
let opts = {
  'dataGridRow': {"data":[["upsell","2010-12-25T12:00:00Z","john.jpg","default.jpg","default.jpg"]]} // DataGridRow | Data grid rows
};
apiInstance.ruleTargetClientRulenameDatagridDataGridNameRowsPost(target, client, rulename, dataGridName, opts).then((data) => {
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
 **dataGridName** | **String**| Name of the Data Grid that will be updated | 
 **dataGridRow** | [**DataGridRow**](DataGridRow.md)| Data grid rows | [optional] 

### Return type

[**RuleAndStateResponse**](RuleAndStateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ruleTargetClientRulenameDelete

> RuleList ruleTargetClientRulenameDelete(target, client, rulename)

Unpublish a specific rule.



### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenameDelete(target, client, rulename).then((data) => {
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

[**RuleList**](RuleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameDesignerGet

> RuleList ruleTargetClientRulenameDesignerGet(target, client, rulename)

Get the rule designer JSON for a specific rule. This is normally used by the Rule designer user interface

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

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenameDesignerGet(target, client, rulename).then((data) => {
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

[**RuleList**](RuleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameDesignerPost

> RuleDesignerResponse ruleTargetClientRulenameDesignerPost(target, client, rulename, opts)

Save or validate the rule designer JSON for a rule

This will change the structure and the values within the rule, as defined by the rule designer. If the   new rule structure is not valid and the rule is running then this call will fail unless you are only validating the rule

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'validate': true, // Boolean | Set to 'True' to only validate the JSON (and not save it)
  'ruleData': new JourneyOrchestrationApi.RuleData() // RuleData | Specify the rule designer JSON for the updated rule. Ensure wrapped in {}
};
apiInstance.ruleTargetClientRulenameDesignerPost(target, client, rulename, opts).then((data) => {
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
 **validate** | **Boolean**| Set to &#39;True&#39; to only validate the JSON (and not save it) | [optional] 
 **ruleData** | [**RuleData**](RuleData.md)| Specify the rule designer JSON for the updated rule. Ensure wrapped in {} | [optional] 

### Return type

[**RuleDesignerResponse**](RuleDesignerResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ruleTargetClientRulenameDesignerPut

> ApiResponse ruleTargetClientRulenameDesignerPut(target, client, rulename, opts)

Add a new rule via the rule designer JSON.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'validate': true, // Boolean | Set to 'True' to only validate the JSON (and not save it)
  'download': true, // Boolean | Download the posted rule designer JSON as a .ktr file
  'body': "body_example" // String | Specify the rule designer JSON for the updated rule. Ensure wrapped in {}
};
apiInstance.ruleTargetClientRulenameDesignerPut(target, client, rulename, opts).then((data) => {
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
 **validate** | **Boolean**| Set to &#39;True&#39; to only validate the JSON (and not save it) | [optional] 
 **download** | **Boolean**| Download the posted rule designer JSON as a .ktr file | [optional] 
 **body** | **String**| Specify the rule designer JSON for the updated rule. Ensure wrapped in {} | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ruleTargetClientRulenameGet

> RuleList ruleTargetClientRulenameGet(target, client, rulename, opts)

Get information about one specific, published rule.

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

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'healthScore': new JourneyOrchestrationApi.HealthScoreTimeFrame(), // HealthScoreTimeFrame | Time Frame for calculating the health score of a rule. Allowed values are hour, day, min
  'includeStatistics': true, // Boolean | Should the results include the execution statistics for each rule? Default true
  'checkTemplateLatestVersion': true // Boolean | Should a check to verify rule has the latest templates version be performed?
};
apiInstance.ruleTargetClientRulenameGet(target, client, rulename, opts).then((data) => {
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
 **healthScore** | [**HealthScoreTimeFrame**](.md)| Time Frame for calculating the health score of a rule. Allowed values are hour, day, min | [optional] 
 **includeStatistics** | **Boolean**| Should the results include the execution statistics for each rule? Default true | [optional] 
 **checkTemplateLatestVersion** | **Boolean**| Should a check to verify rule has the latest templates version be performed? | [optional] 

### Return type

[**RuleList**](RuleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameParameterPost

> RuleAndStateResponse ruleTargetClientRulenameParameterPost(target, client, rulename, opts)

update the default values for parameters.

this will update the rule with new default parameters.

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'body': {"parameterName":"parameterValue"} // Object | key value pairs of param name and value. Ensure wrapped in {}
};
apiInstance.ruleTargetClientRulenameParameterPost(target, client, rulename, opts).then((data) => {
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
 **body** | **Object**| key value pairs of param name and value. Ensure wrapped in {} | [optional] 

### Return type

[**RuleAndStateResponse**](RuleAndStateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ruleTargetClientRulenamePauseDelete

> ApiResponse ruleTargetClientRulenamePauseDelete(target, client, rulename)

Pause this rule

Cause this rule to go to &#39;waiting&#39; state.  A rule that is paused will return an error code if it receives   traffic (i.e. is invoked). Restart the rule to allow it to serve traffic again

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenamePauseDelete(target, client, rulename).then((data) => {
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

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenamePost

> ApiResponse ruleTargetClientRulenamePost(target, client, rulename)

Start or restart one specific, published rule.

Cause this rule to be re-read from disk and restarted. If this rule was previously paused then it will be unpaused. If it was previously snoozed then it will be unsnoozed

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenamePost(target, client, rulename).then((data) => {
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

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenamePriorityWeightingPost

> RuleAndStateResponse ruleTargetClientRulenamePriorityWeightingPost(target, client, rulename, opts)

Update the rule&#39;s priority weighting

This will set a new value for a rule&#39;s priority weighting

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'body': {key: null} // Object | key value pairs of param name and value. Ensure wrapped in {}
};
apiInstance.ruleTargetClientRulenamePriorityWeightingPost(target, client, rulename, opts).then((data) => {
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
 **body** | **Object**| key value pairs of param name and value. Ensure wrapped in {} | [optional] 

### Return type

[**RuleAndStateResponse**](RuleAndStateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, example


## ruleTargetClientRulenameResetDelete

> ApiResponse ruleTargetClientRulenameResetDelete(target, client, rulename)

Perform extended actions to rules



### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenameResetDelete(target, client, rulename).then((data) => {
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

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameSampleDataGet

> ApiJSONArrayResponse ruleTargetClientRulenameSampleDataGet(target, client, rulename)

Get JSON Schema representation of the data expected by the rule

Generates a JSON Schema object, following json-schema.org specification

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenameSampleDataGet(target, client, rulename).then((data) => {
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

[**ApiJSONArrayResponse**](ApiJSONArrayResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameSnoozePost

> ApiResponse ruleTargetClientRulenameSnoozePost(target, client, rulename)

Make this rule start snoozing

Snoozed rules are paused, and use no resources. They automatically start when invoked; there will be a short delay while the rule starts

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenameSnoozePost(target, client, rulename).then((data) => {
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

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameTestDataDelete

> ApiResponse ruleTargetClientRulenameTestDataDelete(target, client, rulename)

Delete all test data

Deletes all of user defined test data for this rule

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenameTestDataDelete(target, client, rulename).then((data) => {
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

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameTestDataGet

> TestDataResponse ruleTargetClientRulenameTestDataGet(target, client, rulename)

Get the rule&#39;s test data and headers information

Returns the test data and header information as specified in the rule&#39;s Realtime Input step

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
apiInstance.ruleTargetClientRulenameTestDataGet(target, client, rulename).then((data) => {
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

[**TestDataResponse**](TestDataResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ruleTargetClientRulenameTestDataPost

> ApiResponse ruleTargetClientRulenameTestDataPost(target, client, rulename, opts)

Add test data to rule

User defined test data rows will be stored for this rule

### Example

```javascript
import JourneyOrchestrationApi from 'journey_orchestration_api';
let defaultClient = JourneyOrchestrationApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let client = "client_example"; // String | Client name
let rulename = "rulename_example"; // String | Rule name
let opts = {
  'testData': [new JourneyOrchestrationApi.TestData()] // [TestData] | 
};
apiInstance.ruleTargetClientRulenameTestDataPost(target, client, rulename, opts).then((data) => {
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
 **testData** | [**[TestData]**](TestData.md)|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ruleTargetGet

> RuleList ruleTargetGet(target, opts)

Get information about all rules published by all clients to the given target

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

let apiInstance = new JourneyOrchestrationApi.RulesApi();
let target = new JourneyOrchestrationApi.TargetEnum(); // TargetEnum | Target - is where rule is published.
let opts = {
  'from': 56, // Number | The zero-based index of the first item to return.
  'to': 56, // Number | The zero-based index of the last item to return.
  'sortProperty': "sortProperty_example", // String | List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue.
  'sortDescending': "sortDescending_example", // String | List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty
  'createdRuleUrl': "createdRuleUrl_example", // String | The url the rule was published to. Only rule with this url will be returned. In the format of:   target/client/rule_name
  'healthScore': new JourneyOrchestrationApi.HealthScoreTimeFrame(), // HealthScoreTimeFrame | Time Frame for calculating the health score of a rule. Allowed values are hour, day, min
  'includeStatistics': true, // Boolean | Should the results include the execution statistics for each rule? Default true
  'searchText': "searchText_example", // String | Filter results to those which contain this text
  'parameterName': "parameterName_example", // String | Get the report for a specific parameter
  'parameterValue': "parameterValue_example", // String | Get a list of rules which have a specific parameter value
  'templateFilter': "templateFilter_example", // String | Filter to return only rules using specified template
  'includePublic': true, // Boolean | Flag to indicate whether rules from the public client should be included in the results, please use   iClients=public instead
  'checkTemplateLatestVersion': true, // Boolean | Should a check to verify rule has the latest templates version be performed?
  'iClients': ["null"] // [String] | Only include these client(s)
};
apiInstance.ruleTargetGet(target, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | [**TargetEnum**](.md)| Target - is where rule is published. | 
 **from** | **Number**| The zero-based index of the first item to return. | [optional] 
 **to** | **Number**| The zero-based index of the last item to return. | [optional] 
 **sortProperty** | **String**| List of comma-separated values, by which the returned rules will be sorted by. The possible values   are: name, client, description, businessGoal, dataType, isConfidential, isVisible, isEditable, isForcedValue. | [optional] 
 **sortDescending** | **String**| List of comma-separated true/false values indicating either ascending (false) or descending (true)   order of each sortProperty | [optional] 
 **createdRuleUrl** | **String**| The url the rule was published to. Only rule with this url will be returned. In the format of:   target/client/rule_name | [optional] 
 **healthScore** | [**HealthScoreTimeFrame**](.md)| Time Frame for calculating the health score of a rule. Allowed values are hour, day, min | [optional] 
 **includeStatistics** | **Boolean**| Should the results include the execution statistics for each rule? Default true | [optional] 
 **searchText** | **String**| Filter results to those which contain this text | [optional] 
 **parameterName** | **String**| Get the report for a specific parameter | [optional] 
 **parameterValue** | **String**| Get a list of rules which have a specific parameter value | [optional] 
 **templateFilter** | **String**| Filter to return only rules using specified template | [optional] 
 **includePublic** | **Boolean**| Flag to indicate whether rules from the public client should be included in the results, please use   iClients&#x3D;public instead | [optional] 
 **checkTemplateLatestVersion** | **Boolean**| Should a check to verify rule has the latest templates version be performed? | [optional] 
 **iClients** | [**[String]**](String.md)| Only include these client(s) | [optional] 

### Return type

[**RuleList**](RuleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

