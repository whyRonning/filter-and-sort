import React from "react";
import styled from "styled-components"
const CustomInput = styled.input`
    width:50vw;
    height:3vh;
    cursor:pointer;
  `;
export let FindStroke=(props)=>{
    let handler=(e)=>{
        props.FilterAC(e.target.value)
    };
    return (
        <div>
            <CustomInput type="text" value={props.value} placeholder="Поиск" onChange={handler}/>
        </div>
    )
}