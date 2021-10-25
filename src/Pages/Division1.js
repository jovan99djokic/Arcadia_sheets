import React, { useState, useEffect } from 'react';
import '../App.css'
import MaterialTable from 'material-table'


function Division1() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Name", field: "name" },
    { title: "Division", field: "secondaryGroups.0.name" },
    { title: "Time Zone", field: "timeZone" },
    { title: "Reputation Points", field: "reputationPoints" },
    { title: "Posts", field: "posts" },
    { title: "Last Visit", field: "lastVisit" },
    { title: "Rank", field: "rank" },
    { title: "Achievement Points", field: "achievements_points" },
  ]
  useEffect(() => {
    fetch("/api/core/members?key=d89ae9a6e3ace7714983ed652997357b")
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        setData(resp)
      })
  }, [])

  return (
    <div className="App">
      <MaterialTable
        title="Division 1"
        data={data.results}
        columns={columns}
      
      />
    </div>
  );
}

export default Division1;
