import REACT,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {startOfDay,format,addSeconds} from 'date-fns';
import styles from './Stopwatch.module.css';

function Stopwatch(){
    const [time,setTime]= useState(startOfDay(new Date()));
    const [isRunning,setIsRunning]= useState(false);
    
    useEffect(()=>{
        if(isRunning){
            const idValue = setTimeout(()=>{
                setTime(addSeconds(time,1));
            }, 1000);
            return()=>{clearTimeout(idValue);};
        }
    },[isRunning,time]);

    return(
        <article className={styles.wrapper}>
        <h1 className={styles.time}>{format(time,'HH:mm:ss')}</h1>
        <button onClick={()=>{setIsRunning(!isRunning);}}>{isRunning ? 'stop':'start'}</button>
        <button onClick={()=>{setTime(startOfDay(new Date()));}}>reset</button>
        </article>
    )

}

export default Stopwatch;