# JourneyOrchestrationApi.RuleParameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessGoal** | **String** |  | [optional] 
**client** | **String** | Client name | [optional] 
**dataType** | **String** | The data type | [optional] 
**description** | **String** | Description of the global parameter | [optional] 
**globalParam** | **Boolean** |  | [optional] 
**isConfidential** | **Boolean** | Value is masked, e.g. for passwords/keys characters (true/false) | [optional] 
**isEditable** | **Boolean** | Values can be edited by users without GLOBALPARAMETER_CAN_CONFIGURE permission characters (true/false) | [optional] 
**isForcedValue** | **Boolean** | Rule parameter values will be overridden characters (true/false) | [optional] 
**isVisible** | **Boolean** | Should display characters (true/false) | [optional] 
**name** | **String** | Global param name | [optional] 
**picklistItems** | [**[PickListItem]**](PickListItem.md) | Array of items to select from | [optional] 
**requiresAdmin** | **Boolean** |  | [optional] 
**targets** | [**[TargetValue]**](TargetValue.md) | Each target/value | [optional] 
**units** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**defaultValue** | **String** |  | [optional] 
**parameterName** | **String** |  | [optional] 
**usingGlobal** | **Boolean** |  | [optional] 



## Enum: DataTypeEnum


* `string` (value: `"string"`)

* `number` (value: `"number"`)

* `date` (value: `"date"`)

* `picklist` (value: `"picklist"`)

* `orderedlist` (value: `"orderedlist"`)




