import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {IMaskInput} from 'react-imask';
import Modal from 'react-bootstrap/Modal'
import { JournalEntry } from '../../models/journal';
import server from '../server';

export default function FormJournal(props) {
  const [loading, setLoading] = useState(false);
  const weightMask = '000.0';
  const defMask = '00.00';
  
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const journal = {};
    const formData = new FormData(event.target);
    for (const [key, value]  of formData.entries()) {
      journal[key] = value;
    }
    // handle updating
    if(await server.createJournal(journal)) {
      props.onClose();
      setLoading(false);
    }
  }

  return (
    <Modal
      size="lg"
      onHide={props.onClose}
      show={props.show}>
      <Modal.Body>
        <form id="journal"
          onSubmit={handleSubmit}
          className="text-center">
          
          <fieldset>
            <div className="form-group py-4">
              <h5>Do you feel you made progress this week?</h5>
              <small className="mr-4 text-muted">Not so much.</small>
              {[1,2,3,4,5].map((value) =>
                <div key={value} className="form-check form-check-inline">
                  <input type="radio" name="progress" value={value} className="form-check-input"/>
                  <label className="form-check-label">{value}</label>
                </div>
              )}
              <small className="ml-2 text-muted">Fuck yeah I did!</small>
            </div>
            
            <div className="form-row justify-content-center">
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <h5>Weight</h5>
                <div className="input-group">
                  <IMaskInput
                    name="weight"
                    required
                    className="form-control"
                    mask={weightMask}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">lbs</span>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          
          <fieldset className="mt-5">
            <div className="row">
              <div className="col py-4">
                <h4 className="text-muted">Measurements</h4>
                <p><small>No flexing. Measure relaxed and in the same location.</small></p>
              </div>
            </div>

            <h5>Biceps</h5>
            <div className="form-row justify-content-center">
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <div className="input-group">
                  <IMaskInput
                    mask={defMask}
                    placeholder="Left"
                    name="lBicep"
                    required
                    className="form-control"/>
                  <div className="input-group-append">
                    <span className="input-group-text">in</span>
                  </div>
                </div>
              </div>
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <div className="input-group">  
                  <IMaskInput
                    mask={defMask}
                    placeholder="Right"
                    name="rBicep"
                    required
                    className="form-control"/>
                  <div className="input-group-append">
                    <span className="input-group-text">in</span>
                  </div>
                </div>
              </div>
            </div>
              
            <h5>Chest</h5>
            <div className="form-row justify-content-center">
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <div className="input-group">
                  <IMaskInput
                    mask={defMask}
                    name="chest"
                    required
                    className="form-control"/>
                  <div className="input-group-append">
                    <span className="input-group-text">in</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h5>Waist</h5>
            <div className="form-row justify-content-center">
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <div className="input-group">
                  <IMaskInput
                    mask={defMask}
                    name="waist"
                    required
                    className="form-control"/>
                  <div className="input-group-append">
                    <span className="input-group-text">in</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h5>Hips</h5>
            <div className="form-row justify-content-center">
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <div className="input-group">
                  <IMaskInput
                    mask={defMask}
                    name="hips"
                    required
                    className="form-control"/>
                  <div className="input-group-append">
                    <span className="input-group-text">in</span>
                  </div>
                </div>
              </div>
            </div>

            <h5>Thighs</h5>
            <div className="form-row justify-content-center">
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <div className="input-group">
                  <IMaskInput
                    mask={defMask}
                    placeholder="Left"
                    name="lThigh"
                    required
                    className="form-control"/>
                  <div className="input-group-append">
                    <span className="input-group-text">in</span>
                  </div>
                </div>
              </div>
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <div className="input-group">
                  <IMaskInput
                    mask={defMask}
                    placeholder="Right"
                    name="rThigh"
                    required
                    className="form-control"/>
                  <div className="input-group-append">
                    <span className="input-group-text">in</span>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="block pb-3 mt-5">  
            <div className="row">
              <div className="col py-4">
                <h4 className="text-muted">Body Fat</h4>
                <p><small>Optional</small></p>
              </div>
            </div>

            <div className="form-row justify-content-around">
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <label>Caliper Measurement</label>
                <div className="input-group">
                  <IMaskInput
                    mask='00'
                    name="caliperMeasurment"
                    className="form-control"/>
                  <div className="input-group-append">
                    <span className="input-group-text">mm</span>
                  </div>
                </div>
              </div>
              <div className="form-group col col-sm-6 col-md-4 col-lg-3">
                <label>Body Fat</label>
                <div className="input-group">
                  <IMaskInput
                    mask='00.0'
                    name="bodyFat"
                    className="form-control"/>
                  <div className="input-group-append">
                    <span className="input-group-text">%</span>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary"
          onClick={props.onClose}>
          Cancel
        </button>
        <button className="btn btn-primary"
          disabled={loading}
          type="submit"
          form="journal">
            Submit
          </button>
      </Modal.Footer>
    </Modal>
  )
}

FormJournal.propTypes = {
  show: PropTypes.bool,
  journal: JournalEntry,
  onClose: PropTypes.func
};
