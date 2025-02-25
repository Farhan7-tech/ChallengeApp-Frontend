import axios from "axios";
import { useState } from "react";
import "./AddChallenge.css";

function AddChallenge({ onChallengeAdded }) {
  const [month, setMonth] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/challenges", {
        month,
        description,
      });
      setMonth("");
      setDescription("");
      onChallengeAdded();
    } catch (error) {
      console.error("Error adding challenge", error);
    }
  };

  return (
    <div className="card my-5 shadow-lg add-challenge-card">
      <div className="card-header bg-primary text-white">
        <h5 className="card-title mb-0">Add New Challenge</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="month" className="form-label fw-bold">
              Month
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="e.g. January"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="form-label fw-bold">
              Description
            </label>
            <textarea
              className="form-control form-control-lg"
              placeholder="Enter a description for the challenge..."
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddChallenge;
