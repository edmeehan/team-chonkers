import React, {useState, useEffect} from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import server from '../server';
import FormJournal from './form.journal.jsx';
import FormWorkout from './form.workout.jsx';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [journals, setJournals] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      server.getState(),
      server.getMembers(),
      server.getJournals(),
      server.getWorkouts(),
    ]).then(([state, members, journals, workouts]) => {
      setMembers(members);
      setJournals(journals);
      setWorkouts(workouts);
      setLoading(false);
    })
  }, []);

  const onMemberClick = (id, event) => {
    console.log(members, journals, workouts);
  }

  const test = [
    {name: 'One', data: {"2017-01-01": 11, "2017-01-02": 6, "2017-01-03": 4}},
    {name: 'Two', data: {"2017-01-01": 3, "2017-01-02": 7, "2017-01-03": 13}}
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Team Chonkers</span>
      </nav>
      <div className="container">
        <LineChart data={test} curve={false} />
        <FormJournal></FormJournal>
        <FormWorkout></FormWorkout>
        <div className="row justify-content-center">
          <div className="col col-md-6 col-lg-4 mt-5">
            <ul className="list-group">
              {members.map((member) => 
                <li
                  onClick={(e) => onMemberClick(member.id, e)}
                  key={member.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  >
                  {member.name}
                  <span className="badge badge-primary badge-pill">0</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}