import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalIdentifiers } from "./externalidentifiers";



// EventUser
/** 
 * User associated with the action. Note that this is a visitor to the site and does not need to be actively subscribed to Attentive.
 * 
**/
export class EventUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=externalIdentifiers" })
  externalIdentifiers?: ExternalIdentifiers;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}
