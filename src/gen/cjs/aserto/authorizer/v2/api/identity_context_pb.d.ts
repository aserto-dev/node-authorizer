import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Identity types, describes the payload type of the identity field inside the IdentityContext message.
 *
 * @generated from enum aserto.authorizer.v2.api.IdentityType
 */
export declare enum IdentityType {
    /**
     * Unknown, value not set, requests will fail with identity type not set error.
     *
     * @generated from enum value: IDENTITY_TYPE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * None, no explicit identity context set, equals anonymous.
     *
     * @generated from enum value: IDENTITY_TYPE_NONE = 1;
     */
    NONE = 1,
    /**
     * Sub(ject), identity field contains an oAUTH subject.
     *
     * @generated from enum value: IDENTITY_TYPE_SUB = 2;
     */
    SUB = 2,
    /**
     * JWT, identity field contains a JWT access token.
     *
     * @generated from enum value: IDENTITY_TYPE_JWT = 3;
     */
    JWT = 3,
    /**
     * Manual, propagates thw identity field as-is, without validation, into the input object.
     *
     * @generated from enum value: IDENTITY_TYPE_MANUAL = 4;
     */
    MANUAL = 4
}
/**
 * @generated from message aserto.authorizer.v2.api.IdentityContext
 */
export declare class IdentityContext extends Message<IdentityContext> {
    /**
     * @generated from field: string identity = 1;
     */
    identity: string;
    /**
     * @generated from field: aserto.authorizer.v2.api.IdentityType type = 2;
     */
    type: IdentityType;
    constructor(data?: PartialMessage<IdentityContext>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.api.IdentityContext";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentityContext;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentityContext;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentityContext;
    static equals(a: IdentityContext | PlainMessage<IdentityContext> | undefined, b: IdentityContext | PlainMessage<IdentityContext> | undefined): boolean;
}
