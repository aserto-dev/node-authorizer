"use strict";
// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file aserto/authorizer/v2/authorizer.proto (package aserto.authorizer.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResponse = exports.CompileResponse = exports.CompileRequest = exports.QueryRequest = exports.QueryOptions = exports.IsResponse = exports.Decision = exports.IsRequest = exports.DecisionTreeResponse = exports.DecisionTreeOptions = exports.DecisionTreeRequest = exports.ListPoliciesResponse = exports.ListPoliciesRequest = exports.GetPolicyResponse = exports.GetPolicyRequest = exports.InfoResponse = exports.InfoRequest = exports.TraceLevel = exports.PathSeparator = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const policy_instance_pb_js_1 = require("./api/policy_instance_pb.js");
const module_pb_js_1 = require("./api/module_pb.js");
const policy_context_pb_js_1 = require("./api/policy_context_pb.js");
const identity_context_pb_js_1 = require("./api/identity_context_pb.js");
/**
 * @generated from enum aserto.authorizer.v2.PathSeparator
 */
var PathSeparator;
(function (PathSeparator) {
    /**
     * Value not set.
     *
     * @generated from enum value: PATH_SEPARATOR_UNKNOWN = 0;
     */
    PathSeparator[PathSeparator["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Dot "." path separator
     *
     * @generated from enum value: PATH_SEPARATOR_DOT = 1;
     */
    PathSeparator[PathSeparator["DOT"] = 1] = "DOT";
    /**
     * Slash "/" path separtor
     *
     * @generated from enum value: PATH_SEPARATOR_SLASH = 2;
     */
    PathSeparator[PathSeparator["SLASH"] = 2] = "SLASH";
})(PathSeparator = exports.PathSeparator || (exports.PathSeparator = {}));
// Retrieve enum metadata with: proto3.getEnumType(PathSeparator)
protobuf_1.proto3.util.setEnumType(PathSeparator, "aserto.authorizer.v2.PathSeparator", [
    { no: 0, name: "PATH_SEPARATOR_UNKNOWN" },
    { no: 1, name: "PATH_SEPARATOR_DOT" },
    { no: 2, name: "PATH_SEPARATOR_SLASH" },
]);
/**
 * @generated from enum aserto.authorizer.v2.TraceLevel
 */
var TraceLevel;
(function (TraceLevel) {
    /**
     * Value not set.
     *
     * @generated from enum value: TRACE_LEVEL_UNKNOWN = 0;
     */
    TraceLevel[TraceLevel["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * ExplainOffV1   ExplainModeV1 = "off"
     *
     * @generated from enum value: TRACE_LEVEL_OFF = 1;
     */
    TraceLevel[TraceLevel["OFF"] = 1] = "OFF";
    /**
     * ExplainFullV1  ExplainModeV1 = "full"
     *
     * @generated from enum value: TRACE_LEVEL_FULL = 2;
     */
    TraceLevel[TraceLevel["FULL"] = 2] = "FULL";
    /**
     * ExplainNotesV1 ExplainModeV1 = "notes"
     *
     * @generated from enum value: TRACE_LEVEL_NOTES = 3;
     */
    TraceLevel[TraceLevel["NOTES"] = 3] = "NOTES";
    /**
     * ExplainFailsV1 ExplainModeV1 = "fails"
     *
     * @generated from enum value: TRACE_LEVEL_FAILS = 4;
     */
    TraceLevel[TraceLevel["FAILS"] = 4] = "FAILS";
})(TraceLevel = exports.TraceLevel || (exports.TraceLevel = {}));
// Retrieve enum metadata with: proto3.getEnumType(TraceLevel)
protobuf_1.proto3.util.setEnumType(TraceLevel, "aserto.authorizer.v2.TraceLevel", [
    { no: 0, name: "TRACE_LEVEL_UNKNOWN" },
    { no: 1, name: "TRACE_LEVEL_OFF" },
    { no: 2, name: "TRACE_LEVEL_FULL" },
    { no: 3, name: "TRACE_LEVEL_NOTES" },
    { no: 4, name: "TRACE_LEVEL_FAILS" },
]);
/**
 * @generated from message aserto.authorizer.v2.InfoRequest
 */
class InfoRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new InfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new InfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new InfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(InfoRequest, a, b);
    }
}
exports.InfoRequest = InfoRequest;
InfoRequest.runtime = protobuf_1.proto3;
InfoRequest.typeName = "aserto.authorizer.v2.InfoRequest";
InfoRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * @generated from message aserto.authorizer.v2.InfoResponse
 */
class InfoResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string version = 1;
         */
        this.version = "";
        /**
         * @generated from field: string commit = 2;
         */
        this.commit = "";
        /**
         * @generated from field: string date = 3;
         */
        this.date = "";
        /**
         * @generated from field: string os = 4;
         */
        this.os = "";
        /**
         * @generated from field: string arch = 5;
         */
        this.arch = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new InfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new InfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new InfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(InfoResponse, a, b);
    }
}
exports.InfoResponse = InfoResponse;
InfoResponse.runtime = protobuf_1.proto3;
InfoResponse.typeName = "aserto.authorizer.v2.InfoResponse";
InfoResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "commit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "os", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "arch", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.authorizer.v2.GetPolicyRequest
 */
class GetPolicyRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetPolicyRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetPolicyRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetPolicyRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetPolicyRequest, a, b);
    }
}
exports.GetPolicyRequest = GetPolicyRequest;
GetPolicyRequest.runtime = protobuf_1.proto3;
GetPolicyRequest.typeName = "aserto.authorizer.v2.GetPolicyRequest";
GetPolicyRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field_mask", kind: "message", T: protobuf_1.FieldMask },
    { no: 3, name: "policy_instance", kind: "message", T: policy_instance_pb_js_1.PolicyInstance, opt: true },
]);
/**
 * @generated from message aserto.authorizer.v2.GetPolicyResponse
 */
class GetPolicyResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetPolicyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetPolicyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetPolicyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetPolicyResponse, a, b);
    }
}
exports.GetPolicyResponse = GetPolicyResponse;
GetPolicyResponse.runtime = protobuf_1.proto3;
GetPolicyResponse.typeName = "aserto.authorizer.v2.GetPolicyResponse";
GetPolicyResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: module_pb_js_1.Module },
]);
/**
 * @generated from message aserto.authorizer.v2.ListPoliciesRequest
 */
class ListPoliciesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListPoliciesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListPoliciesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListPoliciesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ListPoliciesRequest, a, b);
    }
}
exports.ListPoliciesRequest = ListPoliciesRequest;
ListPoliciesRequest.runtime = protobuf_1.proto3;
ListPoliciesRequest.typeName = "aserto.authorizer.v2.ListPoliciesRequest";
ListPoliciesRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "field_mask", kind: "message", T: protobuf_1.FieldMask },
    { no: 2, name: "policy_instance", kind: "message", T: policy_instance_pb_js_1.PolicyInstance, opt: true },
]);
/**
 * @generated from message aserto.authorizer.v2.ListPoliciesResponse
 */
class ListPoliciesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated aserto.authorizer.v2.api.Module result = 1;
         */
        this.result = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListPoliciesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListPoliciesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListPoliciesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ListPoliciesResponse, a, b);
    }
}
exports.ListPoliciesResponse = ListPoliciesResponse;
ListPoliciesResponse.runtime = protobuf_1.proto3;
ListPoliciesResponse.typeName = "aserto.authorizer.v2.ListPoliciesResponse";
ListPoliciesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: module_pb_js_1.Module, repeated: true },
]);
/**
 * @generated from message aserto.authorizer.v2.DecisionTreeRequest
 */
class DecisionTreeRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DecisionTreeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DecisionTreeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DecisionTreeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DecisionTreeRequest, a, b);
    }
}
exports.DecisionTreeRequest = DecisionTreeRequest;
DecisionTreeRequest.runtime = protobuf_1.proto3;
DecisionTreeRequest.typeName = "aserto.authorizer.v2.DecisionTreeRequest";
DecisionTreeRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "policy_context", kind: "message", T: policy_context_pb_js_1.PolicyContext },
    { no: 2, name: "identity_context", kind: "message", T: identity_context_pb_js_1.IdentityContext },
    { no: 3, name: "options", kind: "message", T: DecisionTreeOptions },
    { no: 4, name: "resource_context", kind: "message", T: protobuf_1.Struct },
    { no: 5, name: "policy_instance", kind: "message", T: policy_instance_pb_js_1.PolicyInstance, opt: true },
]);
/**
 * @generated from message aserto.authorizer.v2.DecisionTreeOptions
 */
