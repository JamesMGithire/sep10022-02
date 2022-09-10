import React from "react";

export default function WindowTracker(){
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(()=>{
        function watchWidth(){
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize",watchWidth)
        return (()=>{
            window.removeEventListener("resize",watchWidth);
            // Cleaning up the useEffect
        })
    },[])
    return(
        <h1>Window width : {width}</h1>
    );
}