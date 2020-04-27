// lodash
import _groupBy from 'lodash/fp/groupBy';
import _flow from 'lodash/fp/flow';
import _values from 'lodash/fp/values';
import _map from 'lodash/fp/map';

export default class Chart {
  constructor({membersRows = [], journalsRows = []}) {
    this.members = membersRows;
    this.journals = journalsRows;
  }

  // test() {
  //   this.grouped = _flow([
  //     _groupBy((item) => item.id),
  //     _values,
  //     _map((item) => ({
  //       name: members.find(member => item[0].id === member.id ).name,
  //       data: item
  //     }))
  //   ])(journals);
  // }

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