export default class Journal {
  constructor(journalRow) {
    if(Array.isArray(journalRow)) {
      this.fromSheet(journalRow);
    } else {
      this.fromForm(journalRow);
    }

    this.model = null;
  }

  fromSheet([
    id,
    timeStamp,
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
    progress
  ]) {
    this.id = id;
    this.timeStamp = timeStamp;
    this.weight = weight;
    this.lBicep = lBicep;
    this.rBicep = rBicep;
    this.waist = waist;
    this.hips = hips;
    this.lThigh = lThigh;
    this.rThigh = rThigh;
    this.chest = chest;
    this.caliperMeasurment = caliperMeasurment;
    this.bodyFat = bodyFat;
    this.progress = progress;
  }

  fromForm({
    id,
    timeStamp,
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
    progress
  }) {
    this.id = id;
    this.timeStamp = timeStamp;
    this.weight = weight;
    this.lBicep = lBicep;
    this.rBicep = rBicep;
    this.waist = waist;
    this.hips = hips;
    this.lThigh = lThigh;
    this.rThigh = rThigh;
    this.chest = chest;
    this.caliperMeasurment = caliperMeasurment;
    this.bodyFat = bodyFat;
    this.progress = progress;
  }

  get toSheet() {
    return [
      this.id,
      this.timeStamp,
      this.weight,
      this.lBicep,
      this.rBicep,
      this.waist,
      this.hips,
      this.lThigh,
      this.rThigh,
      this.chest,
      this.caliperMeasurment,
      this.bodyFat,
      this.progress
    ]
  }
}
