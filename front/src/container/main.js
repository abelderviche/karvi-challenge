import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Layout, Spin } from 'antd';
import Header from '../components/Header'
import FiltersPanelContainer from '../components/FiltersPanel'
import SearchCity from '../components/Filters/CityFilter'

import Breadcrumb from '../components/Breadcrumb'
import Results from '../components/Results'
import { getCars, getCities } from "../store/creators";

const { Content, Footer, Sider } = Layout;

const Main = () => {
    const dispatch = useDispatch();
    const {carsReducer, citiesReducer}= useSelector(state => state);
    const { loadedData, totalCount, availableFilters, items, loading, filtersApplyed } = carsReducer
    const { cities } = citiesReducer

    const [cars, setCars] = useState([]);

    useEffect(()=>{
        if(!loadedData){
            dispatch(getCars())
            dispatch(getCities())
        }
    },[])

    useEffect(()=>{
        setCars(items)
    },[items])

    useEffect(()=>{
        // falta agregar card publicidad
        if(filtersApplyed.length>0){
            setCars(items.filter(car=>{
                return filtersApplyed.every(key => {
                    if(Array.isArray(key.value)){
                        return key.value[0]<=car[key.filter] && key.value[1]>=car[key.filter]
                    }
                    if(typeof key.value === 'object' ){
                        return car[key.filter].id === key.value.id
                    }
                    return car[key.filter] === key.value
                });
            }))

        }else{
            setCars(items)
        }

    },[filtersApplyed])
    return (
        <Layout>
            <Header></Header>
            <Content style={{ padding: '24px' }}>
                <Breadcrumb></Breadcrumb>
                <SearchCity cities={cities}/>

                {loading? 
                    <Spin />
                :
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider Sider
                        breakpoint="md"
                        collapsedWidth="0" 
                        trigger={null}
                        className="filters-container"  
                        >
                            <FiltersPanelContainer availableFilters={availableFilters}></FiltersPanelContainer>
                    </Sider>
                    <Results items={cars}></Results>
                </Layout>
                }
            </Content>
        </Layout>
    )
}

export default Main
