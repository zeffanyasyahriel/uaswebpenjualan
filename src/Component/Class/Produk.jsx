import React, {Component } from 'react'
import "./CSS/Produk.css";

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stok: this.props.stok,
            sub: "Beli",
            status: "Tersedia",
            disabled : false
        }
    }

    ButtonBeli = () => {
        this.setState({
            stok: this.state.stok -1
        })

        if(this.state.stok ==1){
            this.setState({
                status : "Habis",
                disabled : true
            })
        }
    }
    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama_barang}</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-o7OpRa0i6IWH1jgZoYlaIE7d22hJDqRn4g&usqp=CAU" alt=""/>
                <p><b>Rp. {this.props.harga_barang}</b></p>
                <p>{this.state.stok}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>

            </div>
        )
    }
}

export default Produk;