import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {
  const [state, setState] = useState([]);

  const ProfileData = async () => {
    await axios
      .get("https://randomuser.me/api")
      .then((response) => {
        setState(response.data);
        console.log(response.data);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    ProfileData();
  }, []);

  return (
    <>
      {state.results?.map((item, index) => (
        <div className="card-wrapper" key={index}>
          <div className="card-wrapper-cover">
            
          </div>
          <div className="card-header"></div>
          <img src={item.picture?.large} alt="pic" />
          <h1>
            {item.name?.first} {item.name?.last}
          </h1>
          <p>{item.name?.phone}</p>
          <p>{item.email}</p>
          <span>{item.location?.timezone?.description}</span>
          <button onClick={() => ProfileData()}>Next Profile</button>
        </div>
      ))}
    </>
  );
};

export default App;