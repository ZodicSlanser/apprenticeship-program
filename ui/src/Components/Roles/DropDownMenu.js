import { useState, memo } from "react";
import "./DropDownMenu.css";
import tickCircle from "../../Assets/Roles/Vector.svg";
import activedownarrw from "../../Assets/Roles/active-arrow-down.svg";
import downarrw from "../../Assets/Roles/arrow-down.svg";

export default memo(function DropDownMenu(props) {
  /*containing all options */
  const count = 0;
  const AllOptions = props.skills;
  /*it will hold the searched for options */
  const [options, setOptions] = useState(props.skills);
  /*Search Function triggered by any change (keystroke)in the search */
  function search(event) {
    setOptions((pervOptions) => {
      const newOptions = [];
      AllOptions.map((pervOption) => {
        /*to check if the entered letters in search bar are included in any option ignoring the case */
        if (
          pervOption.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          newOptions.push(pervOption);
        } else {
          newOptions.push("");
        }
      });
      return newOptions;
    });
  }
  /*to toggle the menu  */
  const [showMenu, setshowMenu] = useState(false);
  function toggleMenu() {
    setshowMenu(!showMenu);
    if (!showMenu) {
      setOptions(AllOptions);
    }
  }

  function deleteSkill(index) {
    if (count <= 3) {
      setOptions((options) => [
        ...options.slice(0, index),
        ...options.slice(index + 1, options.length),
      ]);
    }
  }
  function handleBlur(e) {
    if (
      (e.relatedTarget &&
        e.target &&
        ((e.relatedTarget.nodeName === "INPUT" &&
          e.target.tabIndex === props.tabIndex) ||
          (e.target.nodeName === "INPUT" &&
            e.relatedTarget.tabIndex === props.tabIndex) ||
          (!showMenu && e.relatedTarget.nodeName === e.target.nodeName))) ||
      (!showMenu &&
        (!e.relatedTarget ||
          e.relatedTarget.nodeName === "TEXTAREA" ||
          "BUTTON"))
    )
      return;
    toggleMenu();
  }
  return (
    <div
      className="skillwrapper"
      onBlur={handleBlur}
      tabIndex={props.tabIndex + ""}
    >
      <div
        className={
          showMenu ? "skillwrapper-icon-btn-hovering" : "skillwrapper-icon-btn"
        }
        onClick={toggleMenu}
      >
        <img src={props.Frame} alt="Icon" className="skillIcon" />
        <div className="skillselect-btn">
          <div style={{ cursor: "default" }}>{props.title}</div>
          {showMenu ? (
            <img
              src={activedownarrw}
              alt="arrow down"
              className="skilldown-arrow"
            />
          ) : (
            <img src={downarrw} alt="arrow down" className="skilldown-arrow" />
          )}
        </div>
      </div>
      {showMenu && (
        <div
          className="skillMenuContent"
          style={
            props.tabIndex === -4 ? { bottom: "-7vh", height: "236px" } : null
          }
        >
          <div className="skillSearch">
            <input
              type="text"
              placeholder="Search"
              onChange={search}
              tabIndex={props.tabIndex - 1 + ""}
            />
          </div>
          <ul className="skilloptions">
            {options.map(
              (option, index) =>
                option !== "" && (
                  <li
                    key={index}
                    onClick={() => props.chooseSkill(option, index)}
                  >
                    {props.chosenSkills[index] ? (
                      <img
                        src={tickCircle}
                        alt="tick"
                        className="tick-icon-selected"
                      />
                    ) : (
                      <img src={tickCircle} alt="tick" className="tick-icon" />
                    )}
                    {option}
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </div>
  );
});
