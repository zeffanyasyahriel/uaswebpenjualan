import React from 'react'

function TampilComp(props) {
    return (
        <div>
        <p>hallo, {props.username}</p>
        <h1>{props.jumlah}</h1>
        <button onClick={()=>props.fungsi(props.jumlah+1)} disable={props.disable}>Tambah</button>
        </div>
    )
}
export default TampilComp