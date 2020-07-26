import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row,Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3003'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_barang: '',
            nama_barang:'',
            harga_barang: '',
            stok: '',
            satuan: '',
            response: '',
            display:'none'
        }
    }

handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
}

Addbarang = () => {
    axios.post(api+ '/tambah', {
        id_barang: this.state.id_barang,
        nama_barang: this.state.nama_barang,
        harga_barang: this.state.harga_barang,
        stok: this.state.stok,
        satuan: this.state.satuan
    }).then(json => {
        if(json.data.status === 200){
            this.setState({
                response :json.data.values,
                display: 'block'
            })
        }else {
            this.setState({
                response: json.data.values,
                display: 'block'
            })    
        }
    })
}


    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Id Barang</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="id_barang" values={this.state.id_barang} onChange={this.handleChange} placeholder="Masukan id_barang" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Nama Barang</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama_barang" values={this.state.nama_barang} onChange={this.handleChange} placeholder="Masukan nama_barang" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Harga Barang</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga_barang" values={this.state.harga_barang} onChange={this.handleChange} placeholder="Masukan harga_barang" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>stok</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="stok" values={this.state.stok} onChange={this.handleChange} placeholder="Masukan stok" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>satuan</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="satuan" values={this.state.satuan} onChange={this.handleChange} placeholder="Masukan satuan" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={this.Addbarang} >Submit</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
               </Form>
            </Container>
         
        )
    }
}

export default TambahComp; 