import React, { useState, useEffect } from 'react';
import './App.css'
import MaterialTable from 'material-table'


function Division1() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Name", field: "name" },
    { title: "Division", field: "secondaryGroups.0.name",defaultFilter: "Division 1" },
    { title: "Time Zone", field: "timeZone" },
    { title: "Primary Group", field: "primaryGroup.name"},
    { title: "Reputation Points", field: "reputationPoints" },
    { title: "Posts", field: "posts" },
    { title: "Last Visit", field: "lastVisit" },
    { title: "Rank", field: "rank" },
    { title: "Achievement Points", field: "achievements_points" },
  ]
  useEffect(() => {
    fetch('https://murmuring-sierra-05569.herokuapp.com/https://www.arcadiagaming.net/api/core/members?key=d89ae9a6e3ace7714983ed652997357b')
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
        options={{
          toolbar:false ,
          headerStyle: {
            backgroundColor: "#CC0000",
            color: 'white'
        },
          paging:false,
          search: false,
          pageSize:50,       // make initial page size
          emptyRowsWhenPaging: false,   // To avoid of having empty rows
        }}
      
        style={{ backgroundColor: '#282c34',
        color: 'white'
      }}
      />
    </div>
  );
}

export default Division1;
