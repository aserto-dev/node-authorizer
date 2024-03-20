import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";
import { IdentityContext } from "./identity_context_pb.js";
import { PolicyContext } from "./policy_context_pb.js";
import { PolicyInstance } from "./policy_instance_pb.js";
/**
 * represents a decision that an authorizer performed in the past
 *
 * @generated from message aserto.authorizer.v2.api.Decision
 */
export declare class Decision extends Message<Decision> {
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
    resource?: Struct;
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
    constructor(data?: PartialMessage<Decision>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.api.Decision";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Decision;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Decision;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Decision;
    static equals(a: Decision | PlainMessage<Decision> | undefined, b: Decision | PlainMessage<Decision> | undefined): boolean;
}
/**
 * information about a user on behalf of whom a decision was made
 *
 * @generated from message aserto.authorizer.v2.api.DecisionUser
 */
export declare class DecisionUser extends Message<DecisionUser> {
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
    constructor(data?: PartialMessage<DecisionUser>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.api.DecisionUser";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecisionUser;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecisionUser;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecisionUser;
    static equals(a: DecisionUser | PlainMessage<DecisionUser> | undefined, b: DecisionUser | PlainMessage<DecisionUser> | undefined): boolean;
}
/**
 * information about a policy used in a decision
 *
 * @generated from message aserto.authorizer.v2.api.DecisionPolicy
 */
export declare class DecisionPolicy extends Message<DecisionPolicy> {
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
    constructor(data?: PartialMessage<DecisionPolicy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.authorizer.v2.api.DecisionPolicy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecisionPolicy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecisionPolicy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecisionPolicy;
    static equals(a: DecisionPolicy | PlainMessage<DecisionPolicy> | undefined, b: DecisionPolicy | PlainMessage<DecisionPolicy> | undefined): boolean;
}
