import React, {useState, useEffect} from 'react';
import server from '../server';

export default function App() {
  // const [loading, setLoading] = useState(false);
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    server.getGroups().then(response => setGroupList(response));
  }, []);

  const onSelectGroup = (groupId, event) => {
    console.log(groupId, event);
  }

  return (
    <div className="row justify-content-center">
      <div className="col col-md-6 col-lg-4 mt-5">
        <ul className="list-group">
          {groupList.map((group) => 
            <li
              onClick={(e) => onSelectGroup(group.id, e)}
              key={group.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              >
              {group.name}
              <span className="badge badge-primary badge-pill">0</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}