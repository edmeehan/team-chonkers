/*
 * These scripts manage the user of Property Services
 * Scoped to the script, document, or user
 * https://developers.google.com/apps-script/guides/properties
 */

import md5 from 'md5';

const userProperties = PropertiesService.getUserProperties();
const scriptProperties = PropertiesService.getScriptProperties();
const userEmail = Session.getActiveUser().getEmail();

// sets user properties like name
// and image url from google account
export function initProperties() {
  const people = People.People.getBatchGet({
    resourceNames: ['people/me'],
    personFields: 'names,photos',
  });

  // init empty object for chonkers if not set yet
  if (!scriptProperties.getProperty('chonkers')) {
    scriptProperties.setProperty('chonkers', '{}');
  }

  const user = JSON.parse(scriptProperties.getProperty('chonkers'));

  // add user to chonkers if not set yet
  if (!user[md5(userEmail)]) {
    user[md5(userEmail)] = {
      displayName: people.responses[0].person.names[0].displayName,
      photoUrl: people.responses[0].person.photos[0].url,
      share: false,
    };

    scriptProperties.setProperty('chonkers', JSON.stringify(user));
  }

  // clear and set all properties
  userProperties.setProperties({
    id: md5(userEmail),
    displayName: people.responses[0].person.names[0].displayName,
    givenName: people.responses[0].person.names[0].givenName,
    familyName: people.responses[0].person.names[0].familyName,
    photoUrl: people.responses[0].person.photos[0].url,
  });
}

export function setUserProperty(key, value) {
  userProperties.setProperty(key, value);
  return true;
}

export function getUserProperty(key) {
  return userProperties.getProperty(key);
}

export function getUserProperties() {
  return userProperties.getProperties();
}

export function setScriptProperty(key, value) {
  scriptProperties.setProperty(key, value);
  return true;
}

export function getScriptProperties() {
  return scriptProperties.getProperties();
}

export function getScriptProperty(key) {
  return scriptProperties.getProperty(key);
}
