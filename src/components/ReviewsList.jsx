import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import AddReviewForm from './AddReviewForm';
import ReactStars from "react-rating-stars-component";

function ReviewsList() {

    // const clinicIdObj = useParams();
    // const clinicId = clinicIdObj.id; // use params возвращает объект, нам нужно поле этого объекта - ID


    const { id: clinicId } = useParams(); // Деструктуризация и сразу извлекаем clinicId


    console.log("Clinic ID: ", clinicId);


    const reviews = useSelector(state => state.reviews.reviews.filter(review => review.clinicId === clinicId));
    
    console.log("Список отзывов текущей поликлинники: ", reviews);

    
    return (
        <div className="">
            <div className="card">
                <div className="card-body">
                    <AddReviewForm clinicId={clinicId} /> {/* Передаем ID поликлиники */}
                    <h2 className="mt-4">Отзывы:</h2>
                    <ul className="list-group list-group-flush">
                        {reviews.map(review => (
                            <li key={review.id} className="list-group-item">
                                <p><b>Сообщение:</b> {review.text}</p>
                                <p><b>Время отправления:</b> {review.time}</p>
                                <p><b>Отправитель:</b> {review.sender.username}</p>
                                <p><b>Оценка:</b> {review.rating}</p>
                                <div className="d-flex align-items-center">
                                    <ReactStars
                                        count={5}
                                        value={review.rating}
                                        size={30}
                                        activeColor="#ffd700"
                                        edit={false}
                                    />
                                </div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );



}

export default ReviewsList;