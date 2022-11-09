import React, {useEffect, useState, memo} from "react";
import AddIcon from "../../Assets/HomePage/add-square.png";
import CopyIcon from "../../Assets/HomePage/copy.png";
import EditIcon from "../../Assets/HomePage/edit.png";
import trashIcon from "../../Assets/HomePage/trash.png";
import "./HomePage.css";
import {
    viewAllApprenticeships,
    addApprenticeship,
    duplicateApprenticeship,
} from "../../API interface/API";

function HomePage() {
    const [Apprenticeships, setApprenticeships] = useState([]);

    useEffect(() => {
        viewAllApprenticeships(setApprenticeships);
    }, []);
    useEffect(() => {
      Apprenticeships.map((apprenticeship) => {
        let startDate = apprenticeship.startDate._seconds/1000;
        let endDate = apprenticeship.endDate._seconds/1000;
        apprenticeship.startDate = new Date();
        apprenticeship.endDate = new Date();
        apprenticeship.startDate.setSeconds(startDate);
        apprenticeship.endDate.setSeconds(endDate);
      });
      setApprenticeships(Apprenticeships);
    }, [Apprenticeships]);

    function Duplicate(Apprenticeship) {
        duplicateApprenticeship(Apprenticeship, () => {
        });
    }

    return (
        <>
            <div className="HomePage">
                <div className="HomePageTitleButton">
                    <h1 className="HomePageTitle">Apprenticeship</h1>
                    <button className="CreateApperButton">
                        <img src={AddIcon} alt="Add Icon"/>
                        <p>Create New Apprenticeship</p>
                    </button>
                </div>
                <div className="Apprenticeships">
                    {Apprenticeships.map((Apprenticeship, index) => (
                        <div key={index} className="Apprenticeship">
                            <div key={index} className="ApprenticeshipTitleButtons">
                                <h2>{Apprenticeship.title}</h2>
                                <div className="buttons">
                                    <img src={EditIcon} alt="Edit Icon"/>
                                    <img
                                        src={CopyIcon}
                                        alt="Copy Icon"
                                        onClick={() => Duplicate(Apprenticeship)}
                                    />
                                    <img src={trashIcon} alt="Delete Icon"/>
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

export default memo(HomePage);
