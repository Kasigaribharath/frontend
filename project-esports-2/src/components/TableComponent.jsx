import React, { useEffect, useState } from 'react';
import "../components/TableComponent.css";
import axios from 'axios';

export function TableComponent(props) {
  const [teams, setTeams] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/api/stats/${props.tournamentID}/${props.matchID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    .then(res => setTeams(res.data))
    .catch(error => console.log('Error fetching stats:', error));
  }, [props.tournamentID, props.matchID]);

  // Sort teams by total points
  const sortedTeams = Object.keys(teams).sort((teamA, teamB) => {
    const totalPointsA = teams[teamA].kills + teams[teamA].position_points;
    const totalPointsB = teams[teamB].kills + teams[teamB].position_points;
    return totalPointsB - totalPointsA; 
  });

  return (
    <div className="points-table-container rounded">
      <table className='points-table'>
        <thead className='text-white h5'>
          <tr>
            <th>#</th>
            <th>Team Name</th>
            <th>M.P</th>
            <th>Win</th>
            <th>P.P</th>
            <th>K.P</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((teamName, index) => (
            <tr key={teamName}>
              <td className='bg-gradient fw-bold text-center'>{index + 1}</td>
              <td className="teamName fw-bold ">{teamName}</td>
              <td className='rounded-1'>{teams[teamName].matches_played}</td>
              <td className='rounded-1'>{teams[teamName].booyah}</td>
              <td className='rounded-1'>{teams[teamName].position_points}</td>
              <td className='rounded-1'>{teams[teamName].kills}</td>
              <td className='rounded-1 fw-bold'>{teams[teamName].kills + teams[teamName].position_points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
