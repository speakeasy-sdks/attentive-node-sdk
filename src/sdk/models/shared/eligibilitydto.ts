import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EligibilityDto
/** 
 * A user's eligibility to receive messages for a subscription.
**/
export class EligibilityDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isEligible" })
  isEligible?: boolean;
}
