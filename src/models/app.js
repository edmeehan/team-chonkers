// lodash
import _groupBy from 'lodash/fp/groupBy';
import _flow from 'lodash/fp/flow';
import _values from 'lodash/fp/values';
import _map from 'lodash/fp/map';
import JournalModel from './journal';
import UserModel from './user';

export default class AppModel {
  constructor({chonkers = {}, journals = [], user = {}}) {
    this.chonkers = chonkers;
    this.journals = (journals.map(item => new JournalModel(item)));
    this.user = new UserModel(user);
  }

  get mySettings() {
    return this.chonkers[this.user.id];
  }

  get myEntries() {
    return this.journals;
  }

  get display() {
    return [
      {name: 'One', data: {"2017-01-01": 11, "2017-01-02": 6, "2017-01-03": 4, "2017-01-04": 7}},
      {name: 'Two', data: {"2017-01-01": 3, "2017-01-02": 7, "2017-01-04": 13}}
    ];
  }
}