import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventUser } from "./eventuser";



export class CustomEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalEventId" })
  externalEventId?: string;

  @SpeakeasyMetadata({ data: "json, name=occurredAt" })
  occurredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: EventUser;
}
