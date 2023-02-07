import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfigDto } from "./notificationconfigdto";
import { SubscriptionDto } from "./subscriptiondto";
import { UserDto1 } from "./userdto1";



export class UnsubscribeSubscriptionsRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: NotificationConfigDto;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: SubscriptionDto })
  subscriptions?: SubscriptionDto[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: UserDto1;
}
