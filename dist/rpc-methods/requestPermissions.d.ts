import type { PermissionConstraint, RequestedPermissions } from '../Permission';
import type { PermittedHandlerExport } from '../utils';
export declare const requestPermissionsHandler: PermittedHandlerExport<RequestPermissionsHooks, [
    RequestedPermissions
], PermissionConstraint[]>;
declare type RequestPermissions = (requestedPermissions: RequestedPermissions) => Promise<[
    Record<string, PermissionConstraint>,
    {
        id: string;
        origin: string;
    }
]>;
export declare type RequestPermissionsHooks = {
    requestPermissionsForOrigin: RequestPermissions;
};
export {};
//# sourceMappingURL=requestPermissions.d.ts.map