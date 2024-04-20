import {SET_COLUMNS } from './action';

const initialColumns =[
  {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Jeff',
    instrument: 'Guitar',
    students:'26',
    day:'Wednesday',
    price:'$80',
    status:'Active'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    students:'26',
    day:'Friday',
    price:'$50',
    status:'Closed'
  },
   {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    students:'26',
    day:'Friday',
    price:'$50',
    status:'Closed'
  },
   {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Jeff',
    instrument: 'Guitar',
    day:'Wednesday',
    students:'26',
    price:'$80',
    status:'Active'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    students:'26',
    day:'Friday',
    price:'$50',
    status:'Closed'
  },
   {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    students:'26',
    day:'Friday',
    price:'$50',
    status:'Closed'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Jeff',
    instrument: 'Guitar',
    day:'Wednesday',
    students:'26',
    price:'$80',
    status:'Active'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    students:'26',
    instrument: 'Guitar',
    day:'Friday',
    price:'$50',
    status:'Closed'
  },
   {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    students:'26',
    price:'$50',
    status:'Closed'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Jeff',
    instrument: 'Guitar',
    day:'Wednesday',
    price:'$80',
    students:'26',
    status:'Active'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    price:'$50',
    students:'26',
    status:'Closed'
  },
   {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    price:'$50',
    students:'26',
    status:'Closed'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Jeff',
    instrument: 'Guitar',
    day:'Wednesday',
    price:'$80',
    status:'Active',
    students:'26',
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    price:'$50',
    students:'26',
    status:'Closed'
  },
   {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    students:'26',
    price:'$50',
    status:'Closed'
  },
  {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    students:'26',
    price:'$50',
    status:'Closed'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Jeff',
    instrument: 'Guitar',
    day:'Wednesday',
    price:'$80',
    students:'26',
    status:'Active'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    price:'$50',
    students:'26',
    status:'Closed'
  },
   {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    price:'$50',
    students:'26',
    status:'Closed'
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Jeff',
    instrument: 'Guitar',
    day:'Wednesday',
    price:'$80',
    status:'Active',
    students:'26',
  },
    {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    price:'$50',
    students:'26',
    status:'Closed'
  },
   {
    name: 'Classical Guitar',
    description: 'Guitar class for students',
    instructor: 'Maxen',
    instrument: 'Guitar',
    day:'Friday',
    students:'26',
    price:'$50',
    status:'Closed'
  },
];

const initialState = {
  columns: initialColumns,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLUMNS:
      return {
        ...state,
        columns: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;