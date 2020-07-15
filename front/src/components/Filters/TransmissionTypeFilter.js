import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox, Button } from 'antd';
import { addFilter } from '../../store/creators'

const TRANSMISSION_TYPES = [
    'Manual',
    'Automático'
]

const TransmissionTypeFilter = ({options}) => {
    const dispatch = useDispatch();
    const [selectedTransmissionType, setSelectedTransmissionType] = useState(null); 

    const selectTransmissionType = (value) => {
        dispatch(
            addFilter({
                filter:'transmisionTypeId',
                value: value!==selectedTransmissionType?value:null
            })
        );
        
        setSelectedTransmissionType(value!==selectedTransmissionType?value:null)
    }
    return (
        <div className="filter">
            <span className="filter-title">Transmisión</span>
            <div className="selection-filter">
                {options.map(option=>
                    <Button 
                        type={selectedTransmissionType===option?"primary":"default"} 
                        disabled={selectedTransmissionType && selectedTransmissionType!==option}
                        onClick={()=>selectTransmissionType(option)}>
                        {TRANSMISSION_TYPES[option-1]}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default TransmissionTypeFilter;