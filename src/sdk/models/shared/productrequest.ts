import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class ProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=price", elemType: Price })
  price: Price[];

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=productImage" })
  productImage?: string;

  @SpeakeasyMetadata({ data: "json, name=productUrl" })
  productUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=productVariantId" })
  productVariantId: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
