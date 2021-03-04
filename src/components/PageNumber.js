export let PageNumber=(props)=> {
    let handler=()=>{
        props.ChangePage(props.num)
    }
    return(
    <p onClick={handler}>{props.num}</p>)
}