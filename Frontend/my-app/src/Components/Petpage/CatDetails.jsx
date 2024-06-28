import React, { useEffect, useState } from 'react'
import Navigationbar from '../Navigationbar'
import axios from 'axios'
import CatCard from './CatCard'
import {Container, Row} from 'react-bootstrap'
const CatDetails = () => {

    const [catData, setCatData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/dog-details')
            .then((data) => setCatData(data))
            .catch((err) =>console.error());         
    }, [])
  return (
    <div>
         <Navigationbar/>
        <Container>
            <Row>
               
                {/* {catData.map((data) => {
                        return (
                        <CatCard
                          key={data.id}
                          cats = {data}
                        />
                    )
                })} */}
               
               
            </Row>
        </Container>
    </div>
  )
}

export default CatDetails