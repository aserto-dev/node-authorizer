// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file aserto/authorizer/v2/api/module.proto (package aserto.authorizer.v2.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Value } from "@bufbuild/protobuf";

/**
 * @generated from message aserto.authorizer.v2.api.Module
 */
export class Module extends Message<Module> {
  /**
   * @generated from field: optional string id = 1;
   */
  id?: string;

  /**
   * @generated from field: optional string raw = 2;
   */
  raw?: string;

  /**
   * @generated from field: optional string package_path = 3;
   */
  packagePath?: string;

  /**
   * @generated from field: optional google.protobuf.Value ast = 4;
   */
  ast?: Value;

  /**
   * @generated from field: optional string package_root = 5;
   */
  packageRoot?: string;

  constructor(data?: PartialMessage<Module>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.authorizer.v2.api.Module";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "raw", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "package_path", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "ast", kind: "message", T: Value, opt: true },
    { no: 5, name: "package_root", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module {
    return new Module().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJsonString(jsonString, options);
  }

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean {
    return proto3.util.equals(Module, a, b);
  }
}

