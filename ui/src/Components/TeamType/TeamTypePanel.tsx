import React, { useState,useEffect } from "react";
import styles from "./TeamTypePanel.module.css";
import monitor from "../../Assets/TeamType/monitor.svg";
import mobile from "../../Assets/TeamType/mobile.svg";
import diagram from "../../Assets/TeamType/diagram.svg";
import keyboardOpen from "../../Assets/TeamType/keyboard-open.svg";
import driver from "../../Assets/TeamType/driver.svg";
import dottedBox from "../../Assets/TeamType/dotted-box.svg";
import box from "../../Assets/TeamType/box.svg";
import infoCircle from "../../Assets/TeamType/info-circle.svg";
import TeamTypeSelect from "./TeamTypeSelect";
const { AddApprenticeship } = require("/backend/CRUD.js")

interface TeamTypePanelProps {
  invokeActivity: (x: null, y: Number) => void;
  invokeType: (x: null, y: boolean) => void;
  setType: (x: Number) => void;
}
export default function TeamTypePanel({
  setType,
  invokeActivity,
  invokeType,
}: TeamTypePanelProps) {
  const [selected, setSelected] = useState(0);

  function handleSelect(selection: number) {
    setSelected(selection === selected ? 0 : selection);
  }
  useEffect(() => {
    setType(selected);
    if (selected) {invokeType(null, true);
      const newApprenticeship = {
        title:"test",
        description:"test",
        date:"Feb 23, 2021",
        members:[{name:"test",email:"test",role:"test"}],
        teamType: selected,
      };
    }
    invokeType(null, false);
  }, [selected, invokeType, setType]);

  enum TeamType {
    WebPlatform,
    MobileApp,
    Growth,
    MarketingWebsite,
    Prototyping,
    Data,
    CustomTeam,
  }

  const teamTypes = [
    // array of objects defining the team types along with their logo
    {
      id: TeamType.WebPlatform,
      type: "Web Platform",
      selected: selected === 1 ? true : false,
    },
    {
      id: TeamType.MobileApp,
      type: "Mobile App",
      selected: selected === 2 ? true : false,
    },
    {
      id: TeamType.Growth,
      type: "Growth",
      selected: selected === 3 ? true : false,
    },
    {
      id: TeamType.MarketingWebsite,
      type: "Marketing Website",
      selected: selected === 4 ? true : false,
    },
    {
      id: TeamType.Prototyping,
      type: "Prototyping",
      selected: selected === 5 ? true : false,
    },
    {
      id: TeamType.Data,
      type: "Data",
      selected: selected === 6 ? true : false,
    },
    {
      id: TeamType.CustomTeam,
      type: "Custom Team",
      selected: selected === 7 ? true : false,
    },
  ];

  return (
    <div>
      <div
        className={styles["panel"]}
        onMouseEnter={(e) => {
          e.currentTarget.className = styles["panel-selected"];
          invokeActivity(null, 2);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.className = styles["panel"];
          invokeActivity(null, 0);
        }}
      >
        <div className={styles.panelHeader}>
          Team Type
          <img src={infoCircle} alt="info-circle" />
        </div>
        <div className={styles.row}>
          <TeamTypeSelect
            teamType={"Web Platform"}
            logo={monitor}
            select={() => {
              handleSelect(1);
            }}
            isSelected={teamTypes[0].selected}
          />
          <TeamTypeSelect
            teamType={"Mobile App"}
            logo={mobile}
            select={() => {
              handleSelect(2);
            }}
            isSelected={teamTypes[1].selected}
          />
          <TeamTypeSelect
            teamType={"Growth"}
            logo={diagram}
            select={() => {
              handleSelect(3);
            }}
            isSelected={teamTypes[2].selected}
          />
        </div>
        <div className={styles.row}>
          <TeamTypeSelect
            teamType={"Marketing Website"}
            logo={keyboardOpen}
            select={() => {
              handleSelect(4);
            }}
            isSelected={teamTypes[3].selected}
          />
          <TeamTypeSelect
            teamType={"Prototyping"}
            logo={box}
            select={() => {
              handleSelect(5);
            }}
            isSelected={teamTypes[4].selected}
          />
          <TeamTypeSelect
            teamType={"Data"}
            logo={driver}
            select={() => {
              handleSelect(6);
            }}
            isSelected={teamTypes[5].selected}
          />
        </div>
        <div className={styles.row}>
          <TeamTypeSelect
            teamType={"Custom Team"}
            logo={dottedBox}
            select={() => {
              handleSelect(7);
            }}
            isSelected={teamTypes[6].selected}
          />
        </div>
      </div>
    </div>
  );
}
