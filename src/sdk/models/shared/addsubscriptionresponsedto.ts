import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionDto } from "./subscriptiondto";
import { SubscriptionCreationStatusEnum } from "./subscriptioncreationstatusenum";



// AddSubscriptionResponseDto
/** 
 * A subscription and a status indicating whether the subscription for this particular user was newly created or was previously created (i.e. already existed)
**/
export class AddSubscriptionResponseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: SubscriptionDto;

  @SpeakeasyMetadata({ data: "json, name=subscriptionCreationStatus" })
  subscriptionCreationStatus?: SubscriptionCreationStatusEnum;
}
