import React from 'react';
import InputMask from "react-input-mask";

export default function FormJournal() {
  const defMask = [/[0-9]/,];

  return (
    <form action="">
      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="">Do you feel you made progress this week?</label>
          <div>
            {[1,2,3,4,5].map((value) =>
              <div key={value} className="form-check form-check-inline">
                <input type="radio" name="progress" value={value} className="form-check-input"/>
                <label className="form-check-label">{value}</label>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group col-2">
          <label>Weight</label>
          <InputMask mask={defMask} maskPlaceholder={null}  name="weight" className="form-control" />

        </div>
      </div>

      <hr/>

      <h3>Measurements</h3>
      <span>No flexing. Measure relaxed and in the same location. Measure in inches, using quarters.</span>
      
      <hr/>

      <label>Biceps</label>
      <div className="form-row">
        <div className="form-group col-2">
          <label htmlFor="">Left</label>
          <InputMask mask={defMask} maskPlaceholder={null} name="lBicep" className="form-control"/>
        </div>
        <div className="form-group col-2">
          <label htmlFor="">Right</label>
          <InputMask mask={defMask} maskPlaceholder={null} name="rBicep" className="form-control"/>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group col-2">
          <label htmlFor="">Chest</label>
          <InputMask mask={defMask} maskPlaceholder={null} name="chest" className="form-control"/>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group col-2">
          <label htmlFor="">Waist</label>
          <InputMask mask={defMask} maskPlaceholder={null} name="waist" className="form-control"/>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group col-2">
          <label htmlFor="">Hips</label>
          <InputMask mask={defMask} maskPlaceholder={null} name="hips" className="form-control"/>
        </div>
      </div>

      <label>Thighs</label>
      <div className="form-row">
        <div className="form-group col-2">
          <label htmlFor="">Left</label>
          <InputMask mask={defMask} maskPlaceholder={null} name="lThigh" className="form-control"/>
        </div>
        <div className="form-group col-2">
          <label htmlFor="">Right</label>
          <InputMask mask={defMask} maskPlaceholder={null} name="rThigh" className="form-control"/>
        </div>
      </div>

      <hr/>

      <h3>Calipers</h3>
      <span>Optional body fat %</span>

      <hr/>

      <div className="form-row">
        <div className="form-group col-2">
          <label htmlFor="">Measurement</label>
          <InputMask mask="999" name="caliperMeasurment" className="form-control"/>
          <small className="form-text text-muted">in millimeters</small>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-2">
          <label htmlFor="">Body Fat</label>
          <InputMask mask="99.9%" name="bodyFat" className="form-control"/>
        </div>
      </div>
    </form>
  )
}