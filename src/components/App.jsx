import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import ServicesList from './ServicesList';
import ShowService from './ShowService';
import AddServiceForm from './AddServiceForm';
import Registration from './Registration';
import Login from './Login';
import Home from './Home';
import PrivateRoute from '../router/PrivateRoute';
import PrivateLinks from '../router/PrivateLinks';
import InstitutionReviews from './ReviewsList';
import ReviewsList from './ReviewsList';
import AddReviewForm from './AddReviewForm';
import Subscribes from './Subscribes';
import '../index.css';
/* Flux, Redux */

function App() {
    return (

        <div className='app-container'>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">#15 Встреча с доктором</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                        </ul>
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration">Registration</Link>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<h1>#15 Встреча с доктором</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/appointments" element={<ServicesList />} />
                        <Route path="/addService" element={<AddServiceForm />} />
                        <Route path="/appointments/:id" element={<ShowService />} />
                        <Route path="/appointments/:id/reviews" element={<ReviewsList />} />
                        <Route path="/subscribes" element={<Subscribes />} />
                    </Route>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                </Routes>
                <PrivateLinks />
            </div>
        </Router>
    </div>


    //    <div className='app-container'> 
    //     <Router>

    //         <Routes>

    //             {/* private */}
    //             <Route>/ 
    //                 <Route element={<PrivateRoute />}>
    //                     <Route path='/home' element={<Home />} />
    //                     <Route path='/appointments' element={<ServicesList />} />
    //                     <Route path='/addService' element={<AddServiceForm />} />
    //                     <Route path="/appointments/:id" element={<ShowService />} />
    //                     <Route path='/appointments/:id/reviews' element={ <ReviewsList />} />
    //                     <Route path='/subscribes' element={<Subscribes />} />
                        
    //                     {/* <Route path='/appointments/:id/reviews' element={ <AddReviewForm />} /> */}

    //                 </Route>
    //             </Route>
    //             {/*  */}

    //             <Route path='/' element={<h1>#15 Встреча с доктором</h1>} />
    //             <Route path="/login" element={<Login />} />
    //             <Route path="/registration" element={<Registration />} />

    //             <Route path='*' element={<h1>404 NOT FOUND</h1>} />


    //         </Routes>
    //         {/* ----ССылки для перехода----- */}
    //                 <PrivateLinks />
    //         {/* ----ССылки для перехода----- */}

            

    //     </Router>

    //     </div>

        


    );


    



}

export default App;