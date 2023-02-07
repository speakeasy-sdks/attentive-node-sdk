<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "@attentive/sdk";
import { CreateTokenViaAuthorizationCodeRequest, CreateTokenViaAuthorizationCodeResponse } from "@attentive/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oAuthFlow: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: CreateTokenViaAuthorizationCodeRequest = {
  request: {
    clientId: "sit",
    clientSecret: "voluptas",
    code: "culpa",
    grantType: "expedita",
    redirectUri: "consequuntur",
  },
};

sdk.accessToken.createTokenViaAuthorizationCode(req).then((res: CreateTokenViaAuthorizationCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->