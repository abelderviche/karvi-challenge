import React, { Component } from 'react'
import { Layout ,Col, Row} from 'antd';
import {TransmissionTypeFilter, BrandFilter, FuelTypesFilter, SegmentFilter, PriceFilter} from '../Filters'
import './filters-panel.scss'

const { Sider } = Layout;

const FiltersPanelContainer = ({availableFilters}) => {
    const filtersToShow = Object.keys(availableFilters)
    return (
        
        <>
            {filtersToShow.includes('priceLimits')? 
                <PriceFilter options={availableFilters.priceLimits} />
            :null}
            {filtersToShow.includes('brands')? 
                <BrandFilter options={availableFilters.brands}/>
            :null}
            {filtersToShow.includes('segments')? 
                <SegmentFilter  options={availableFilters.segments}/>
            :null}
            {filtersToShow.includes('fuelTypes')? 
                <FuelTypesFilter  options={availableFilters.fuelTypes}/>
            :null}
            {filtersToShow.includes('transmissionTypes')? 
                <TransmissionTypeFilter options={availableFilters.transmissionTypes}/>
            :null}
        </>
    )
}


export default FiltersPanelContainer

