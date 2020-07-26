import React from 'react';

import RowProduct from './RowProduct'
import { Container, Row } from 'reactstrap';

function ProductComp() {

    return (
<div>
    <Container>
        <hr/>
        <h2>Produk</h2>
        <Row>
            <RowProduct/>
            <RowProduct/>
            <RowProduct/>
        </Row>
    </Container>
</div>
    )
}
export default ProductComp;