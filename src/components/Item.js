import React from "react";

export let Item =(props) => (
    <props.WrapperRow>
        <props.itemStyle>{props.item}</props.itemStyle>
        <props.itemStyle>{props.price} rub</props.itemStyle>
        <props.itemStyle>{props.count}</props.itemStyle>
    </props.WrapperRow>
)