import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox, Button } from 'antd';
import { addFilter } from '../../store/creators'

const FUEL_TYPES = [
    'Nafta',
    'Diesel'
]

const FuelTypeFilter = ({options}) => {
    const dispatch = useDispatch();
    const [selectedFuelType, setSelectedFuelType] = useState(null); 

    const selectFuelType = (value) => {
        dispatch(
            addFilter({
                filter:'fuelTypeId',
                value: value!==selectedFuelType?value:null
            })
        );
        
        setSelectedFuelType(value!==selectedFuelType?value:null)
    }
    return (
        <div className="filter">
            <span className="filter-title">Combustible</span>
            <div className="selection-filter">
                {options.map(option=>
                    <Button 
                        type={selectedFuelType===option?"primary":"default"} 
                        disabled={selectedFuelType && selectedFuelType!==option}
                        onClick={()=>selectFuelType(option)}>
                        {FUEL_TYPES[option-1]}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default FuelTypeFilter;