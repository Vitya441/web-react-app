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




    );
}

export default DefaultNavigation;