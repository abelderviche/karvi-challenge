import React from "react"
import { Card, Button } from 'antd';
import './card.scss'
import { numberFormat } from "../../Utils/Utils";

const CardComponent = ({carData}) => {
    return (
        <Card
            className="kardvi"
            hoverable
            size="small"
            
            cover={<img alt="example" src={require("../../assets/Imagen295.jpg")} />}
        >
            <div className="name">{carData.name}</div>
            <div className="type">{carData.segment.name}</div>
            <div className="detail">{carData.brand.name}</div>
            <div className="price">
                <span>$ {numberFormat(carData.minPrice)}</span>
            </div>
        </Card>
    )
}

export default CardComponent