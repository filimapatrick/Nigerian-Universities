import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import UniversityListing from '../pages/UniversityListing';
import UniversityDetail from '../pages/UniversityDetail';

function RoutesSection() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path ='/' element ={<UniversityListing/>}/>
            <Route path ='/university/:universityId' element ={<UniversityDetail/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutesSection