'use client'
import React,{use, useEffect, useState} from 'react';
import '../globals.css'; 
import Link from 'next/link';
const Navbar = () => {
    const[dark,isdark]=useState(true)
    function handledark(){
        isdark(prev=>!prev)
    }

  
    const style = {
        backgroundColor: dark ? '#030712' : 'rgb(247, 247, 247)',

        color: dark ? '#e1e7ef' : 'black',
        transition: 'all 0.2s ease'  
    };

    return (
        <div>
            <div style={style} className="navbar">
                <div className="logo">
                    <h2>TaskMirror</h2>
                </div>
                <div className="functions">
                    <div className="functionname">
                        <img src="home.png" alt="home" />
                        <Link href='/home'>Home</Link>
                    </div>
                    <div className="functionname">
                        <img src="completed.png" alt="completed" />
                        <Link href='/completed'>Completed</Link>
                    </div>
                    <div className="functionname">
                        <img src="timer.png" alt="timer" />
                        <Link href='/timer'>Timer</Link>
                    </div>
                </div>
                <div className="left">
                    <div onClick={handledark} className="darkmode">
                        {/* <img src={dark?'dark.png':'light.png'}alt="darkmode" /> */}
                    </div>
                    <div className="login">
                        {/* <img src="login.png" alt="login" /> */}
                        {/* <h3>Login</h3> */}
                    </div>
                </div>
            </div>
            <div className="borer">

            </div>
        </div>
    );
};

export default Navbar;
