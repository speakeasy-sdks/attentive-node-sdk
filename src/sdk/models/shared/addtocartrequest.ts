import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductRequest } from "./productrequest";
import { EventUser } from "./eventuser";



export class AddToCartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ProductRequest })
  items: ProductRequest[];

  @SpeakeasyMetadata({ data: "json, name=occurredAt" })
  occurredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: EventUser;
}
