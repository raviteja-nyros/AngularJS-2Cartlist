interface AuthConfiguration {
  clientID: string,
  domain: string,
  callbackURL: string
}

export const myConfig: AuthConfiguration = {
  clientID: 'xe58JBwAHV5D6C68MfCYFlLWdo7yVJcW',
  domain: 'sathyalog.auth0.com',
  // You may need to change this!
  callbackURL: 'http://localhost:3000/'
};