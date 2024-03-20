import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message aserto.authorizer.v2.api.PolicyInstance
 */
export declare class PolicyInstance extends Message<PolicyInstance> {
    /**
     * policy name
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * label identifying the instance of the policy
     *
     * @generated from field: string instance_label = 2;
     */
    instanceLabel: string;
    constructor(data?: PartialMessage<PolicyInstance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.api.PolicyInstance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PolicyInstance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PolicyInstance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PolicyInstance;
    static equals(a: PolicyInstance | PlainMessage<PolicyInstance> | undefined, b: PolicyInstance | PlainMessage<PolicyInstance> | undefined): boolean;
}
