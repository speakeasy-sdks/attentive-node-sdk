import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewExternalIdentifierDto } from "./newexternalidentifierdto";
import { AddSubscriptionResponseDto } from "./addsubscriptionresponsedto";
import { UserDto1 } from "./userdto1";



export class AddSubscriptionsResponseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalIdentifiers" })
  externalIdentifiers?: NewExternalIdentifierDto;

  @SpeakeasyMetadata({ data: "json, name=subscriptionResponses", elemType: AddSubscriptionResponseDto })
  subscriptionResponses?: AddSubscriptionResponseDto[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserDto1;
}
