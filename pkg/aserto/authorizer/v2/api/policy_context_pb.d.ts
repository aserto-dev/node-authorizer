// package: aserto.authorizer.v2.api
// file: aserto/authorizer/v2/api/policy_context.proto

import * as jspb from "google-protobuf";

export class PolicyContext extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getInstanceLabel(): string;
  setInstanceLabel(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  clearDecisionsList(): void;
  getDecisionsList(): Array<string>;
  setDecisionsList(value: Array<string>): void;
  addDecisions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyContext.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyContext): PolicyContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyContext;
  static deserializeBinaryFromReader(message: PolicyContext, reader: jspb.BinaryReader): PolicyContext;
}

export namespace PolicyContext {
  export type AsObject = {
    name: string,
    instanceLabel: string,
    path: string,
    decisionsList: Array<string>,
  }
}

