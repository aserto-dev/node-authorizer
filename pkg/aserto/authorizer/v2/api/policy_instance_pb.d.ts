// package: aserto.authorizer.v2.api
// file: aserto/authorizer/v2/api/policy_instance.proto

import * as jspb from "google-protobuf";

export class PolicyInstance extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getInstanceLabel(): string;
  setInstanceLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyInstance.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyInstance): PolicyInstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyInstance;
  static deserializeBinaryFromReader(message: PolicyInstance, reader: jspb.BinaryReader): PolicyInstance;
}

export namespace PolicyInstance {
  export type AsObject = {
    name: string,
    instanceLabel: string,
  }
}

