/* tslint:disable */
/* eslint-disable */
/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DeleteFrontendRequest
 */
export interface DeleteFrontendRequest {
    /**
     * 
     * @type {string}
     * @memberof DeleteFrontendRequest
     */
    frontendToken?: string;
}

/**
 * Check if a given object implements the DeleteFrontendRequest interface.
 */
export function instanceOfDeleteFrontendRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteFrontendRequestFromJSON(json: any): DeleteFrontendRequest {
    return DeleteFrontendRequestFromJSONTyped(json, false);
}

export function DeleteFrontendRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFrontendRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'frontendToken': !exists(json, 'frontendToken') ? undefined : json['frontendToken'],
    };
}

export function DeleteFrontendRequestToJSON(value?: DeleteFrontendRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'frontendToken': value.frontendToken,
    };
}

