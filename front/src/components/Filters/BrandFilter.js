import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button } from 'antd';
import { addFilter } from '../../store/creators'

import './filters.scss'

const BRANDS = [
    {"id":7,"name":"Citroen","image":"logo-citroen.svg","slug":"citroen"},
    {"id":8,"name":"Fiat","image":"logo-fiat.svg","slug":"fiat"},
    {"id":9,"name":"Ford","image":"logo-ford.svg","slug":"ford"},
    {"id":12,"name":"Jeep","image":"logo-jeep.svg","slug":"jeep"},
    {"id":15,"name":"Nissan","image":"logo-nissan.svg","slug":"nissan"},
    {"id":16,"name":"Peugeot","image":"logo-peugeot.svg","slug":"peugeot"},
    {"id":28,"name":"Renault","image":"logo-renault.svg","slug":"renault"},
    {"id":18,"name":"Toyota","image":"logo-toyota.svg","slug":"toyota"},
    {"id":19,"name":"Volkswagen","image":"logo-volkswagen.svg","slug":"volkswagen"},
    {"id":29,"name":"Chevrolet","image":"logo-chevrolet.svg","slug":"chevrolet"}
]

const BrandFilter = ({options}) => {
    const dispatch = useDispatch();
    const [selectedBrand, setSelectedBrand] = useState({
        id:null,
        name:'',
        image:'',
        slug:''
    }); 

    const selectBrand = (value) => {
        dispatch(
            addFilter({
                filter:'brand',
                value: value.id!==selectedBrand.id?value:null
            })
        );
        
        setSelectedBrand(value.id!==selectedBrand.id?value:{})
    }
    return (
        <div className="filter">
            <span className="filter-title">Marcas</span>
            <div className="selection-filter">
                {options.map(option=>{
                    const brandOption = BRANDS.find(s=>s.id===option)
                    const optionLabel = brandOption?brandOption.name:'no desc'
                    return (
                        <Button 
                            type={selectedBrand.id===option?"primary":"default"} 
                            disabled={selectedBrand.id && selectedBrand.id!==option}
                            onClick={()=>selectBrand(brandOption)}>
                            {optionLabel}
                        </Button>
                    )
                })}
            </div>
        </div>
    );
};

export default BrandFilter;