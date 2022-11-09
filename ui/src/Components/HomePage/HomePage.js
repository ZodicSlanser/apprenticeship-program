import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../Assets/HomePage/add-square.png";
import CopyIcon from "../../Assets/HomePage/copy.png";
import EditIcon from "../../Assets/HomePage/edit.png";
import trashIcon from "../../Assets/HomePage/trash.png";
import "./HomePage.css";
import {
  viewAllApprenticeships,
  addApprenticeship,
  duplicateApprenticeship,
  deleteApprenticeship,
} from "../../API interface/API";
function HomePage() {
  const navigate = useNavigate();
  const [Apprenticeships, setApprenticeships] = useState([]);

  useEffect(() => {
    viewAllApprenticeships(setApprenticeships);
  }, []);

  function Duplicate(Apprenticeship) {
    duplicateApprenticeship(Apprenticeship, () => {});
  }
  function Delete(Apprenticeship) {
    deleteApprenticeship(Apprenticeship, () => {});
  }
  const navigateToMain = () => {
    navigate("/CreateApprenticeship");
  };

  return (
    <>
      <div className="HomePage">
        <div className="HomePageTitleButton">
          <h1 className="HomePageTitle">Apprenticeship</h1>

          <button className="CreateApperButton" onClick={navigateToMain}>
            <img src={AddIcon} alt="Add Icon" />
            <p>Create New Apprenticeship</p>
          </button>
        </div>

        <div className="Apprenticeships">
          {Apprenticeships.length > 0 &&
            Apprenticeships.map((Apprenticeship, index) => (
              <div key={index} className="Apprenticeship">
                <div key={index} className="ApprenticeshipTitleButtons">
                  <h2>{Apprenticeship.title}</h2>
                  <div className="buttons">
                    <img src={EditIcon} alt="Edit Icon" />
                    <img
                      src={CopyIcon}
                      alt="Copy Icon"
                      onClick={() => Duplicate(Apprenticeship)}
                    />
                    <img
                      src={trashIcon}
                      alt="Delete Icon"
                      onClick={() => Delete(Apprenticeship)}
                    />
                  </div>
                </div>
                <p className="ApprenticeshipDesc">{Apprenticeship.appDesc}</p>
                <div className="ApprenticeshipsTeamRoles">
                  {Apprenticeship.roles.map((role) => (
                    <div className="singleRole">{role.type}</div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default HomePage;
