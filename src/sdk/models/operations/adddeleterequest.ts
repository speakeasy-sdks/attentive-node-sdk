import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddDeleteRequestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: shared.SchemeOAuthFlow;
}


export class AddDeleteRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PrivacyRequestAddDeleteEventDto;

  @SpeakeasyMetadata()
  security: AddDeleteRequestSecurity;
}


export class AddDeleteRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  privacyRequestDto?: shared.PrivacyRequestDto;

  @SpeakeasyMetadata()
  privacyRequestErrorDto?: shared.PrivacyRequestErrorDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
