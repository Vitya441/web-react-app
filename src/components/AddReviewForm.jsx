import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../store/reviewsSlice";
import { useParams } from "react-router-dom";
import ReviewsList from "./ReviewsList";
import { nanoid } from "@reduxjs/toolkit";
import ReactStars from "react-rating-stars-component";

function AddReviewForm() {
    // Отправитель комментария

    const [rating, setRating] = useState(0);
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const user = useSelector(state => state.auth.user);


    const dispatch = useDispatch();
    const [reviewText, setReviewText] = useState('');

    const {id} = useParams();
    console.log("ID услуги: ", id);



    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewID = nanoid();
        const dateTime = new Date().toLocaleString();
        console.log(dateTime);
        if (reviewText.trim() != '') {
            //
            // ЗАМЕНИТЬ НА ЗАПРОС К БД
            //
            dispatch(addReview({ id: reviewID, serviceId: id, text: reviewText, time: dateTime, sender: user, rating: rating}));
            setReviewText('');
            setRating(0);
        }

    }

    return (

        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
                <label htmlFor="reviewText"><b>Оставьте свой отзыв:</b></label>
                <textarea
                    id="reviewText"
                    className="form-control"
                    rows="4"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Введите ваш комментарий"
                />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="rating"><b>Оценка:</b></label>
                <div>
                    <ReactStars
                        count={5}
                        value={rating}
                        size={40}
                        activeColor="#ffd700"
                        onChange={newRating => setRating(newRating)}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Отправить отзыв</button>
        </form>



        // <div>
        //     <form className="review-form" onSubmit={handleSubmit}>
        //         <textarea
        //             value={reviewText}
        //             onChange={(e) => setReviewText(e.target.value)}
        //             placeholder="Введите ваш отзыв здесь..."
        //             required
        //         />
        //         <div>
        //             <ReactStars
        //                 count={5}
        //                 onChange={ratingChanged}
        //                 size={24}
        //                 activeColor="#ffd700"
        //             />
        //         </div>
        //         <button type="submit">Добавить отзыв</button>
        //     </form>
        

        // </div>
        
    );

}

export default AddReviewForm;