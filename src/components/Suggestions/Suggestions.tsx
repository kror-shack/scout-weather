import { useState, useEffect } from "react";
import { compareTemps } from "../../utils/formatHelperFunctions";
import "./Suggestions.scss";

type Props = {
  weatherCode: number;
  uvIndex: string;
  yesterdayMax: number;
  yesterdayMin: number;
  todayMax: number;
  todayMin: number;
};

type Suggestion = {
  tempSuggestion?: string;
  uvSuggestion?: string;
  tempComparison?: string;
};

const Suggestions = ({
  weatherCode,
  uvIndex,
  yesterdayMax,
  yesterdayMin,
  todayMax,
  todayMin,
}: Props) => {
  const [suggestions, setSuggestions] = useState<Suggestion>();
  const [suggestionIndex, setSuggestionIndex] = useState<number>(1);

  function slideForward() {
    if (suggestionIndex < 2) setSuggestionIndex((prev) => prev + 1);
    else {
      setSuggestionIndex(0);
    }
  }

  function slideBackward() {
    if (suggestionIndex > 0) setSuggestionIndex((prev) => prev - 1);
    else {
      setSuggestionIndex(2);
    }
  }

  useEffect(() => {
    switch (weatherCode) {
      case 0:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Wear sunglasses and sunscreen",
        }));
        break;
      case 1:
      case 2:
      case 3:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Wear a light jacket",
        }));
        break;
      case 45:
      case 48:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Be cautious while driving and use headlights",
        }));
        break;
      case 51:
      case 53:
      case 55:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Carry an umbrella",
        }));
        break;
      case 56:
      case 57:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Be cautious while driving and avoid icy patches",
        }));
        break;
      case 61:
      case 63:
      case 65:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Carry a raincoat and wear waterproof shoes",
        }));
        break;
      case 66:
      case 67:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Be cautious while driving and avoid icy patches",
        }));
        break;
      case 71:
      case 73:
      case 75:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Wear warm clothes and boots",
        }));
        break;
      case 77:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Be cautious while driving and avoid icy patches",
        }));
        break;
      case 80:
      case 81:
      case 82:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Carry an umbrella and wear waterproof shoes",
        }));
        break;
      case 85:
      case 86:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Wear warm clothes and boots",
        }));
        break;
      case 95:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Stay indoors and avoid metal objects",
        }));
        break;
      case 96:
      case 99:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Stay indoors and park your car under cover",
        }));
        break;
      default:
        setSuggestions((prevSuggestions) => ({
          ...prevSuggestions,
          tempSuggestion: "Check the weather forecast before going outside",
        }));
    }
  }, [weatherCode]);

  useEffect(() => {
    switch (uvIndex) {
      case "Low":
        setSuggestions((prevSuggestion) => ({
          ...prevSuggestion,
          uvSuggestion: "Enjoy the sun, but remember to stay hydrated.",
        }));
        break;
      case "Moderate":
        setSuggestions((prevSuggestion) => ({
          ...prevSuggestion,
          uvSuggestion:
            "Stay in the shade during midday hours and wear light clothing.",
        }));
        break;
      case "High":
        setSuggestions((prevSuggestion) => ({
          ...prevSuggestion,
          uvSuggestion:
            "Limit time in the sun and avoid being outside during midday hours.",
        }));
        break;
      default:
        console.log(uvIndex);
        setSuggestions((prevSuggestion) => ({
          ...prevSuggestion,
          uvSuggestion: "Check the UV index before going outside.",
        }));
    }
  }, [uvIndex]);

  useEffect(() => {
    let comparedTemps = compareTemps(
      yesterdayMax,
      todayMax,
      yesterdayMin,
      todayMin
    );
    setSuggestions((prevSuggestion) => ({
      ...prevSuggestion,
      tempComparison: comparedTemps,
    }));
  }, [todayMax, todayMin, yesterdayMax, yesterdayMin]);

  return (
    <div className="Suggestions">
      <div className="carousel">
        {suggestionIndex === 0 ? (
          <p>{suggestions?.tempComparison}</p>
        ) : suggestionIndex === 1 ? (
          <p>{suggestions?.tempSuggestion}</p>
        ) : (
          <p>{suggestions?.uvSuggestion}</p>
        )}

        <button onClick={slideBackward} className="btn btn--left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button onClick={slideForward} className="btn btn--right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="dots">
          <button className={suggestionIndex === 0 ? "dot dot-fill" : "dot"}>
            &nbsp;
          </button>
          <button className={suggestionIndex === 1 ? "dot dot-fill" : "dot"}>
            &nbsp;
          </button>
          <button className={suggestionIndex === 2 ? "dot dot-fill" : "dot"}>
            &nbsp;
          </button>
        </div>
      </div>
      {/* <p>Suggestion: {suggestions?.uvSuggestion}</p>
      <p>Suggestion: {suggestions?.tempComparison}</p> */}
    </div>
  );
};

export default Suggestions;
