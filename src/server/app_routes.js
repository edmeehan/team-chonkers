import { initProperties } from './property_service';

export function doGet(e) {
  const template = (e && e.parameter && e.parameter.page)
    // Use page parameter to set template file
    ? HtmlService.createTemplateFromFile(e.parameter.page)
    // else, no specific page requested, return "Index"
    : HtmlService.createTemplateFromFile('Index');

  // attach data to template - to be used with scriptlets
  template.data = [];

  initProperties();

  return template.evaluate();
}
