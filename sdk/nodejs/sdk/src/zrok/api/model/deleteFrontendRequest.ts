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

import { RequestFile } from './models';

export class DeleteFrontendRequest {
    'frontendToken'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "frontendToken",
            "baseName": "frontendToken",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DeleteFrontendRequest.attributeTypeMap;
    }
}

