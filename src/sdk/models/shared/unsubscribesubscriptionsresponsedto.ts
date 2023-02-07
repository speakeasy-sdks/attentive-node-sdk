import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsubscribeSubscriptionResponseDto } from "./unsubscribesubscriptionresponsedto";
import { UserDto1 } from "./userdto1";



export class UnsubscribeSubscriptionsResponseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscriptionResponses", elemType: UnsubscribeSubscriptionResponseDto })
  subscriptionResponses?: UnsubscribeSubscriptionResponseDto[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserDto1;
}
