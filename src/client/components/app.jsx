import React, {useState, useEffect} from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import server from '../server';
// models
import Journal from '../../models/journal';
import Chonker from '../../models/chonker';
import Chart from '../../models/chart';
// components
import FormJournal from './form.journal.jsx';
// import FormWorkout from './form.workout.jsx';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [journals, setJournals] = useState([]);
  const [chart, setChart] = useState([]);
  const [showJournal, setShowJournal] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      server.getMembers(),
      server.getJournals(),
    ]).then(([membersSheet, journalsSheet]) => {
      // create instances of all the models
      const membersRows = membersSheet.map(item => new Chonker(item));
      const journalsRows = journalsSheet.map(item => new Journal(item));
      const chartModel = new Chart({membersRows, journalsRows});
      setChart(chartModel);
      setJournals(chartModel.myEntries);
      console.log(chartModel);
      setLoading(false);      
    })
  }, []);

  const handleJournalClose = () => setShowJournal(false);
  const handleJournalOpen = () => setShowJournal(true);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Team Chonkers</span>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col mt-5 mb-4">
            <LineChart data={chart.display} curve={false} />
          </div>
        </div>

        <button onClick={handleJournalOpen} className="btn btn-primary">Add Journal Entry</button>
        
        <FormJournal show={showJournal} onClose={handleJournalClose}></FormJournal>
        {/* <FormWorkout show={showWorkout} onClose={handleWorkoutClose}></FormWorkout> */}

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
            {journals.map((entry) => 
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