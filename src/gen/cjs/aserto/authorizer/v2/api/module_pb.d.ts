import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Value } from "@bufbuild/protobuf";
/**
 * @generated from message aserto.authorizer.v2.api.Module
 */
export declare class Module extends Message<Module> {
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
    constructor(data?: PartialMessage<Module>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.api.Module";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;
    static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}
