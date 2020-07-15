import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox, Button } from 'antd';
import { addFilter } from '../../store/creators'
import './filters.scss'

const SEGMENTS = [{
        "id": 1,
        "name": "Hatchback"
    },
    {
        "id": 21,
        "name": "SUV & Crossover"
    },
    {
        "id": 16,
        "name": "Esportivo"
    },
    {
        "id": 17,
        "name": "Sedan"
    }
]

const SegmentFilter = ({options}) => {
    const dispatch = useDispatch();
    const [selectedSegment, setSelectedSegment] = useState({
        id:null,
        name:''
    }); 

    const selectSegment = (value) => {
        dispatch(
            addFilter({
                filter:'segment',
                value: value.id!==selectedSegment.id?value:null
            })
        );
        
        setSelectedSegment(value.id!==selectedSegment.id?value:{})
    }
    return (
        <div className="filter">
            <span className="filter-title">Segmentos</span>
            <div className="selection-filter">
                {options.map(option=>{
                    const segmentOption = SEGMENTS.find(s=>s.id===option)
                    const optionLabel = segmentOption?segmentOption.name:'no desc'
                    return (
                        <Button 
                            type={selectedSegment.id===option?"primary":"default"} 
                            disabled={selectedSegment.id && selectedSegment.id!==option}
                            onClick={()=>selectSegment(segmentOption)}>
                            {optionLabel}
                        </Button>
                    )
                })}
            </div>
        </div>
    );
};

export default SegmentFilter;