class DecisionTreeOptions extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: aserto.authorizer.v2.PathSeparator path_separator = 1;
         */
        this.pathSeparator = PathSeparator.UNKNOWN;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DecisionTreeOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DecisionTreeOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DecisionTreeOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DecisionTreeOptions, a, b);
    }
}
exports.DecisionTreeOptions = DecisionTreeOptions;
DecisionTreeOptions.runtime = protobuf_1.proto3;
DecisionTreeOptions.typeName = "aserto.authorizer.v2.DecisionTreeOptions";
DecisionTreeOptions.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "path_separator", kind: "enum", T: protobuf_1.proto3.getEnumType(PathSeparator) },
]);
/**
 * @generated from message aserto.authorizer.v2.DecisionTreeResponse
 */
class DecisionTreeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string path_root = 1;
         */
        this.pathRoot = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DecisionTreeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DecisionTreeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DecisionTreeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DecisionTreeResponse, a, b);
    }
}
exports.DecisionTreeResponse = DecisionTreeResponse;
DecisionTreeResponse.runtime = protobuf_1.proto3;
DecisionTreeResponse.typeName = "aserto.authorizer.v2.DecisionTreeResponse";
DecisionTreeResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "path_root", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "path", kind: "message", T: protobuf_1.Struct },
]);
/**
 * @generated from message aserto.authorizer.v2.IsRequest
 */
class IsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IsRequest, a, b);
    }
}
exports.IsRequest = IsRequest;
IsRequest.runtime = protobuf_1.proto3;
IsRequest.typeName = "aserto.authorizer.v2.IsRequest";
IsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "policy_context", kind: "message", T: policy_context_pb_js_1.PolicyContext },
    { no: 2, name: "identity_context", kind: "message", T: identity_context_pb_js_1.IdentityContext },
    { no: 3, name: "resource_context", kind: "message", T: protobuf_1.Struct },
    { no: 4, name: "policy_instance", kind: "message", T: policy_instance_pb_js_1.PolicyInstance, opt: true },
]);
/**
 * @generated from message aserto.authorizer.v2.Decision
 */
class Decision extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string decision = 1;
         */
        this.decision = "";
        /**
         * @generated from field: bool is = 2;
         */
        this.is = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Decision().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Decision().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Decision().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Decision, a, b);
    }
}
exports.Decision = Decision;
Decision.runtime = protobuf_1.proto3;
Decision.typeName = "aserto.authorizer.v2.Decision";
Decision.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "decision", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.authorizer.v2.IsResponse
 */
class IsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated aserto.authorizer.v2.Decision decisions = 1;
         */
        this.decisions = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IsResponse, a, b);
    }
}
exports.IsResponse = IsResponse;
IsResponse.runtime = protobuf_1.proto3;
IsResponse.typeName = "aserto.authorizer.v2.IsResponse";
IsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "decisions", kind: "message", T: Decision, repeated: true },
]);
/**
 * @generated from message aserto.authorizer.v2.QueryOptions
 */
