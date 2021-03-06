import React from 'react';
import './App.css'
import MaterialTable from 'material-table'

function Division1 (props) {
  const columns = [
    { title: "Id", field: "id"},
    { title: "Name", field: "name"},
    { title: "Division", field: "secondaryGroups.0.name",defaultFilter: "Division 1" },
    { title: "Time Zone", field: "timeZone" },
    { title: "Reputation Points", field: "reputationPoints" },
    { title: "Posts", field: "posts" },
    { title: "Last Visit", field: "lastVisit" },
    { title: "Achievement Points", field: "achievements_points" },
    { title: "Events Hosted", field: "konacni" },
    { title: "Total Discord Minutes", field: "customFields.2.fields.2.value" },
    { title: "Primary game", field: "customFields.1.fields.8.value" },
  ];

  console.log("Division1", props);
  return (
    <div className="App">
      <MaterialTable
        title="Division 1"
        data={props.data}
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
