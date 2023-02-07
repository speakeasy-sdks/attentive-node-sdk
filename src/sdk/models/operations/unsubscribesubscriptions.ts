import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnsubscribeSubscriptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: shared.SchemeOAuthFlow;
}


export class UnsubscribeSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UnsubscribeSubscriptionsRequestDto;

  @SpeakeasyMetadata()
  security: UnsubscribeSubscriptionsSecurity;
}


export class UnsubscribeSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsubscribeSubscriptionsResponseDto?: shared.UnsubscribeSubscriptionsResponseDto;
}
