import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogUploadErrorResponse } from "./cataloguploaderrorresponse";



export class CatalogUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: CatalogUploadErrorResponse })
  errors?: CatalogUploadErrorResponse[];

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=productsProcessed" })
  productsProcessed?: number;

  @SpeakeasyMetadata({ data: "json, name=productsReceived" })
  productsReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadId" })
  uploadId?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
