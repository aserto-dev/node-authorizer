// package: aserto.authorizer.v2
// file: aserto/authorizer/v2/authorizer.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as aserto_authorizer_v2_api_identity_context_pb from "../../../aserto/authorizer/v2/api/identity_context_pb";
import * as aserto_authorizer_v2_api_policy_context_pb from "../../../aserto/authorizer/v2/api/policy_context_pb";
import * as aserto_authorizer_v2_api_module_pb from "../../../aserto/authorizer/v2/api/module_pb";

export class GetPolicyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPolicyRequest): GetPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPolicyRequest;
  static deserializeBinaryFromReader(message: GetPolicyRequest, reader: jspb.BinaryReader): GetPolicyRequest;
}

export namespace GetPolicyRequest {
  export type AsObject = {
    id: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetPolicyResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_authorizer_v2_api_module_pb.Module | undefined;
  setResult(value?: aserto_authorizer_v2_api_module_pb.Module): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPolicyResponse): GetPolicyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPolicyResponse;
  static deserializeBinaryFromReader(message: GetPolicyResponse, reader: jspb.BinaryReader): GetPolicyResponse;
}

export namespace GetPolicyResponse {
  export type AsObject = {
    result?: aserto_authorizer_v2_api_module_pb.Module.AsObject,
  }
}

export class ListPoliciesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoliciesRequest): ListPoliciesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoliciesRequest;
  static deserializeBinaryFromReader(message: ListPoliciesRequest, reader: jspb.BinaryReader): ListPoliciesRequest;
}

export namespace ListPoliciesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListPoliciesResponse extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<aserto_authorizer_v2_api_module_pb.Module>;
  setResultList(value: Array<aserto_authorizer_v2_api_module_pb.Module>): void;
  addResult(value?: aserto_authorizer_v2_api_module_pb.Module, index?: number): aserto_authorizer_v2_api_module_pb.Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoliciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoliciesResponse): ListPoliciesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPoliciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoliciesResponse;
  static deserializeBinaryFromReader(message: ListPoliciesResponse, reader: jspb.BinaryReader): ListPoliciesResponse;
}

export namespace ListPoliciesResponse {
  export type AsObject = {
    resultList: Array<aserto_authorizer_v2_api_module_pb.Module.AsObject>,
  }
}

export class DecisionTreeRequest extends jspb.Message {
  hasPolicyContext(): boolean;
  clearPolicyContext(): void;
  getPolicyContext(): aserto_authorizer_v2_api_policy_context_pb.PolicyContext | undefined;
  setPolicyContext(value?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext): void;

  hasIdentityContext(): boolean;
  clearIdentityContext(): void;
  getIdentityContext(): aserto_authorizer_v2_api_identity_context_pb.IdentityContext | undefined;
  setIdentityContext(value?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): DecisionTreeOptions | undefined;
  setOptions(value?: DecisionTreeOptions): void;

  hasResourceContext(): boolean;
  clearResourceContext(): void;
  getResourceContext(): google_protobuf_struct_pb.Struct | undefined;
  setResourceContext(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecisionTreeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecisionTreeRequest): DecisionTreeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecisionTreeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecisionTreeRequest;
  static deserializeBinaryFromReader(message: DecisionTreeRequest, reader: jspb.BinaryReader): DecisionTreeRequest;
}

