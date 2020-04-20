export function Chonker([id, name, image]) {
  return {
    id,
    name,
    image,
  };
}

export function JournalEntry([
  id, timeStamp, weight, lBicep, rBicep, waist, hips,
  lThigh, rThigh, chest, caliperMeasurment, bodyFat, progress]) {
  return {
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
    progress,
  };
}

export function WorkoutEntry([id, timeStamp, effort]) {
  return {
    id,
    timeStamp,
    effort,
  };
}
