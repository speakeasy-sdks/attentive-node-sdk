import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventUser } from "./eventuser";



export class CustomAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: EventUser;
}
