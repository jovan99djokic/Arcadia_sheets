import React, {useState, useEffect } from 'react';
import Division1 from './Division1.js'

  const Event = () => {
    const [datas, setDatas] = useState([])
    const [dataq, setDataq] = useState([])
    var konacni = [];

    useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://www.blacksabre.org/api/calendar/events?key=d89ae9a6e3ace7714983ed652997357b')
      .then(resp => resp.json())
      .then(resp => {
        setDataq(resp.results)
      })
    }, [])   

      useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://www.blacksabre.org/api/core/members?key=d89ae9a6e3ace7714983ed652997357b')
          .then(resp => resp.json())
          .then(resp => {
            setDatas(resp.results)   
          })
      }, [])     

      // let result = datas.map(a => a.id);

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
    // console.log("konacni", konacni);
    let dodat = datas.map(obj=> ({...obj, konacni: konacni[obj.id]}))
    // console.log("Dodat", dodat);
return(
  <Division1 data={dodat}/>
);
} 
export default Event;