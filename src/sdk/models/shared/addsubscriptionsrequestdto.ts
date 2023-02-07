import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewExternalIdentifierDto } from "./newexternalidentifierdto";
import { UserDto1 } from "./userdto1";



export class AddSubscriptionsRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalIdentifiers" })
  externalIdentifiers?: NewExternalIdentifierDto;

  @SpeakeasyMetadata({ data: "json, name=signUpSourceId" })
  signUpSourceId: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: UserDto1;
}
