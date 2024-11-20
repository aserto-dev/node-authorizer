import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/authorizer/v2/api/identity_context.proto.
 */
export declare const file_aserto_authorizer_v2_api_identity_context: GenFile;
/**
 * @generated from message aserto.authorizer.v2.api.IdentityContext
 */
export type IdentityContext = Message<"aserto.authorizer.v2.api.IdentityContext"> & {
    /**
     * @generated from field: string identity = 1;
     */
    identity: string;
    /**
     * @generated from field: aserto.authorizer.v2.api.IdentityType type = 2;
     */
    type: IdentityType;
};
/**
 * Describes the message aserto.authorizer.v2.api.IdentityContext.
 * Use `create(IdentityContextSchema)` to create a new message.
 */
export declare const IdentityContextSchema: GenMessage<IdentityContext>;
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
 * Describes the enum aserto.authorizer.v2.api.IdentityType.
 */
export declare const IdentityTypeSchema: GenEnum<IdentityType>;
