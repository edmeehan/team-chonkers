import config from './config';
import { Group } from './models';

const getSheet = (sheetName, getValues = true) => {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName(sheetName);
  return getValues ? sheet.getDataRange().getValues() : sheet;
};

export const getGroups = () => {
  const rows = getSheet(config.spreadsheets.groups);
  rows.shift();

  return rows.map((item) => new Group(item)); // JSON.parse(JSON.stringify(rows));
};
