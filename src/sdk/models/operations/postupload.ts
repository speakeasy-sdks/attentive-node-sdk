import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: shared.SchemeOAuthFlow;
}


export class PostUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CatalogUploadRequest;

  @SpeakeasyMetadata()
  security: PostUploadSecurity;
}


export class PostUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  catalogUploadResponse?: shared.CatalogUploadResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
