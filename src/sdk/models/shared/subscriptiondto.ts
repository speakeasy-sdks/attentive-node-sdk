import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubscriptionDtoChannelEnum {
    Text = "TEXT",
    Email = "EMAIL"
}

export enum SubscriptionDtoTypeEnum {
    Marketing = "MARKETING",
    Transactional = "TRANSACTIONAL",
    CheckoutAbandoned = "CHECKOUT_ABANDONED"
}


// SubscriptionDto
/** 
 * A type and channel combination.
**/
export class SubscriptionDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: SubscriptionDtoChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SubscriptionDtoTypeEnum;
}
