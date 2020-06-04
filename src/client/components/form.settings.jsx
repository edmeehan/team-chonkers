import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

export default function FormSettings({ onClose, onSubmit, show, user }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({share: false});

  useEffect(() => {
    if(user) setForm(user);
  }, [user]);

  function handleShareToggle() {
    setForm({...form, share:!form.share});
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    onSubmit(form).then(() => {
      setLoading(false);
      onClose();
    });
  }

  return (
    <Modal
      onHide={onClose}
      show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Your Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="settings" onSubmit={handleSubmit}>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="showChonkersCheck"
              defaultChecked={form.share}
              value="true"
              onChange={handleShareToggle}
            />
            <label className="form-check-label" htmlFor="showChonkersCheck">Show the other chonkers my progress</label>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary"
          onClick={onClose}>
          Cancel
        </button>
        <button className="btn btn-primary"
          disabled={loading}
          type="submit"
          form="settings">
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  )
}

FormSettings.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  user: PropTypes.object
}