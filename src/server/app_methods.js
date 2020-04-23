import md5 from 'md5';
import { Chonker, JournalEntry, WorkoutEntry } from '../models';

function ugh(value) {
  return JSON.parse(JSON.stringify(value));
}

function getSheet(sheetName, getValues = true) {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName(sheetName);
  return getValues ? sheet.getDataRange().getValues() : sheet;
}

export function getMembers() {
  const sheetName = PropertiesService.getScriptProperties().getProperty('sheet_members');
  const rows = getSheet(sheetName);
  rows.shift();
  const modeled = rows.map((item) => Chonker(item));
  return ugh(modeled);
}

export function getJournals() {
  const sheetName = PropertiesService.getScriptProperties().getProperty('sheet_journals');
  const rows = getSheet(sheetName);
  rows.shift();
  const modeled = rows.map((item) => JournalEntry(item));
  return ugh(modeled);
}

export function getWorkouts() {
  const sheetName = PropertiesService.getScriptProperties().getProperty('sheet_workouts');
  const rows = getSheet(sheetName);
  rows.shift();
  const modeled = rows.map((item) => WorkoutEntry(item));
  return ugh(modeled);
}

export function getState() {
  const scriptProps = PropertiesService.getScriptProperties();
  const documentProps = PropertiesService.getDocumentProperties();
  const userProps = PropertiesService.getUserProperties();
  const email = Session.getActiveUser().getEmail();

  const people = People.People.getBatchGet({
    resourceNames: ['people/me'],
    personFields: 'names,coverPhotos,photos,names,nicknames',
  });

  return ugh({
    scriptProperties: scriptProps.getProperties(),
    documentProperties: documentProps.getProperties(),
    userProperties: userProps.getProperties(),
    userId: md5(email),
    people,
  });
}

export function sendEmails(e) {
// authMode, day-of-month, day-of-week, hour, minute
// month, second, timezone, triggerUid, week-of-year, year

}
