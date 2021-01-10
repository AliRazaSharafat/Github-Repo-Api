import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './App.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function App() {
  const classes = useStyles();

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

  // const count = repo.length;

  return (

    <div>

      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow >
              <TableCell style={{ fontWeight: 'bold' }}>Number</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Repository Name</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Full Name</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Owner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repo.map((repo, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="center">{repo.name}</TableCell>
                <TableCell align="center">{repo.full_name}</TableCell>
                <TableCell align="center">{repo.owner.login}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <h2>AliRazaSharafat/Repo</h2>
      <h3>Total Repository(es) :{count}</h3>
      {repo.map((repo, i) => {
        return (
          <h3 key={i}><li style={{ textTransform: 'capitalize', listStyle: 'none' }}>{i + 1} : {repo.name.replace(/-/g, ' ')}</li></h3>
        )
      })}
      <span>Deployed</span> */}
    </div>
  );
}

export default App;
