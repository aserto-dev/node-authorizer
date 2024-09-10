// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file aserto/authorizer/v2/authorizer.proto (package aserto.authorizer.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3, Struct } from "@bufbuild/protobuf";
import { PolicyInstance } from "./api/policy_instance_pb.js";
import { Module } from "./api/module_pb.js";
import { PolicyContext } from "./api/policy_context_pb.js";
import { IdentityContext } from "./api/identity_context_pb.js";

/**
 * @generated from enum aserto.authorizer.v2.PathSeparator
 */
export enum PathSeparator {
  /**
   * Value not set.
   *
   * @generated from enum value: PATH_SEPARATOR_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * Dot "." path separator
   *
   * @generated from enum value: PATH_SEPARATOR_DOT = 1;
   */
  DOT = 1,

  /**
   * Slash "/" path separtor
   *
   * @generated from enum value: PATH_SEPARATOR_SLASH = 2;
   */
  SLASH = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PathSeparator)
proto3.util.setEnumType(PathSeparator, "aserto.authorizer.v2.PathSeparator", [
  { no: 0, name: "PATH_SEPARATOR_UNKNOWN" },
  { no: 1, name: "PATH_SEPARATOR_DOT" },
  { no: 2, name: "PATH_SEPARATOR_SLASH" },
]);

/**
 * @generated from enum aserto.authorizer.v2.TraceLevel
 */
export enum TraceLevel {
  /**
   * Value not set.
   *
   * @generated from enum value: TRACE_LEVEL_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * ExplainOffV1   ExplainModeV1 = "off"
   *
   * @generated from enum value: TRACE_LEVEL_OFF = 1;
   */
  OFF = 1,

  /**
   * ExplainFullV1  ExplainModeV1 = "full"
   *
   * @generated from enum value: TRACE_LEVEL_FULL = 2;
   */
  FULL = 2,

  /**
   * ExplainNotesV1 ExplainModeV1 = "notes"
   *
   * @generated from enum value: TRACE_LEVEL_NOTES = 3;
   */
  NOTES = 3,

