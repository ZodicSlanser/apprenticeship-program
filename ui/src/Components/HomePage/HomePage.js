import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState, memo } from "react";
import AddIcon from "../../Assets/HomePage/add-square.png";
import CopyIcon from "../../Assets/HomePage/copy.png";
import EditIcon from "../../Assets/HomePage/edit.png";
import trashIcon from "../../Assets/HomePage/trash.png";
import "./HomePage.css";
import {
  viewAllApprenticeships,
  duplicateApprenticeship,
  deleteApprenticeship,
} from "../../API interface/API";

let myApp;

function HomePage() {
  setTimeout(() => {}, 3000);
  const location = useLocation();
  const navigate = useNavigate();
  const [Apprenticeships, setApprenticeships] = useState([]);
  function getApprenticeships(app) {
    myApp = app;
  }

  function newApprenticeship(app) {
    const newApp = [...Apprenticeships, app];
    setApprenticeships(newApp);
  }

  useEffect(() => {
    viewAllApprenticeships(getApprenticeships).then(() => {
      myApp.map((apprenticeship) => {
        let startDate = apprenticeship.startDate._seconds / 1000;
        let endDate = apprenticeship.endDate._seconds / 1000;
        apprenticeship.startDate = new Date();
        apprenticeship.endDate = new Date();
        apprenticeship.startDate.setSeconds(startDate);
        apprenticeship.endDate.setSeconds(endDate);
      });
      setApprenticeships(myApp);
    });
  }, []);

  function Duplicate(Apprenticeship) {
    duplicateApprenticeship(Apprenticeship, newApprenticeship);
  }

  function Delete(Apprenticeship) {
    deleteApprenticeship(Apprenticeship.id, () => {});
    setApprenticeships(
      Apprenticeships.filter((app) => app.id !== Apprenticeship.id)
    );
  }
  const navigateToMain = () => {
    navigate("/CreateApprenticeship");
  };

  function Edit(apprenticeship) {
    navigate("/CreateApprenticeship", { state: apprenticeship });
  }

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
              <div key={Apprenticeship.id} className="Apprenticeship">
                <div
                  key={Apprenticeship.id}
                  className="ApprenticeshipTitleButtons"
                >
                  <h2>{Apprenticeship.title}</h2>
                  <div className="buttons" key={Apprenticeship.id}>
                    <img
                      src={EditIcon}
                      alt="Edit Icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        Edit(Apprenticeship);
                      }}
                    />
                    <img
                      src={CopyIcon}
                      alt="Copy Icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        Duplicate(Apprenticeship);
                      }}
                    />
                    <img
                      src={trashIcon}
                      alt="Delete Icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => Delete(Apprenticeship)}
                    />
                  </div>
                </div>
                <p className="ApprenticeshipDesc">{Apprenticeship.appDesc}</p>
                <div className="ApprenticeshipsTeamRoles">
                  {Apprenticeship.roles?.map((role) => (
                    <div className="singleRole" key={role.id}>
                      {role.type}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default memo(HomePage);
