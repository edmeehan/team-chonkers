import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import { WorkoutEntry } from '../../models/journal';
import server from '../server';

export default function FormWorkout(props) {
  const [loading, setLoading] = useState(false);

  return (
    <Modal
      size="lg"
      onHide={props.onClose}
      show={props.show}>
      <Modal.Body>
        This is the workout modal.
      </Modal.Body>
    </Modal>
  )
}

FormWorkout.propTypes = {
  show: PropTypes.bool,
  workout: WorkoutEntry,
  onClose: PropTypes.func
};