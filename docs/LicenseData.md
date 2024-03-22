# JourneyOrchestrationApi.LicenseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the license | 
**client** | **String** | Name of the license client | 
**hasAvailableQuota** | **Boolean** | Has available quota remaining | [optional] 
**startDate** | **Date** | Start date of the license | 
**endDate** | **Date** | End date of the license | [optional] 
**conversationQuotaUsed** | **Number** | Current conversation quota used | 
**conversationQuota** | **Number** | Conversation quota | 
**blockOverage** | **Boolean** | Does this license block overage once quota has been reached? | 
**quotaUsageHistory** | [**[QuotaUsageHistory]**](QuotaUsageHistory.md) | History of quota usage | [optional] 
**signature** | **String** | License signature | [optional] 
**isActive** | **Boolean** |  | 


