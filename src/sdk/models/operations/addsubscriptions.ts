import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddSubscriptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: shared.SchemeOAuthFlow;
}


export class AddSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddSubscriptionsRequestDto;

  @SpeakeasyMetadata()
  security: AddSubscriptionsSecurity;
}


export class AddSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addSubscriptionsResponseDto?: shared.AddSubscriptionsResponseDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
