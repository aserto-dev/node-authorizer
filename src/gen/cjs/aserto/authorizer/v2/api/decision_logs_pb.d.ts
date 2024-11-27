import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { PolicyContext } from "./policy_context_pb";
import type { IdentityContext } from "./identity_context_pb";
import type { PolicyInstance } from "./policy_instance_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/authorizer/v2/api/decision_logs.proto.
 */
export declare const file_aserto_authorizer_v2_api_decision_logs: GenFile;
/**
 * represents a decision that an authorizer performed in the past
 *
 * @generated from message aserto.authorizer.v2.api.Decision
 */
export type Decision = Message<"aserto.authorizer.v2.api.Decision"> & {
    /**
     * unique id, replay a decision starting with this, also useful to de-dup
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * UTC time when the decision was made
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 2;
     */
    timestamp?: Timestamp;
    /**
     * Policy path used in decision
     *
     * @generated from field: string path = 3;
     */
    path: string;
    /**
     * info about user for whom the decision as made
     *
     * @generated from field: aserto.authorizer.v2.api.DecisionUser user = 4;
     */
    user?: DecisionUser;
    /**
     * info about policy used for the decision
     *
     * @generated from field: aserto.authorizer.v2.api.DecisionPolicy policy = 5;
     */
    policy?: DecisionPolicy;
    /**
     * outcome of the decisions specified in the policy context
     *
     * @generated from field: map<string, bool> outcomes = 6;
     */
    outcomes: {
        [key: string]: boolean;
    };
    /**
     * the resource context used in a decision
     *
     * @generated from field: google.protobuf.Struct resource = 7;
     */
    resource?: JsonObject;
    /**
     * annotations that may be added to a decision
     *
     * @generated from field: map<string, string> annotations = 8;
     */
    annotations: {
        [key: string]: string;
    };
    /**
     * id of the tenant that generated the decision
     *
     * @generated from field: optional string tenant_id = 9;
     */
    tenantId?: string;
};
/**
 * Describes the message aserto.authorizer.v2.api.Decision.
 * Use `create(DecisionSchema)` to create a new message.
 */
export declare const DecisionSchema: GenMessage<Decision>;
/**
 * information about a user on behalf of whom a decision was made
 *
 * @generated from message aserto.authorizer.v2.api.DecisionUser
 */
export type DecisionUser = Message<"aserto.authorizer.v2.api.DecisionUser"> & {
    /**
     * identity context used in the decision
     *
     * @generated from field: aserto.authorizer.v2.api.IdentityContext context = 1;
     */
    context?: IdentityContext;
    /**
     * id of the user the identity resolved to
     *
     * @generated from field: string id = 2;
     */
    id: string;
    /**
     * convinience human-readable identifier
     *
     * @generated from field: string email = 3;
     */
    email: string;
};
/**
 * Describes the message aserto.authorizer.v2.api.DecisionUser.
 * Use `create(DecisionUserSchema)` to create a new message.
 */
export declare const DecisionUserSchema: GenMessage<DecisionUser>;
/**
 * information about a policy used in a decision
 *
 * @generated from message aserto.authorizer.v2.api.DecisionPolicy
 */
export type DecisionPolicy = Message<"aserto.authorizer.v2.api.DecisionPolicy"> & {
    /**
     * policy context used in the decision
     *
     * @generated from field: aserto.authorizer.v2.api.PolicyContext context = 1;
     */
    context?: PolicyContext;
    /**
     * registry service where policy was retrieved from (e.g. opcr.io)
     *
     * @generated from field: string registry_service = 2;
     */
    registryService: string;
    /**
     * image of the policy in the registry, including org (e.g. acmecorp/peoplefinder-abac)
     *
     * @generated from field: string registry_image = 3;
     */
    registryImage: string;
    /**
     * tag of the policy image (e.g. 0.8.2 or latest)
     *
     * @generated from field: string registry_tag = 4;
     */
    registryTag: string;
    /**
     * digest of the policy image
     *
     * @generated from field: string registry_digest = 5;
     */
    registryDigest: string;
    /**
     * policy instance used in decision
     *
     * @generated from field: aserto.authorizer.v2.api.PolicyInstance policy_instance = 6;
     */
    policyInstance?: PolicyInstance;
};
/**
 * Describes the message aserto.authorizer.v2.api.DecisionPolicy.
 * Use `create(DecisionPolicySchema)` to create a new message.
 */
export declare const DecisionPolicySchema: GenMessage<DecisionPolicy>;
