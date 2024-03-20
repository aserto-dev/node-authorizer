import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3, Struct } from "@bufbuild/protobuf";
import { PolicyInstance } from "./api/policy_instance_pb.js";
import { Module } from "./api/module_pb.js";
import { PolicyContext } from "./api/policy_context_pb.js";
import { IdentityContext } from "./api/identity_context_pb.js";
/**
 * @generated from enum aserto.authorizer.v2.PathSeparator
 */
export declare enum PathSeparator {
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
    SLASH = 2
}
/**
 * @generated from enum aserto.authorizer.v2.TraceLevel
 */
export declare enum TraceLevel {
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
    FAILS = 4
}
/**
 * @generated from message aserto.authorizer.v2.InfoRequest
 */
export declare class InfoRequest extends Message<InfoRequest> {
    constructor(data?: PartialMessage<InfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.InfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoRequest;
    static equals(a: InfoRequest | PlainMessage<InfoRequest> | undefined, b: InfoRequest | PlainMessage<InfoRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.InfoResponse
 */
export declare class InfoResponse extends Message<InfoResponse> {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * @generated from field: string commit = 2;
     */
    commit: string;
    /**
     * @generated from field: string date = 3;
     */
    date: string;
    /**
     * @generated from field: string os = 4;
     */
    os: string;
    /**
     * @generated from field: string arch = 5;
     */
    arch: string;
    constructor(data?: PartialMessage<InfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.InfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoResponse;
    static equals(a: InfoResponse | PlainMessage<InfoResponse> | undefined, b: InfoResponse | PlainMessage<InfoResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.GetPolicyRequest
 */
export declare class GetPolicyRequest extends Message<GetPolicyRequest> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: google.protobuf.FieldMask field_mask = 2;
     */
    fieldMask?: FieldMask;
    /**
     * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 3;
     */
    policyInstance?: PolicyInstance;
    constructor(data?: PartialMessage<GetPolicyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.GetPolicyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPolicyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPolicyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPolicyRequest;
    static equals(a: GetPolicyRequest | PlainMessage<GetPolicyRequest> | undefined, b: GetPolicyRequest | PlainMessage<GetPolicyRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.GetPolicyResponse
 */
export declare class GetPolicyResponse extends Message<GetPolicyResponse> {
    /**
     * @generated from field: aserto.authorizer.v2.api.Module result = 1;
     */
    result?: Module;
    constructor(data?: PartialMessage<GetPolicyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.GetPolicyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPolicyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPolicyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPolicyResponse;
    static equals(a: GetPolicyResponse | PlainMessage<GetPolicyResponse> | undefined, b: GetPolicyResponse | PlainMessage<GetPolicyResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.ListPoliciesRequest
 */
export declare class ListPoliciesRequest extends Message<ListPoliciesRequest> {
    /**
     * @generated from field: google.protobuf.FieldMask field_mask = 1;
     */
    fieldMask?: FieldMask;
    /**
     * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 2;
     */
    policyInstance?: PolicyInstance;
    constructor(data?: PartialMessage<ListPoliciesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.ListPoliciesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoliciesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoliciesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoliciesRequest;
    static equals(a: ListPoliciesRequest | PlainMessage<ListPoliciesRequest> | undefined, b: ListPoliciesRequest | PlainMessage<ListPoliciesRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.ListPoliciesResponse
 */
export declare class ListPoliciesResponse extends Message<ListPoliciesResponse> {
    /**
     * @generated from field: repeated aserto.authorizer.v2.api.Module result = 1;
     */
    result: Module[];
    constructor(data?: PartialMessage<ListPoliciesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.ListPoliciesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoliciesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoliciesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoliciesResponse;
    static equals(a: ListPoliciesResponse | PlainMessage<ListPoliciesResponse> | undefined, b: ListPoliciesResponse | PlainMessage<ListPoliciesResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.DecisionTreeRequest
 */
export declare class DecisionTreeRequest extends Message<DecisionTreeRequest> {
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
    constructor(data?: PartialMessage<DecisionTreeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.DecisionTreeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecisionTreeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecisionTreeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecisionTreeRequest;
    static equals(a: DecisionTreeRequest | PlainMessage<DecisionTreeRequest> | undefined, b: DecisionTreeRequest | PlainMessage<DecisionTreeRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.DecisionTreeOptions
 */
export declare class DecisionTreeOptions extends Message<DecisionTreeOptions> {
    /**
     * @generated from field: aserto.authorizer.v2.PathSeparator path_separator = 1;
     */
    pathSeparator: PathSeparator;
    constructor(data?: PartialMessage<DecisionTreeOptions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.DecisionTreeOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecisionTreeOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecisionTreeOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecisionTreeOptions;
    static equals(a: DecisionTreeOptions | PlainMessage<DecisionTreeOptions> | undefined, b: DecisionTreeOptions | PlainMessage<DecisionTreeOptions> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.DecisionTreeResponse
 */
export declare class DecisionTreeResponse extends Message<DecisionTreeResponse> {
    /**
     * @generated from field: string path_root = 1;
     */
    pathRoot: string;
    /**
     * @generated from field: google.protobuf.Struct path = 3;
     */
    path?: Struct;
    constructor(data?: PartialMessage<DecisionTreeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.DecisionTreeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecisionTreeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecisionTreeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecisionTreeResponse;
    static equals(a: DecisionTreeResponse | PlainMessage<DecisionTreeResponse> | undefined, b: DecisionTreeResponse | PlainMessage<DecisionTreeResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.IsRequest
 */
export declare class IsRequest extends Message<IsRequest> {
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
    constructor(data?: PartialMessage<IsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.IsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IsRequest;
    static equals(a: IsRequest | PlainMessage<IsRequest> | undefined, b: IsRequest | PlainMessage<IsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.Decision
 */
export declare class Decision extends Message<Decision> {
    /**
     * @generated from field: string decision = 1;
     */
    decision: string;
    /**
     * @generated from field: bool is = 2;
     */
    is: boolean;
    constructor(data?: PartialMessage<Decision>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.Decision";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Decision;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Decision;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Decision;
    static equals(a: Decision | PlainMessage<Decision> | undefined, b: Decision | PlainMessage<Decision> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.IsResponse
 */
export declare class IsResponse extends Message<IsResponse> {
    /**
     * @generated from field: repeated aserto.authorizer.v2.Decision decisions = 1;
     */
    decisions: Decision[];
    constructor(data?: PartialMessage<IsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.IsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IsResponse;
    static equals(a: IsResponse | PlainMessage<IsResponse> | undefined, b: IsResponse | PlainMessage<IsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.QueryOptions
 */
export declare class QueryOptions extends Message<QueryOptions> {
    /**
     * default false
     *
     * @generated from field: bool metrics = 1;
     */
    metrics: boolean;
    /**
     * default false
     *
     * @generated from field: bool instrument = 2;
     */
    instrument: boolean;
    /**
     * default ExplainOffV1
     *
     * @generated from field: aserto.authorizer.v2.TraceLevel trace = 3;
     */
    trace: TraceLevel;
    /**
     * default false
     *
     * @generated from field: bool trace_summary = 4;
     */
    traceSummary: boolean;
    constructor(data?: PartialMessage<QueryOptions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.QueryOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOptions;
    static equals(a: QueryOptions | PlainMessage<QueryOptions> | undefined, b: QueryOptions | PlainMessage<QueryOptions> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.QueryRequest
 */
export declare class QueryRequest extends Message<QueryRequest> {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
    /**
     * @generated from field: string input = 2;
     */
    input: string;
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
    constructor(data?: PartialMessage<QueryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.QueryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRequest;
    static equals(a: QueryRequest | PlainMessage<QueryRequest> | undefined, b: QueryRequest | PlainMessage<QueryRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.CompileRequest
 */
export declare class CompileRequest extends Message<CompileRequest> {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
    /**
     * @generated from field: string input = 2;
     */
    input: string;
    /**
     * @generated from field: repeated string unknowns = 3;
     */
    unknowns: string[];
    /**
     * @generated from field: repeated string disable_inlining = 4;
     */
    disableInlining: string[];
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
    constructor(data?: PartialMessage<CompileRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.CompileRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompileRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompileRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompileRequest;
    static equals(a: CompileRequest | PlainMessage<CompileRequest> | undefined, b: CompileRequest | PlainMessage<CompileRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.CompileResponse
 */
export declare class CompileResponse extends Message<CompileResponse> {
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
    trace: Struct[];
    /**
     * @generated from field: repeated string trace_summary = 4;
     */
    traceSummary: string[];
    constructor(data?: PartialMessage<CompileResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.CompileResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompileResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompileResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompileResponse;
    static equals(a: CompileResponse | PlainMessage<CompileResponse> | undefined, b: CompileResponse | PlainMessage<CompileResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.authorizer.v2.QueryResponse
 */
export declare class QueryResponse extends Message<QueryResponse> {
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
    trace: Struct[];
    /**
     * @generated from field: repeated string trace_summary = 4;
     */
    traceSummary: string[];
    constructor(data?: PartialMessage<QueryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.QueryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryResponse;
    static equals(a: QueryResponse | PlainMessage<QueryResponse> | undefined, b: QueryResponse | PlainMessage<QueryResponse> | undefined): boolean;
}
