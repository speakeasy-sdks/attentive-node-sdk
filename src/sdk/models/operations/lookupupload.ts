import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LookupUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uploadId" })
  uploadId: string;
}


export class LookupUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: shared.SchemeOAuthFlow;
}


export class LookupUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LookupUploadPathParams;

  @SpeakeasyMetadata()
  security: LookupUploadSecurity;
}


export class LookupUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  catalogUploadResponse?: shared.CatalogUploadResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
