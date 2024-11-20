import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/authorizer/v2/api/policy_instance.proto.
 */
export declare const file_aserto_authorizer_v2_api_policy_instance: GenFile;
/**
 * @generated from message aserto.authorizer.v2.api.PolicyInstance
 */
export type PolicyInstance = Message<"aserto.authorizer.v2.api.PolicyInstance"> & {
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
};
/**
 * Describes the message aserto.authorizer.v2.api.PolicyInstance.
 * Use `create(PolicyInstanceSchema)` to create a new message.
 */
export declare const PolicyInstanceSchema: GenMessage<PolicyInstance>;
