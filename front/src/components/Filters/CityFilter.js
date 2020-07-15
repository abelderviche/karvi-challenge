import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'antd';
import { getCars, getCarsByCity } from '../../store/creators'

const { Option } = Select;
const TRANSMISSION_TYPES = [
    'Manual',
    'Automático'
]

const TransmissionTypeFilter = ({cities}) => {
    const dispatch = useDispatch();
    const [selectedCity, setSelectedCity] = useState(null); 

    const onChange = (value) => {
        if(value==''){
            dispatch(getCars())
        }
        dispatch(
            getCarsByCity(value)
        );
        
        setSelectedCity(value)
    }
    return (
        <div className="filter">
            <span className="filter-title">Ciudad</span>
            <div className="selection-filter">
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Selecciona una ciudad"
                    optionFilterProp="children"
                    onChange={onChange}
                    value={selectedCity}
                    
                >
                <   Option value="">Todas</Option>
                {cities.map(city=>
                    <Option value={city.cityCode}>{city.cityName}, ({city.cityCode})</Option>
                )}
            </Select>

            </div>
        </div>
    );
};

export default TransmissionTypeFilter;