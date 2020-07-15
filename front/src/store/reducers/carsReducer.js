import {
  GET_CARS_START,
  GET_CARS_SUCCESS,
  GET_CARS_ERROR,
  ADD_FILTER
} from "../types";

const initialState = {
  availableFilters: {},
  items: [],
  totalCount: 0,
  pageSize: 0,
  totalPages: 0,
  loading: false,
  message:'',
  loadedData: false,
  filtersApplyed:[]
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_START: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_CARS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loadedData:true,
        availableFilters: action.payload.results.availableFilters,
        items: action.payload.results.items,
        totalCount: action.payload.results.totalCount,
        pageSize: action.payload.results.pageSize,
        totalPages: action.payload.results.totalPages
      };
    }
    case GET_CARS_ERROR: {
      return {
        ...state,
        loading: false,
        loadedData:false,
        message: action.payload.message
      };
    }
    case ADD_FILTER: {
      let filtersApplyed = {};
      if(action.payload.filter.value){
        if(Array.isArray(action.payload.filter.value)){
          const aux =  state.filtersApplyed.filter(x=>x.filter!==action.payload.filter.filter)
          filtersApplyed = aux.concat(action.payload.filter)
        }else{
          filtersApplyed =  state.filtersApplyed.concat(action.payload.filter)
        }
      }else{
        filtersApplyed = state.filtersApplyed.filter(x=>x.filter!==action.payload.filter.filter)
      }
      return {
          ...state,
          loading: false,
          loadedData:false,
          filtersApplyed:filtersApplyed
        };
    }
    
    default:
      return state;
  }
};

export default carsReducer;
