import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { FieldMask } from "@bufbuild/protobuf/wkt";
import type { IdentityContext } from "./api/identity_context_pb";
import type { PolicyContext } from "./api/policy_context_pb";
import type { Module } from "./api/module_pb";
import type { PolicyInstance } from "./api/policy_instance_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/authorizer/v2/authorizer.proto.
 */
export declare const file_aserto_authorizer_v2_authorizer: GenFile;
/**
 * @generated from message aserto.authorizer.v2.InfoRequest
 */
export type InfoRequest = Message<"aserto.authorizer.v2.InfoRequest"> & {};
/**
 * Describes the message aserto.authorizer.v2.InfoRequest.
 * Use `create(InfoRequestSchema)` to create a new message.
 */
export declare const InfoRequestSchema: GenMessage<InfoRequest>;
/**
 * @generated from message aserto.authorizer.v2.InfoResponse
 */
export type InfoResponse = Message<"aserto.authorizer.v2.InfoResponse"> & {
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
};
/**
 * Describes the message aserto.authorizer.v2.InfoResponse.
 * Use `create(InfoResponseSchema)` to create a new message.
 */
export declare const InfoResponseSchema: GenMessage<InfoResponse>;
/**
 * @generated from message aserto.authorizer.v2.GetPolicyRequest
 */
export type GetPolicyRequest = Message<"aserto.authorizer.v2.GetPolicyRequest"> & {
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
};
/**
 * Describes the message aserto.authorizer.v2.GetPolicyRequest.
 * Use `create(GetPolicyRequestSchema)` to create a new message.
 */
export declare const GetPolicyRequestSchema: GenMessage<GetPolicyRequest>;
/**
 * @generated from message aserto.authorizer.v2.GetPolicyResponse
 */
export type GetPolicyResponse = Message<"aserto.authorizer.v2.GetPolicyResponse"> & {
    /**
     * @generated from field: aserto.authorizer.v2.api.Module result = 1;
     */
    result?: Module;
};
/**
 * Describes the message aserto.authorizer.v2.GetPolicyResponse.
 * Use `create(GetPolicyResponseSchema)` to create a new message.
 */
export declare const GetPolicyResponseSchema: GenMessage<GetPolicyResponse>;
/**
 * @generated from message aserto.authorizer.v2.ListPoliciesRequest
 */
export type ListPoliciesRequest = Message<"aserto.authorizer.v2.ListPoliciesRequest"> & {
    /**
     * @generated from field: google.protobuf.FieldMask field_mask = 1;
     */
    fieldMask?: FieldMask;
    /**
     * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 2;
     */
    policyInstance?: PolicyInstance;
};
/**
 * Describes the message aserto.authorizer.v2.ListPoliciesRequest.
 * Use `create(ListPoliciesRequestSchema)` to create a new message.
 */
export declare const ListPoliciesRequestSchema: GenMessage<ListPoliciesRequest>;
/**
 * @generated from message aserto.authorizer.v2.ListPoliciesResponse
 */
export type ListPoliciesResponse = Message<"aserto.authorizer.v2.ListPoliciesResponse"> & {
    /**
     * @generated from field: repeated aserto.authorizer.v2.api.Module result = 1;
     */
    result: Module[];
};
/**
 * Describes the message aserto.authorizer.v2.ListPoliciesResponse.
 * Use `create(ListPoliciesResponseSchema)` to create a new message.
 */
export declare const ListPoliciesResponseSchema: GenMessage<ListPoliciesResponse>;
/**
 * @generated from message aserto.authorizer.v2.DecisionTreeRequest
 */
export type DecisionTreeRequest = Message<"aserto.authorizer.v2.DecisionTreeRequest"> & {
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
    resourceContext?: JsonObject;
    /**
     * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 5;
     */
    policyInstance?: PolicyInstance;
};
/**
 * Describes the message aserto.authorizer.v2.DecisionTreeRequest.
 * Use `create(DecisionTreeRequestSchema)` to create a new message.
 */
