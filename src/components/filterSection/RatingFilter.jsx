import React, { useEffect, useState } from "react";
import { getSelectedRating } from "../../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const RatingFilter = () => {
  const dispatch = useDispatch();
  const selectedRating = useSelector((state) => state.filter.selectedRating);

  const handleRatingChange = (e) => {
    dispatch(getSelectedRating(Number(e.target.value)));
  };

  return (
    <section className="mt-4 mb-4">
      <h5>RatingFilter</h5>
      <div>
        <label className="form-check-label">
          <input
            onChange={handleRatingChange}
            checked={selectedRating === 4}
            type="radio"
            name="rating"
            value={4}
            className="form-check-input"
          />
          4 Stars and above
        </label>
        <br />
        <label className="form-check-label">
          <input
            onChange={handleRatingChange}
            checked={selectedRating === 3}
            type="radio"
            name="rating"
            value={3}
            className="form-check-input"
          />
          3 Stars and above
        </label>
        <br />
        <label className="form-check-label">
          <input
            onChange={handleRatingChange}
            checked={selectedRating === 2}
            type="radio"
            name="rating"
            value={2}
            className="form-check-input"
          />
          2 Stars and above
        </label>
        <br />
        <label className="form-check-label">
          <input
            onChange={handleRatingChange}
            checked={selectedRating === 1}
            type="radio"
            name="rating"
            value={1}
            className="form-check-input"
          />
          1 Star and above
        </label>
      </div>
    </section>
  );
};

export default RatingFilter;
