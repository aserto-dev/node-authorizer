// package: aserto.authorizer.v2.api
// file: aserto/authorizer/v2/api/identity_context.proto

import * as jspb from "google-protobuf";

export class IdentityContext extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getType(): IdentityTypeMap[keyof IdentityTypeMap];
  setType(value: IdentityTypeMap[keyof IdentityTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityContext.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityContext): IdentityContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityContext;
  static deserializeBinaryFromReader(message: IdentityContext, reader: jspb.BinaryReader): IdentityContext;
}

export namespace IdentityContext {
  export type AsObject = {
    identity: string,
    type: IdentityTypeMap[keyof IdentityTypeMap],
  }
}

export interface IdentityTypeMap {
  IDENTITY_TYPE_UNKNOWN: 0;
  IDENTITY_TYPE_NONE: 1;
  IDENTITY_TYPE_SUB: 2;
  IDENTITY_TYPE_JWT: 3;
  IDENTITY_TYPE_MANUAL: 4;
}

export const IdentityType: IdentityTypeMap;

