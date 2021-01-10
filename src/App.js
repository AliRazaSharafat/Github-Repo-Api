import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [repo, setRepo] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/AliRazaSharafat/repos')
      .then(res => {
        setRepo(res.data);
        // console.log(repo);
        // setRepo(res.data);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const count = repo.length;

  return (
    <div>
      <h2>AliRazaSharafat/Repo</h2>
      <h3>Total Repository(es) :{count}</h3>
      {repo.map((repo, i) => {
        return (
          <h3 key={i}><li style={{ textTransform: 'capitalize', listStyle: 'none' }}>{i+1} : {repo.name.replace(/-/g, ' ')}</li></h3>
        )
      })}
      <span>Deployed</span>
    </div>
  );
}

export default App;
