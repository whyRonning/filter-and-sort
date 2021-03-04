import React from "react";

export let Item =(props) => (
    <div>
        <p>{props.item}</p>
        <p>{props.price} rub</p>
        <p>{props.count}</p>
    </div>
)