export declare const DecisionTreeRequestSchema: GenMessage<DecisionTreeRequest>;
/**
 * @generated from message aserto.authorizer.v2.DecisionTreeOptions
 */
export type DecisionTreeOptions = Message<"aserto.authorizer.v2.DecisionTreeOptions"> & {
    /**
     * @generated from field: aserto.authorizer.v2.PathSeparator path_separator = 1;
     */
    pathSeparator: PathSeparator;
};
/**
 * Describes the message aserto.authorizer.v2.DecisionTreeOptions.
 * Use `create(DecisionTreeOptionsSchema)` to create a new message.
 */
export declare const DecisionTreeOptionsSchema: GenMessage<DecisionTreeOptions>;
/**
 * @generated from message aserto.authorizer.v2.DecisionTreeResponse
 */
export type DecisionTreeResponse = Message<"aserto.authorizer.v2.DecisionTreeResponse"> & {
    /**
     * @generated from field: string path_root = 1;
     */
    pathRoot: string;
    /**
     * @generated from field: google.protobuf.Struct path = 3;
     */
    path?: JsonObject;
};
/**
 * Describes the message aserto.authorizer.v2.DecisionTreeResponse.
 * Use `create(DecisionTreeResponseSchema)` to create a new message.
 */
export declare const DecisionTreeResponseSchema: GenMessage<DecisionTreeResponse>;
/**
 * @generated from message aserto.authorizer.v2.IsRequest
 */
export type IsRequest = Message<"aserto.authorizer.v2.IsRequest"> & {
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
    resourceContext?: JsonObject;
    /**
     * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 4;
     */
    policyInstance?: PolicyInstance;
};
/**
 * Describes the message aserto.authorizer.v2.IsRequest.
 * Use `create(IsRequestSchema)` to create a new message.
 */
export declare const IsRequestSchema: GenMessage<IsRequest>;
/**
 * @generated from message aserto.authorizer.v2.Decision
 */
export type Decision = Message<"aserto.authorizer.v2.Decision"> & {
    /**
     * @generated from field: string decision = 1;
     */
    decision: string;
    /**
     * @generated from field: bool is = 2;
     */
    is: boolean;
};
/**
 * Describes the message aserto.authorizer.v2.Decision.
 * Use `create(DecisionSchema)` to create a new message.
 */
export declare const DecisionSchema: GenMessage<Decision>;
/**
 * @generated from message aserto.authorizer.v2.IsResponse
 */
export type IsResponse = Message<"aserto.authorizer.v2.IsResponse"> & {
    /**
     * @generated from field: repeated aserto.authorizer.v2.Decision decisions = 1;
     */
    decisions: Decision[];
};
/**
 * Describes the message aserto.authorizer.v2.IsResponse.
 * Use `create(IsResponseSchema)` to create a new message.
 */
export declare const IsResponseSchema: GenMessage<IsResponse>;
/**
 * @generated from message aserto.authorizer.v2.QueryOptions
 */
export type QueryOptions = Message<"aserto.authorizer.v2.QueryOptions"> & {
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
};
/**
 * Describes the message aserto.authorizer.v2.QueryOptions.
 * Use `create(QueryOptionsSchema)` to create a new message.
 */
export declare const QueryOptionsSchema: GenMessage<QueryOptions>;
/**
 * @generated from message aserto.authorizer.v2.QueryRequest
 */
export type QueryRequest = Message<"aserto.authorizer.v2.QueryRequest"> & {
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
    resourceContext?: JsonObject;
    /**
     * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 7;
     */
    policyInstance?: PolicyInstance;
};
/**
 * Describes the message aserto.authorizer.v2.QueryRequest.
 * Use `create(QueryRequestSchema)` to create a new message.
 */
export declare const QueryRequestSchema: GenMessage<QueryRequest>;
/**
 * @generated from message aserto.authorizer.v2.CompileRequest
 */
export type CompileRequest = Message<"aserto.authorizer.v2.CompileRequest"> & {
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
    resourceContext?: JsonObject;
    /**
     * @generated from field: optional aserto.authorizer.v2.api.PolicyInstance policy_instance = 9;
     */
    policyInstance?: PolicyInstance;
};
/**
 * Describes the message aserto.authorizer.v2.CompileRequest.
 * Use `create(CompileRequestSchema)` to create a new message.
 */
