import md5 from 'md5';

function setUserProperties() {
  const userProps = PropertiesService.getUserProperties();
  const email = Session.getActiveUser().getEmail();
  const people = People.People.getBatchGet({
    resourceNames: ['people/me'],
    personFields: 'names,coverPhotos,photos',
  });
  const showChonkers = userProps.getProperty('showChonkers');

  // clear and set all properties
  userProps.deleteAllProperties();
  userProps.setProperties({
    id: md5(email),
    displayName: people.responses[0].person.names[0].displayName,
    givenName: people.responses[0].person.names[0].givenName,
    familyName: people.responses[0].person.names[0].familyName,
    photoUrl: people.responses[0].person.photos[0].url,
    coverUrl: people.responses[0].person.coverPhotos[0].url,
    showChonkers: (showChonkers === null) ? false : showChonkers,
  });
}

export function doGet(e) {
  const template = (e && e.parameter && e.parameter.page)
    // Use page parameter to set template file
    ? HtmlService.createTemplateFromFile(e.parameter.page)
    // else, no specific page requested, return "Index"
    : HtmlService.createTemplateFromFile('Index');

  // attach data to template - to be used with scriptlets
  template.data = [];

  // sets user properties like name
  // and image url from google account
  setUserProperties();

  return template.evaluate();
}
