import * as S from "effect/Schema"
import { FormatAwsQueryRequest,FormatAwsQueryResponse,FormatAwsXMLError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ResourceArns = S.Array(S.String);
export const AlpnPolicyName = S.Array(S.String);
export const Subnets = S.Array(S.String);
export const SecurityGroups = S.Array(S.String);
export const ListenerArns = S.Array(S.String);
export const LoadBalancerArns = S.Array(S.String);
export const LoadBalancerNames = S.Array(S.String);
export const RuleArns = S.Array(S.String);
export const SslPolicyNames = S.Array(S.String);
export const TargetGroupArns = S.Array(S.String);
export const TargetGroupNames = S.Array(S.String);
export const ListOfDescribeTargetHealthIncludeOptions = S.Array(S.String);
export const RevocationIds = S.Array(S.Number);
export const TrustStoreArns = S.Array(S.String);
export const TrustStoreNames = S.Array(S.String);
export const RemoveIpamPools = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CreateTrustStoreInput extends S.Class<CreateTrustStoreInput>("CreateTrustStoreInput")({Name: S.String, CaCertificatesBundleS3Bucket: S.String, CaCertificatesBundleS3Key: S.String, CaCertificatesBundleS3ObjectVersion: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class DeleteListenerInput extends S.Class<DeleteListenerInput>("DeleteListenerInput")({ListenerArn: S.String}) {}
export class DeleteListenerOutput extends S.Class<DeleteListenerOutput>("DeleteListenerOutput")({}) {}
export class DeleteLoadBalancerInput extends S.Class<DeleteLoadBalancerInput>("DeleteLoadBalancerInput")({LoadBalancerArn: S.String}) {}
export class DeleteLoadBalancerOutput extends S.Class<DeleteLoadBalancerOutput>("DeleteLoadBalancerOutput")({}) {}
export class DeleteRuleInput extends S.Class<DeleteRuleInput>("DeleteRuleInput")({RuleArn: S.String}) {}
export class DeleteRuleOutput extends S.Class<DeleteRuleOutput>("DeleteRuleOutput")({}) {}
export class DeleteSharedTrustStoreAssociationInput extends S.Class<DeleteSharedTrustStoreAssociationInput>("DeleteSharedTrustStoreAssociationInput")({TrustStoreArn: S.String, ResourceArn: S.String}) {}
export class DeleteSharedTrustStoreAssociationOutput extends S.Class<DeleteSharedTrustStoreAssociationOutput>("DeleteSharedTrustStoreAssociationOutput")({}) {}
export class DeleteTargetGroupInput extends S.Class<DeleteTargetGroupInput>("DeleteTargetGroupInput")({TargetGroupArn: S.String}) {}
export class DeleteTargetGroupOutput extends S.Class<DeleteTargetGroupOutput>("DeleteTargetGroupOutput")({}) {}
export class DeleteTrustStoreInput extends S.Class<DeleteTrustStoreInput>("DeleteTrustStoreInput")({TrustStoreArn: S.String}) {}
export class DeleteTrustStoreOutput extends S.Class<DeleteTrustStoreOutput>("DeleteTrustStoreOutput")({}) {}
export class DescribeAccountLimitsInput extends S.Class<DescribeAccountLimitsInput>("DescribeAccountLimitsInput")({Marker: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class DescribeCapacityReservationInput extends S.Class<DescribeCapacityReservationInput>("DescribeCapacityReservationInput")({LoadBalancerArn: S.String}) {}
export class DescribeListenerAttributesInput extends S.Class<DescribeListenerAttributesInput>("DescribeListenerAttributesInput")({ListenerArn: S.String}) {}
export class DescribeListenerCertificatesInput extends S.Class<DescribeListenerCertificatesInput>("DescribeListenerCertificatesInput")({ListenerArn: S.String, Marker: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class DescribeListenersInput extends S.Class<DescribeListenersInput>("DescribeListenersInput")({LoadBalancerArn: S.optional(S.String), ListenerArns: S.optional(ListenerArns), Marker: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class DescribeLoadBalancerAttributesInput extends S.Class<DescribeLoadBalancerAttributesInput>("DescribeLoadBalancerAttributesInput")({LoadBalancerArn: S.String}) {}
export class DescribeLoadBalancersInput extends S.Class<DescribeLoadBalancersInput>("DescribeLoadBalancersInput")({LoadBalancerArns: S.optional(LoadBalancerArns), Names: S.optional(LoadBalancerNames), Marker: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class DescribeRulesInput extends S.Class<DescribeRulesInput>("DescribeRulesInput")({ListenerArn: S.optional(S.String), RuleArns: S.optional(RuleArns), Marker: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class DescribeSSLPoliciesInput extends S.Class<DescribeSSLPoliciesInput>("DescribeSSLPoliciesInput")({Names: S.optional(SslPolicyNames), Marker: S.optional(S.String), PageSize: S.optional(S.Number), LoadBalancerType: S.optional(S.String)}) {}
export class DescribeTagsInput extends S.Class<DescribeTagsInput>("DescribeTagsInput")({ResourceArns: ResourceArns}) {}
export class DescribeTargetGroupAttributesInput extends S.Class<DescribeTargetGroupAttributesInput>("DescribeTargetGroupAttributesInput")({TargetGroupArn: S.String}) {}
export class DescribeTargetGroupsInput extends S.Class<DescribeTargetGroupsInput>("DescribeTargetGroupsInput")({LoadBalancerArn: S.optional(S.String), TargetGroupArns: S.optional(TargetGroupArns), Names: S.optional(TargetGroupNames), Marker: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class TargetDescription extends S.Class<TargetDescription>("TargetDescription")({Id: S.String, Port: S.optional(S.Number), AvailabilityZone: S.optional(S.String), QuicServerId: S.optional(S.String)}) {}
export const TargetDescriptions = S.Array(TargetDescription);
export class DescribeTargetHealthInput extends S.Class<DescribeTargetHealthInput>("DescribeTargetHealthInput")({TargetGroupArn: S.String, Targets: S.optional(TargetDescriptions), Include: S.optional(ListOfDescribeTargetHealthIncludeOptions)}) {}
export class DescribeTrustStoreAssociationsInput extends S.Class<DescribeTrustStoreAssociationsInput>("DescribeTrustStoreAssociationsInput")({TrustStoreArn: S.String, Marker: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class DescribeTrustStoreRevocationsInput extends S.Class<DescribeTrustStoreRevocationsInput>("DescribeTrustStoreRevocationsInput")({TrustStoreArn: S.String, RevocationIds: S.optional(RevocationIds), Marker: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class DescribeTrustStoresInput extends S.Class<DescribeTrustStoresInput>("DescribeTrustStoresInput")({TrustStoreArns: S.optional(TrustStoreArns), Names: S.optional(TrustStoreNames), Marker: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class GetResourcePolicyInput extends S.Class<GetResourcePolicyInput>("GetResourcePolicyInput")({ResourceArn: S.String}) {}
export class GetTrustStoreCaCertificatesBundleInput extends S.Class<GetTrustStoreCaCertificatesBundleInput>("GetTrustStoreCaCertificatesBundleInput")({TrustStoreArn: S.String}) {}
export class GetTrustStoreRevocationContentInput extends S.Class<GetTrustStoreRevocationContentInput>("GetTrustStoreRevocationContentInput")({TrustStoreArn: S.String, RevocationId: S.Number}) {}
export class IpamPools extends S.Class<IpamPools>("IpamPools")({Ipv4IpamPoolId: S.optional(S.String)}) {}
export class ModifyIpPoolsInput extends S.Class<ModifyIpPoolsInput>("ModifyIpPoolsInput")({LoadBalancerArn: S.String, IpamPools: S.optional(IpamPools), RemoveIpamPools: S.optional(RemoveIpamPools)}) {}
export class Certificate extends S.Class<Certificate>("Certificate")({CertificateArn: S.optional(S.String), IsDefault: S.optional(S.Boolean)}) {}
export const CertificateList = S.Array(Certificate);
export const AuthenticateOidcActionAuthenticationRequestExtraParams = S.Record({key: S.String, value: S.String});
export class AuthenticateOidcActionConfig extends S.Class<AuthenticateOidcActionConfig>("AuthenticateOidcActionConfig")({Issuer: S.String, AuthorizationEndpoint: S.String, TokenEndpoint: S.String, UserInfoEndpoint: S.String, ClientId: S.String, ClientSecret: S.optional(S.String), SessionCookieName: S.optional(S.String), Scope: S.optional(S.String), SessionTimeout: S.optional(S.Number), AuthenticationRequestExtraParams: S.optional(AuthenticateOidcActionAuthenticationRequestExtraParams), OnUnauthenticatedRequest: S.optional(S.String), UseExistingClientSecret: S.optional(S.Boolean)}) {}
export const AuthenticateCognitoActionAuthenticationRequestExtraParams = S.Record({key: S.String, value: S.String});
export class AuthenticateCognitoActionConfig extends S.Class<AuthenticateCognitoActionConfig>("AuthenticateCognitoActionConfig")({UserPoolArn: S.String, UserPoolClientId: S.String, UserPoolDomain: S.String, SessionCookieName: S.optional(S.String), Scope: S.optional(S.String), SessionTimeout: S.optional(S.Number), AuthenticationRequestExtraParams: S.optional(AuthenticateCognitoActionAuthenticationRequestExtraParams), OnUnauthenticatedRequest: S.optional(S.String)}) {}
export class RedirectActionConfig extends S.Class<RedirectActionConfig>("RedirectActionConfig")({Protocol: S.optional(S.String), Port: S.optional(S.String), Host: S.optional(S.String), Path: S.optional(S.String), Query: S.optional(S.String), StatusCode: S.String}) {}
export class FixedResponseActionConfig extends S.Class<FixedResponseActionConfig>("FixedResponseActionConfig")({MessageBody: S.optional(S.String), StatusCode: S.String, ContentType: S.optional(S.String)}) {}
export class TargetGroupTuple extends S.Class<TargetGroupTuple>("TargetGroupTuple")({TargetGroupArn: S.optional(S.String), Weight: S.optional(S.Number)}) {}
export const TargetGroupList = S.Array(TargetGroupTuple);
export class TargetGroupStickinessConfig extends S.Class<TargetGroupStickinessConfig>("TargetGroupStickinessConfig")({Enabled: S.optional(S.Boolean), DurationSeconds: S.optional(S.Number)}) {}
export class ForwardActionConfig extends S.Class<ForwardActionConfig>("ForwardActionConfig")({TargetGroups: S.optional(TargetGroupList), TargetGroupStickinessConfig: S.optional(TargetGroupStickinessConfig)}) {}
export const JwtValidationActionAdditionalClaimValues = S.Array(S.String);
export class JwtValidationActionAdditionalClaim extends S.Class<JwtValidationActionAdditionalClaim>("JwtValidationActionAdditionalClaim")({Format: S.String, Name: S.String, Values: JwtValidationActionAdditionalClaimValues}) {}
export const JwtValidationActionAdditionalClaims = S.Array(JwtValidationActionAdditionalClaim);
export class JwtValidationActionConfig extends S.Class<JwtValidationActionConfig>("JwtValidationActionConfig")({JwksEndpoint: S.String, Issuer: S.String, AdditionalClaims: S.optional(JwtValidationActionAdditionalClaims)}) {}
export class Action extends S.Class<Action>("Action")({Type: S.String, TargetGroupArn: S.optional(S.String), AuthenticateOidcConfig: S.optional(AuthenticateOidcActionConfig), AuthenticateCognitoConfig: S.optional(AuthenticateCognitoActionConfig), Order: S.optional(S.Number), RedirectConfig: S.optional(RedirectActionConfig), FixedResponseConfig: S.optional(FixedResponseActionConfig), ForwardConfig: S.optional(ForwardActionConfig), JwtValidationConfig: S.optional(JwtValidationActionConfig)}) {}
export const Actions = S.Array(Action);
export class MutualAuthenticationAttributes extends S.Class<MutualAuthenticationAttributes>("MutualAuthenticationAttributes")({Mode: S.optional(S.String), TrustStoreArn: S.optional(S.String), IgnoreClientCertificateExpiry: S.optional(S.Boolean), TrustStoreAssociationStatus: S.optional(S.String), AdvertiseTrustStoreCaNames: S.optional(S.String)}) {}
export class ModifyListenerInput extends S.Class<ModifyListenerInput>("ModifyListenerInput")({ListenerArn: S.String, Port: S.optional(S.Number), Protocol: S.optional(S.String), SslPolicy: S.optional(S.String), Certificates: S.optional(CertificateList), DefaultActions: S.optional(Actions), AlpnPolicy: S.optional(AlpnPolicyName), MutualAuthentication: S.optional(MutualAuthenticationAttributes)}) {}
export const ListOfString = S.Array(S.String);
export class HostHeaderConditionConfig extends S.Class<HostHeaderConditionConfig>("HostHeaderConditionConfig")({Values: S.optional(ListOfString), RegexValues: S.optional(ListOfString)}) {}
export class PathPatternConditionConfig extends S.Class<PathPatternConditionConfig>("PathPatternConditionConfig")({Values: S.optional(ListOfString), RegexValues: S.optional(ListOfString)}) {}
export class HttpHeaderConditionConfig extends S.Class<HttpHeaderConditionConfig>("HttpHeaderConditionConfig")({HttpHeaderName: S.optional(S.String), Values: S.optional(ListOfString), RegexValues: S.optional(ListOfString)}) {}
export class QueryStringKeyValuePair extends S.Class<QueryStringKeyValuePair>("QueryStringKeyValuePair")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const QueryStringKeyValuePairList = S.Array(QueryStringKeyValuePair);
export class QueryStringConditionConfig extends S.Class<QueryStringConditionConfig>("QueryStringConditionConfig")({Values: S.optional(QueryStringKeyValuePairList)}) {}
export class HttpRequestMethodConditionConfig extends S.Class<HttpRequestMethodConditionConfig>("HttpRequestMethodConditionConfig")({Values: S.optional(ListOfString)}) {}
export class SourceIpConditionConfig extends S.Class<SourceIpConditionConfig>("SourceIpConditionConfig")({Values: S.optional(ListOfString)}) {}
export class RuleCondition extends S.Class<RuleCondition>("RuleCondition")({Field: S.optional(S.String), Values: S.optional(ListOfString), HostHeaderConfig: S.optional(HostHeaderConditionConfig), PathPatternConfig: S.optional(PathPatternConditionConfig), HttpHeaderConfig: S.optional(HttpHeaderConditionConfig), QueryStringConfig: S.optional(QueryStringConditionConfig), HttpRequestMethodConfig: S.optional(HttpRequestMethodConditionConfig), SourceIpConfig: S.optional(SourceIpConditionConfig), RegexValues: S.optional(ListOfString)}) {}
export const RuleConditionList = S.Array(RuleCondition);
export class RewriteConfig extends S.Class<RewriteConfig>("RewriteConfig")({Regex: S.String, Replace: S.String}) {}
export const RewriteConfigList = S.Array(RewriteConfig);
export class HostHeaderRewriteConfig extends S.Class<HostHeaderRewriteConfig>("HostHeaderRewriteConfig")({Rewrites: S.optional(RewriteConfigList)}) {}
export class UrlRewriteConfig extends S.Class<UrlRewriteConfig>("UrlRewriteConfig")({Rewrites: S.optional(RewriteConfigList)}) {}
export class RuleTransform extends S.Class<RuleTransform>("RuleTransform")({Type: S.String, HostHeaderRewriteConfig: S.optional(HostHeaderRewriteConfig), UrlRewriteConfig: S.optional(UrlRewriteConfig)}) {}
export const RuleTransformList = S.Array(RuleTransform);
export class ModifyRuleInput extends S.Class<ModifyRuleInput>("ModifyRuleInput")({RuleArn: S.String, Conditions: S.optional(RuleConditionList), Actions: S.optional(Actions), Transforms: S.optional(RuleTransformList), ResetTransforms: S.optional(S.Boolean)}) {}
export class Matcher extends S.Class<Matcher>("Matcher")({HttpCode: S.optional(S.String), GrpcCode: S.optional(S.String)}) {}
export class ModifyTargetGroupInput extends S.Class<ModifyTargetGroupInput>("ModifyTargetGroupInput")({TargetGroupArn: S.String, HealthCheckProtocol: S.optional(S.String), HealthCheckPort: S.optional(S.String), HealthCheckPath: S.optional(S.String), HealthCheckEnabled: S.optional(S.Boolean), HealthCheckIntervalSeconds: S.optional(S.Number), HealthCheckTimeoutSeconds: S.optional(S.Number), HealthyThresholdCount: S.optional(S.Number), UnhealthyThresholdCount: S.optional(S.Number), Matcher: S.optional(Matcher)}) {}
export class ModifyTrustStoreInput extends S.Class<ModifyTrustStoreInput>("ModifyTrustStoreInput")({TrustStoreArn: S.String, CaCertificatesBundleS3Bucket: S.String, CaCertificatesBundleS3Key: S.String, CaCertificatesBundleS3ObjectVersion: S.optional(S.String)}) {}
export class RegisterTargetsInput extends S.Class<RegisterTargetsInput>("RegisterTargetsInput")({TargetGroupArn: S.String, Targets: TargetDescriptions}) {}
export class RegisterTargetsOutput extends S.Class<RegisterTargetsOutput>("RegisterTargetsOutput")({}) {}
export class RemoveListenerCertificatesInput extends S.Class<RemoveListenerCertificatesInput>("RemoveListenerCertificatesInput")({ListenerArn: S.String, Certificates: CertificateList}) {}
export class RemoveListenerCertificatesOutput extends S.Class<RemoveListenerCertificatesOutput>("RemoveListenerCertificatesOutput")({}) {}
export class RemoveTagsInput extends S.Class<RemoveTagsInput>("RemoveTagsInput")({ResourceArns: ResourceArns, TagKeys: TagKeys}) {}
export class RemoveTagsOutput extends S.Class<RemoveTagsOutput>("RemoveTagsOutput")({}) {}
export class RemoveTrustStoreRevocationsInput extends S.Class<RemoveTrustStoreRevocationsInput>("RemoveTrustStoreRevocationsInput")({TrustStoreArn: S.String, RevocationIds: RevocationIds}) {}
export class RemoveTrustStoreRevocationsOutput extends S.Class<RemoveTrustStoreRevocationsOutput>("RemoveTrustStoreRevocationsOutput")({}) {}
export class SetIpAddressTypeInput extends S.Class<SetIpAddressTypeInput>("SetIpAddressTypeInput")({LoadBalancerArn: S.String, IpAddressType: S.String}) {}
export class SetSecurityGroupsInput extends S.Class<SetSecurityGroupsInput>("SetSecurityGroupsInput")({LoadBalancerArn: S.String, SecurityGroups: SecurityGroups, EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: S.optional(S.String)}) {}
export class SubnetMapping extends S.Class<SubnetMapping>("SubnetMapping")({SubnetId: S.optional(S.String), AllocationId: S.optional(S.String), PrivateIPv4Address: S.optional(S.String), IPv6Address: S.optional(S.String), SourceNatIpv6Prefix: S.optional(S.String)}) {}
export const SubnetMappings = S.Array(SubnetMapping);
export class SetSubnetsInput extends S.Class<SetSubnetsInput>("SetSubnetsInput")({LoadBalancerArn: S.String, Subnets: S.optional(Subnets), SubnetMappings: S.optional(SubnetMappings), IpAddressType: S.optional(S.String), EnablePrefixForIpv6SourceNat: S.optional(S.String)}) {}
export class RevocationContent extends S.Class<RevocationContent>("RevocationContent")({S3Bucket: S.optional(S.String), S3Key: S.optional(S.String), S3ObjectVersion: S.optional(S.String), RevocationType: S.optional(S.String)}) {}
export const RevocationContents = S.Array(RevocationContent);
export class MinimumLoadBalancerCapacity extends S.Class<MinimumLoadBalancerCapacity>("MinimumLoadBalancerCapacity")({CapacityUnits: S.optional(S.Number)}) {}
export class ListenerAttribute extends S.Class<ListenerAttribute>("ListenerAttribute")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const ListenerAttributes = S.Array(ListenerAttribute);
export class LoadBalancerAttribute extends S.Class<LoadBalancerAttribute>("LoadBalancerAttribute")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const LoadBalancerAttributes = S.Array(LoadBalancerAttribute);
export class TargetGroupAttribute extends S.Class<TargetGroupAttribute>("TargetGroupAttribute")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TargetGroupAttributes = S.Array(TargetGroupAttribute);
export class RulePriorityPair extends S.Class<RulePriorityPair>("RulePriorityPair")({RuleArn: S.optional(S.String), Priority: S.optional(S.Number)}) {}
export const RulePriorityList = S.Array(RulePriorityPair);
export class AddListenerCertificatesInput extends S.Class<AddListenerCertificatesInput>("AddListenerCertificatesInput")({ListenerArn: S.String, Certificates: CertificateList}) {}
export class AddTagsInput extends S.Class<AddTagsInput>("AddTagsInput")({ResourceArns: ResourceArns, Tags: TagList}) {}
export class AddTagsOutput extends S.Class<AddTagsOutput>("AddTagsOutput")({}) {}
export class AddTrustStoreRevocationsInput extends S.Class<AddTrustStoreRevocationsInput>("AddTrustStoreRevocationsInput")({TrustStoreArn: S.String, RevocationContents: S.optional(RevocationContents)}) {}
export class CreateLoadBalancerInput extends S.Class<CreateLoadBalancerInput>("CreateLoadBalancerInput")({Name: S.String, Subnets: S.optional(Subnets), SubnetMappings: S.optional(SubnetMappings), SecurityGroups: S.optional(SecurityGroups), Scheme: S.optional(S.String), Tags: S.optional(TagList), Type: S.optional(S.String), IpAddressType: S.optional(S.String), CustomerOwnedIpv4Pool: S.optional(S.String), EnablePrefixForIpv6SourceNat: S.optional(S.String), IpamPools: S.optional(IpamPools)}) {}
export class CreateTargetGroupInput extends S.Class<CreateTargetGroupInput>("CreateTargetGroupInput")({Name: S.String, Protocol: S.optional(S.String), ProtocolVersion: S.optional(S.String), Port: S.optional(S.Number), VpcId: S.optional(S.String), HealthCheckProtocol: S.optional(S.String), HealthCheckPort: S.optional(S.String), HealthCheckEnabled: S.optional(S.Boolean), HealthCheckPath: S.optional(S.String), HealthCheckIntervalSeconds: S.optional(S.Number), HealthCheckTimeoutSeconds: S.optional(S.Number), HealthyThresholdCount: S.optional(S.Number), UnhealthyThresholdCount: S.optional(S.Number), Matcher: S.optional(Matcher), TargetType: S.optional(S.String), Tags: S.optional(TagList), IpAddressType: S.optional(S.String), TargetControlPort: S.optional(S.Number)}) {}
export class DeregisterTargetsInput extends S.Class<DeregisterTargetsInput>("DeregisterTargetsInput")({TargetGroupArn: S.String, Targets: TargetDescriptions}) {}
export class DeregisterTargetsOutput extends S.Class<DeregisterTargetsOutput>("DeregisterTargetsOutput")({}) {}
export class DescribeListenerAttributesOutput extends S.Class<DescribeListenerAttributesOutput>("DescribeListenerAttributesOutput")({Attributes: S.optional(ListenerAttributes)}) {}
export class DescribeListenerCertificatesOutput extends S.Class<DescribeListenerCertificatesOutput>("DescribeListenerCertificatesOutput")({Certificates: S.optional(CertificateList), NextMarker: S.optional(S.String)}) {}
export class DescribeLoadBalancerAttributesOutput extends S.Class<DescribeLoadBalancerAttributesOutput>("DescribeLoadBalancerAttributesOutput")({Attributes: S.optional(LoadBalancerAttributes)}) {}
export class DescribeTargetGroupAttributesOutput extends S.Class<DescribeTargetGroupAttributesOutput>("DescribeTargetGroupAttributesOutput")({Attributes: S.optional(TargetGroupAttributes)}) {}
export class TrustStore extends S.Class<TrustStore>("TrustStore")({Name: S.optional(S.String), TrustStoreArn: S.optional(S.String), Status: S.optional(S.String), NumberOfCaCertificates: S.optional(S.Number), TotalRevokedEntries: S.optional(S.Number)}) {}
export const TrustStores = S.Array(TrustStore);
export class DescribeTrustStoresOutput extends S.Class<DescribeTrustStoresOutput>("DescribeTrustStoresOutput")({TrustStores: S.optional(TrustStores), NextMarker: S.optional(S.String)}) {}
export class GetResourcePolicyOutput extends S.Class<GetResourcePolicyOutput>("GetResourcePolicyOutput")({Policy: S.optional(S.String)}) {}
export class GetTrustStoreCaCertificatesBundleOutput extends S.Class<GetTrustStoreCaCertificatesBundleOutput>("GetTrustStoreCaCertificatesBundleOutput")({Location: S.optional(S.String)}) {}
export class GetTrustStoreRevocationContentOutput extends S.Class<GetTrustStoreRevocationContentOutput>("GetTrustStoreRevocationContentOutput")({Location: S.optional(S.String)}) {}
export class ModifyCapacityReservationInput extends S.Class<ModifyCapacityReservationInput>("ModifyCapacityReservationInput")({LoadBalancerArn: S.String, MinimumLoadBalancerCapacity: S.optional(MinimumLoadBalancerCapacity), ResetCapacityReservation: S.optional(S.Boolean)}) {}
export class ModifyIpPoolsOutput extends S.Class<ModifyIpPoolsOutput>("ModifyIpPoolsOutput")({IpamPools: S.optional(IpamPools)}) {}
export class Listener extends S.Class<Listener>("Listener")({ListenerArn: S.optional(S.String), LoadBalancerArn: S.optional(S.String), Port: S.optional(S.Number), Protocol: S.optional(S.String), Certificates: S.optional(CertificateList), SslPolicy: S.optional(S.String), DefaultActions: S.optional(Actions), AlpnPolicy: S.optional(AlpnPolicyName), MutualAuthentication: S.optional(MutualAuthenticationAttributes)}) {}
export const Listeners = S.Array(Listener);
export class ModifyListenerOutput extends S.Class<ModifyListenerOutput>("ModifyListenerOutput")({Listeners: S.optional(Listeners)}) {}
export class ModifyListenerAttributesInput extends S.Class<ModifyListenerAttributesInput>("ModifyListenerAttributesInput")({ListenerArn: S.String, Attributes: ListenerAttributes}) {}
export class ModifyLoadBalancerAttributesInput extends S.Class<ModifyLoadBalancerAttributesInput>("ModifyLoadBalancerAttributesInput")({LoadBalancerArn: S.String, Attributes: LoadBalancerAttributes}) {}
export class Rule extends S.Class<Rule>("Rule")({RuleArn: S.optional(S.String), Priority: S.optional(S.String), Conditions: S.optional(RuleConditionList), Actions: S.optional(Actions), IsDefault: S.optional(S.Boolean), Transforms: S.optional(RuleTransformList)}) {}
export const Rules = S.Array(Rule);
export class ModifyRuleOutput extends S.Class<ModifyRuleOutput>("ModifyRuleOutput")({Rules: S.optional(Rules)}) {}
export class TargetGroup extends S.Class<TargetGroup>("TargetGroup")({TargetGroupArn: S.optional(S.String), TargetGroupName: S.optional(S.String), Protocol: S.optional(S.String), Port: S.optional(S.Number), VpcId: S.optional(S.String), HealthCheckProtocol: S.optional(S.String), HealthCheckPort: S.optional(S.String), HealthCheckEnabled: S.optional(S.Boolean), HealthCheckIntervalSeconds: S.optional(S.Number), HealthCheckTimeoutSeconds: S.optional(S.Number), HealthyThresholdCount: S.optional(S.Number), UnhealthyThresholdCount: S.optional(S.Number), HealthCheckPath: S.optional(S.String), Matcher: S.optional(Matcher), LoadBalancerArns: S.optional(LoadBalancerArns), TargetType: S.optional(S.String), ProtocolVersion: S.optional(S.String), IpAddressType: S.optional(S.String), TargetControlPort: S.optional(S.Number)}) {}
export const TargetGroups = S.Array(TargetGroup);
export class ModifyTargetGroupOutput extends S.Class<ModifyTargetGroupOutput>("ModifyTargetGroupOutput")({TargetGroups: S.optional(TargetGroups)}) {}
export class ModifyTargetGroupAttributesInput extends S.Class<ModifyTargetGroupAttributesInput>("ModifyTargetGroupAttributesInput")({TargetGroupArn: S.String, Attributes: TargetGroupAttributes}) {}
export class ModifyTrustStoreOutput extends S.Class<ModifyTrustStoreOutput>("ModifyTrustStoreOutput")({TrustStores: S.optional(TrustStores)}) {}
export class SetIpAddressTypeOutput extends S.Class<SetIpAddressTypeOutput>("SetIpAddressTypeOutput")({IpAddressType: S.optional(S.String)}) {}
export class SetRulePrioritiesInput extends S.Class<SetRulePrioritiesInput>("SetRulePrioritiesInput")({RulePriorities: RulePriorityList}) {}
export class SetSecurityGroupsOutput extends S.Class<SetSecurityGroupsOutput>("SetSecurityGroupsOutput")({SecurityGroupIds: S.optional(SecurityGroups), EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: S.optional(S.String)}) {}
export const SslProtocols = S.Array(S.String);
export const SourceNatIpv6Prefixes = S.Array(S.String);
export class Limit extends S.Class<Limit>("Limit")({Name: S.optional(S.String), Max: S.optional(S.String)}) {}
export const Limits = S.Array(Limit);
export class TagDescription extends S.Class<TagDescription>("TagDescription")({ResourceArn: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const TagDescriptions = S.Array(TagDescription);
export class TrustStoreAssociation extends S.Class<TrustStoreAssociation>("TrustStoreAssociation")({ResourceArn: S.optional(S.String)}) {}
export const TrustStoreAssociations = S.Array(TrustStoreAssociation);
export class DescribeTrustStoreRevocation extends S.Class<DescribeTrustStoreRevocation>("DescribeTrustStoreRevocation")({TrustStoreArn: S.optional(S.String), RevocationId: S.optional(S.Number), RevocationType: S.optional(S.String), NumberOfRevokedEntries: S.optional(S.Number)}) {}
export const DescribeTrustStoreRevocationResponse = S.Array(DescribeTrustStoreRevocation);
export class AddListenerCertificatesOutput extends S.Class<AddListenerCertificatesOutput>("AddListenerCertificatesOutput")({Certificates: S.optional(CertificateList)}) {}
export class LoadBalancerState extends S.Class<LoadBalancerState>("LoadBalancerState")({Code: S.optional(S.String), Reason: S.optional(S.String)}) {}
export class LoadBalancerAddress extends S.Class<LoadBalancerAddress>("LoadBalancerAddress")({IpAddress: S.optional(S.String), AllocationId: S.optional(S.String), PrivateIPv4Address: S.optional(S.String), IPv6Address: S.optional(S.String)}) {}
export const LoadBalancerAddresses = S.Array(LoadBalancerAddress);
export class AvailabilityZone extends S.Class<AvailabilityZone>("AvailabilityZone")({ZoneName: S.optional(S.String), SubnetId: S.optional(S.String), OutpostId: S.optional(S.String), LoadBalancerAddresses: S.optional(LoadBalancerAddresses), SourceNatIpv6Prefixes: S.optional(SourceNatIpv6Prefixes)}) {}
export const AvailabilityZones = S.Array(AvailabilityZone);
export class LoadBalancer extends S.Class<LoadBalancer>("LoadBalancer")({LoadBalancerArn: S.optional(S.String), DNSName: S.optional(S.String), CanonicalHostedZoneId: S.optional(S.String), CreatedTime: S.optional(S.Date), LoadBalancerName: S.optional(S.String), Scheme: S.optional(S.String), VpcId: S.optional(S.String), State: S.optional(LoadBalancerState), Type: S.optional(S.String), AvailabilityZones: S.optional(AvailabilityZones), SecurityGroups: S.optional(SecurityGroups), IpAddressType: S.optional(S.String), CustomerOwnedIpv4Pool: S.optional(S.String), EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: S.optional(S.String), EnablePrefixForIpv6SourceNat: S.optional(S.String), IpamPools: S.optional(IpamPools)}) {}
export const LoadBalancers = S.Array(LoadBalancer);
export class CreateLoadBalancerOutput extends S.Class<CreateLoadBalancerOutput>("CreateLoadBalancerOutput")({LoadBalancers: S.optional(LoadBalancers)}) {}
export class CreateTargetGroupOutput extends S.Class<CreateTargetGroupOutput>("CreateTargetGroupOutput")({TargetGroups: S.optional(TargetGroups)}) {}
export class CreateTrustStoreOutput extends S.Class<CreateTrustStoreOutput>("CreateTrustStoreOutput")({TrustStores: S.optional(TrustStores)}) {}
export class DescribeAccountLimitsOutput extends S.Class<DescribeAccountLimitsOutput>("DescribeAccountLimitsOutput")({Limits: S.optional(Limits), NextMarker: S.optional(S.String)}) {}
export class DescribeListenersOutput extends S.Class<DescribeListenersOutput>("DescribeListenersOutput")({Listeners: S.optional(Listeners), NextMarker: S.optional(S.String)}) {}
export class DescribeRulesOutput extends S.Class<DescribeRulesOutput>("DescribeRulesOutput")({Rules: S.optional(Rules), NextMarker: S.optional(S.String)}) {}
export class DescribeTagsOutput extends S.Class<DescribeTagsOutput>("DescribeTagsOutput")({TagDescriptions: S.optional(TagDescriptions)}) {}
export class DescribeTargetGroupsOutput extends S.Class<DescribeTargetGroupsOutput>("DescribeTargetGroupsOutput")({TargetGroups: S.optional(TargetGroups), NextMarker: S.optional(S.String)}) {}
export class DescribeTrustStoreAssociationsOutput extends S.Class<DescribeTrustStoreAssociationsOutput>("DescribeTrustStoreAssociationsOutput")({TrustStoreAssociations: S.optional(TrustStoreAssociations), NextMarker: S.optional(S.String)}) {}
export class DescribeTrustStoreRevocationsOutput extends S.Class<DescribeTrustStoreRevocationsOutput>("DescribeTrustStoreRevocationsOutput")({TrustStoreRevocations: S.optional(DescribeTrustStoreRevocationResponse), NextMarker: S.optional(S.String)}) {}
export class CapacityReservationStatus extends S.Class<CapacityReservationStatus>("CapacityReservationStatus")({Code: S.optional(S.String), Reason: S.optional(S.String)}) {}
export class ZonalCapacityReservationState extends S.Class<ZonalCapacityReservationState>("ZonalCapacityReservationState")({State: S.optional(CapacityReservationStatus), AvailabilityZone: S.optional(S.String), EffectiveCapacityUnits: S.optional(S.Number)}) {}
export const ZonalCapacityReservationStates = S.Array(ZonalCapacityReservationState);
export class ModifyCapacityReservationOutput extends S.Class<ModifyCapacityReservationOutput>("ModifyCapacityReservationOutput")({LastModifiedTime: S.optional(S.Date), DecreaseRequestsRemaining: S.optional(S.Number), MinimumLoadBalancerCapacity: S.optional(MinimumLoadBalancerCapacity), CapacityReservationState: S.optional(ZonalCapacityReservationStates)}) {}
export class ModifyListenerAttributesOutput extends S.Class<ModifyListenerAttributesOutput>("ModifyListenerAttributesOutput")({Attributes: S.optional(ListenerAttributes)}) {}
export class ModifyLoadBalancerAttributesOutput extends S.Class<ModifyLoadBalancerAttributesOutput>("ModifyLoadBalancerAttributesOutput")({Attributes: S.optional(LoadBalancerAttributes)}) {}
export class ModifyTargetGroupAttributesOutput extends S.Class<ModifyTargetGroupAttributesOutput>("ModifyTargetGroupAttributesOutput")({Attributes: S.optional(TargetGroupAttributes)}) {}
export class SetRulePrioritiesOutput extends S.Class<SetRulePrioritiesOutput>("SetRulePrioritiesOutput")({Rules: S.optional(Rules)}) {}
export class Cipher extends S.Class<Cipher>("Cipher")({Name: S.optional(S.String), Priority: S.optional(S.Number)}) {}
export const Ciphers = S.Array(Cipher);
export class TargetHealth extends S.Class<TargetHealth>("TargetHealth")({State: S.optional(S.String), Reason: S.optional(S.String), Description: S.optional(S.String)}) {}
export class AnomalyDetection extends S.Class<AnomalyDetection>("AnomalyDetection")({Result: S.optional(S.String), MitigationInEffect: S.optional(S.String)}) {}
export class AdministrativeOverride extends S.Class<AdministrativeOverride>("AdministrativeOverride")({State: S.optional(S.String), Reason: S.optional(S.String), Description: S.optional(S.String)}) {}
export class TrustStoreRevocation extends S.Class<TrustStoreRevocation>("TrustStoreRevocation")({TrustStoreArn: S.optional(S.String), RevocationId: S.optional(S.Number), RevocationType: S.optional(S.String), NumberOfRevokedEntries: S.optional(S.Number)}) {}
export const TrustStoreRevocations = S.Array(TrustStoreRevocation);
export class SslPolicy extends S.Class<SslPolicy>("SslPolicy")({SslProtocols: S.optional(SslProtocols), Ciphers: S.optional(Ciphers), Name: S.optional(S.String), SupportedLoadBalancerTypes: S.optional(ListOfString)}) {}
export const SslPolicies = S.Array(SslPolicy);
export class TargetHealthDescription extends S.Class<TargetHealthDescription>("TargetHealthDescription")({Target: S.optional(TargetDescription), HealthCheckPort: S.optional(S.String), TargetHealth: S.optional(TargetHealth), AnomalyDetection: S.optional(AnomalyDetection), AdministrativeOverride: S.optional(AdministrativeOverride)}) {}
export const TargetHealthDescriptions = S.Array(TargetHealthDescription);
export class AddTrustStoreRevocationsOutput extends S.Class<AddTrustStoreRevocationsOutput>("AddTrustStoreRevocationsOutput")({TrustStoreRevocations: S.optional(TrustStoreRevocations)}) {}
export class CreateListenerInput extends S.Class<CreateListenerInput>("CreateListenerInput")({LoadBalancerArn: S.String, Protocol: S.optional(S.String), Port: S.optional(S.Number), SslPolicy: S.optional(S.String), Certificates: S.optional(CertificateList), DefaultActions: Actions, AlpnPolicy: S.optional(AlpnPolicyName), Tags: S.optional(TagList), MutualAuthentication: S.optional(MutualAuthenticationAttributes)}) {}
export class CreateRuleInput extends S.Class<CreateRuleInput>("CreateRuleInput")({ListenerArn: S.String, Conditions: RuleConditionList, Priority: S.Number, Actions: Actions, Tags: S.optional(TagList), Transforms: S.optional(RuleTransformList)}) {}
export class DescribeCapacityReservationOutput extends S.Class<DescribeCapacityReservationOutput>("DescribeCapacityReservationOutput")({LastModifiedTime: S.optional(S.Date), DecreaseRequestsRemaining: S.optional(S.Number), MinimumLoadBalancerCapacity: S.optional(MinimumLoadBalancerCapacity), CapacityReservationState: S.optional(ZonalCapacityReservationStates)}) {}
export class DescribeLoadBalancersOutput extends S.Class<DescribeLoadBalancersOutput>("DescribeLoadBalancersOutput")({LoadBalancers: S.optional(LoadBalancers), NextMarker: S.optional(S.String)}) {}
export class DescribeSSLPoliciesOutput extends S.Class<DescribeSSLPoliciesOutput>("DescribeSSLPoliciesOutput")({SslPolicies: S.optional(SslPolicies), NextMarker: S.optional(S.String)}) {}
export class DescribeTargetHealthOutput extends S.Class<DescribeTargetHealthOutput>("DescribeTargetHealthOutput")({TargetHealthDescriptions: S.optional(TargetHealthDescriptions)}) {}
export class SetSubnetsOutput extends S.Class<SetSubnetsOutput>("SetSubnetsOutput")({AvailabilityZones: S.optional(AvailabilityZones), IpAddressType: S.optional(S.String), EnablePrefixForIpv6SourceNat: S.optional(S.String)}) {}
export class CreateListenerOutput extends S.Class<CreateListenerOutput>("CreateListenerOutput")({Listeners: S.optional(Listeners)}) {}
export class CreateRuleOutput extends S.Class<CreateRuleOutput>("CreateRuleOutput")({Rules: S.optional(Rules)}) {}

//# Errors
export class ListenerNotFoundException extends S.TaggedError<ListenerNotFoundException>()("ListenerNotFoundException", {}) {};
export class OperationNotPermittedException extends S.TaggedError<OperationNotPermittedException>()("OperationNotPermittedException", {}) {};
export class LoadBalancerNotFoundException extends S.TaggedError<LoadBalancerNotFoundException>()("LoadBalancerNotFoundException", {}) {};
export class ResourceInUseException extends S.TaggedError<ResourceInUseException>()("ResourceInUseException", {}) {};
export class RuleNotFoundException extends S.TaggedError<RuleNotFoundException>()("RuleNotFoundException", {}) {};
export class DeleteAssociationSameAccountException extends S.TaggedError<DeleteAssociationSameAccountException>()("DeleteAssociationSameAccountException", {Message: S.optional(S.String)}) {};
export class TrustStoreInUseException extends S.TaggedError<TrustStoreInUseException>()("TrustStoreInUseException", {Message: S.optional(S.String)}) {};
export class InvalidTargetException extends S.TaggedError<InvalidTargetException>()("InvalidTargetException", {}) {};
export class TargetGroupNotFoundException extends S.TaggedError<TargetGroupNotFoundException>()("TargetGroupNotFoundException", {}) {};
export class TrustStoreNotFoundException extends S.TaggedError<TrustStoreNotFoundException>()("TrustStoreNotFoundException", {}) {};
export class RevocationIdNotFoundException extends S.TaggedError<RevocationIdNotFoundException>()("RevocationIdNotFoundException", {}) {};
export class InvalidConfigurationRequestException extends S.TaggedError<InvalidConfigurationRequestException>()("InvalidConfigurationRequestException", {}) {};
export class DuplicateTagKeysException extends S.TaggedError<DuplicateTagKeysException>()("DuplicateTagKeysException", {Message: S.optional(S.String)}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {}) {};
export class CaCertificatesBundleNotFoundException extends S.TaggedError<CaCertificatesBundleNotFoundException>()("CaCertificatesBundleNotFoundException", {}) {};
export class TrustStoreAssociationNotFoundException extends S.TaggedError<TrustStoreAssociationNotFoundException>()("TrustStoreAssociationNotFoundException", {Message: S.optional(S.String)}) {};
export class UnsupportedProtocolException extends S.TaggedError<UnsupportedProtocolException>()("UnsupportedProtocolException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {Message: S.optional(S.String)}) {};
export class ALPNPolicyNotSupportedException extends S.TaggedError<ALPNPolicyNotSupportedException>()("ALPNPolicyNotSupportedException", {Message: S.optional(S.String)}) {};
export class CertificateNotFoundException extends S.TaggedError<CertificateNotFoundException>()("CertificateNotFoundException", {}) {};
export class IncompatibleProtocolsException extends S.TaggedError<IncompatibleProtocolsException>()("IncompatibleProtocolsException", {Message: S.optional(S.String)}) {};
export class TooManyRegistrationsForTargetIdException extends S.TaggedError<TooManyRegistrationsForTargetIdException>()("TooManyRegistrationsForTargetIdException", {Message: S.optional(S.String)}) {};
export class InvalidSubnetException extends S.TaggedError<InvalidSubnetException>()("InvalidSubnetException", {Message: S.optional(S.String)}) {};
export class InvalidSecurityGroupException extends S.TaggedError<InvalidSecurityGroupException>()("InvalidSecurityGroupException", {Message: S.optional(S.String)}) {};
export class AllocationIdNotFoundException extends S.TaggedError<AllocationIdNotFoundException>()("AllocationIdNotFoundException", {Message: S.optional(S.String)}) {};
export class DuplicateTargetGroupNameException extends S.TaggedError<DuplicateTargetGroupNameException>()("DuplicateTargetGroupNameException", {Message: S.optional(S.String)}) {};
export class DuplicateTrustStoreNameException extends S.TaggedError<DuplicateTrustStoreNameException>()("DuplicateTrustStoreNameException", {Message: S.optional(S.String)}) {};
export class InvalidCaCertificatesBundleException extends S.TaggedError<InvalidCaCertificatesBundleException>()("InvalidCaCertificatesBundleException", {}) {};
export class CapacityDecreaseRequestsLimitExceededException extends S.TaggedError<CapacityDecreaseRequestsLimitExceededException>()("CapacityDecreaseRequestsLimitExceededException", {Message: S.optional(S.String)}) {};
export class DuplicateListenerException extends S.TaggedError<DuplicateListenerException>()("DuplicateListenerException", {Message: S.optional(S.String)}) {};
export class InvalidLoadBalancerActionException extends S.TaggedError<InvalidLoadBalancerActionException>()("InvalidLoadBalancerActionException", {}) {};
export class SSLPolicyNotFoundException extends S.TaggedError<SSLPolicyNotFoundException>()("SSLPolicyNotFoundException", {}) {};
export class TargetGroupAssociationLimitException extends S.TaggedError<TargetGroupAssociationLimitException>()("TargetGroupAssociationLimitException", {}) {};
export class TooManyTargetsException extends S.TaggedError<TooManyTargetsException>()("TooManyTargetsException", {Message: S.optional(S.String)}) {};
export class PriorityInUseException extends S.TaggedError<PriorityInUseException>()("PriorityInUseException", {Message: S.optional(S.String)}) {};
export class AvailabilityZoneNotSupportedException extends S.TaggedError<AvailabilityZoneNotSupportedException>()("AvailabilityZoneNotSupportedException", {}) {};
export class CapacityReservationPendingException extends S.TaggedError<CapacityReservationPendingException>()("CapacityReservationPendingException", {}) {};
export class TooManyCertificatesException extends S.TaggedError<TooManyCertificatesException>()("TooManyCertificatesException", {Message: S.optional(S.String)}) {};
export class InvalidRevocationContentException extends S.TaggedError<InvalidRevocationContentException>()("InvalidRevocationContentException", {Message: S.optional(S.String)}) {};
export class TooManyActionsException extends S.TaggedError<TooManyActionsException>()("TooManyActionsException", {}) {};
export class TooManyTargetGroupsException extends S.TaggedError<TooManyTargetGroupsException>()("TooManyTargetGroupsException", {Message: S.optional(S.String)}) {};
export class TooManyTrustStoresException extends S.TaggedError<TooManyTrustStoresException>()("TooManyTrustStoresException", {Message: S.optional(S.String)}) {};
export class HealthUnavailableException extends S.TaggedError<HealthUnavailableException>()("HealthUnavailableException", {Message: S.optional(S.String)}) {};
export class TooManyListenersException extends S.TaggedError<TooManyListenersException>()("TooManyListenersException", {}) {};
export class TooManyUniqueTargetGroupsPerLoadBalancerException extends S.TaggedError<TooManyUniqueTargetGroupsPerLoadBalancerException>()("TooManyUniqueTargetGroupsPerLoadBalancerException", {}) {};
export class SubnetNotFoundException extends S.TaggedError<SubnetNotFoundException>()("SubnetNotFoundException", {Message: S.optional(S.String)}) {};
export class RevocationContentNotFoundException extends S.TaggedError<RevocationContentNotFoundException>()("RevocationContentNotFoundException", {Message: S.optional(S.String)}) {};
export class DuplicateLoadBalancerNameException extends S.TaggedError<DuplicateLoadBalancerNameException>()("DuplicateLoadBalancerNameException", {Message: S.optional(S.String)}) {};
export class TooManyRulesException extends S.TaggedError<TooManyRulesException>()("TooManyRulesException", {Message: S.optional(S.String)}) {};
export class CapacityUnitsLimitExceededException extends S.TaggedError<CapacityUnitsLimitExceededException>()("CapacityUnitsLimitExceededException", {Message: S.optional(S.String)}) {};
export class TrustStoreNotReadyException extends S.TaggedError<TrustStoreNotReadyException>()("TrustStoreNotReadyException", {}) {};
export class TooManyTrustStoreRevocationEntriesException extends S.TaggedError<TooManyTrustStoreRevocationEntriesException>()("TooManyTrustStoreRevocationEntriesException", {Message: S.optional(S.String)}) {};
export class InvalidSchemeException extends S.TaggedError<InvalidSchemeException>()("InvalidSchemeException", {Message: S.optional(S.String)}) {};
export class InsufficientCapacityException extends S.TaggedError<InsufficientCapacityException>()("InsufficientCapacityException", {Message: S.optional(S.String)}) {};
export class TooManyLoadBalancersException extends S.TaggedError<TooManyLoadBalancersException>()("TooManyLoadBalancersException", {Message: S.optional(S.String)}) {};
export class PriorRequestNotCompleteException extends S.TaggedError<PriorRequestNotCompleteException>()("PriorRequestNotCompleteException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Removes the specified certificate from the certificate list for the specified HTTPS or TLS
 * listener.
 */export const removeListenerCertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.RemoveListenerCertificates" }, RemoveListenerCertificatesInput, RemoveListenerCertificatesOutput, [ListenerNotFoundException, OperationNotPermittedException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified listener.
 * 
 * Alternatively, your listener is deleted when you delete the load balancer to which it is
 * attached.
 */export const deleteListener = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DeleteListener" }, DeleteListenerInput, DeleteListenerOutput, [ListenerNotFoundException, ResourceInUseException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load
 * Balancer. Deleting a load balancer also deletes its listeners.
 * 
 * You can't delete a load balancer if deletion protection is enabled. If the load balancer
 * does not exist or has already been deleted, the call succeeds.
 * 
 * Deleting a load balancer does not affect its registered targets. For example, your EC2
 * instances continue to run and are still registered to their target groups. If you no longer
 * need these EC2 instances, you can stop or terminate them.
 */export const deleteLoadBalancer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DeleteLoadBalancer" }, DeleteLoadBalancerInput, DeleteLoadBalancerOutput, [LoadBalancerNotFoundException, OperationNotPermittedException, ResourceInUseException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified rule.
 * 
 * You can't delete the default rule.
 */export const deleteRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DeleteRule" }, DeleteRuleInput, DeleteRuleOutput, [OperationNotPermittedException, RuleNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified target group.
 * 
 * You can delete a target group if it is not referenced by any actions. Deleting a target
 * group also deletes any associated health checks. Deleting a target group does not affect its
 * registered targets. For example, any EC2 instances continue to run until you stop or terminate
 * them.
 */export const deleteTargetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DeleteTargetGroup" }, DeleteTargetGroupInput, DeleteTargetGroupOutput, [ResourceInUseException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the attributes for the specified listener.
 */export const describeListenerAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeListenerAttributes" }, DescribeListenerAttributesInput, DescribeListenerAttributesOutput, [ListenerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the default certificate and the certificate list for the specified HTTPS or TLS
 * listener.
 * 
 * If the default certificate is also in the certificate list, it appears twice in the
 * results (once with `IsDefault` set to true and once with `IsDefault` set
 * to false).
 * 
 * For more information, see SSL certificates in the *Application Load Balancers Guide* or
 * Server certificates in the Network Load Balancers
 * Guide.
 */export const describeListenerCertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeListenerCertificates" }, DescribeListenerCertificatesInput, DescribeListenerCertificatesOutput, [ListenerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the attributes for the specified Application Load Balancer, Network Load
 * Balancer, or Gateway Load Balancer.
 * 
 * For more information, see the following:
 * 
 * - Load balancer attributes in the Application Load Balancers
 * Guide
 * 
 * - Load balancer attributes in the Network Load Balancers
 * Guide
 * 
 * - Load balancer attributes in the Gateway Load Balancers
 * Guide
 */export const describeLoadBalancerAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeLoadBalancerAttributes" }, DescribeLoadBalancerAttributesInput, DescribeLoadBalancerAttributesOutput, [LoadBalancerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the attributes for the specified target group.
 * 
 * For more information, see the following:
 * 
 * - Target group attributes in the Application Load Balancers
 * Guide
 * 
 * - Target group attributes in the Network Load Balancers
 * Guide
 * 
 * - Target group attributes in the Gateway Load Balancers
 * Guide
 */export const describeTargetGroupAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeTargetGroupAttributes" }, DescribeTargetGroupAttributesInput, DescribeTargetGroupAttributesOutput, [TargetGroupNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes all trust stores for the specified account.
 */export const describeTrustStores = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeTrustStores" }, DescribeTrustStoresInput, DescribeTrustStoresOutput, [TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Retrieves the ca certificate bundle.
 * 
 * This action returns a pre-signed S3 URI which is
 * active for ten minutes.
 */export const getTrustStoreCaCertificatesBundle = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.GetTrustStoreCaCertificatesBundle" }, GetTrustStoreCaCertificatesBundleInput, GetTrustStoreCaCertificatesBundleOutput, [TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Retrieves the specified revocation file.
 * 
 * This action returns a pre-signed S3 URI which is
 * active for ten minutes.
 */export const getTrustStoreRevocationContent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.GetTrustStoreRevocationContent" }, GetTrustStoreRevocationContentInput, GetTrustStoreRevocationContentOutput, [RevocationIdNotFoundException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * [Application Load Balancers] Modify the IP pool associated to a load balancer.
 */export const modifyIpPools = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.ModifyIpPools" }, ModifyIpPoolsInput, ModifyIpPoolsOutput, [LoadBalancerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Removes the specified revocation file from the specified trust store.
 */export const removeTrustStoreRevocations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.RemoveTrustStoreRevocations" }, RemoveTrustStoreRevocationsInput, RemoveTrustStoreRevocationsOutput, [RevocationIdNotFoundException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your
 * Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups,
 * trust stores, listeners, and rules.
 * 
 * Each tag consists of a key and an optional value. If a resource already has a tag with the
 * same key, `AddTags` updates its value.
 */export const addTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.AddTags" }, AddTagsInput, AddTagsOutput, [DuplicateTagKeysException, ListenerNotFoundException, LoadBalancerNotFoundException, RuleNotFoundException, TargetGroupNotFoundException, TooManyTagsException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a shared trust store association.
 */export const deleteSharedTrustStoreAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DeleteSharedTrustStoreAssociation" }, DeleteSharedTrustStoreAssociationInput, DeleteSharedTrustStoreAssociationOutput, [DeleteAssociationSameAccountException, TrustStoreAssociationNotFoundException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a trust store.
 */export const deleteTrustStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DeleteTrustStore" }, DeleteTrustStoreInput, DeleteTrustStoreOutput, [TrustStoreInUseException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deregisters the specified targets from the specified target group. After the targets are
 * deregistered, they no longer receive traffic from the load balancer.
 * 
 * The load balancer stops sending requests to targets that are deregistering, but uses
 * connection draining to ensure that in-flight traffic completes on the existing connections.
 * This deregistration delay is configured by default but can be updated for each target group.
 * 
 * For more information, see the following:
 * 
 * -
 * Deregistration delay in the *Application Load Balancers User Guide*
 * 
 * -
 * Deregistration delay in the *Network Load Balancers User Guide*
 * 
 * -
 * Deregistration delay in the *Gateway Load Balancers User Guide*
 * 
 * Note: If the specified target does not exist, the action returns successfully.
 */export const deregisterTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DeregisterTargets" }, DeregisterTargetsInput, DeregisterTargetsOutput, [InvalidTargetException, TargetGroupNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the current Elastic Load Balancing resource limits for your Amazon Web Services
 * account.
 * 
 * For more information, see the following:
 * 
 * - Quotas for your
 * Application Load Balancers
 * 
 * - Quotas for your
 * Network Load Balancers
 * 
 * - Quotas for your Gateway
 * Load Balancers
 */export const describeAccountLimits = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeAccountLimits" }, DescribeAccountLimitsInput, DescribeAccountLimitsOutput, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the specified rules or the rules for the specified listener. You must specify
 * either a listener or rules.
 */export const describeRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeRules" }, DescribeRulesInput, DescribeRulesOutput, [ListenerNotFoundException, RuleNotFoundException, UnsupportedProtocolException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the tags for the specified Elastic Load Balancing resources. You can describe
 * the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load
 * Balancers, target groups, listeners, or rules.
 */export const describeTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeTags" }, DescribeTagsInput, DescribeTagsOutput, [ListenerNotFoundException, LoadBalancerNotFoundException, RuleNotFoundException, TargetGroupNotFoundException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the specified target groups or all of your target groups. By default, all target
 * groups are described. Alternatively, you can specify one of the following to filter the
 * results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of
 * one or more target groups.
 */export const describeTargetGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeTargetGroups" }, DescribeTargetGroupsInput, DescribeTargetGroupsOutput, [LoadBalancerNotFoundException, TargetGroupNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes all resources associated with the specified trust store.
 */export const describeTrustStoreAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeTrustStoreAssociations" }, DescribeTrustStoreAssociationsInput, DescribeTrustStoreAssociationsOutput, [TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the revocation files in use by the specified trust store or revocation
 * files.
 */export const describeTrustStoreRevocations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeTrustStoreRevocations" }, DescribeTrustStoreRevocationsInput, DescribeTrustStoreRevocationsOutput, [RevocationIdNotFoundException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Retrieves the resource policy for a specified resource.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.GetResourcePolicy" }, GetResourcePolicyInput, GetResourcePolicyOutput, [ResourceNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the specified attributes of the specified listener.
 */export const modifyListenerAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.ModifyListenerAttributes" }, ModifyListenerAttributesInput, ModifyListenerAttributesOutput, [InvalidConfigurationRequestException, ListenerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the specified attributes of the specified Application Load Balancer, Network Load
 * Balancer, or Gateway Load Balancer.
 * 
 * If any of the specified attributes can't be modified as requested, the call fails. Any
 * existing attributes that you do not modify retain their current values.
 */export const modifyLoadBalancerAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.ModifyLoadBalancerAttributes" }, ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput, [InvalidConfigurationRequestException, LoadBalancerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the health checks used when evaluating the health state of the targets in the
 * specified target group.
 */export const modifyTargetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.ModifyTargetGroup" }, ModifyTargetGroupInput, ModifyTargetGroupOutput, [InvalidConfigurationRequestException, TargetGroupNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the specified attributes of the specified target group.
 */export const modifyTargetGroupAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.ModifyTargetGroupAttributes" }, ModifyTargetGroupAttributesInput, ModifyTargetGroupAttributesOutput, [InvalidConfigurationRequestException, TargetGroupNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Removes the specified tags from the specified Elastic Load Balancing resources. You can
 * remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway
 * Load Balancers, target groups, listeners, or rules.
 */export const removeTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.RemoveTags" }, RemoveTagsInput, RemoveTagsOutput, [ListenerNotFoundException, LoadBalancerNotFoundException, RuleNotFoundException, TargetGroupNotFoundException, TooManyTagsException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Sets the type of IP addresses used by the subnets of the specified load balancer.
 */export const setIpAddressType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.SetIpAddressType" }, SetIpAddressTypeInput, SetIpAddressTypeOutput, [InvalidConfigurationRequestException, InvalidSubnetException, LoadBalancerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Associates the specified security groups with the specified Application Load Balancer or
 * Network Load Balancer. The specified security groups override the previously associated
 * security groups.
 * 
 * You can't perform this operation on a Network Load Balancer unless you specified a
 * security group for the load balancer when you created it.
 * 
 * You can't associate a security group with a Gateway Load Balancer.
 */export const setSecurityGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.SetSecurityGroups" }, SetSecurityGroupsInput, SetSecurityGroupsOutput, [InvalidConfigurationRequestException, InvalidSecurityGroupException, LoadBalancerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the capacity reservation status for the specified load balancer.
 */export const describeCapacityReservation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeCapacityReservation" }, DescribeCapacityReservationInput, DescribeCapacityReservationOutput, [LoadBalancerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the specified listeners or the listeners for the specified Application Load
 * Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load
 * balancer or one or more listeners.
 */export const describeListeners = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeListeners" }, DescribeListenersInput, DescribeListenersOutput, [ListenerNotFoundException, LoadBalancerNotFoundException, UnsupportedProtocolException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the specified load balancers or all of your load balancers.
 */export const describeLoadBalancers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeLoadBalancers" }, DescribeLoadBalancersInput, DescribeLoadBalancersOutput, [LoadBalancerNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Update the ca certificate bundle for the specified trust store.
 */export const modifyTrustStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.ModifyTrustStore" }, ModifyTrustStoreInput, ModifyTrustStoreOutput, [CaCertificatesBundleNotFoundException, InvalidCaCertificatesBundleException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Registers the specified targets with the specified target group.
 * 
 * If the target is an EC2 instance, it must be in the `running` state when you
 * register it.
 * 
 * By default, the load balancer routes requests to registered targets using the protocol and
 * port for the target group. Alternatively, you can override the port for a target when you
 * register it. You can register each EC2 instance or IP address with the same target group
 * multiple times using different ports.
 * 
 * For more information, see the following:
 * 
 * - Register
 * targets for your Application Load Balancer
 * 
 * - Register targets
 * for your Network Load Balancer
 * 
 * - Register targets for your
 * Gateway Load Balancer
 */export const registerTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.RegisterTargets" }, RegisterTargetsInput, RegisterTargetsOutput, [InvalidTargetException, TargetGroupNotFoundException, TooManyRegistrationsForTargetIdException, TooManyTargetsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Sets the priorities of the specified rules.
 * 
 * You can reorder the rules as long as there are no priority conflicts in the new order. Any
 * existing rules that you do not specify retain their current priority.
 */export const setRulePriorities = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.SetRulePriorities" }, SetRulePrioritiesInput, SetRulePrioritiesOutput, [OperationNotPermittedException, PriorityInUseException, RuleNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Adds the specified SSL server certificate to the certificate list for the specified HTTPS
 * or TLS listener.
 * 
 * If the certificate in already in the certificate list, the call is successful but the
 * certificate is not added again.
 * 
 * For more information, see SSL
 * certificates in the *Application Load Balancers Guide* or Server
 * certificates in the *Network Load Balancers Guide*.
 */export const addListenerCertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.AddListenerCertificates" }, AddListenerCertificatesInput, AddListenerCertificatesOutput, [CertificateNotFoundException, ListenerNotFoundException, TooManyCertificatesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a target group.
 * 
 * For more information, see the following:
 * 
 * - Target
 * groups for your Application Load Balancers
 * 
 * - Target groups
 * for your Network Load Balancers
 * 
 * - Target groups for your
 * Gateway Load Balancers
 * 
 * This operation is idempotent, which means that it completes at most one time. If you
 * attempt to create multiple target groups with the same settings, each call succeeds.
 */export const createTargetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.CreateTargetGroup" }, CreateTargetGroupInput, CreateTargetGroupOutput, [DuplicateTargetGroupNameException, InvalidConfigurationRequestException, TooManyTagsException, TooManyTargetGroupsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a trust store.
 * 
 * For more information, see Mutual TLS for Application Load Balancers.
 */export const createTrustStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.CreateTrustStore" }, CreateTrustStoreInput, CreateTrustStoreOutput, [CaCertificatesBundleNotFoundException, DuplicateTagKeysException, DuplicateTrustStoreNameException, InvalidCaCertificatesBundleException, TooManyTagsException, TooManyTrustStoresException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the specified policies or all policies used for SSL negotiation.
 * 
 * For more information, see Security policies in the *Application Load Balancers Guide* and
 * Security policies in the *Network Load Balancers Guide*.
 */export const describeSSLPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeSSLPolicies" }, DescribeSSLPoliciesInput, DescribeSSLPoliciesOutput, [SSLPolicyNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the health of the specified targets or all of your targets.
 */export const describeTargetHealth = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.DescribeTargetHealth" }, DescribeTargetHealthInput, DescribeTargetHealthOutput, [HealthUnavailableException, InvalidTargetException, TargetGroupNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Replaces the specified properties of the specified rule. Any properties that you do not
 * specify are unchanged.
 * 
 * To add an item to a list, remove an item from a list, or update an item in a list, you
 * must provide the entire list. For example, to add an action, specify a list with the current
 * actions plus the new action.
 */export const modifyRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.ModifyRule" }, ModifyRuleInput, ModifyRuleOutput, [IncompatibleProtocolsException, InvalidLoadBalancerActionException, OperationNotPermittedException, RuleNotFoundException, TargetGroupAssociationLimitException, TargetGroupNotFoundException, TooManyActionsException, TooManyRegistrationsForTargetIdException, TooManyTargetsException, TooManyUniqueTargetGroupsPerLoadBalancerException, UnsupportedProtocolException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Enables the Availability Zones for the specified public subnets for the specified
 * Application Load Balancer, Network Load Balancer or Gateway Load Balancer. The specified subnets
 * replace the previously enabled subnets.
 */export const setSubnets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.SetSubnets" }, SetSubnetsInput, SetSubnetsOutput, [AllocationIdNotFoundException, AvailabilityZoneNotSupportedException, CapacityReservationPendingException, InvalidConfigurationRequestException, InvalidSubnetException, LoadBalancerNotFoundException, SubnetNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a rule for the specified listener. The listener must be associated with an
 * Application Load Balancer.
 * 
 * Each rule consists of a priority, one or more actions, one or more conditions, and
 * up to two optional transforms. Rules are evaluated in priority order, from the lowest value
 * to the highest value. When the conditions for a rule are met, its actions are performed.
 * If the conditions for no rules are met, the actions for the default rule are performed.
 * For more information, see Listener rules in the *Application Load Balancers Guide*.
 */export const createRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.CreateRule" }, CreateRuleInput, CreateRuleOutput, [IncompatibleProtocolsException, InvalidConfigurationRequestException, InvalidLoadBalancerActionException, ListenerNotFoundException, PriorityInUseException, TargetGroupAssociationLimitException, TargetGroupNotFoundException, TooManyActionsException, TooManyRegistrationsForTargetIdException, TooManyRulesException, TooManyTagsException, TooManyTargetGroupsException, TooManyTargetsException, TooManyUniqueTargetGroupsPerLoadBalancerException, UnsupportedProtocolException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Replaces the specified properties of the specified listener. Any properties that you do
 * not specify remain unchanged.
 * 
 * Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy
 * and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP
 * to TLS, you must add the security policy and default certificate properties.
 * 
 * To add an item to a list, remove an item from a list, or update an item in a list, you
 * must provide the entire list. For example, to add an action, specify a list with the current
 * actions plus the new action.
 */export const modifyListener = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.ModifyListener" }, ModifyListenerInput, ModifyListenerOutput, [ALPNPolicyNotSupportedException, CertificateNotFoundException, DuplicateListenerException, IncompatibleProtocolsException, InvalidConfigurationRequestException, InvalidLoadBalancerActionException, ListenerNotFoundException, SSLPolicyNotFoundException, TargetGroupAssociationLimitException, TargetGroupNotFoundException, TooManyActionsException, TooManyCertificatesException, TooManyListenersException, TooManyRegistrationsForTargetIdException, TooManyTargetsException, TooManyUniqueTargetGroupsPerLoadBalancerException, TrustStoreNotFoundException, TrustStoreNotReadyException, UnsupportedProtocolException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Adds the specified revocation file to the specified trust store.
 */export const addTrustStoreRevocations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.AddTrustStoreRevocations" }, AddTrustStoreRevocationsInput, AddTrustStoreRevocationsOutput, [InvalidRevocationContentException, RevocationContentNotFoundException, TooManyTrustStoreRevocationEntriesException, TrustStoreNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a listener for the specified Application Load Balancer, Network Load Balancer, or
 * Gateway Load Balancer.
 * 
 * For more information, see the following:
 * 
 * - Listeners for
 * your Application Load Balancers
 * 
 * - Listeners for
 * your Network Load Balancers
 * 
 * - Listeners for your
 * Gateway Load Balancers
 * 
 * This operation is idempotent, which means that it completes at most one time. If you
 * attempt to create multiple listeners with the same settings, each call succeeds.
 */export const createListener = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.CreateListener" }, CreateListenerInput, CreateListenerOutput, [ALPNPolicyNotSupportedException, CertificateNotFoundException, DuplicateListenerException, IncompatibleProtocolsException, InvalidConfigurationRequestException, InvalidLoadBalancerActionException, LoadBalancerNotFoundException, SSLPolicyNotFoundException, TargetGroupAssociationLimitException, TargetGroupNotFoundException, TooManyActionsException, TooManyCertificatesException, TooManyListenersException, TooManyRegistrationsForTargetIdException, TooManyTagsException, TooManyTargetsException, TooManyUniqueTargetGroupsPerLoadBalancerException, TrustStoreNotFoundException, TrustStoreNotReadyException, UnsupportedProtocolException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an Application Load Balancer, Network Load Balancer, or Gateway Load
 * Balancer.
 * 
 * For more information, see the following:
 * 
 * - Application Load Balancers
 * 
 * - Network Load
 * Balancers
 * 
 * - Gateway Load
 * Balancers
 * 
 * This operation is idempotent, which means that it completes at most one time. If you
 * attempt to create multiple load balancers with the same settings, each call succeeds.
 */export const createLoadBalancer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.CreateLoadBalancer" }, CreateLoadBalancerInput, CreateLoadBalancerOutput, [AllocationIdNotFoundException, AvailabilityZoneNotSupportedException, DuplicateLoadBalancerNameException, DuplicateTagKeysException, InvalidConfigurationRequestException, InvalidSchemeException, InvalidSecurityGroupException, InvalidSubnetException, OperationNotPermittedException, ResourceInUseException, SubnetNotFoundException, TooManyLoadBalancersException, TooManyTagsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the capacity reservation of the specified load balancer.
 * 
 * When modifying capacity reservation, you must include at least one `MinimumLoadBalancerCapacity`
 * or `ResetCapacityReservation`.
 */export const modifyCapacityReservation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-12-01", sdkId: "Elastic Load Balancing v2", sigV4ServiceName: "elasticloadbalancing", name: "ElasticLoadBalancing_v10.ModifyCapacityReservation" }, ModifyCapacityReservationInput, ModifyCapacityReservationOutput, [CapacityDecreaseRequestsLimitExceededException, CapacityReservationPendingException, CapacityUnitsLimitExceededException, InsufficientCapacityException, InvalidConfigurationRequestException, LoadBalancerNotFoundException, OperationNotPermittedException, PriorRequestNotCompleteException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
