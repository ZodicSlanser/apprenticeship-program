import { useState, memo } from "react";
import "./PopForm.css";
import DropDownRoleMenu from "./DropDownRoleMenu";
import DropDownMenu from "./DropDownMenu";
import medalIcon from "../../Assets/Roles/medal-star.svg";
import clockIcon from "../../Assets/Roles/clock.svg";
import closeIcon from "../../Assets/Roles/close.svg";
import closeSquare from "../../Assets/Roles/close-square.svg";
import starIcon from "../../Assets/Roles/star.svg";
import locationIcon from "../../Assets/Roles/location.svg";

export default memo(function PopForm(props) {
  /* Role*/
  const AllSkills = ["Swift", "ios", "Objective-c", "ARM"];
  const allLocations = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and/or Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Croatia (Hrvatska)",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecudaor",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "France, Metropolitan",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard and Mc Donald Islands",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfork Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St. Helena",
    "St. Pierre and Miquelon",
    "Sudan",
    "Suriname",
    "Svalbarn and Jan Mayen Islands",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States minor outlying islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City State",
    "Venezuela",
    "Vietnam",
    "Virigan Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna Islands",
    "Western Sahara",
    "Yemen",
    "Yugoslavia",
    "Zaire",
    "Zambia",
    "Zimbabwe",
  ];
  const [roleTitle, setRoleTitle] = useState("Select Role");

  const [reqSkills, setreqSkills] = useState([]);
  const [CSkillsBoolean, setCSkillsBoolean] = useState(
    new Array(AllSkills.length).fill(false)
  );
  const [compSkills, setCompSkills] = useState([]);
  const [LocationTitle, setLocationTitle] = useState("Select Locations");
  const [showRoleMenu, setshowRoleMenu] = useState(false);

  const [LocationsBoolean, setLoctionsBoolean] = useState(
    new Array(allLocations.length).fill(false)
  );
  const [selectedLocations, setSelectdeLocations] = useState([]);
  const [RSkillsBoolean, setRSkillsBoolean] = useState(
    new Array(AllSkills.length).fill(false)
  );
  const [description, setDesc] = useState("");
  const [minimumHours, setMinimumHours] = useState("");
  function pickMinimumHours(event) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }

    event.target.value = parseInt(event.target.value);
    setMinimumHours(event.target.value);
  }

  function pickRole(selectedRole) {
    setRoleTitle(selectedRole);
    setshowRoleMenu(!showRoleMenu);
  }
  /*To Toggle Role DropDown Menu */
  function toggleRoleMenu() {
    setshowRoleMenu(!showRoleMenu);
  }
  /******************************************************************* */
  /*Role Description triggered by onChange*/
  function saveDesc(event) {
    setDesc(event.target.value);
  }
  //**************************************************************** */
  /*toggle the menu */

  function appendToRSkills(skill) {
    /*Logic OF Trcking The Slected skills to sync the list with the slected Icons */
    let index;
    AllSkills.map((SingleSkill, index1) => {
      if (SingleSkill === skill) {
        index = index1;
      }
      return null;
    });
    if (!RSkillsBoolean[index]) {
      setreqSkills((prevSkills) => {
        const newSkills = [];
        if (prevSkills.length <= 2) {
          prevSkills.map((prevSkill) => {
            if (prevSkill !== skill) {
              newSkills.push(prevSkill);
            }
            return null;
          });
          newSkills.push(skill);
          setRSkillsBoolean((prevAllSkillsBoolean) => {
            const newBoolean = [];
            prevAllSkillsBoolean.map((prevBoolean, indexBoolean) => {
              if (indexBoolean === index) {
                newBoolean.push(true);
              } else {
                newBoolean.push(prevBoolean);
              }
              return null;
            });
            return newBoolean;
          });
          return newSkills;
        } else {
          return prevSkills;
        }
      });
    } else {
      deleteRSkill(index);
    }
    return null;
  }
  function deleteRSkill(index) {
    setRSkillsBoolean((prevAllSkillsBoolean) => {
      const newBoolean = [];
      prevAllSkillsBoolean.map((prevBoolean, indexBoolean) => {
        if (indexBoolean === index) {
          newBoolean.push(false);
          setreqSkills((prevskills) => {
            const newreqSkills = [];
            prevskills.map((skill) => {
              if (skill === AllSkills[index]) {
              } else {
                newreqSkills.push(skill);
              }
              return null;
            });
            return newreqSkills;
          });
        } else {
          newBoolean.push(prevBoolean);
        }
        return null;
      });
      return newBoolean;
    });
  }
  /**toggle The comp Menu */

  function appendToCSkills(skill) {
    let index;
    AllSkills.map((SingleSkill, index1) => {
      if (SingleSkill === skill) {
        index = index1;
      }
      return null;
    });
    if (!CSkillsBoolean[index]) {
      setCompSkills((prevSkills) => {
        const newSkills = [];
        if (prevSkills.length <= 2) {
          prevSkills.map((prevSkill) => {
            if (prevSkill !== skill) {
              newSkills.push(prevSkill);
            }
            return null;
          });
          newSkills.push(skill);
          setCSkillsBoolean((prevCSkillsBoolean) => {
            const newBoolean = [];
            prevCSkillsBoolean.map((prevBoolean, indexBoolean) => {
              if (indexBoolean === index) {
                newBoolean.push(true);
              } else {
                newBoolean.push(prevBoolean);
              }
              return null;
            });
            return newBoolean;
          });
          return newSkills;
        } else {
          return prevSkills;
        }
      });
    } else {
      deleteCSkill(index);
    }
  }
  function deleteCSkill(index) {
    setCSkillsBoolean((prevCSkillsBoolean) => {
      const newBoolean = [];
      prevCSkillsBoolean.map((prevBoolean, indexBoolean) => {
        if (indexBoolean === index) {
          newBoolean.push(false);
          setCompSkills((prevskills) => {
            const newCompSkills = [];
            prevskills.map((skill) => {
              if (skill === AllSkills[index]) {
              } else {
                newCompSkills.push(skill);
              }
              return null;
            });
            return newCompSkills;
          });
        } else {
          newBoolean.push(prevBoolean);
        }
        return null;
      });
      return newBoolean;
    });
  }
  /*Location Menu */
  function appendToLocations(location) {
    let index;
    allLocations.map((Singlelocation, index1) => {
      if (Singlelocation === location) {
        index = index1;
      }
      return null;
    });
    if (!LocationsBoolean[index]) {
      setSelectdeLocations((prevLocations) => {
        const newLocations = [];
        prevLocations.map((prevLocation) => {
          if (prevLocation !== location) {
            newLocations.push(prevLocation);
          }
          return null;
        });
        newLocations.push(location);
        let locationString =
          newLocations.length === 1 ? " Location" : " Locations";

        setLocationTitle(newLocations.length + locationString);
        setLoctionsBoolean((prevLocationBoolean) => {
          const newBoolean = [];
          prevLocationBoolean.map((prevBoolean, indexBoolean) => {
            if (indexBoolean === index) {
              newBoolean.push(true);
            } else {
              newBoolean.push(prevBoolean);
            }
            return null;
          });
          return newBoolean;
        });
        return newLocations;
      });
    } else {
      deletelocation(index);
    }
  }
  function deletelocation(index) {
    setLoctionsBoolean((prevLocationsBoolean) => {
      const newBoolean = [];
      prevLocationsBoolean.map((prevBoolean, indexBoolean) => {
        if (indexBoolean === index) {
          newBoolean.push(false);
          setSelectdeLocations((prevsLocations) => {
            const newSelectedLocation = [];
            prevsLocations.map((location) => {
              if (location === allLocations[index]) {
              } else {
                newSelectedLocation.push(location);
              }
              return null;
            });
            let locationString =
              newSelectedLocation.length === 1 ? " Location" : " Locations";
            setLocationTitle(newSelectedLocation.length + locationString);
            return newSelectedLocation;
          });
        } else {
          newBoolean.push(prevBoolean);
        }
        return null;
      });
      return newBoolean;
    });
  }

  return (
    <div className="popup-container-blurred">
      <div className="popup">
        <div className="title-btn">
          <h1 className="">Add Role</h1>
          <div className="buttons">
            <button
              className="button"
              onClick={() =>
                props.handleClick({
                  type: roleTitle,
                  compSkills: compSkills,
                  reqSkills: reqSkills,
                  hours: minimumHours,
                  desc: description,
                  location: selectedLocations,
                })
              }
            >
              Save
            </button>
            <img
              src={closeIcon}
              alt="Close button"
              onClick={props.togglePopForm}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <DropDownRoleMenu
          title={roleTitle}
          showRoleMenu={showRoleMenu}
          toggleRoleMenu={toggleRoleMenu}
          handleChange={pickRole}
          options={[
            "ios Developer",
            "Mobile Developer",
            "Full Stack Developer",
            "Front-end Developer",
            "Back-end Developer",
          ]}
          tabIndex={-1}
        />
        <div className="role-desc">
          <h3>Role Description</h3>
          <textarea
            type="text"
            className="input-desc"
            placeholder="Description"
            onChange={saveDesc}
          />
        </div>
        <div>
          <div className="skills-component">
            <h3>Required Skills (Select any 3)</h3>
            <DropDownMenu
              title="Select skills"
              Frame={medalIcon}
              skills={AllSkills}
              chooseSkill={appendToRSkills}
              chosenSkills={RSkillsBoolean}
              tabIndex={-2}
            />
            <div className="skills">
              {RSkillsBoolean.map(
                (ischosen, index) =>
                  ischosen && (
                    <span key={index} className="singleSkill">
                      {AllSkills[index]}
                      <img
                        src={closeSquare}
                        alt="close Icon"
                        className="close-skill"
                        onClick={() => deleteRSkill(index)}
                      />
                    </span>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="skills-component">
          <h3>Complimentary Skills (Select any 3)</h3>
          <DropDownMenu
            title="Select skills"
            Frame={starIcon}
            skills={AllSkills}
            chooseSkill={appendToCSkills}
            chosenSkills={CSkillsBoolean}
            tabIndex={-3}
          />
          <div className="skills">
            {CSkillsBoolean.map(
              (ischosen, index) =>
                ischosen && (
                  <span key={index} className="singleSkill">
                    {AllSkills[index]}
                    <img
                      src={closeSquare}
                      alt="close Icon"
                      className="close-skill"
                      onClick={() => deleteCSkill(index)}
                    />
                  </span>
                )
            )}
          </div>
        </div>
        <div className="minimum-hours">
          <h3>Minimum Hours Per Week</h3>
          <div className="icon-hours">
            <img src={clockIcon} alt="Clock Icon" className="clock-Icon" />
            <input
              type="number"
              className="input-hours"
              placeholder="No. of hours"
              onChange={pickMinimumHours}
              value={minimumHours}
            />
          </div>
        </div>
        <div className="location">
          <h3>Location Preferences</h3>
          <div style={{ marginTop: "8px" }}>
            <DropDownMenu
              title={LocationTitle}
              Frame={locationIcon}
              skills={allLocations}
              chooseSkill={appendToLocations}
              chosenSkills={LocationsBoolean}
              tabIndex={-4}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
