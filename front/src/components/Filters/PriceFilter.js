import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Slider } from 'antd';
import { addFilter } from '../../store/creators'
import { numberFormat } from '../../Utils/Utils'
import './filters.scss'

const PriceFilter = ({options}) => {
    const dispatch = useDispatch();
    const [selectedPrice, setSelectedPrice] = useState([]); 
    const defaultOption = Object.values(options)
    
    useEffect(()=>{
        setSelectedPrice(defaultOption)
    },[])

    const selectRange = (value) => {
        setSelectedPrice(value)
    }
    const dispatchRange = (value) => {
        dispatch(
            addFilter({
                filter:'minPrice',
                value: value
            })
        );
    }
    return (
        <div className="filter">
            <span className="filter-title">Precios</span>
            <div className="filter-price-range">
                <span className="item-range">
                    Desde
                    <span>${numberFormat(selectedPrice[0])}</span>
                </span>
                <span className="item-range">
                    Hasta
                    <span>${numberFormat(selectedPrice[1]+1000)}</span>
                </span>
            </div>
            <div className="selection-filter">
                <Slider 
                    style={{width:'100%'}} 
                    onChange={selectRange} 
                    onAfterChange={dispatchRange}
                    range 
                    step={1000}
                    min={defaultOption[0]} 
                    max={defaultOption[1]+1000} 
                    value={selectedPrice}
                />
            </div>
        </div>
    );
};

export default PriceFilter;