import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function UserAuthNavigation() {

    return (
        <nav>
        <h3>
            <Link to="/appointments">Список услуг</Link>
        </h3>
        <h3>
            <Link to="/subscribes">Мои записи</Link>
        </h3>
    </nav>
    )
}

export default UserAuthNavigation;