/**
 * Journey Orchestration API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.29.139
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AckMessage from './com.alterian.jo.model/AckMessage';
import AliasDetails from './com.alterian.jo.model/AliasDetails';
import ApiError from './com.alterian.jo.model/ApiError';
import ApiJSONArrayResponse from './com.alterian.jo.model/ApiJSONArrayResponse';
import ApiJSONResponse from './com.alterian.jo.model/ApiJSONResponse';
import ApiResponse from './com.alterian.jo.model/ApiResponse';
import CacheApiData from './com.alterian.jo.model/CacheApiData';
import CacheApiDeleteResponse from './com.alterian.jo.model/CacheApiDeleteResponse';
import CacheApiResponse from './com.alterian.jo.model/CacheApiResponse';
import CacheCQL from './com.alterian.jo.model/CacheCQL';
import CacheChangesResponse from './com.alterian.jo.model/CacheChangesResponse';
import CacheColumn from './com.alterian.jo.model/CacheColumn';
import CacheColumnListing from './com.alterian.jo.model/CacheColumnListing';
import CacheConsistencyLevel from './com.alterian.jo.model/CacheConsistencyLevel';
import CacheDeleteData from './com.alterian.jo.model/CacheDeleteData';
import CacheDetailsResponse from './com.alterian.jo.model/CacheDetailsResponse';
import CacheExecuteData from './com.alterian.jo.model/CacheExecuteData';
import CacheExecuteResponse from './com.alterian.jo.model/CacheExecuteResponse';
import CacheField from './com.alterian.jo.model/CacheField';
import CacheFieldType from './com.alterian.jo.model/CacheFieldType';
import CacheTable from './com.alterian.jo.model/CacheTable';
import CacheTableDefinition from './com.alterian.jo.model/CacheTableDefinition';
import CacheTableDetails from './com.alterian.jo.model/CacheTableDetails';
import CacheTableDirectionEnum from './com.alterian.jo.model/CacheTableDirectionEnum';
import CacheTableListing from './com.alterian.jo.model/CacheTableListing';
import CaseTargetDetails from './com.alterian.jo.model/CaseTargetDetails';
import Client from './com.alterian.jo.model/Client';
import ClientData from './com.alterian.jo.model/ClientData';
import ClientDetails from './com.alterian.jo.model/ClientDetails';
import ClientResponse from './com.alterian.jo.model/ClientResponse';
import ClusterPostRequest from './com.alterian.jo.model/ClusterPostRequest';
import ClusterPutRequest from './com.alterian.jo.model/ClusterPutRequest';
import CsvEnum from './com.alterian.jo.model/CsvEnum';
import DataGridApiResponse from './com.alterian.jo.model/DataGridApiResponse';
import DataGridApiResponseAllOfData from './com.alterian.jo.model/DataGridApiResponseAllOfData';
import DataGridDetails from './com.alterian.jo.model/DataGridDetails';
import DataGridPost from './com.alterian.jo.model/DataGridPost';
import DataGridRow from './com.alterian.jo.model/DataGridRow';
import DestinationTarget from './com.alterian.jo.model/DestinationTarget';
import HealthScoreTimeFrame from './com.alterian.jo.model/HealthScoreTimeFrame';
import Icon from './com.alterian.jo.model/Icon';
import InputConnector from './com.alterian.jo.model/InputConnector';
import JsonDecoderDetails from './com.alterian.jo.model/JsonDecoderDetails';
import JsonDecoderField from './com.alterian.jo.model/JsonDecoderField';
import KettleFieldType from './com.alterian.jo.model/KettleFieldType';
import LastModified from './com.alterian.jo.model/LastModified';
import LicenseData from './com.alterian.jo.model/LicenseData';
import LicenseList from './com.alterian.jo.model/LicenseList';
import LogLevelEnum from './com.alterian.jo.model/LogLevelEnum';
import LogSource from './com.alterian.jo.model/LogSource';
import LogType from './com.alterian.jo.model/LogType';
import LogTypeOrTimeseries from './com.alterian.jo.model/LogTypeOrTimeseries';
import LogsApiResponse from './com.alterian.jo.model/LogsApiResponse';
import LogsData from './com.alterian.jo.model/LogsData';
import LogsDataAgent from './com.alterian.jo.model/LogsDataAgent';
import LogsDataEcs from './com.alterian.jo.model/LogsDataEcs';
import LogsDataEvent from './com.alterian.jo.model/LogsDataEvent';
import LogsDataFields from './com.alterian.jo.model/LogsDataFields';
import LogsDataHost from './com.alterian.jo.model/LogsDataHost';
import LogsDataInput from './com.alterian.jo.model/LogsDataInput';
import LogsDataLog from './com.alterian.jo.model/LogsDataLog';
import LogsDataLogFile from './com.alterian.jo.model/LogsDataLogFile';
import MABStepDetails from './com.alterian.jo.model/MABStepDetails';
import MABVariant from './com.alterian.jo.model/MABVariant';
import Metadata from './com.alterian.jo.model/Metadata';
import NameDescriptionPair from './com.alterian.jo.model/NameDescriptionPair';
import OutputConnector from './com.alterian.jo.model/OutputConnector';
import OutputConnectorRealtimeOutputStepsInner from './com.alterian.jo.model/OutputConnectorRealtimeOutputStepsInner';
import OutputField from './com.alterian.jo.model/OutputField';
import Parameter from './com.alterian.jo.model/Parameter';
import ParameterApiResponse from './com.alterian.jo.model/ParameterApiResponse';
import ParameterCopyDetails from './com.alterian.jo.model/ParameterCopyDetails';
import ParameterList from './com.alterian.jo.model/ParameterList';
import Permission from './com.alterian.jo.model/Permission';
import PermissionList from './com.alterian.jo.model/PermissionList';
import PickListItem from './com.alterian.jo.model/PickListItem';
import PriorityWeighting from './com.alterian.jo.model/PriorityWeighting';
import QuotaUsageHistory from './com.alterian.jo.model/QuotaUsageHistory';
import ROSCounts from './com.alterian.jo.model/ROSCounts';
import RealtimeInputStepDetails from './com.alterian.jo.model/RealtimeInputStepDetails';
import RealtimeInputStepHeader from './com.alterian.jo.model/RealtimeInputStepHeader';
import RefList from './com.alterian.jo.model/RefList';
import ResourceAndStatusResponse from './com.alterian.jo.model/ResourceAndStatusResponse';
import Role from './com.alterian.jo.model/Role';
import RoleList from './com.alterian.jo.model/RoleList';
import RuleAndStateResponse from './com.alterian.jo.model/RuleAndStateResponse';
import RuleCallDetails from './com.alterian.jo.model/RuleCallDetails';
import RuleData from './com.alterian.jo.model/RuleData';
import RuleDesignerResponse from './com.alterian.jo.model/RuleDesignerResponse';
import RuleList from './com.alterian.jo.model/RuleList';
import RuleParameter from './com.alterian.jo.model/RuleParameter';
import RuleStateEnum from './com.alterian.jo.model/RuleStateEnum';
import RulegroupPostRequest from './com.alterian.jo.model/RulegroupPostRequest';
import Site from './com.alterian.jo.model/Site';
import SiteList from './com.alterian.jo.model/SiteList';
import Statistics from './com.alterian.jo.model/Statistics';
import Status from './com.alterian.jo.model/Status';
import Success from './com.alterian.jo.model/Success';
import SuccessCursor from './com.alterian.jo.model/SuccessCursor';
import SwitchCaseDetails from './com.alterian.jo.model/SwitchCaseDetails';
import TableTypeEnum from './com.alterian.jo.model/TableTypeEnum';
import TargetEnum from './com.alterian.jo.model/TargetEnum';
import TargetValue from './com.alterian.jo.model/TargetValue';
import TemplateData from './com.alterian.jo.model/TemplateData';
import TemplateList from './com.alterian.jo.model/TemplateList';
import TemplatePublishSettings from './com.alterian.jo.model/TemplatePublishSettings';
import TemplateUpgradeResponse from './com.alterian.jo.model/TemplateUpgradeResponse';
import TestData from './com.alterian.jo.model/TestData';
import TestDataItem from './com.alterian.jo.model/TestDataItem';
import TestDataResponse from './com.alterian.jo.model/TestDataResponse';
import User from './com.alterian.jo.model/User';
import UserList from './com.alterian.jo.model/UserList';
import ValidationMessage from './com.alterian.jo.model/ValidationMessage';
import AuthApi from './api/AuthApi';
import CacheApi from './api/CacheApi';
import ClientApi from './api/ClientApi';
import ClusterApi from './api/ClusterApi';
import FileApi from './api/FileApi';
import GlobalparameterApi from './api/GlobalparameterApi';
import HealthApi from './api/HealthApi';
import InfoApi from './api/InfoApi';
import LicenseApi from './api/LicenseApi';
import LogsApi from './api/LogsApi';
import QueueApi from './api/QueueApi';
import RecordingApi from './api/RecordingApi';
import RulegroupsApi from './api/RulegroupsApi';
import RulesApi from './api/RulesApi';
import TemplatesApi from './api/TemplatesApi';
import TestdataApi from './api/TestdataApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var JourneyOrchestrationApi = require('index'); // See note below*.
* var xxxSvc = new JourneyOrchestrationApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new JourneyOrchestrationApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new JourneyOrchestrationApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new JourneyOrchestrationApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 4.29.139
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AckMessage model constructor.
     * @property {module:com.alterian.jo.model/AckMessage}
     */
    AckMessage,

    /**
     * The AliasDetails model constructor.
     * @property {module:com.alterian.jo.model/AliasDetails}
     */
    AliasDetails,

    /**
     * The ApiError model constructor.
     * @property {module:com.alterian.jo.model/ApiError}
     */
    ApiError,

    /**
     * The ApiJSONArrayResponse model constructor.
     * @property {module:com.alterian.jo.model/ApiJSONArrayResponse}
     */
    ApiJSONArrayResponse,

    /**
     * The ApiJSONResponse model constructor.
     * @property {module:com.alterian.jo.model/ApiJSONResponse}
     */
    ApiJSONResponse,

    /**
     * The ApiResponse model constructor.
     * @property {module:com.alterian.jo.model/ApiResponse}
     */
    ApiResponse,

    /**
     * The CacheApiData model constructor.
     * @property {module:com.alterian.jo.model/CacheApiData}
     */
    CacheApiData,

    /**
     * The CacheApiDeleteResponse model constructor.
     * @property {module:com.alterian.jo.model/CacheApiDeleteResponse}
     */
    CacheApiDeleteResponse,

    /**
     * The CacheApiResponse model constructor.
     * @property {module:com.alterian.jo.model/CacheApiResponse}
     */
    CacheApiResponse,

    /**
     * The CacheCQL model constructor.
     * @property {module:com.alterian.jo.model/CacheCQL}
     */
    CacheCQL,

    /**
     * The CacheChangesResponse model constructor.
     * @property {module:com.alterian.jo.model/CacheChangesResponse}
     */
    CacheChangesResponse,

    /**
     * The CacheColumn model constructor.
     * @property {module:com.alterian.jo.model/CacheColumn}
     */
    CacheColumn,

    /**
     * The CacheColumnListing model constructor.
     * @property {module:com.alterian.jo.model/CacheColumnListing}
     */
    CacheColumnListing,

    /**
     * The CacheConsistencyLevel model constructor.
     * @property {module:com.alterian.jo.model/CacheConsistencyLevel}
     */
    CacheConsistencyLevel,

    /**
     * The CacheDeleteData model constructor.
     * @property {module:com.alterian.jo.model/CacheDeleteData}
     */
    CacheDeleteData,

    /**
     * The CacheDetailsResponse model constructor.
     * @property {module:com.alterian.jo.model/CacheDetailsResponse}
     */
    CacheDetailsResponse,

    /**
     * The CacheExecuteData model constructor.
     * @property {module:com.alterian.jo.model/CacheExecuteData}
     */
    CacheExecuteData,

    /**
     * The CacheExecuteResponse model constructor.
     * @property {module:com.alterian.jo.model/CacheExecuteResponse}
     */
    CacheExecuteResponse,

    /**
     * The CacheField model constructor.
     * @property {module:com.alterian.jo.model/CacheField}
     */
    CacheField,

    /**
     * The CacheFieldType model constructor.
     * @property {module:com.alterian.jo.model/CacheFieldType}
     */
    CacheFieldType,

    /**
     * The CacheTable model constructor.
     * @property {module:com.alterian.jo.model/CacheTable}
     */
    CacheTable,

    /**
     * The CacheTableDefinition model constructor.
     * @property {module:com.alterian.jo.model/CacheTableDefinition}
     */
    CacheTableDefinition,

    /**
     * The CacheTableDetails model constructor.
     * @property {module:com.alterian.jo.model/CacheTableDetails}
     */
    CacheTableDetails,

    /**
     * The CacheTableDirectionEnum model constructor.
     * @property {module:com.alterian.jo.model/CacheTableDirectionEnum}
     */
    CacheTableDirectionEnum,

    /**
     * The CacheTableListing model constructor.
     * @property {module:com.alterian.jo.model/CacheTableListing}
     */
    CacheTableListing,

    /**
     * The CaseTargetDetails model constructor.
     * @property {module:com.alterian.jo.model/CaseTargetDetails}
     */
    CaseTargetDetails,

    /**
     * The Client model constructor.
     * @property {module:com.alterian.jo.model/Client}
     */
    Client,

    /**
     * The ClientData model constructor.
     * @property {module:com.alterian.jo.model/ClientData}
     */
    ClientData,

    /**
     * The ClientDetails model constructor.
     * @property {module:com.alterian.jo.model/ClientDetails}
     */
    ClientDetails,

    /**
     * The ClientResponse model constructor.
     * @property {module:com.alterian.jo.model/ClientResponse}
     */
    ClientResponse,

    /**
     * The ClusterPostRequest model constructor.
     * @property {module:com.alterian.jo.model/ClusterPostRequest}
     */
    ClusterPostRequest,

    /**
     * The ClusterPutRequest model constructor.
     * @property {module:com.alterian.jo.model/ClusterPutRequest}
     */
    ClusterPutRequest,

    /**
     * The CsvEnum model constructor.
     * @property {module:com.alterian.jo.model/CsvEnum}
     */
    CsvEnum,

    /**
     * The DataGridApiResponse model constructor.
     * @property {module:com.alterian.jo.model/DataGridApiResponse}
     */
    DataGridApiResponse,

    /**
     * The DataGridApiResponseAllOfData model constructor.
     * @property {module:com.alterian.jo.model/DataGridApiResponseAllOfData}
     */
    DataGridApiResponseAllOfData,

    /**
     * The DataGridDetails model constructor.
     * @property {module:com.alterian.jo.model/DataGridDetails}
     */
    DataGridDetails,

    /**
     * The DataGridPost model constructor.
     * @property {module:com.alterian.jo.model/DataGridPost}
     */
    DataGridPost,

    /**
     * The DataGridRow model constructor.
     * @property {module:com.alterian.jo.model/DataGridRow}
     */
    DataGridRow,

    /**
     * The DestinationTarget model constructor.
     * @property {module:com.alterian.jo.model/DestinationTarget}
     */
    DestinationTarget,

    /**
     * The HealthScoreTimeFrame model constructor.
     * @property {module:com.alterian.jo.model/HealthScoreTimeFrame}
     */
    HealthScoreTimeFrame,

    /**
     * The Icon model constructor.
     * @property {module:com.alterian.jo.model/Icon}
     */
    Icon,

    /**
     * The InputConnector model constructor.
     * @property {module:com.alterian.jo.model/InputConnector}
     */
    InputConnector,

    /**
     * The JsonDecoderDetails model constructor.
     * @property {module:com.alterian.jo.model/JsonDecoderDetails}
     */
    JsonDecoderDetails,

    /**
     * The JsonDecoderField model constructor.
     * @property {module:com.alterian.jo.model/JsonDecoderField}
     */
    JsonDecoderField,

    /**
     * The KettleFieldType model constructor.
     * @property {module:com.alterian.jo.model/KettleFieldType}
     */
    KettleFieldType,

    /**
     * The LastModified model constructor.
     * @property {module:com.alterian.jo.model/LastModified}
     */
    LastModified,

    /**
     * The LicenseData model constructor.
     * @property {module:com.alterian.jo.model/LicenseData}
     */
    LicenseData,

    /**
     * The LicenseList model constructor.
     * @property {module:com.alterian.jo.model/LicenseList}
     */
    LicenseList,

    /**
     * The LogLevelEnum model constructor.
     * @property {module:com.alterian.jo.model/LogLevelEnum}
     */
    LogLevelEnum,

    /**
     * The LogSource model constructor.
     * @property {module:com.alterian.jo.model/LogSource}
     */
    LogSource,

    /**
     * The LogType model constructor.
     * @property {module:com.alterian.jo.model/LogType}
     */
    LogType,

    /**
     * The LogTypeOrTimeseries model constructor.
     * @property {module:com.alterian.jo.model/LogTypeOrTimeseries}
     */
    LogTypeOrTimeseries,

    /**
     * The LogsApiResponse model constructor.
     * @property {module:com.alterian.jo.model/LogsApiResponse}
     */
    LogsApiResponse,

    /**
     * The LogsData model constructor.
     * @property {module:com.alterian.jo.model/LogsData}
     */
    LogsData,

    /**
     * The LogsDataAgent model constructor.
     * @property {module:com.alterian.jo.model/LogsDataAgent}
     */
    LogsDataAgent,

    /**
     * The LogsDataEcs model constructor.
     * @property {module:com.alterian.jo.model/LogsDataEcs}
     */
    LogsDataEcs,

    /**
     * The LogsDataEvent model constructor.
     * @property {module:com.alterian.jo.model/LogsDataEvent}
     */
    LogsDataEvent,

    /**
     * The LogsDataFields model constructor.
     * @property {module:com.alterian.jo.model/LogsDataFields}
     */
    LogsDataFields,

    /**
     * The LogsDataHost model constructor.
     * @property {module:com.alterian.jo.model/LogsDataHost}
     */
    LogsDataHost,

    /**
     * The LogsDataInput model constructor.
     * @property {module:com.alterian.jo.model/LogsDataInput}
     */
    LogsDataInput,

    /**
     * The LogsDataLog model constructor.
     * @property {module:com.alterian.jo.model/LogsDataLog}
     */
    LogsDataLog,

    /**
     * The LogsDataLogFile model constructor.
     * @property {module:com.alterian.jo.model/LogsDataLogFile}
     */
    LogsDataLogFile,

    /**
     * The MABStepDetails model constructor.
     * @property {module:com.alterian.jo.model/MABStepDetails}
     */
    MABStepDetails,

    /**
     * The MABVariant model constructor.
     * @property {module:com.alterian.jo.model/MABVariant}
     */
    MABVariant,

    /**
     * The Metadata model constructor.
     * @property {module:com.alterian.jo.model/Metadata}
     */
    Metadata,

    /**
     * The NameDescriptionPair model constructor.
     * @property {module:com.alterian.jo.model/NameDescriptionPair}
     */
    NameDescriptionPair,

    /**
     * The OutputConnector model constructor.
     * @property {module:com.alterian.jo.model/OutputConnector}
     */
    OutputConnector,

    /**
     * The OutputConnectorRealtimeOutputStepsInner model constructor.
     * @property {module:com.alterian.jo.model/OutputConnectorRealtimeOutputStepsInner}
     */
    OutputConnectorRealtimeOutputStepsInner,

    /**
     * The OutputField model constructor.
     * @property {module:com.alterian.jo.model/OutputField}
     */
    OutputField,

    /**
     * The Parameter model constructor.
     * @property {module:com.alterian.jo.model/Parameter}
     */
    Parameter,

    /**
     * The ParameterApiResponse model constructor.
     * @property {module:com.alterian.jo.model/ParameterApiResponse}
     */
    ParameterApiResponse,

    /**
     * The ParameterCopyDetails model constructor.
     * @property {module:com.alterian.jo.model/ParameterCopyDetails}
     */
    ParameterCopyDetails,

    /**
     * The ParameterList model constructor.
     * @property {module:com.alterian.jo.model/ParameterList}
     */
    ParameterList,

    /**
     * The Permission model constructor.
     * @property {module:com.alterian.jo.model/Permission}
     */
    Permission,

    /**
     * The PermissionList model constructor.
     * @property {module:com.alterian.jo.model/PermissionList}
     */
    PermissionList,

    /**
     * The PickListItem model constructor.
     * @property {module:com.alterian.jo.model/PickListItem}
     */
    PickListItem,

    /**
     * The PriorityWeighting model constructor.
     * @property {module:com.alterian.jo.model/PriorityWeighting}
     */
    PriorityWeighting,

    /**
     * The QuotaUsageHistory model constructor.
     * @property {module:com.alterian.jo.model/QuotaUsageHistory}
     */
    QuotaUsageHistory,

    /**
     * The ROSCounts model constructor.
     * @property {module:com.alterian.jo.model/ROSCounts}
     */
    ROSCounts,

    /**
     * The RealtimeInputStepDetails model constructor.
     * @property {module:com.alterian.jo.model/RealtimeInputStepDetails}
     */
    RealtimeInputStepDetails,

    /**
     * The RealtimeInputStepHeader model constructor.
     * @property {module:com.alterian.jo.model/RealtimeInputStepHeader}
     */
    RealtimeInputStepHeader,

    /**
     * The RefList model constructor.
     * @property {module:com.alterian.jo.model/RefList}
     */
    RefList,

    /**
     * The ResourceAndStatusResponse model constructor.
     * @property {module:com.alterian.jo.model/ResourceAndStatusResponse}
     */
    ResourceAndStatusResponse,

    /**
     * The Role model constructor.
     * @property {module:com.alterian.jo.model/Role}
     */
    Role,

    /**
     * The RoleList model constructor.
     * @property {module:com.alterian.jo.model/RoleList}
     */
    RoleList,

    /**
     * The RuleAndStateResponse model constructor.
     * @property {module:com.alterian.jo.model/RuleAndStateResponse}
     */
    RuleAndStateResponse,

    /**
     * The RuleCallDetails model constructor.
     * @property {module:com.alterian.jo.model/RuleCallDetails}
     */
    RuleCallDetails,

    /**
     * The RuleData model constructor.
     * @property {module:com.alterian.jo.model/RuleData}
     */
    RuleData,

    /**
     * The RuleDesignerResponse model constructor.
     * @property {module:com.alterian.jo.model/RuleDesignerResponse}
     */
    RuleDesignerResponse,

    /**
     * The RuleList model constructor.
     * @property {module:com.alterian.jo.model/RuleList}
     */
    RuleList,

    /**
     * The RuleParameter model constructor.
     * @property {module:com.alterian.jo.model/RuleParameter}
     */
    RuleParameter,

    /**
     * The RuleStateEnum model constructor.
     * @property {module:com.alterian.jo.model/RuleStateEnum}
     */
    RuleStateEnum,

    /**
     * The RulegroupPostRequest model constructor.
     * @property {module:com.alterian.jo.model/RulegroupPostRequest}
     */
    RulegroupPostRequest,

    /**
     * The Site model constructor.
     * @property {module:com.alterian.jo.model/Site}
     */
    Site,

    /**
     * The SiteList model constructor.
     * @property {module:com.alterian.jo.model/SiteList}
     */
    SiteList,

    /**
     * The Statistics model constructor.
     * @property {module:com.alterian.jo.model/Statistics}
     */
    Statistics,

    /**
     * The Status model constructor.
     * @property {module:com.alterian.jo.model/Status}
     */
    Status,

    /**
     * The Success model constructor.
     * @property {module:com.alterian.jo.model/Success}
     */
    Success,

    /**
     * The SuccessCursor model constructor.
     * @property {module:com.alterian.jo.model/SuccessCursor}
     */
    SuccessCursor,

    /**
     * The SwitchCaseDetails model constructor.
     * @property {module:com.alterian.jo.model/SwitchCaseDetails}
     */
    SwitchCaseDetails,

    /**
     * The TableTypeEnum model constructor.
     * @property {module:com.alterian.jo.model/TableTypeEnum}
     */
    TableTypeEnum,

    /**
     * The TargetEnum model constructor.
     * @property {module:com.alterian.jo.model/TargetEnum}
     */
    TargetEnum,

    /**
     * The TargetValue model constructor.
     * @property {module:com.alterian.jo.model/TargetValue}
     */
    TargetValue,

    /**
     * The TemplateData model constructor.
     * @property {module:com.alterian.jo.model/TemplateData}
     */
    TemplateData,

    /**
     * The TemplateList model constructor.
     * @property {module:com.alterian.jo.model/TemplateList}
     */
    TemplateList,

    /**
     * The TemplatePublishSettings model constructor.
     * @property {module:com.alterian.jo.model/TemplatePublishSettings}
     */
    TemplatePublishSettings,

    /**
     * The TemplateUpgradeResponse model constructor.
     * @property {module:com.alterian.jo.model/TemplateUpgradeResponse}
     */
    TemplateUpgradeResponse,

    /**
     * The TestData model constructor.
     * @property {module:com.alterian.jo.model/TestData}
     */
    TestData,

    /**
     * The TestDataItem model constructor.
     * @property {module:com.alterian.jo.model/TestDataItem}
     */
    TestDataItem,

    /**
     * The TestDataResponse model constructor.
     * @property {module:com.alterian.jo.model/TestDataResponse}
     */
    TestDataResponse,

    /**
     * The User model constructor.
     * @property {module:com.alterian.jo.model/User}
     */
    User,

    /**
     * The UserList model constructor.
     * @property {module:com.alterian.jo.model/UserList}
     */
    UserList,

    /**
     * The ValidationMessage model constructor.
     * @property {module:com.alterian.jo.model/ValidationMessage}
     */
    ValidationMessage,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The CacheApi service constructor.
    * @property {module:api/CacheApi}
    */
    CacheApi,

    /**
    * The ClientApi service constructor.
    * @property {module:api/ClientApi}
    */
    ClientApi,

    /**
    * The ClusterApi service constructor.
    * @property {module:api/ClusterApi}
    */
    ClusterApi,

    /**
    * The FileApi service constructor.
    * @property {module:api/FileApi}
    */
    FileApi,

    /**
    * The GlobalparameterApi service constructor.
    * @property {module:api/GlobalparameterApi}
    */
    GlobalparameterApi,

    /**
    * The HealthApi service constructor.
    * @property {module:api/HealthApi}
    */
    HealthApi,

    /**
    * The InfoApi service constructor.
    * @property {module:api/InfoApi}
    */
    InfoApi,

    /**
    * The LicenseApi service constructor.
    * @property {module:api/LicenseApi}
    */
    LicenseApi,

    /**
    * The LogsApi service constructor.
    * @property {module:api/LogsApi}
    */
    LogsApi,

    /**
    * The QueueApi service constructor.
    * @property {module:api/QueueApi}
    */
    QueueApi,

    /**
    * The RecordingApi service constructor.
    * @property {module:api/RecordingApi}
    */
    RecordingApi,

    /**
    * The RulegroupsApi service constructor.
    * @property {module:api/RulegroupsApi}
    */
    RulegroupsApi,

    /**
    * The RulesApi service constructor.
    * @property {module:api/RulesApi}
    */
    RulesApi,

    /**
    * The TemplatesApi service constructor.
    * @property {module:api/TemplatesApi}
    */
    TemplatesApi,

    /**
    * The TestdataApi service constructor.
    * @property {module:api/TestdataApi}
    */
    TestdataApi
};
