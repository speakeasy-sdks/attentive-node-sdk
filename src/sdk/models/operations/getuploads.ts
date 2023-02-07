import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUploadsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: shared.SchemeOAuthFlow;
}


export class GetUploadsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetUploadsSecurity;
}


export class GetUploadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CatalogUploadResponse })
  catalogUploadResponses?: shared.CatalogUploadResponse[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
