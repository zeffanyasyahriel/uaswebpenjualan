import React, {PureComponent} from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Table, Button, Container, NavLink, Alert} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3003'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            barang: [],
            response: '',
            display: 'none'

        }
    }
    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
            this.setState({
                barang: res.data.values
            })
        })
    }


    Deletebarang = (idbarang) => {
        const {barang} = this.state
        const data = qs.stringify ({
            id_barang:idbarang

        })
        axios.delete(api+'/hapus',
        {
            data: data,
            headers: {'Content-type':'application/x-www-form-urlencoded'}
        }
    ).then(json=>{
    if(json.data.status ===200){
         this.setState({
        response: json.data.values,
        barang: barang.filter(barang => barang.id_barang !== idbarang),
        display: 'block'
    })
    this.props.history.push('/barang')

}else{
    (this.setState)({
        response: json.data.values,
        barang: barang.filter(barang => barang.id_barang !== idbarang),
        display: 'block'
    })
    }
    })
        
    }

render() {
    return (
        <Container>
            <h2>Data HP</h2>
            <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
            <NavLink href="/barang/tambah"><Button color="success">Tambah Data HP</Button></NavLink>
            <hr/>
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
                    {this.state.barang.map(barang =>
                    <tr key={barang.id_barang}>
                        <td>{barang.id_barang}</td>
                        <td>{barang.nama_barang}</td>
                        <td>{barang.harga_barang}</td>
                        <td>{barang.stok}</td>
                        <td>{barang.satuan}</td>
                        <td>
                            <Link to=
                                {
                                    {
                                    pathname: '/barang/edit',
                                    state: {
                                        id_barang : barang.id_barang,
                                        nama_barang: barang.nama_barang,
                                        harga_barang: barang.harga_barang,
                                        stok: barang.stok,
                                        satuan: barang.satuan

                                    }
                                }
                            }>
                                <Button>Edit</Button>
                              
                               
                            </Link>
                            <span> </span>
                            <Button onClick={()=>this.Deletebarang(barang.id_barang)} color="danger">Hapus</Button>
                        </td>
                    </tr>
                        )}
                </tbody>
            </Table>
        </Container>
    )

}
}

export default ListComp; 