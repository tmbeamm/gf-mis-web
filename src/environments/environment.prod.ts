const GFMIS_OAUTH_API = "https://auth.nerves-cloud.com:9443"
const GFMIS_API = "https://auth.nerves-cloud.com:9443"

const RESPONSE_TYPE = "code";
const CLIENT_ID = "JZ1GxfPfG8MwKZtCOyld31YO0bEa";
const REDIRECT_URL = "http://localhost:8080/oauth2/callback";

const GFMIS_SSO_CLIENT = "http://192.168.1.117:8080"

const SCOPE = "openid profile email address phone";


export const environment = {
  production: true,
  ASSET_PATH: 'http://localhost:8080/assets',
  services: {
    authen: {
      endpoint: {
        login: GFMIS_OAUTH_API + "/oauth2/authorize?response_type=" + RESPONSE_TYPE + "&client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URL + "&scope=" + SCOPE,
        accessToken: GFMIS_OAUTH_API + "/oauth2/token",
        loginClient: GFMIS_SSO_CLIENT + "/login",
        accessTokenByCode: GFMIS_SSO_CLIENT + "/wso2/oauth2/token",
        userme: 'http://localhost:8080/user/me'
      }
    },
    profile: {
      endpoint: {
        profile: GFMIS_API + "/oauth2/userinfo"
      }
    }
  }
};


