import React, {Component } from 'react'

class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    minBeli = 2;
    render() {
        return (<div>
            <h3>Child Component</h3>
            <p>Stok Produk: {this.props.stok}</p>
            <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
            </div>

        )
    }
}

export default Child1;