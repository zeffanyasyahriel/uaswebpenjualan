import React, { PureComponent } from 'react'
import {Button} from 'reactstrap'



class KelasComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
          jumlah: 0  
        }
    }

    tambahProduk = () => {
        this.setState({
            jumlah: this.state.jumlah + 1
        })
    }


    render() {
        return (
         <div>
             <h1>{this.state.jumlah}</h1>
             <Button onClick={this.tambahProduk} color="success" >Tambah Produk hp</Button>
         </div>  
        )
    }
}

export default KelasComp; 