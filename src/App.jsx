import { useEffect, useState } from "react";
import "./App.css";
import ChallengeList from "./components/challengeList";
import axios from "axios";
import AddChallenge from "./components/AddChallenge";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const response = await axios.get("http://localhost:8080/challenges");
      setChallenges(response.data);
    } catch (error) {
      console.error("Error fetching challenge", error);
    }
  };

  const handelChallengeAdded = () => {
    fetchChallenges();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Monthly Challenge</h1>
      <AddChallenge onChallengeAdded={handelChallengeAdded} />
      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
