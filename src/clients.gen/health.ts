import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const EventArnsList = S.Array(S.String);
export const OrganizationEventArnsList = S.Array(S.String);
export const OrganizationAccountIdsList = S.Array(S.String);
export const eventArnList = S.Array(S.String);
export class EventAccountFilter extends S.Class<EventAccountFilter>("EventAccountFilter")({eventArn: S.String, awsAccountId: S.optional(S.String)}) {}
export const OrganizationEventDetailFiltersList = S.Array(EventAccountFilter);
export class DescribeAffectedAccountsForOrganizationRequest extends S.Class<DescribeAffectedAccountsForOrganizationRequest>("DescribeAffectedAccountsForOrganizationRequest")({eventArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class DescribeEntityAggregatesRequest extends S.Class<DescribeEntityAggregatesRequest>("DescribeEntityAggregatesRequest")({eventArns: S.optional(EventArnsList)}) {}
export class DescribeEntityAggregatesForOrganizationRequest extends S.Class<DescribeEntityAggregatesForOrganizationRequest>("DescribeEntityAggregatesForOrganizationRequest")({eventArns: OrganizationEventArnsList, awsAccountIds: S.optional(OrganizationAccountIdsList)}) {}
export class DescribeEventDetailsRequest extends S.Class<DescribeEventDetailsRequest>("DescribeEventDetailsRequest")({eventArns: eventArnList, locale: S.optional(S.String)}) {}
export class DescribeEventDetailsForOrganizationRequest extends S.Class<DescribeEventDetailsForOrganizationRequest>("DescribeEventDetailsForOrganizationRequest")({organizationEventDetailFilters: OrganizationEventDetailFiltersList, locale: S.optional(S.String)}) {}
export const EventActionabilityList = S.Array(S.String);
export const eventTypeList2 = S.Array(S.String);
export const serviceList = S.Array(S.String);
export const regionList = S.Array(S.String);
export const availabilityZones = S.Array(S.String);
export class DateTimeRange extends S.Class<DateTimeRange>("DateTimeRange")({from: S.optional(S.Date), to: S.optional(S.Date)}) {}
export const dateTimeRangeList = S.Array(DateTimeRange);
export const entityArnList = S.Array(S.String);
export const entityValueList = S.Array(S.String);
export const eventTypeCategoryList2 = S.Array(S.String);
export const tagSet = S.Record({key: S.String, value: S.String});
export const tagFilter = S.Array(tagSet);
export const eventStatusCodeList = S.Array(S.String);
export const EventPersonaList = S.Array(S.String);
export class EventFilter extends S.Class<EventFilter>("EventFilter")({actionabilities: S.optional(EventActionabilityList), eventArns: S.optional(eventArnList), eventTypeCodes: S.optional(eventTypeList2), services: S.optional(serviceList), regions: S.optional(regionList), availabilityZones: S.optional(availabilityZones), startTimes: S.optional(dateTimeRangeList), endTimes: S.optional(dateTimeRangeList), lastUpdatedTimes: S.optional(dateTimeRangeList), entityArns: S.optional(entityArnList), entityValues: S.optional(entityValueList), eventTypeCategories: S.optional(eventTypeCategoryList2), tags: S.optional(tagFilter), eventStatusCodes: S.optional(eventStatusCodeList), personas: S.optional(EventPersonaList)}) {}
export class DescribeEventsRequest extends S.Class<DescribeEventsRequest>("DescribeEventsRequest")({filter: S.optional(EventFilter), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), locale: S.optional(S.String)}) {}
export class DescribeHealthServiceStatusForOrganizationResponse extends S.Class<DescribeHealthServiceStatusForOrganizationResponse>("DescribeHealthServiceStatusForOrganizationResponse")({healthServiceAccessStatusForOrganization: S.optional(S.String)}) {}
export const entityStatusCodeList = S.Array(S.String);
export const awsAccountIdsList = S.Array(S.String);
export const EventTypeCodeList = S.Array(S.String);
export const EventTypeCategoryList = S.Array(S.String);
export const EventTypeActionabilityList = S.Array(S.String);
export const EventTypePersonaList = S.Array(S.String);
export const affectedAccountsList = S.Array(S.String);
export const OrganizationEntityFiltersList = S.Array(EventAccountFilter);
export class EntityAccountFilter extends S.Class<EntityAccountFilter>("EntityAccountFilter")({eventArn: S.String, awsAccountId: S.optional(S.String), statusCodes: S.optional(entityStatusCodeList)}) {}
export const OrganizationEntityAccountFiltersList = S.Array(EntityAccountFilter);
export class OrganizationEventFilter extends S.Class<OrganizationEventFilter>("OrganizationEventFilter")({actionabilities: S.optional(EventActionabilityList), eventTypeCodes: S.optional(eventTypeList2), awsAccountIds: S.optional(awsAccountIdsList), services: S.optional(serviceList), regions: S.optional(regionList), startTime: S.optional(DateTimeRange), endTime: S.optional(DateTimeRange), lastUpdatedTime: S.optional(DateTimeRange), entityArns: S.optional(entityArnList), entityValues: S.optional(entityValueList), eventTypeCategories: S.optional(eventTypeCategoryList2), eventStatusCodes: S.optional(eventStatusCodeList), personas: S.optional(EventPersonaList)}) {}
export class EventTypeFilter extends S.Class<EventTypeFilter>("EventTypeFilter")({eventTypeCodes: S.optional(EventTypeCodeList), services: S.optional(serviceList), eventTypeCategories: S.optional(EventTypeCategoryList), actionabilities: S.optional(EventTypeActionabilityList), personas: S.optional(EventTypePersonaList)}) {}
export class DescribeAffectedAccountsForOrganizationResponse extends S.Class<DescribeAffectedAccountsForOrganizationResponse>("DescribeAffectedAccountsForOrganizationResponse")({affectedAccounts: S.optional(affectedAccountsList), eventScopeCode: S.optional(S.String), nextToken: S.optional(S.String)}) {}
export class DescribeAffectedEntitiesForOrganizationRequest extends S.Class<DescribeAffectedEntitiesForOrganizationRequest>("DescribeAffectedEntitiesForOrganizationRequest")({organizationEntityFilters: S.optional(OrganizationEntityFiltersList), locale: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), organizationEntityAccountFilters: S.optional(OrganizationEntityAccountFiltersList)}) {}
export class DescribeEventAggregatesRequest extends S.Class<DescribeEventAggregatesRequest>("DescribeEventAggregatesRequest")({filter: S.optional(EventFilter), aggregateField: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class DescribeEventsForOrganizationRequest extends S.Class<DescribeEventsForOrganizationRequest>("DescribeEventsForOrganizationRequest")({filter: S.optional(OrganizationEventFilter), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), locale: S.optional(S.String)}) {}
export class DescribeEventTypesRequest extends S.Class<DescribeEventTypesRequest>("DescribeEventTypesRequest")({filter: S.optional(EventTypeFilter), locale: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class EntityFilter extends S.Class<EntityFilter>("EntityFilter")({eventArns: eventArnList, entityArns: S.optional(entityArnList), entityValues: S.optional(entityValueList), lastUpdatedTimes: S.optional(dateTimeRangeList), tags: S.optional(tagFilter), statusCodes: S.optional(entityStatusCodeList)}) {}
export class EventDetailsErrorItem extends S.Class<EventDetailsErrorItem>("EventDetailsErrorItem")({eventArn: S.optional(S.String), errorName: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const DescribeEventDetailsFailedSet = S.Array(EventDetailsErrorItem);
export class Event extends S.Class<Event>("Event")({arn: S.optional(S.String), service: S.optional(S.String), eventTypeCode: S.optional(S.String), eventTypeCategory: S.optional(S.String), region: S.optional(S.String), availabilityZone: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), lastUpdatedTime: S.optional(S.Date), statusCode: S.optional(S.String), eventScopeCode: S.optional(S.String), actionability: S.optional(S.String), personas: S.optional(EventPersonaList)}) {}
export class EventDescription extends S.Class<EventDescription>("EventDescription")({latestDescription: S.optional(S.String)}) {}
export const eventMetadata = S.Record({key: S.String, value: S.String});
export class OrganizationEventDetails extends S.Class<OrganizationEventDetails>("OrganizationEventDetails")({awsAccountId: S.optional(S.String), event: S.optional(Event), eventDescription: S.optional(EventDescription), eventMetadata: S.optional(eventMetadata)}) {}
export const DescribeEventDetailsForOrganizationSuccessfulSet = S.Array(OrganizationEventDetails);
export class OrganizationEventDetailsErrorItem extends S.Class<OrganizationEventDetailsErrorItem>("OrganizationEventDetailsErrorItem")({awsAccountId: S.optional(S.String), eventArn: S.optional(S.String), errorName: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const DescribeEventDetailsForOrganizationFailedSet = S.Array(OrganizationEventDetailsErrorItem);
export const EventList = S.Array(Event);
export class DescribeAffectedEntitiesRequest extends S.Class<DescribeAffectedEntitiesRequest>("DescribeAffectedEntitiesRequest")({filter: EntityFilter, locale: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class DescribeEventDetailsForOrganizationResponse extends S.Class<DescribeEventDetailsForOrganizationResponse>("DescribeEventDetailsForOrganizationResponse")({successfulSet: S.optional(DescribeEventDetailsForOrganizationSuccessfulSet), failedSet: S.optional(DescribeEventDetailsForOrganizationFailedSet)}) {}
export class DescribeEventsResponse extends S.Class<DescribeEventsResponse>("DescribeEventsResponse")({events: S.optional(EventList), nextToken: S.optional(S.String)}) {}
export const entityStatuses = S.Record({key: S.String, value: S.Number});
export class AccountEntityAggregate extends S.Class<AccountEntityAggregate>("AccountEntityAggregate")({accountId: S.optional(S.String), count: S.optional(S.Number), statuses: S.optional(entityStatuses)}) {}
export const AccountEntityAggregatesList = S.Array(AccountEntityAggregate);
export class OrganizationAffectedEntitiesErrorItem extends S.Class<OrganizationAffectedEntitiesErrorItem>("OrganizationAffectedEntitiesErrorItem")({awsAccountId: S.optional(S.String), eventArn: S.optional(S.String), errorName: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const DescribeAffectedEntitiesForOrganizationFailedSet = S.Array(OrganizationAffectedEntitiesErrorItem);
export class EntityAggregate extends S.Class<EntityAggregate>("EntityAggregate")({eventArn: S.optional(S.String), count: S.optional(S.Number), statuses: S.optional(entityStatuses)}) {}
export const EntityAggregateList = S.Array(EntityAggregate);
export class OrganizationEntityAggregate extends S.Class<OrganizationEntityAggregate>("OrganizationEntityAggregate")({eventArn: S.optional(S.String), count: S.optional(S.Number), statuses: S.optional(entityStatuses), accounts: S.optional(AccountEntityAggregatesList)}) {}
export const OrganizationEntityAggregatesList = S.Array(OrganizationEntityAggregate);
export class EventAggregate extends S.Class<EventAggregate>("EventAggregate")({aggregateValue: S.optional(S.String), count: S.optional(S.Number)}) {}
export const EventAggregateList = S.Array(EventAggregate);
export class EventDetails extends S.Class<EventDetails>("EventDetails")({event: S.optional(Event), eventDescription: S.optional(EventDescription), eventMetadata: S.optional(eventMetadata)}) {}
export const DescribeEventDetailsSuccessfulSet = S.Array(EventDetails);
export class OrganizationEvent extends S.Class<OrganizationEvent>("OrganizationEvent")({arn: S.optional(S.String), service: S.optional(S.String), eventTypeCode: S.optional(S.String), eventTypeCategory: S.optional(S.String), eventScopeCode: S.optional(S.String), region: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), lastUpdatedTime: S.optional(S.Date), statusCode: S.optional(S.String), actionability: S.optional(S.String), personas: S.optional(EventPersonaList)}) {}
export const OrganizationEventList = S.Array(OrganizationEvent);
export class EventType extends S.Class<EventType>("EventType")({service: S.optional(S.String), code: S.optional(S.String), category: S.optional(S.String), actionability: S.optional(S.String), personas: S.optional(EventTypePersonaList)}) {}
export const EventTypeList = S.Array(EventType);
export const entityMetadata = S.Record({key: S.String, value: S.String});
export class AffectedEntity extends S.Class<AffectedEntity>("AffectedEntity")({entityArn: S.optional(S.String), eventArn: S.optional(S.String), entityValue: S.optional(S.String), entityUrl: S.optional(S.String), awsAccountId: S.optional(S.String), lastUpdatedTime: S.optional(S.Date), statusCode: S.optional(S.String), tags: S.optional(tagSet), entityMetadata: S.optional(entityMetadata)}) {}
export const EntityList = S.Array(AffectedEntity);
export class DescribeAffectedEntitiesResponse extends S.Class<DescribeAffectedEntitiesResponse>("DescribeAffectedEntitiesResponse")({entities: S.optional(EntityList), nextToken: S.optional(S.String)}) {}
export class DescribeEntityAggregatesResponse extends S.Class<DescribeEntityAggregatesResponse>("DescribeEntityAggregatesResponse")({entityAggregates: S.optional(EntityAggregateList)}) {}
export class DescribeEntityAggregatesForOrganizationResponse extends S.Class<DescribeEntityAggregatesForOrganizationResponse>("DescribeEntityAggregatesForOrganizationResponse")({organizationEntityAggregates: S.optional(OrganizationEntityAggregatesList)}) {}
export class DescribeEventAggregatesResponse extends S.Class<DescribeEventAggregatesResponse>("DescribeEventAggregatesResponse")({eventAggregates: S.optional(EventAggregateList), nextToken: S.optional(S.String)}) {}
export class DescribeEventDetailsResponse extends S.Class<DescribeEventDetailsResponse>("DescribeEventDetailsResponse")({successfulSet: S.optional(DescribeEventDetailsSuccessfulSet), failedSet: S.optional(DescribeEventDetailsFailedSet)}) {}
export class DescribeEventsForOrganizationResponse extends S.Class<DescribeEventsForOrganizationResponse>("DescribeEventsForOrganizationResponse")({events: S.optional(OrganizationEventList), nextToken: S.optional(S.String)}) {}
export class DescribeEventTypesResponse extends S.Class<DescribeEventTypesResponse>("DescribeEventTypesResponse")({eventTypes: S.optional(EventTypeList), nextToken: S.optional(S.String)}) {}
export class DescribeAffectedEntitiesForOrganizationResponse extends S.Class<DescribeAffectedEntitiesForOrganizationResponse>("DescribeAffectedEntitiesForOrganizationResponse")({entities: S.optional(EntityList), failedSet: S.optional(DescribeAffectedEntitiesForOrganizationFailedSet), nextToken: S.optional(S.String)}) {}

//# Errors
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class InvalidPaginationToken extends S.TaggedError<InvalidPaginationToken>()("InvalidPaginationToken", {message: S.optional(S.String)}) {};
export class UnsupportedLocale extends S.TaggedError<UnsupportedLocale>()("UnsupportedLocale", {}) {};

//# Operations
export const enableHealthServiceAccessForOrganization = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.EnableHealthServiceAccessForOrganization" }, S.Struct({}), S.Struct({}), [ConcurrentModificationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeHealthServiceStatusForOrganization = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeHealthServiceStatusForOrganization" }, S.Struct({}), DescribeHealthServiceStatusForOrganizationResponse, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const disableHealthServiceAccessForOrganization = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DisableHealthServiceAccessForOrganization" }, S.Struct({}), S.Struct({}), [ConcurrentModificationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeAffectedAccountsForOrganization = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeAffectedAccountsForOrganization" }, DescribeAffectedAccountsForOrganizationRequest, DescribeAffectedAccountsForOrganizationResponse, [InvalidPaginationToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEvents = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeEvents" }, DescribeEventsRequest, DescribeEventsResponse, [InvalidPaginationToken, UnsupportedLocale]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeAffectedEntities = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeAffectedEntities" }, DescribeAffectedEntitiesRequest, DescribeAffectedEntitiesResponse, [InvalidPaginationToken, UnsupportedLocale]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEntityAggregates = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeEntityAggregates" }, DescribeEntityAggregatesRequest, DescribeEntityAggregatesResponse, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEntityAggregatesForOrganization = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeEntityAggregatesForOrganization" }, DescribeEntityAggregatesForOrganizationRequest, DescribeEntityAggregatesForOrganizationResponse, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEventAggregates = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeEventAggregates" }, DescribeEventAggregatesRequest, DescribeEventAggregatesResponse, [InvalidPaginationToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEventDetails = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeEventDetails" }, DescribeEventDetailsRequest, DescribeEventDetailsResponse, [UnsupportedLocale]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEventDetailsForOrganization = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeEventDetailsForOrganization" }, DescribeEventDetailsForOrganizationRequest, DescribeEventDetailsForOrganizationResponse, [UnsupportedLocale]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEventsForOrganization = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeEventsForOrganization" }, DescribeEventsForOrganizationRequest, DescribeEventsForOrganizationResponse, [InvalidPaginationToken, UnsupportedLocale]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEventTypes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeEventTypes" }, DescribeEventTypesRequest, DescribeEventTypesResponse, [InvalidPaginationToken, UnsupportedLocale]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeAffectedEntitiesForOrganization = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-08-04", uri: "/", method: "POST", sdkId: "Health", sigV4ServiceName: "health", name: "AWSHealth_20160804.DescribeAffectedEntitiesForOrganization" }, DescribeAffectedEntitiesForOrganizationRequest, DescribeAffectedEntitiesForOrganizationResponse, [InvalidPaginationToken, UnsupportedLocale]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
