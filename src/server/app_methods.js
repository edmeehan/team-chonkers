import md5 from 'md5';
import { getScriptProperty, getUserProperties, setScriptProperty } from './property_service';

const getEmail = () => Session.getActiveUser().getEmail();

function serialize(value) {
  return JSON.parse(JSON.stringify(value));
}
function getSheet(sheetName, getValues = true) {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName(sheetName);
  return getValues ? sheet.getDataRange().getValues() : sheet;
}

/**
 * CHONKERS METHODS
 */
export function getChonkers() {
  const chonkers = getScriptProperty('chonkers');
  return JSON.parse(chonkers);
}

export function updateChonker(id, data) {
  const chonkers = JSON.parse(getScriptProperty('chonkers'));
  chonkers[id] = data;
  setScriptProperty('chonkers', JSON.stringify(chonkers));
  return chonkers;
}

/**
 * JOURNAL METHODS
 */
export function getJournals() {
  const sheetName = getScriptProperty('sheet_journals');
  const rows = getSheet(sheetName); rows.shift();
  return serialize(rows);
}
export function createJournal({
  weight, lBicep, rBicep, waist, hips, lThigh, rThigh, chest, caliperMeasurment, bodyFat, progress,
}) {
  const sheetName = getScriptProperty('sheet_journals');
  const payload = [
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
  ];
  console.log({ payload, argument: arguments[0] });
  try {
    console.log('New row:', getSheet(sheetName, false).appendRow(payload).getLastRow());
  } catch (error) {
    console.error(error);
  }
}
// export function updateJournal(index, journal) {}

/**
 * SEND EMAIL
 */
// export function sendEmails(e) {
// // authMode, day-of-month, day-of-week, hour, minute
// // month, second, timezone, triggerUid, week-of-year, year

// }

export function getUser() {
  const user = getUserProperties();
  return serialize(user);
}
