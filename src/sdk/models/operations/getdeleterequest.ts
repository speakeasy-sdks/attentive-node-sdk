import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDeleteRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDeleteRequestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: shared.SchemeOAuthFlow;
}


export class GetDeleteRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeleteRequestPathParams;

  @SpeakeasyMetadata()
  security: GetDeleteRequestSecurity;
}


export class GetDeleteRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  privacyRequestDto?: shared.PrivacyRequestDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
