import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const DefaultNavigation = () => {
    return (

    <nav>
        <h3>
            <Link to={"/login"}>Войти</Link>
        </h3>
        <h3>
            <Link to={"/registration"}>Зарегистрироваться</Link>
        </h3> 

        <h3>
            <Link to={"/home"}>Мой аккаунт</Link>
        </h3>
    </nav>



        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container">
        //         <div className="navbar-nav mx-auto">
        //             <h3 className="nav-item">
        //                 <Link to="/login" className="nav-link">Войти</Link>
        //             </h3>
        //             <h3 className="nav-item">
        //                 <Link to="/registration" className="nav-link">Зарегистрироваться</Link>
        //             </h3>
        //             <h3 className="nav-item">
        //                 <Link to="/home" className="nav-link">Мой аккаунт</Link>
        //             </h3>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default DefaultNavigation;