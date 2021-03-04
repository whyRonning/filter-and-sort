import React from "react";

export let FindStroke=(props)=>{
    let handler=(e)=>{
        props.FilterAC(e.target.value)
    };
    return (
        <div>
            <input type="text" value={props.value} placeholder="Поиск" onChange={handler}/>
        </div>
    )
}