// package: aserto.authorizer.v2.api
// file: aserto/authorizer/v2/api/module.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Module extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasRaw(): boolean;
  clearRaw(): void;
  getRaw(): string;
  setRaw(value: string): void;

  hasPackagePath(): boolean;
  clearPackagePath(): void;
  getPackagePath(): string;
  setPackagePath(value: string): void;

  hasAst(): boolean;
  clearAst(): void;
  getAst(): google_protobuf_struct_pb.Value | undefined;
  setAst(value?: google_protobuf_struct_pb.Value): void;

  hasPackageRoot(): boolean;
  clearPackageRoot(): void;
  getPackageRoot(): string;
  setPackageRoot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    id: string,
    raw: string,
    packagePath: string,
    ast?: google_protobuf_struct_pb.Value.AsObject,
    packageRoot: string,
  }
}

