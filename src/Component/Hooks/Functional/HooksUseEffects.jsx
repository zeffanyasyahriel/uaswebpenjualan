import {Container,Table,Button} from 'reactstrap'
import React, {useState,useEffect,} from 'react'
import axios from 'axios'

const api = 'http://localhost:3003'

function HooksUseEffects() {

    const[barang, setbarang] = useState([])

    useEffect(()=> {
        console.log("Memanggil Use Effect")
        axios.get(api+'/tampil').then(res=>{
                setbarang (res.data.values)
            })
    }, [])
    

    return (
        <Container>
        <h2>Data Barang</h2>
        <hr />
        <Table className="table=bordered">
            <thead>
                <tr>
                    <th>ID Barang</th>
                    <th>Nama Barang</th>
                    <th>Harga Barang</th>
                    <th>Stok</th>
                    <th>Satuan</th>
                    </tr>

            </thead>
            <tbody>
                {barang.map(barang =>
                <tr key={barang.id_barang}>
                    <td>{barang.id_barang}</td>
                    <td>{barang.nama_barang}</td>
                    <td>{barang.harga_barang}</td>
                    <td>{barang.stok}</td>
                    <td>{barang.satuan}</td>
                    <td>
                            <Button>Edit</Button>
                        <span> </span>
                        <Button color="danger">Hapus</Button>
                    </td>
                </tr>
                    )}
            </tbody>
        </Table>
    </Container>
    )
}

export default HooksUseEffects