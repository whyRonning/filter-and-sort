import {connect} from "react-redux";
import {FilterAC, PageNumberAC, RowsAC} from "./store/filter";
import {App} from "./App";
import React,{useState} from "react";
import {Item} from "./components/Item";
import {itemsSelector} from "./selector";
import {PageNumber} from "./components/PageNumber";
import {RowName} from "./components/RowName";
import styled from "styled-components"
let MSTP = (state) => ({
    filter: state.filter,
    data: itemsSelector({...state}),
    allItems: state.data,
    pageNumber: state.pageNumber,
    rows: state.rows,
    sorting:state.sorting

});
let WrapperRow=styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    
`;
let Row=styled.p`
    display:inline;
    cursor:pointer;
    width:fit-content;
     align-self:center
`;
let itemStyle=styled(Row)`
    cursor:default
`;
let WrapperPage=styled(WrapperRow)`
    width:20vw;
    margin-left:30vw;
    grid-gap:1.5vw;
    grid-auto-flow:column;
`;
let AppHOC =React.memo((props) => {
    let [method,setMethod]=useState(3)
    let ChangePage = (e) => {
        props.PageNumberAC(e)
    };
    let ChangeSort = (name, method,setMethod) => {
        if (method===3||props.sorting.name!==name){
            setMethod(1);
            method=1
        }else {
            setMethod(method+1);
            method++
        }
        (method === 1)?props.RowsAC(name, "Возрастание"):method === 2?props.RowsAC(name, "Убывание"):props.RowsAC("", "");
    };
    let partOfItems = props.data.filter((e, i) => {
        return (props.pageNumber - 1) * 50 <= i && i < props.pageNumber * 50
    });
    let Items = partOfItems.map((e, i) => {
        return <Item WrapperRow={WrapperRow} itemStyle={itemStyle} key={i} count={e.count} price={e.price} item={e.item}/>
    });
    let Pages = (Item, arr = [], count = 1) => {
        arr.push(count);
        if (Math.floor(Item.length / (50 * count)) === 0) {
            return arr
        }
        count++;
        return Pages(Item, arr, count)
    };
    let PageItems = Pages(props.data).map((e, i) => {
        return <PageNumber Row={Row} key={i} ChangePage={ChangePage} num={e}/>
    });
    let RowNames = props.rows.map((e, i) => {
        return <RowName Row={Row} sorting={props.sorting} name={e} method={method} setMethod={setMethod} ChangeSort={ChangeSort} key={i}/>
    });
    return (
        <App WrapperPage={WrapperPage} WrapperRow={WrapperRow} FilterAC={props.FilterAC} RowNames={RowNames} filter={props.filter} Items={Items} PageItems={PageItems}/>
    )
});
export let AppContainer = connect(MSTP, {FilterAC, PageNumberAC, RowsAC})(AppHOC);