export declare const CompileRequestSchema: GenMessage<CompileRequest>;
/**
 * @generated from message aserto.authorizer.v2.CompileResponse
 */
export type CompileResponse = Message<"aserto.authorizer.v2.CompileResponse"> & {
    /**
     * @generated from field: google.protobuf.Struct result = 1;
     */
    result?: JsonObject;
    /**
     * @generated from field: google.protobuf.Struct metrics = 2;
     */
    metrics?: JsonObject;
    /**
     * @generated from field: repeated google.protobuf.Struct trace = 3;
     */
    trace: JsonObject[];
    /**
     * @generated from field: repeated string trace_summary = 4;
     */
    traceSummary: string[];
};
/**
 * Describes the message aserto.authorizer.v2.CompileResponse.
 * Use `create(CompileResponseSchema)` to create a new message.
 */
export declare const CompileResponseSchema: GenMessage<CompileResponse>;
/**
 * @generated from message aserto.authorizer.v2.QueryResponse
 */
export type QueryResponse = Message<"aserto.authorizer.v2.QueryResponse"> & {
    /**
     * @generated from field: google.protobuf.Struct response = 1;
     */
    response?: JsonObject;
    /**
     * @generated from field: google.protobuf.Struct metrics = 2;
     */
    metrics?: JsonObject;
    /**
     * @generated from field: repeated google.protobuf.Struct trace = 3;
     */
    trace: JsonObject[];
    /**
     * @generated from field: repeated string trace_summary = 4;
     */
    traceSummary: string[];
};
/**
 * Describes the message aserto.authorizer.v2.QueryResponse.
 * Use `create(QueryResponseSchema)` to create a new message.
 */
export declare const QueryResponseSchema: GenMessage<QueryResponse>;
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
 * Describes the enum aserto.authorizer.v2.PathSeparator.
 */
export declare const PathSeparatorSchema: GenEnum<PathSeparator>;
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
 * Describes the enum aserto.authorizer.v2.TraceLevel.
 */
export declare const TraceLevelSchema: GenEnum<TraceLevel>;
/**
 * @generated from service aserto.authorizer.v2.Authorizer
 */
export declare const Authorizer: GenService<{
    /**
     * @generated from rpc aserto.authorizer.v2.Authorizer.DecisionTree
     */
    decisionTree: {
        methodKind: "unary";
        input: typeof DecisionTreeRequestSchema;
        output: typeof DecisionTreeResponseSchema;
    };
    /**
     * @generated from rpc aserto.authorizer.v2.Authorizer.Is
     */
    is: {
        methodKind: "unary";
        input: typeof IsRequestSchema;
        output: typeof IsResponseSchema;
    };
    /**
     * @generated from rpc aserto.authorizer.v2.Authorizer.Query
     */
    query: {
        methodKind: "unary";
        input: typeof QueryRequestSchema;
        output: typeof QueryResponseSchema;
    };
    /**
     * @generated from rpc aserto.authorizer.v2.Authorizer.Compile
     */
    compile: {
        methodKind: "unary";
        input: typeof CompileRequestSchema;
        output: typeof CompileResponseSchema;
    };
    /**
     * @generated from rpc aserto.authorizer.v2.Authorizer.ListPolicies
     */
    listPolicies: {
        methodKind: "unary";
        input: typeof ListPoliciesRequestSchema;
        output: typeof ListPoliciesResponseSchema;
    };
    /**
     * @generated from rpc aserto.authorizer.v2.Authorizer.GetPolicy
     */
    getPolicy: {
        methodKind: "unary";
        input: typeof GetPolicyRequestSchema;
        output: typeof GetPolicyResponseSchema;
    };
    /**
     * @generated from rpc aserto.authorizer.v2.Authorizer.Info
     */
    info: {
        methodKind: "unary";
        input: typeof InfoRequestSchema;
        output: typeof InfoResponseSchema;
    };
}>;
