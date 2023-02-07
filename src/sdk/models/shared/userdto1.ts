import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserDto1
/** 
 * User associated with the action. Note that this is a visitor to the site and does not need to be actively subscribed to Attentive.
**/
export class UserDto1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}
