import * as routes from './app_routes';
import * as methods from './app_methods';

// Expose public functions
global.doGet = routes.doGet;

// API
global.getChonkers = methods.getChonkers;
global.updateChonker = methods.updateChonker;

global.getJournals = methods.getJournals;
global.createJournal = methods.createJournal;
// global.updateJournal = methods.updateJournal;

// Properties Store
global.getUser = methods.getUser;
