import React from 'react'
import Card from '../Card'
import { Layout, Col, Row } from 'antd';


const Results = ({items}) => {

    return (
        <Layout>
            <Row  >
                {items.map(item=>
                    <Col xs={24} sm={12} xl={8}>
                        <Card carData={item}></Card>
                    </Col>
                )}
            </Row>
        </Layout>
    )
}
export default Results
