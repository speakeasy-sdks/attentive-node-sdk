import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EligibilityDto } from "./eligibilitydto";
import { SubscriptionDto } from "./subscriptiondto";



// SubscriptionEligibilityDto
/** 
 * A subscription and a boolean indicating whether the user is eligible to receive messages for that subscription.
**/
export class SubscriptionEligibilityDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eligibility" })
  eligibility?: EligibilityDto;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: SubscriptionDto;
}
