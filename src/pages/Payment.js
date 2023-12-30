import React from 'react'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'
import DateComp from '../components/DateComp.js';

function Payment() {
    const {_id}=useParams();
  return (
    <div>
      <DateComp/>
        <h1>{_id}kjhk</h1><br/>
        <h1>{_id}kjhk</h1><br/>
        <h1>{_id}kjhk</h1><br/>
        <h1>{_id}kjhk</h1><br/>
    </div>
  )
}

export default Payment