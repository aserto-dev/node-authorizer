import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Value } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/authorizer/v2/api/module.proto.
 */
export declare const file_aserto_authorizer_v2_api_module: GenFile;
/**
 * @generated from message aserto.authorizer.v2.api.Module
 */
export type Module = Message<"aserto.authorizer.v2.api.Module"> & {
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
};
/**
 * Describes the message aserto.authorizer.v2.api.Module.
 * Use `create(ModuleSchema)` to create a new message.
 */
export declare const ModuleSchema: GenMessage<Module>;
