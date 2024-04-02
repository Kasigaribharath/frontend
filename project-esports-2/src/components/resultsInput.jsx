import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./resultsInput.css";
import { useParams } from "react-router-dom";

const ResultInput = () => {
  const params = useParams();

  const [tableNumber, setTableNumber] = useState(1);
  const [participantsData, setParticipantsData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/match_details/${params.id}/`)
      .then(res => {
        setParticipantsData(res.data.participants_teams);
        console.log(res.data,"participants teams");
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [params.id]);

  function handleTableIndex(tableid) {
    setTableNumber(tableid);
    console.log(tableid);
  }

  return (
    <div className="position-relative" id="selected-table-target">
      <a href="#selected-table-target" className="bi-chevron-double-up btn btn-light p-2 z-3 position-fixed bottom-0 end-0">{""}</a>
      <hr />
      <div className="table-select  p-4  justify-content-center d-flex  flex-wrap gap-3 mb-3 position-relative">
        <a href="#selected-table-btn" className="bi bi-chevron-double-down btn btn-light px-2 z-3 mt-5 position-fixed top-0   end-0"> </a>
        {[1, 2, 3, 4, 5, 6].map(tableid => (
          <div className="" key={tableid} onClick={() => handleTableIndex(tableid)}>
            <button className={`fw-bold btn btn-danger ${tableNumber === tableid ? 'active' : ''}`} type="button">Table {tableid}</button>
          </div>
        ))}
      </div>

      <div className="text-white text-center pb-2">Table {tableNumber} Selected</div>

      <Formik
        initialValues={{
          teams: participantsData ? participantsData.map(team => ({
            "teamId": team.id,
            "squadname": team.team_name,
            "inGameName": team.in_game_name,
            "player_1": 0,
            "player_2": 0,
            "player_3": 0,
            "player_4": 0,
            "position_points": 12,
            "matches_played": true,
            "booyah": false
          })) : []
        }}
        onSubmit={(values) => {
          axios.post(`http://localhost:3000/api/stats/${params.id}/${tableNumber}`, values, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          })
            .then(response => {
              console.log(response.data); // Log the response data
              alert("Submitted ✅");
            })
            .catch(error => {
              console.error('Error:', error); // Log any errors that occur
            });
          console.log(values);
        }}
        enableReinitialize={true}
      >
        <Form>
          <div className="resultInputCard d-flex gap-3 flex-column  mx-auto">
            {participantsData && participantsData.map((team, index) => (
              <div className="card p-3 bg-dark border border-white-50" key={index}>
                <div className="card-header  text-danger  d-flex justify-content-between">
                  <div ><span className="h3 fw-bold">{index+1}. {team.team_name}</span><small className="text-white-50">({team.in_game_name})</small></div>
                  <div>M.P  <Field name={`teams.${index}.matches_played`} type="checkbox" className="form-check-input" /></div>
                  <div>Booyah <Field name={`teams.${index}.booyah`} type="checkbox" className="form-check-input" /></div>
                </div>
                <div className=" text-danger fw-bold mt-2">In Game Leader points</div>
                <Field name={`teams.${index}.player_1`} type="number" className="form-control" />
                <div className=" text-danger fw-bold mt-2">Player 2 points</div>
                <Field name={`teams.${index}.player_2`} type="number" className="form-control" />
                <div className=" text-danger fw-bold mt-2">Player 3 points</div>
                <Field name={`teams.${index}.player_3`} type="number" className="form-control" />
                <div className=" text-danger fw-bold mt-2">Player 4 points</div>
                <Field name={`teams.${index}.player_4`} type="number" className="form-control" />
                <div className=" text-danger fw-bold mt-2">Position points</div>
                <Field name={`teams.${index}.position_points`} type="number" className="form-control" />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center bg-dark pt-3">
            <button type="submit" className="btn btn-primary bg-gradient " id="selected-table-btn">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ResultInput;
