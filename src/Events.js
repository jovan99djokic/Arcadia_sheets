import React, {useState, useEffect } from 'react';
import App from './App.js';

  const Event = () => {
    const [datas, setDatas] = useState([])
    const [dataq, setDataq] = useState([])
    const [totalpagescalendar, setTotalpagescalendar] = useState([])
    const [totalpagesmembers, setTotalpagesmembers] = useState([])
    var konacni = [];

    useEffect(() => {
    //fetch('https://murmuring-sierra-05569.herokuapp.com/https://www.blacksabre.org/api/calendar/events?key=d89ae9a6e3ace7714983ed652997357b')
    fetch('https://www.blacksabre.org/api/calendar/events?key=d89ae9a6e3ace7714983ed652997357b')
      .then(resp => resp.json())
      .then(resp => {
        setTotalpagescalendar(resp.totalPages)
      })
    }, [])   

      useEffect(() => {
       // fetch('https://murmuring-sierra-05569.herokuapp.com/https://www.blacksabre.org/api/core/members?key=d89ae9a6e3ace7714983ed652997357b')
       fetch('https://www.blacksabre.org/api/core/members?key=d89ae9a6e3ace7714983ed652997357b')
          .then(resp => resp.json())
          .then(resp => {
            setTotalpagesmembers(resp.totalPages)   
          })
      }, [])     



      console.log(datas);

      let resulq = dataq.map(b => b.author.id);
      let max_vrednost = resulq.slice(-1)[0] 

      for(let j=0; j<max_vrednost+1; j++){
        let k = 0;
      for(let i=0; i<max_vrednost+1; i++){
        
        if(resulq[i] === j)
          {
            k++;
          }
      }
      konacni.push(k);
    }

    let test = datas.map(obj=> ({...obj, konacni: konacni[obj.id]}))

    return(
  <App data={test}/>
);
} 
export default Event;