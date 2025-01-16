import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddServiceForm from './AddServiceForm';
import ReviewsList from './ReviewsList';
import axios from 'axios';
import { setClinics } from '../store/clinicClise';

function ClinicList() {
    const [selectedClinicId, setSelectedClinicId] = useState(null); // ID выбранной поликлиники для добавления услуги
    const institutions = useSelector((state) => state.clinics.clinics);
    const user = useSelector(state => state.auth.user);
    const userRole = user.role;
    const dispatch = useDispatch();
    
    // Загружаем данные при первом рендере
    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const response = await axios.get('http://localhost:8080/clinics');
                dispatch(setClinics(response.data)); // Сохраняем данные в Redux
            } catch (error) {
                console.error('Ошибка загрузки поликлиник:', error.message);
            }
        };

        fetchClinics();
    }, [dispatch]);


    return (
        <div className="container">
            <h1>Список поликлиник</h1>
            <ul className="list-group">
                {institutions.map((institution) => (
                    <li key={institution.id} className="list-group-item mb-3 p-3 shadow-sm rounded">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{institution.name}</h4>
                                <p className="card-text">Адрес: {institution.address}</p>
                                <div className="d-flex gap-2">
                                    {/* Кнопка для просмотра отзывов */}

                                    {console.log("id поликлинники = ", institution.id)}
                                    <Link to={`/institutions/${institution.id}/reviews`} className="btn btn-primary">
                                        Отзывы
                                    </Link>
                                    

                                    {/* Кнопка для добавления услуги */}
                                    
                                    {userRole === 'Admin' && ( // Проверка роли пользователя
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => setSelectedClinicId(
                                                selectedClinicId === institution.id ? null : institution.id
                                            )}
                                        >
                                            {selectedClinicId === institution.id ? 'Закрыть' : 'Добавить услугу'}
                                        </button>
                                    )}


                                </div>
                            </div>
                        </div>
                        {/* Форма добавления услуги */}
                        {selectedClinicId === institution.id && (
                            <div className="mt-3">
                                <AddServiceForm clinicId={institution.id} onClose={() => setSelectedClinicId(null)} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClinicList;
