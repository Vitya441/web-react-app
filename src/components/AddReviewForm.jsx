import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../store/reviewsSlice";
import { useParams } from "react-router-dom";
import ReviewsList from "./ReviewsList";
import { nanoid } from "@reduxjs/toolkit";
import ReactStars from "react-rating-stars-component";

function AddReviewForm({ clinicId }) { // id передаем в паарметрах, т.к это удобно (вызываем этот компонент в спискее поликлинник)
    
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (reviewText.trim() !== '') {
            const reviewID = nanoid();
            const dateTime = new Date().toLocaleString();
            dispatch(addReview({
                id: reviewID,
                clinicId: clinicId,
                text: reviewText,
                time: dateTime,
                sender: user,
                rating,
            }));
            setReviewText('');
            setRating(0);
        }
    };

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
                        onChange={(newRating) => setRating(newRating)}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Отправить отзыв</button>
        </form>
    );
}

export default AddReviewForm;