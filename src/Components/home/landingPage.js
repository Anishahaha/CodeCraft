import React, { useLayoutEffect,useEffect, useState } from 'react'
import './landingPage.css'
import {ReactComponent as DownArrow} from '../../assets/down.svg'
import {ReactComponent as CClogo} from '../../assets/cclogo.svg'

import { useHistory } from 'react-router'
export default function LandingPage() {

    const history = useHistory()
    const [height,setHeight] = useState(0)

    useLayoutEffect(()=>{
        setHeight(document.getElementById('nav-bar').scrollHeight)
    },[])
    return (
        <div id='landingPage' className="lp_root fullscreen">
            {
                
            }
                <div style={{
                    height:`${height}px`
                }}></div>
            
                <div className='caption' >

                <span className='title' >CodeCraft 3.0</span>
                {/* <span className="subtitle">Something here idk</span>  */}
                <div className="cchef">
                <span>Powered by </span>
                
                <CClogo/>
                

                </div>
                </div>
                <Timer/>
                <div className='space5' ></div>
                <a href="#dates">
                <div className="downIcon" >
                <DownArrow/>
                </div>
                </a>
                </div>
    )
}

 const Timer = ()=>{
    const [time,setTime] = useState(['00','00','00','00'])
    const countDownDate = new Date("Oct 24, 2021 21:00:00").getTime();
    
    useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
    <>
    <span style={{
        fontSize:'1.25rem',
        textAlign:'center'
    }} >Registration closed</span>
        <div className="timer" >

            <div className='timer-b timer' >
                <span>{time[0]}</span>
                <span>Days</span>
            </div>
            <div className='sep' ></div>
            <div className='timer-b timer' >
                <span>{time[1]}</span>
                <span>Hours</span>
            </div>
            <div  className='sep' ></div>

            <div className='timer-b timer' >
                <span>{time[2]}</span>
                <span>Mins</span>
            </div>
            <div className='sep' ></div>

            <div className='timer-b timer' >
                <span>{time[3]}</span>
                <span>Seconds   </span>
            </div>
        </div>
        </>
    )
}
