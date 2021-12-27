import React from 'react';
import './landingpage.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Postview from './Postview';

export default function LandingPage()
{


    return(
        <BrowserRouter>
        <div className="container">
        <img className="imgl" src="../images/tiger.jpg" alt="sampleimage"/>
        <h1 className="head">10x Team 04</h1>
        <br/>
        <a href="/Postview"><button className='buttoncl'>Enter</button></a>
        <Route exact path="/Postview" component={Postview}></Route>
        </div>
        </BrowserRouter>
       
      
    )


}
