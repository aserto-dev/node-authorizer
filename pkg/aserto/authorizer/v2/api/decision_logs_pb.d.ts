// package: aserto.authorizer.v2.api
// file: aserto/authorizer/v2/api/decision_logs.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as aserto_authorizer_v2_api_policy_context_pb from "../../../../aserto/authorizer/v2/api/policy_context_pb";
import * as aserto_authorizer_v2_api_identity_context_pb from "../../../../aserto/authorizer/v2/api/identity_context_pb";
import * as aserto_authorizer_v2_api_policy_instance_pb from "../../../../aserto/authorizer/v2/api/policy_instance_pb";

export class Decision extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPath(): string;
  setPath(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): DecisionUser | undefined;
  setUser(value?: DecisionUser): void;

  hasPolicy(): boolean;
  clearPolicy(): void;
  getPolicy(): DecisionPolicy | undefined;
  setPolicy(value?: DecisionPolicy): void;

  getOutcomesMap(): jspb.Map<string, boolean>;
  clearOutcomesMap(): void;
  hasResource(): boolean;
  clearResource(): void;
  getResource(): google_protobuf_struct_pb.Struct | undefined;
  setResource(value?: google_protobuf_struct_pb.Struct): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;
  hasTenantId(): boolean;
  clearTenantId(): void;
  getTenantId(): string;
  setTenantId(value: string): void;

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
    id: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    path: string,
    user?: DecisionUser.AsObject,
    policy?: DecisionPolicy.AsObject,
    outcomesMap: Array<[string, boolean]>,
    resource?: google_protobuf_struct_pb.Struct.AsObject,
    annotationsMap: Array<[string, string]>,
    tenantId: string,
  }
}

export class DecisionUser extends jspb.Message {
  hasContext(): boolean;
  clearContext(): void;
  getContext(): aserto_authorizer_v2_api_identity_context_pb.IdentityContext | undefined;
  setContext(value?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext): void;

  getId(): string;
  setId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecisionUser.AsObject;
  static toObject(includeInstance: boolean, msg: DecisionUser): DecisionUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecisionUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecisionUser;
  static deserializeBinaryFromReader(message: DecisionUser, reader: jspb.BinaryReader): DecisionUser;
}

export namespace DecisionUser {
  export type AsObject = {
    context?: aserto_authorizer_v2_api_identity_context_pb.IdentityContext.AsObject,
    id: string,
    email: string,
  }
}

export class DecisionPolicy extends jspb.Message {
  hasContext(): boolean;
  clearContext(): void;
  getContext(): aserto_authorizer_v2_api_policy_context_pb.PolicyContext | undefined;
  setContext(value?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext): void;

  getRegistryService(): string;
  setRegistryService(value: string): void;

  getRegistryImage(): string;
  setRegistryImage(value: string): void;

  getRegistryTag(): string;
  setRegistryTag(value: string): void;

  getRegistryDigest(): string;
  setRegistryDigest(value: string): void;

  hasPolicyInstance(): boolean;
  clearPolicyInstance(): void;
  getPolicyInstance(): aserto_authorizer_v2_api_policy_instance_pb.PolicyInstance | undefined;
  setPolicyInstance(value?: aserto_authorizer_v2_api_policy_instance_pb.PolicyInstance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecisionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: DecisionPolicy): DecisionPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecisionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecisionPolicy;
  static deserializeBinaryFromReader(message: DecisionPolicy, reader: jspb.BinaryReader): DecisionPolicy;
}

export namespace DecisionPolicy {
  export type AsObject = {
    context?: aserto_authorizer_v2_api_policy_context_pb.PolicyContext.AsObject,
    registryService: string,
    registryImage: string,
    registryTag: string,
    registryDigest: string,
    policyInstance?: aserto_authorizer_v2_api_policy_instance_pb.PolicyInstance.AsObject,
  }
}

