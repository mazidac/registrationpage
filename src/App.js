import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Thankyou from './Thankyou';
import Registration from './Registration';
const HookTwo = () =>{
   const [inputValues, setInputValues] = useState(null);
  
    return(<>
    
    <Router>
        <Switch>
          <Route exact path="/">
            <Registration setInputValues={setInputValues} />
          </Route>
          <Route path="/thank-you" >
            <Thankyou inputValues={inputValues}/>
          </Route>
        </Switch>
    
    </Router>
    </>
    //     <div className="container mt-3">
    //     <h2 className="text-center"> User Registration</h2>
    //     <div className="border p-4">
    //     <div className="row ml-4">
    //         <div class="col-lg-3">
    //             <th>First Name *</th>
    //             <input type="text" className="form-control"/>
    //         </div>
    //         <div class="col-lg-3">
    //             <th>Last Name</th>
    //             <input type="text" className="form-control"/>
    //         </div>
    //     </div>
    //     <br></br>
    //     <div className="row ml-4">
           
    //         <div className="col-lg-3">
    //         <th> Gender * </th>
    //         <div>
    //             <input type="radio" value="Male" name="gender" /> Male
    //             </div>
    //             <div>
    //             <input type="radio" value="Female" name="gender" /> Female
    //             </div>
    //             </div>
    //             <div className="col-lg-3">
    //                 <th> Date of Birth *</th>
    //                 <input type="date" className="form-control"/>

    //             </div>
    //     </div>
    //     <br/>
    //     <div className="row ml-4">
    //         <div class="col-lg-3">
    //             <th>Email *</th>
    //             <input type="text" className="form-control"/>
    //         </div>
    //         <div class="col-lg-3">
    //             <th>Mobile Number *</th>
    //             <input type="text" className="form-control"/>
    //         </div>
    //     </div>
    //     <br/>
    //     <div className="row ml-4">
    //         <div class="col-lg-3">
    //             <th>State *</th>
    //             <input type="text" className="form-control"/>
    //         </div>
    //         <div class="col-lg-3">
    //             <th>District *</th>
    //             <input type="text" className="form-control"/>
    //         </div>
    //     </div>
    //     <br/>
    //     <div className="row ml-4">
    //         <div class="col-lg-6">
    //             <th>Address</th>
    //             <textarea type="text" className="form-control" />
    //         </div>
    //     </div>
    //     <br/>
    //     <div className="text-center">
    //         <button className="btn btn-primary">Register</button>
    //     </div>
    //     </div>
    // </div>
    )
}
export default HookTwo;