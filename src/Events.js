import React, {useState, useEffect } from 'react';
import Division1 from './Division1.js'

  const Event = () => {
    const [datas, setDatas] = useState([])
    const [dataq, setDataq] = useState([])
    var konacni = [];

    useEffect(() => {
    fetch('/api/calendar/events?key=d89ae9a6e3ace7714983ed652997357b')
      .then(resp => resp.json())
      .then(resp => {
        setDataq(resp.results)
      })
    }, [])   

      useEffect(() => {
        fetch('/api/core/members?key=d89ae9a6e3ace7714983ed652997357b')
          .then(resp => resp.json())
          .then(resp => {
            setDatas(resp.results)   
          })
      }, [])     


      let result = datas.map(a => a.id);
      let resulq = dataq.map(b => b.author.id);
      console.log("datas", result);
      console.log("dataq", resulq);
      for(var j=0; j<result.length; j++){
        let k = 0;
      for(var i=0; i<result.length; i++){
        
        if(resulq[i] === j)
          {
            k++;
          }
         
      }
      console.log("Broj je:", k);
      konacni.push(k);
    }
    console.log("konacni", konacni);
       var merged = {dataq, datas};
       

       
return(
  <Division1 data={merged}/>
);
} 

export default Event;