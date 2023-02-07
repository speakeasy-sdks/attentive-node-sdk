import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { AccessToken } from "./accesstoken";
import { CustomAttributes } from "./customattributes";
import { CustomEvents } from "./customevents";
import { Identity } from "./identity";
import { PrivacyRequest } from "./privacyrequest";
import { ProductCatalog } from "./productcatalog";
import { Subscribers } from "./subscribers";
import { TestAuthentication } from "./testauthentication";
import { Webhooks } from "./webhooks";
import { ECommerce } from "./ecommerce";


export const ServerList = [
	"https://api.attentivemobile.com/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public accessToken: AccessToken;
  public customAttributes: CustomAttributes;
  public customEvents: CustomEvents;
  public identity: Identity;
  public privacyRequest: PrivacyRequest;
  public productCatalog: ProductCatalog;
  public subscribers: Subscribers;
  public testAuthentication: TestAuthentication;
  public webhooks: Webhooks;
  public eCommerce: ECommerce;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "2.0.0";
  private _genVersion = "0.0.2";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.accessToken = new AccessToken(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customAttributes = new CustomAttributes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customEvents = new CustomEvents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.identity = new Identity(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.privacyRequest = new PrivacyRequest(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.productCatalog = new ProductCatalog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscribers = new Subscribers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.testAuthentication = new TestAuthentication(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webhooks = new Webhooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.eCommerce = new ECommerce(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}