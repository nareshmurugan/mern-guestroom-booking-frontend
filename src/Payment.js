import React from 'react'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'

function Payment() {
    const {_id}=useParams();
  return (
    <div>
        <h1>{_id}kjhk</h1><br/>
        <h1>{_id}kjhk</h1><br/>
        <h1>{_id}kjhk</h1><br/>
        <h1>{_id}kjhk</h1><br/>
    </div>
  )
}

export default Payment