import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const dummmyOrganisations = [
  { id: 1, name: "dummyName1" },
  { id: 2, name: "dummyName2" },
];
export default function MainPage() {
  const [organisations, setOrganisations] = useState([]);
  const navigate = useNavigate();

  const handlePick = (name, id) => {
    navigate(`/organisation/${name}/${id}`);
  };
  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://my.api.mockaroo.com/organizations.json?key=2e435a20"
      );
      setOrganisations(response.data);
    } catch (e) {
      setOrganisations(dummmyOrganisations);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mainPage-container">
      <h1>Levo</h1>
      <div className="mainPage-subContainer">
        <h1 className="mainPage-heading">Organisations</h1>
        <p className="mainPage-subHeading">
          Pick the organisation you want to access
        </p>
        {organisations.map((organisation, index) => (
          <div
            key={index}
            className="mainPage-buttons"
            onClick={() => handlePick(organisation.name, organisation.id)}
          >
            {organisation.name}
          </div>
        ))}
      </div>
    </div>
  );
}
