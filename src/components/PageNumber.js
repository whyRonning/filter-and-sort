import React from "react";

export let PageNumber=(props)=> {
    let handler=()=>{
        props.ChangePage(props.num)
    }
    return(
    <props.Row onClick={handler}>{props.num}</props.Row>)
}