  /**
   * ExplainFailsV1 ExplainModeV1 = "fails"
   *
   * @generated from enum value: TRACE_LEVEL_FAILS = 4;
   */
  FAILS = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(TraceLevel)
proto3.util.setEnumType(TraceLevel, "aserto.authorizer.v2.TraceLevel", [
  { no: 0, name: "TRACE_LEVEL_UNKNOWN" },
  { no: 1, name: "TRACE_LEVEL_OFF" },
  { no: 2, name: "TRACE_LEVEL_FULL" },
  { no: 3, name: "TRACE_LEVEL_NOTES" },
  { no: 4, name: "TRACE_LEVEL_FAILS" },
]);

/**
 * @generated from message aserto.authorizer.v2.InfoRequest
 */
export class InfoRequest extends Message<InfoRequest> {
  constructor(data?: PartialMessage<InfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.InfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoRequest {
    return new InfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoRequest {
    return new InfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoRequest {
    return new InfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: InfoRequest | PlainMessage<InfoRequest> | undefined, b: InfoRequest | PlainMessage<InfoRequest> | undefined): boolean {
    return proto3.util.equals(InfoRequest, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.InfoResponse
 */
export class InfoResponse extends Message<InfoResponse> {
  /**
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * @generated from field: string commit = 2;
   */
  commit = "";

  /**
   * @generated from field: string date = 3;
   */
  date = "";

  /**
   * @generated from field: string os = 4;
   */
  os = "";

  /**
   * @generated from field: string arch = 5;
   */
  arch = "";

  constructor(data?: PartialMessage<InfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.InfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "commit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "os", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "arch", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoResponse {
    return new InfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoResponse {
    return new InfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoResponse {
    return new InfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: InfoResponse | PlainMessage<InfoResponse> | undefined, b: InfoResponse | PlainMessage<InfoResponse> | undefined): boolean {
    return proto3.util.equals(InfoResponse, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.GetPolicyRequest
 */
export class GetPolicyRequest extends Message<GetPolicyRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: google.protobuf.FieldMask field_mask = 2;
   */
  fieldMask?: FieldMask;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 3;
   */
  policyInstance?: PolicyInstance;

  constructor(data?: PartialMessage<GetPolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.GetPolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field_mask", kind: "message", T: FieldMask },
    { no: 3, name: "policy_instance", kind: "message", T: PolicyInstance, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPolicyRequest {
    return new GetPolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPolicyRequest {
    return new GetPolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPolicyRequest {
    return new GetPolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetPolicyRequest | PlainMessage<GetPolicyRequest> | undefined, b: GetPolicyRequest | PlainMessage<GetPolicyRequest> | undefined): boolean {
    return proto3.util.equals(GetPolicyRequest, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.GetPolicyResponse
 */
export class GetPolicyResponse extends Message<GetPolicyResponse> {
  /**
   * @generated from field: aserto.authorizer.v2.api.Module result = 1;
   */
  result?: Module;

  constructor(data?: PartialMessage<GetPolicyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.GetPolicyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: Module },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPolicyResponse {
    return new GetPolicyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPolicyResponse {
    return new GetPolicyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPolicyResponse {
    return new GetPolicyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetPolicyResponse | PlainMessage<GetPolicyResponse> | undefined, b: GetPolicyResponse | PlainMessage<GetPolicyResponse> | undefined): boolean {
    return proto3.util.equals(GetPolicyResponse, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.ListPoliciesRequest
 */
export class ListPoliciesRequest extends Message<ListPoliciesRequest> {
  /**
   * @generated from field: google.protobuf.FieldMask field_mask = 1;
   */
  fieldMask?: FieldMask;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 2;
   */
  policyInstance?: PolicyInstance;

  constructor(data?: PartialMessage<ListPoliciesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.ListPoliciesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
    { no: 2, name: "policy_instance", kind: "message", T: PolicyInstance, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoliciesRequest {
    return new ListPoliciesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoliciesRequest {
    return new ListPoliciesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoliciesRequest {
    return new ListPoliciesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListPoliciesRequest | PlainMessage<ListPoliciesRequest> | undefined, b: ListPoliciesRequest | PlainMessage<ListPoliciesRequest> | undefined): boolean {
    return proto3.util.equals(ListPoliciesRequest, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.ListPoliciesResponse
 */
export class ListPoliciesResponse extends Message<ListPoliciesResponse> {
  /**
   * @generated from field: repeated aserto.authorizer.v2.api.Module result = 1;
   */
  result: Module[] = [];

  constructor(data?: PartialMessage<ListPoliciesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.ListPoliciesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: Module, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoliciesResponse {
    return new ListPoliciesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoliciesResponse {
    return new ListPoliciesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoliciesResponse {
    return new ListPoliciesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListPoliciesResponse | PlainMessage<ListPoliciesResponse> | undefined, b: ListPoliciesResponse | PlainMessage<ListPoliciesResponse> | undefined): boolean {
    return proto3.util.equals(ListPoliciesResponse, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.DecisionTreeRequest
 */
export class DecisionTreeRequest extends Message<DecisionTreeRequest> {
  /**
   * @generated from field: aserto.authorizer.v2.api.PolicyContext policy_context = 1;
   */
  policyContext?: PolicyContext;

  /**
   * @generated from field: aserto.authorizer.v2.api.IdentityContext identity_context = 2;
   */
  identityContext?: IdentityContext;

  /**
   * @generated from field: aserto.authorizer.v2.DecisionTreeOptions options = 3;
   */
  options?: DecisionTreeOptions;

  /**
   * @generated from field: google.protobuf.Struct resource_context = 4;
   */
  resourceContext?: Struct;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 5;
   */
  policyInstance?: PolicyInstance;

  constructor(data?: PartialMessage<DecisionTreeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.DecisionTreeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "policy_context", kind: "message", T: PolicyContext },
    { no: 2, name: "identity_context", kind: "message", T: IdentityContext },
    { no: 3, name: "options", kind: "message", T: DecisionTreeOptions },
    { no: 4, name: "resource_context", kind: "message", T: Struct },
    { no: 5, name: "policy_instance", kind: "message", T: PolicyInstance, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecisionTreeRequest {
    return new DecisionTreeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecisionTreeRequest {
    return new DecisionTreeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecisionTreeRequest {
    return new DecisionTreeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DecisionTreeRequest | PlainMessage<DecisionTreeRequest> | undefined, b: DecisionTreeRequest | PlainMessage<DecisionTreeRequest> | undefined): boolean {
    return proto3.util.equals(DecisionTreeRequest, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.DecisionTreeOptions
 */
export class DecisionTreeOptions extends Message<DecisionTreeOptions> {
  /**
   * @generated from field: aserto.authorizer.v2.PathSeparator path_separator = 1;
   */
  pathSeparator = PathSeparator.UNKNOWN;

  constructor(data?: PartialMessage<DecisionTreeOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.DecisionTreeOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path_separator", kind: "enum", T: proto3.getEnumType(PathSeparator) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecisionTreeOptions {
    return new DecisionTreeOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecisionTreeOptions {
    return new DecisionTreeOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecisionTreeOptions {
    return new DecisionTreeOptions().fromJsonString(jsonString, options);
  }

  static equals(a: DecisionTreeOptions | PlainMessage<DecisionTreeOptions> | undefined, b: DecisionTreeOptions | PlainMessage<DecisionTreeOptions> | undefined): boolean {
    return proto3.util.equals(DecisionTreeOptions, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.DecisionTreeResponse
 */
export class DecisionTreeResponse extends Message<DecisionTreeResponse> {
  /**
   * @generated from field: string path_root = 1;
   */
  pathRoot = "";

  /**
   * @generated from field: google.protobuf.Struct path = 3;
   */
  path?: Struct;

  constructor(data?: PartialMessage<DecisionTreeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.DecisionTreeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path_root", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "path", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecisionTreeResponse {
    return new DecisionTreeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecisionTreeResponse {
    return new DecisionTreeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecisionTreeResponse {
    return new DecisionTreeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DecisionTreeResponse | PlainMessage<DecisionTreeResponse> | undefined, b: DecisionTreeResponse | PlainMessage<DecisionTreeResponse> | undefined): boolean {
    return proto3.util.equals(DecisionTreeResponse, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.IsRequest
 */
export class IsRequest extends Message<IsRequest> {
  /**
   * @generated from field: aserto.authorizer.v2.api.PolicyContext policy_context = 1;
   */
  policyContext?: PolicyContext;

  /**
   * @generated from field: aserto.authorizer.v2.api.IdentityContext identity_context = 2;
   */
  identityContext?: IdentityContext;

  /**
   * @generated from field: google.protobuf.Struct resource_context = 3;
   */
  resourceContext?: Struct;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 4;
   */
  policyInstance?: PolicyInstance;

  constructor(data?: PartialMessage<IsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.IsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "policy_context", kind: "message", T: PolicyContext },
    { no: 2, name: "identity_context", kind: "message", T: IdentityContext },
    { no: 3, name: "resource_context", kind: "message", T: Struct },
    { no: 4, name: "policy_instance", kind: "message", T: PolicyInstance, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IsRequest {
    return new IsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IsRequest {
    return new IsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IsRequest {
    return new IsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: IsRequest | PlainMessage<IsRequest> | undefined, b: IsRequest | PlainMessage<IsRequest> | undefined): boolean {
    return proto3.util.equals(IsRequest, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.Decision
 */
export class Decision extends Message<Decision> {
  /**
   * @generated from field: string decision = 1;
   */
  decision = "";

  /**
   * @generated from field: bool is = 2;
   */
  is = false;

  constructor(data?: PartialMessage<Decision>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.Decision";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "decision", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Decision {
    return new Decision().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Decision {
    return new Decision().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Decision {
    return new Decision().fromJsonString(jsonString, options);
  }

  static equals(a: Decision | PlainMessage<Decision> | undefined, b: Decision | PlainMessage<Decision> | undefined): boolean {
    return proto3.util.equals(Decision, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.IsResponse
 */
export class IsResponse extends Message<IsResponse> {
  /**
   * @generated from field: repeated aserto.authorizer.v2.Decision decisions = 1;
   */
  decisions: Decision[] = [];

  constructor(data?: PartialMessage<IsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.IsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "decisions", kind: "message", T: Decision, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IsResponse {
    return new IsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IsResponse {
    return new IsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IsResponse {
    return new IsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: IsResponse | PlainMessage<IsResponse> | undefined, b: IsResponse | PlainMessage<IsResponse> | undefined): boolean {
    return proto3.util.equals(IsResponse, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.QueryOptions
 */
export class QueryOptions extends Message<QueryOptions> {
  /**
   * default false
   *
   * @generated from field: bool metrics = 1;
   */
  metrics = false;

  /**
   * default false
   *
   * @generated from field: bool instrument = 2;
   */
  instrument = false;

  /**
   * default ExplainOffV1
   *
   * @generated from field: aserto.authorizer.v2.TraceLevel trace = 3;
   */
  trace = TraceLevel.UNKNOWN;

  /**
   * default false
   *
   * @generated from field: bool trace_summary = 4;
   */
  traceSummary = false;

  constructor(data?: PartialMessage<QueryOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.QueryOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metrics", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "instrument", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "trace", kind: "enum", T: proto3.getEnumType(TraceLevel) },
    { no: 4, name: "trace_summary", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOptions {
    return new QueryOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOptions {
    return new QueryOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOptions {
    return new QueryOptions().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOptions | PlainMessage<QueryOptions> | undefined, b: QueryOptions | PlainMessage<QueryOptions> | undefined): boolean {
    return proto3.util.equals(QueryOptions, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.QueryRequest
 */
export class QueryRequest extends Message<QueryRequest> {
  /**
   * @generated from field: string query = 1;
   */
  query = "";

  /**
   * @generated from field: string input = 2;
   */
  input = "";

  /**
   * @generated from field: optional aserto.authorizer.v2.QueryOptions options = 3;
   */
  options?: QueryOptions;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.PolicyContext policy_context = 4;
   */
  policyContext?: PolicyContext;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.IdentityContext identity_context = 5;
   */
  identityContext?: IdentityContext;

  /**
   * @generated from field: optional google.protobuf.Struct resource_context = 6;
   */
  resourceContext?: Struct;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 7;
   */
  policyInstance?: PolicyInstance;

  constructor(data?: PartialMessage<QueryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.QueryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "input", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "options", kind: "message", T: QueryOptions, opt: true },
    { no: 4, name: "policy_context", kind: "message", T: PolicyContext, opt: true },
    { no: 5, name: "identity_context", kind: "message", T: IdentityContext, opt: true },
    { no: 6, name: "resource_context", kind: "message", T: Struct, opt: true },
    { no: 7, name: "policy_instance", kind: "message", T: PolicyInstance, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRequest {
    return new QueryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRequest {
    return new QueryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRequest {
    return new QueryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRequest | PlainMessage<QueryRequest> | undefined, b: QueryRequest | PlainMessage<QueryRequest> | undefined): boolean {
    return proto3.util.equals(QueryRequest, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.CompileRequest
 */
export class CompileRequest extends Message<CompileRequest> {
  /**
   * @generated from field: string query = 1;
   */
  query = "";

  /**
   * @generated from field: string input = 2;
   */
  input = "";

  /**
   * @generated from field: repeated string unknowns = 3;
   */
  unknowns: string[] = [];

  /**
   * @generated from field: repeated string disable_inlining = 4;
   */
  disableInlining: string[] = [];

  /**
   * @generated from field: optional aserto.authorizer.v2.QueryOptions options = 5;
   */
  options?: QueryOptions;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.PolicyContext policy_context = 6;
   */
  policyContext?: PolicyContext;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.IdentityContext identity_context = 7;
   */
  identityContext?: IdentityContext;

  /**
   * @generated from field: optional google.protobuf.Struct resource_context = 8;
   */
  resourceContext?: Struct;

  /**
   * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 9;
   */
  policyInstance?: PolicyInstance;

  constructor(data?: PartialMessage<CompileRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.CompileRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "input", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "unknowns", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "disable_inlining", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "options", kind: "message", T: QueryOptions, opt: true },
    { no: 6, name: "policy_context", kind: "message", T: PolicyContext, opt: true },
    { no: 7, name: "identity_context", kind: "message", T: IdentityContext, opt: true },
    { no: 8, name: "resource_context", kind: "message", T: Struct, opt: true },
    { no: 9, name: "policy_instance", kind: "message", T: PolicyInstance, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompileRequest {
    return new CompileRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompileRequest {
    return new CompileRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompileRequest {
    return new CompileRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CompileRequest | PlainMessage<CompileRequest> | undefined, b: CompileRequest | PlainMessage<CompileRequest> | undefined): boolean {
    return proto3.util.equals(CompileRequest, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.CompileResponse
 */
export class CompileResponse extends Message<CompileResponse> {
  /**
   * @generated from field: google.protobuf.Struct result = 1;
   */
  result?: Struct;

  /**
   * @generated from field: google.protobuf.Struct metrics = 2;
   */
  metrics?: Struct;

  /**
   * @generated from field: repeated google.protobuf.Struct trace = 3;
   */
  trace: Struct[] = [];

  /**
   * @generated from field: repeated string trace_summary = 4;
   */
  traceSummary: string[] = [];

  constructor(data?: PartialMessage<CompileResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.CompileResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: Struct },
    { no: 2, name: "metrics", kind: "message", T: Struct },
    { no: 3, name: "trace", kind: "message", T: Struct, repeated: true },
    { no: 4, name: "trace_summary", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompileResponse {
    return new CompileResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompileResponse {
    return new CompileResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompileResponse {
    return new CompileResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CompileResponse | PlainMessage<CompileResponse> | undefined, b: CompileResponse | PlainMessage<CompileResponse> | undefined): boolean {
    return proto3.util.equals(CompileResponse, a, b);
  }
}

/**
 * @generated from message aserto.authorizer.v2.QueryResponse
 */
export class QueryResponse extends Message<QueryResponse> {
  /**
   * @generated from field: google.protobuf.Struct response = 1;
   */
  response?: Struct;

  /**
   * @generated from field: google.protobuf.Struct metrics = 2;
   */
  metrics?: Struct;

  /**
   * @generated from field: repeated google.protobuf.Struct trace = 3;
   */
  trace: Struct[] = [];

  /**
   * @generated from field: repeated string trace_summary = 4;
   */
  traceSummary: string[] = [];

  constructor(data?: PartialMessage<QueryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.QueryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "response", kind: "message", T: Struct },
    { no: 2, name: "metrics", kind: "message", T: Struct },
    { no: 3, name: "trace", kind: "message", T: Struct, repeated: true },
    { no: 4, name: "trace_summary", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryResponse {
    return new QueryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryResponse {
    return new QueryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryResponse {
    return new QueryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryResponse | PlainMessage<QueryResponse> | undefined, b: QueryResponse | PlainMessage<QueryResponse> | undefined): boolean {
    return proto3.util.equals(QueryResponse, a, b);
  }
}

