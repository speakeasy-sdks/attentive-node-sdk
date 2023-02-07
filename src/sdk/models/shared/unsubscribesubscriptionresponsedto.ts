import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionDto } from "./subscriptiondto";
import { SubscriptionUnsubscribeStatusEnum } from "./subscriptionunsubscribestatusenum";



// UnsubscribeSubscriptionResponseDto
/** 
 * A subscription and a status indicating whether the subscription for this particular user was newly unsubscribed or was previously unsubscribed (i.e. already opted-out)
**/
export class UnsubscribeSubscriptionResponseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: SubscriptionDto;

  @SpeakeasyMetadata({ data: "json, name=subscriptionUnsubscribeStatus" })
  subscriptionUnsubscribeStatus?: SubscriptionUnsubscribeStatusEnum;
}
