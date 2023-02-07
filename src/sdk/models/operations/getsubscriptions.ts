import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phone" })
  phone?: string;
}


export class GetSubscriptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: shared.SchemeOAuthFlow;
}


export class GetSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSubscriptionsQueryParams;

  @SpeakeasyMetadata()
  security: GetSubscriptionsSecurity;
}


export class GetSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSubscriptionsResponseDto?: shared.GetSubscriptionsResponseDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
