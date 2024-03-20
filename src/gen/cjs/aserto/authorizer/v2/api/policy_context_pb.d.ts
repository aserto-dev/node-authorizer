import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message aserto.authorizer.v2.api.PolicyContext
 */
export declare class PolicyContext extends Message<PolicyContext> {
    /**
     * policy path aka package name
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * list (1..N) of policy decisions (aka rules)
     *
     * @generated from field: repeated string decisions = 2;
     */
    decisions: string[];
    constructor(data?: PartialMessage<PolicyContext>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.api.PolicyContext";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PolicyContext;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PolicyContext;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PolicyContext;
    static equals(a: PolicyContext | PlainMessage<PolicyContext> | undefined, b: PolicyContext | PlainMessage<PolicyContext> | undefined): boolean;
}
