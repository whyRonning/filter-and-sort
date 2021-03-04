import React from "react";
import {FindStroke} from "./components/FindStroke";

export let App = (props) => {
    return (
        <div>
            <FindStroke FilterAC={props.FilterAC}/>
            <props.WrapperRow>{props.RowNames}</props.WrapperRow>
            {props.Items}
            <props.WrapperPage><p>Страницы:</p>{props.PageItems}</props.WrapperPage>
        </div>

    )
};


