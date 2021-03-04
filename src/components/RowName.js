import React from "react";

export let RowName = (props) => {
    let handler = () => {
        props.ChangeSort(props.name, props.method, props.setMethod)
    }
    return (
        <p onClick={handler}>{props.name}</p>
    )
}