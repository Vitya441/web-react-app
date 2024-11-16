import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import AddReviewForm from './AddReviewForm';
import ReactStars from "react-rating-stars-component";

///// Объеденил add и print /////
function ReviewsList() {

    const {id} = useParams();
    console.log("ID услуги: ", id);

    const reviews = useSelector(state => state.reviews.reviews.filter(review => review.serviceId === id));


    
    return (

        <div className="">
            <div className="card">
                <div className="card-body">
                    
                    <AddReviewForm />

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




        // <div>

        //     <AddReviewForm />
        
        //     <h2>Отзывы:</h2>
        //     <ul>
        //         {reviews.map(review => (
        //             <li key={review.id}>
        //                  <b>Сообщение:</b> {review.text} <br />
        //                  <b>Время отправления:</b> {review.time} <br/>
        //                  <b>Отправитель:</b> {review.sender.username} <br/>
        //                  <b>Оценка:</b> 
        //                  {review.rating} <br/>
        //                     <div>  
        //                         <ReactStars
        //                             count={review.rating}
        //                             size={24}
        //                             activeColor="#ffd700"
        //                         />   
        //                         ----------------------------------------------------------------------
        //                     </div>                   

        //             </li>
        //         ))}


        //     </ul>
            
        // </div>

    );
}

export default ReviewsList;