class QueryOptions extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * default false
         *
         * @generated from field: bool metrics = 1;
         */
        this.metrics = false;
        /**
         * default false
         *
         * @generated from field: bool instrument = 2;
         */
        this.instrument = false;
        /**
         * default ExplainOffV1
         *
         * @generated from field: aserto.authorizer.v2.TraceLevel trace = 3;
         */
        this.trace = TraceLevel.UNKNOWN;
        /**
         * default false
         *
         * @generated from field: bool trace_summary = 4;
         */
        this.traceSummary = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryOptions, a, b);
    }
}
exports.QueryOptions = QueryOptions;
QueryOptions.runtime = protobuf_1.proto3;
QueryOptions.typeName = "aserto.authorizer.v2.QueryOptions";
QueryOptions.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "metrics", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "instrument", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "trace", kind: "enum", T: protobuf_1.proto3.getEnumType(TraceLevel) },
    { no: 4, name: "trace_summary", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.authorizer.v2.QueryRequest
 */
class QueryRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string query = 1;
         */
        this.query = "";
        /**
         * @generated from field: string input = 2;
         */
        this.input = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryRequest, a, b);
    }
}
exports.QueryRequest = QueryRequest;
QueryRequest.runtime = protobuf_1.proto3;
QueryRequest.typeName = "aserto.authorizer.v2.QueryRequest";
QueryRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "input", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "options", kind: "message", T: QueryOptions, opt: true },
    { no: 4, name: "policy_context", kind: "message", T: policy_context_pb_js_1.PolicyContext, opt: true },
    { no: 5, name: "identity_context", kind: "message", T: identity_context_pb_js_1.IdentityContext, opt: true },
    { no: 6, name: "resource_context", kind: "message", T: protobuf_1.Struct, opt: true },
    { no: 7, name: "policy_instance", kind: "message", T: policy_instance_pb_js_1.PolicyInstance, opt: true },
]);
/**
 * @generated from message aserto.authorizer.v2.CompileRequest
 */
class CompileRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string query = 1;
         */
        this.query = "";
        /**
         * @generated from field: string input = 2;
         */
        this.input = "";
        /**
         * @generated from field: repeated string unknowns = 3;
         */
        this.unknowns = [];
        /**
         * @generated from field: repeated string disable_inlining = 4;
         */
        this.disableInlining = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CompileRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CompileRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CompileRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CompileRequest, a, b);
    }
}
exports.CompileRequest = CompileRequest;
CompileRequest.runtime = protobuf_1.proto3;
CompileRequest.typeName = "aserto.authorizer.v2.CompileRequest";
CompileRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "input", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "unknowns", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "disable_inlining", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "options", kind: "message", T: QueryOptions, opt: true },
    { no: 6, name: "policy_context", kind: "message", T: policy_context_pb_js_1.PolicyContext, opt: true },
    { no: 7, name: "identity_context", kind: "message", T: identity_context_pb_js_1.IdentityContext, opt: true },
    { no: 8, name: "resource_context", kind: "message", T: protobuf_1.Struct, opt: true },
    { no: 9, name: "policy_instance", kind: "message", T: policy_instance_pb_js_1.PolicyInstance, opt: true },
]);
/**
 * @generated from message aserto.authorizer.v2.CompileResponse
 */
class CompileResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated google.protobuf.Struct trace = 3;
         */
        this.trace = [];
        /**
         * @generated from field: repeated string trace_summary = 4;
         */
        this.traceSummary = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CompileResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CompileResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CompileResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CompileResponse, a, b);
    }
}
exports.CompileResponse = CompileResponse;
CompileResponse.runtime = protobuf_1.proto3;
CompileResponse.typeName = "aserto.authorizer.v2.CompileResponse";
CompileResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Struct },
    { no: 2, name: "metrics", kind: "message", T: protobuf_1.Struct },
    { no: 3, name: "trace", kind: "message", T: protobuf_1.Struct, repeated: true },
    { no: 4, name: "trace_summary", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message aserto.authorizer.v2.QueryResponse
 */
class QueryResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated google.protobuf.Struct trace = 3;
         */
        this.trace = [];
        /**
         * @generated from field: repeated string trace_summary = 4;
         */
        this.traceSummary = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryResponse, a, b);
    }
}
exports.QueryResponse = QueryResponse;
QueryResponse.runtime = protobuf_1.proto3;
QueryResponse.typeName = "aserto.authorizer.v2.QueryResponse";
QueryResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "response", kind: "message", T: protobuf_1.Struct },
    { no: 2, name: "metrics", kind: "message", T: protobuf_1.Struct },
    { no: 3, name: "trace", kind: "message", T: protobuf_1.Struct, repeated: true },
    { no: 4, name: "trace_summary", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