export namespace DecisionTreeRequest {
  export type AsObject = {
    policyContext?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext.AsObject,
    identityContext?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext.AsObject,
    options?: DecisionTreeOptions.AsObject,
    resourceContext?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DecisionTreeOptions extends jspb.Message {
  getPathSeparator(): PathSeparatorMap[keyof PathSeparatorMap];
  setPathSeparator(value: PathSeparatorMap[keyof PathSeparatorMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecisionTreeOptions.AsObject;
  static toObject(includeInstance: boolean, msg: DecisionTreeOptions): DecisionTreeOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecisionTreeOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecisionTreeOptions;
  static deserializeBinaryFromReader(message: DecisionTreeOptions, reader: jspb.BinaryReader): DecisionTreeOptions;
}

export namespace DecisionTreeOptions {
  export type AsObject = {
    pathSeparator: PathSeparatorMap[keyof PathSeparatorMap],
  }
}

export class DecisionTreeResponse extends jspb.Message {
  getPathRoot(): string;
  setPathRoot(value: string): void;

  hasPath(): boolean;
  clearPath(): void;
  getPath(): google_protobuf_struct_pb.Struct | undefined;
  setPath(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecisionTreeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecisionTreeResponse): DecisionTreeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecisionTreeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecisionTreeResponse;
  static deserializeBinaryFromReader(message: DecisionTreeResponse, reader: jspb.BinaryReader): DecisionTreeResponse;
}

export namespace DecisionTreeResponse {
  export type AsObject = {
    pathRoot: string,
    path?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class IsRequest extends jspb.Message {
  hasPolicyContext(): boolean;
  clearPolicyContext(): void;
  getPolicyContext(): aserto_authorizer_v2_api_policy_context_pb.PolicyContext | undefined;
  setPolicyContext(value?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext): void;

  hasIdentityContext(): boolean;
  clearIdentityContext(): void;
  getIdentityContext(): aserto_authorizer_v2_api_identity_context_pb.IdentityContext | undefined;
  setIdentityContext(value?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext): void;

  hasResourceContext(): boolean;
  clearResourceContext(): void;
  getResourceContext(): google_protobuf_struct_pb.Struct | undefined;
  setResourceContext(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsRequest): IsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsRequest;
  static deserializeBinaryFromReader(message: IsRequest, reader: jspb.BinaryReader): IsRequest;
}

export namespace IsRequest {
  export type AsObject = {
    policyContext?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext.AsObject,
    identityContext?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext.AsObject,
    resourceContext?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Decision extends jspb.Message {
  getDecision(): string;
  setDecision(value: string): void;

  getIs(): boolean;
  setIs(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Decision.AsObject;
  static toObject(includeInstance: boolean, msg: Decision): Decision.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Decision, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Decision;
  static deserializeBinaryFromReader(message: Decision, reader: jspb.BinaryReader): Decision;
}

export namespace Decision {
  export type AsObject = {
    decision: string,
    is: boolean,
  }
}

export class IsResponse extends jspb.Message {
  clearDecisionsList(): void;
  getDecisionsList(): Array<Decision>;
  setDecisionsList(value: Array<Decision>): void;
  addDecisions(value?: Decision, index?: number): Decision;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsResponse): IsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsResponse;
  static deserializeBinaryFromReader(message: IsResponse, reader: jspb.BinaryReader): IsResponse;
}

export namespace IsResponse {
  export type AsObject = {
    decisionsList: Array<Decision.AsObject>,
  }
}

export class QueryOptions extends jspb.Message {
  getMetrics(): boolean;
  setMetrics(value: boolean): void;

  getInstrument(): boolean;
  setInstrument(value: boolean): void;

  getTrace(): TraceLevelMap[keyof TraceLevelMap];
  setTrace(value: TraceLevelMap[keyof TraceLevelMap]): void;

  getTraceSummary(): boolean;
  setTraceSummary(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOptions.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOptions): QueryOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOptions;
  static deserializeBinaryFromReader(message: QueryOptions, reader: jspb.BinaryReader): QueryOptions;
}

export namespace QueryOptions {
  export type AsObject = {
    metrics: boolean,
    instrument: boolean,
    trace: TraceLevelMap[keyof TraceLevelMap],
    traceSummary: boolean,
  }
}

export class QueryRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getInput(): string;
  setInput(value: string): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): QueryOptions | undefined;
  setOptions(value?: QueryOptions): void;

  hasPolicyContext(): boolean;
  clearPolicyContext(): void;
  getPolicyContext(): aserto_authorizer_v2_api_policy_context_pb.PolicyContext | undefined;
  setPolicyContext(value?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext): void;

  hasIdentityContext(): boolean;
  clearIdentityContext(): void;
  getIdentityContext(): aserto_authorizer_v2_api_identity_context_pb.IdentityContext | undefined;
  setIdentityContext(value?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext): void;

  hasResourceContext(): boolean;
  clearResourceContext(): void;
  getResourceContext(): google_protobuf_struct_pb.Struct | undefined;
  setResourceContext(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    query: string,
    input: string,
    options?: QueryOptions.AsObject,
    policyContext?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext.AsObject,
    identityContext?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext.AsObject,
    resourceContext?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CompileRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getInput(): string;
  setInput(value: string): void;

  clearUnknownsList(): void;
  getUnknownsList(): Array<string>;
  setUnknownsList(value: Array<string>): void;
  addUnknowns(value: string, index?: number): string;

  clearDisableInliningList(): void;
  getDisableInliningList(): Array<string>;
  setDisableInliningList(value: Array<string>): void;
  addDisableInlining(value: string, index?: number): string;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): QueryOptions | undefined;
  setOptions(value?: QueryOptions): void;

  hasPolicyContext(): boolean;
  clearPolicyContext(): void;
  getPolicyContext(): aserto_authorizer_v2_api_policy_context_pb.PolicyContext | undefined;
  setPolicyContext(value?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext): void;

  hasIdentityContext(): boolean;
  clearIdentityContext(): void;
  getIdentityContext(): aserto_authorizer_v2_api_identity_context_pb.IdentityContext | undefined;
  setIdentityContext(value?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext): void;

  hasResourceContext(): boolean;
  clearResourceContext(): void;
  getResourceContext(): google_protobuf_struct_pb.Struct | undefined;
  setResourceContext(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompileRequest): CompileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompileRequest;
  static deserializeBinaryFromReader(message: CompileRequest, reader: jspb.BinaryReader): CompileRequest;
}

export namespace CompileRequest {
  export type AsObject = {
    query: string,
    input: string,
    unknownsList: Array<string>,
    disableInliningList: Array<string>,
    options?: QueryOptions.AsObject,
    policyContext?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext.AsObject,
    identityContext?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext.AsObject,
    resourceContext?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CompileResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_struct_pb.Struct | undefined;
  setResult(value?: google_protobuf_struct_pb.Struct): void;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): google_protobuf_struct_pb.Struct | undefined;
  setMetrics(value?: google_protobuf_struct_pb.Struct): void;

  clearTraceList(): void;
  getTraceList(): Array<google_protobuf_struct_pb.Struct>;
  setTraceList(value: Array<google_protobuf_struct_pb.Struct>): void;
  addTrace(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  clearTraceSummaryList(): void;
  getTraceSummaryList(): Array<string>;
  setTraceSummaryList(value: Array<string>): void;
  addTraceSummary(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompileResponse): CompileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompileResponse;
  static deserializeBinaryFromReader(message: CompileResponse, reader: jspb.BinaryReader): CompileResponse;
}

export namespace CompileResponse {
  export type AsObject = {
    result?: google_protobuf_struct_pb.Struct.AsObject,
    metrics?: google_protobuf_struct_pb.Struct.AsObject,
    traceList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    traceSummaryList: Array<string>,
  }
}

export class QueryResponse extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): google_protobuf_struct_pb.Struct | undefined;
  setResponse(value?: google_protobuf_struct_pb.Struct): void;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): google_protobuf_struct_pb.Struct | undefined;
  setMetrics(value?: google_protobuf_struct_pb.Struct): void;

  clearTraceList(): void;
  getTraceList(): Array<google_protobuf_struct_pb.Struct>;
  setTraceList(value: Array<google_protobuf_struct_pb.Struct>): void;
  addTrace(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  clearTraceSummaryList(): void;
  getTraceSummaryList(): Array<string>;
  setTraceSummaryList(value: Array<string>): void;
  addTraceSummary(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    response?: google_protobuf_struct_pb.Struct.AsObject,
    metrics?: google_protobuf_struct_pb.Struct.AsObject,
    traceList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    traceSummaryList: Array<string>,
  }
}

export interface PathSeparatorMap {
  PATH_SEPARATOR_UNKNOWN: 0;
  PATH_SEPARATOR_DOT: 1;
  PATH_SEPARATOR_SLASH: 2;
}

export const PathSeparator: PathSeparatorMap;

export interface TraceLevelMap {
  TRACE_LEVEL_UNKNOWN: 0;
  TRACE_LEVEL_OFF: 1;
  TRACE_LEVEL_FULL: 2;
  TRACE_LEVEL_NOTES: 3;
  TRACE_LEVEL_FAILS: 4;
}

export const TraceLevel: TraceLevelMap;

