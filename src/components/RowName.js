import React from "react";

export let RowName = (props) => {
    let handler = () => {
        props.ChangeSort(props.name, props.method, props.setMethod)
    }
    return (
        <props.Row onClick={handler}>{props.name}{props.sorting.name===props.name?props.sorting.method==="Возрастание"?"↑":"↓":""}</props.Row>
    )
}