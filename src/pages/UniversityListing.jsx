import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import CardComponent from '../components/CardComponent';
import axios from 'axios';

function UniversityListing() {
  // const universities = useSelector((state) => state.universities);
  const universities = useSelector((state) => state.allUniversities.universites);
  console.log(universities);
  useEffect(() => {
    axios.get('http://fakestoreapi.com/products')
    .then(res => {
      console.log(res.data);
    })
  },[])

  
 
  return (
    <div>
      <div className="container">

      <CardComponent/>
     
        </div>
     
    </div>
  )
}

export default UniversityListing