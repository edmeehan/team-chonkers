import md5 from 'md5';

const getEmail = () => Session.getActiveUser().getEmail();

function serialize(value) {
  return JSON.parse(JSON.stringify(value));
}

function getSheet(sheetName, getValues = true) {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName(sheetName);
  return getValues ? sheet.getDataRange().getValues() : sheet;
}

export function getMembers() {
  const sheetName = PropertiesService.getScriptProperties().getProperty('sheet_members');
  const rows = getSheet(sheetName); rows.shift();
  return serialize(rows);
}

export function getJournals() {
  const sheetName = PropertiesService.getScriptProperties().getProperty('sheet_journals');
  const rows = getSheet(sheetName); rows.shift();
  return serialize(rows);
}

export function createJournal({
  weight, lBicep, rBicep, waist, hips, lThigh,
  rThigh, chest, caliperMeasurment, bodyFat, progress,
}) {
  const sheetName = PropertiesService.getScriptProperties().getProperty('sheet_journals');
  return getSheet(sheetName, false).appendRow([
    md5(getEmail),
    new Date(),
    weight,
    lBicep,
    rBicep,
    waist,
    hips,
    lThigh,
    rThigh,
    chest,
    caliperMeasurment,
    bodyFat,
    progress,
  ]).getIndex();
}

export function updateJournal(index, journal) {

}

// export function getWorkouts() {
//   const sheetName = PropertiesService.getScriptProperties().getProperty('sheet_workouts');
//   const rows = getSheet(sheetName); rows.shift();
//   return serialize(rows);
// }

// export function getState() {
//   const scriptProps = PropertiesService.getScriptProperties();
//   // const documentProps = PropertiesService.getDocumentProperties();
//   const userProps = PropertiesService.getUserProperties();

//   return serialize({
//     scriptProperties: scriptProps.getProperties(),
//     // documentProperties: documentProps.getProperties(),
//     userProperties: userProps.getProperties(),
//   });
// }

export function sendEmails(e) {
// authMode, day-of-month, day-of-week, hour, minute
// month, second, timezone, triggerUid, week-of-year, year

}
