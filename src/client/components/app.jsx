import React, {useState, useEffect} from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import server from '../server';
// models
import AppModel from '../../models/app';
// components
import FormJournal from './form.journal.jsx';
import FormSettings from './form.settings.jsx';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [app, setApp] = useState(new AppModel({}));
  const [modal, setModal] = useState({journal: false, settings: false});

  useEffect(() => {
    setLoading(true);
    // fetch data
    Promise.all([
      server.getJournals(),
      server.getUser(),
      server.getChonkers()
    ]).then(([journals, user, chonkers]) => {
      const appModel = new AppModel({ chonkers, user, journals });
      // set state
      setApp(appModel);
      // app is ready
      setLoading(false);
    })
  }, []);

  const handleJournalClose = () => setModal({...modal, journal: false});
  const handleJournalOpen = () => setModal({...modal, journal: true});
  const handleSettingsClose = () => setModal({...modal, settings: false});
  const handleSettingsOpen = () => setModal({...modal, settings: true});
  const handleSettingsSubmit = (data) => server.updateChonker(app.user.id, data).then((payload) => {
    const chonkers = Object.assign(app.chonkers, payload);
    const { user, journals } = app;
    const appModel = new AppModel({ chonkers, user: user.serialize, journals });
    setApp(appModel);
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Team Chonkers</span>
          <div>
            <button onClick={handleJournalOpen} className="btn btn-primary mr-3">Add Entry</button>
            <button onClick={handleSettingsOpen} type="button" className="btn btn-link">
              { app.user.name }
              <img src={app.user.image} alt={app.user.name} className="rounded-circle ml-2" width="35" />
            </button>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col mt-5 mb-4">
            <LineChart data={app.display} curve={false} />
          </div>
        </div>

        <FormJournal show={modal.journal} onClose={handleJournalClose}></FormJournal>
        <FormSettings user={app.mySettings} show={modal.settings} onClose={handleSettingsClose} onSubmit={handleSettingsSubmit} ></FormSettings>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Weight</th>
              <th scope="col">L Bicep</th>
              <th scope="col">R Bicep</th>
              <th scope="col">Waist</th>
              <th scope="col">Hips</th>
              <th scope="col">L Thigh</th>
              <th scope="col">R Thigh</th>
              <th scope="col">Chest</th>
              <th scope="col">Body Fat %</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {app.myEntries.map((entry) => 
              <tr key={entry.timeStamp}>
                <td>{entry.timeStamp}</td>
                <td>{entry.weight}</td>
                <td>{entry.lBicep}</td>
                <td>{entry.rBicep}</td>
                <td>{entry.waist}</td>
                <td>{entry.hips}</td>
                <td>{entry.lThigh}</td>
                <td>{entry.rThigh}</td>
                <td>{entry.chest}</td>
                <td>{entry.bodyFat}</td>
                <td>{entry.progress}</td>
              </tr>
            )}
          </tbody>
        </table>
      
      </div>
    </div>
  );
}