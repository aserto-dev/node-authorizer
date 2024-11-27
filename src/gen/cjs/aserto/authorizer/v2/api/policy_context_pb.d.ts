import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/authorizer/v2/api/policy_context.proto.
 */
export declare const file_aserto_authorizer_v2_api_policy_context: GenFile;
/**
 * @generated from message aserto.authorizer.v2.api.PolicyContext
 */
export type PolicyContext = Message<"aserto.authorizer.v2.api.PolicyContext"> & {
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
};
/**
 * Describes the message aserto.authorizer.v2.api.PolicyContext.
 * Use `create(PolicyContextSchema)` to create a new message.
 */
export declare const PolicyContextSchema: GenMessage<PolicyContext>;
