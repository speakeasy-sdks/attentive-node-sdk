import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionEligibilityDto } from "./subscriptioneligibilitydto";



// GetSubscriptionsResponseDto
/** 
 * A list of the subscriptions that a subscriber is eligible to receive messages for.
**/
export class GetSubscriptionsResponseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscriptionEligibilities", elemType: SubscriptionEligibilityDto })
  subscriptionEligibilities?: SubscriptionEligibilityDto[];
}
