import React from "react";
import {FindStroke} from "./components/FindStroke";

export let App = (props) => {
    return (
        <div>
            <FindStroke FilterAC={props.FilterAC}/>
            {props.RowNames}
            {props.Items}
            {props.PageItems}
        </div>

    )
};


