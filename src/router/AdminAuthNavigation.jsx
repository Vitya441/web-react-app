import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// авторизованного админа
function AdminAuthNavigation() {
    
    return (
        <nav>
            <h3>
                <Link to={"/addService"} >Добавить талон</Link>
                
            </h3>

            <h3>
                <Link to={"/appointments"} >Список услуг</Link>
            </h3>

        </nav>
        );   
}

export default AdminAuthNavigation;