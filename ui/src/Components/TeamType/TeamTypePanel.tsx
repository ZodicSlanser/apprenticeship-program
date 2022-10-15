import React, { useState } from "react";
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

interface TeamTypePanelProps {
  invokeActivity: (x: null, y: Number) => void;
  invokeType: (x: null, y: boolean) => void;
}
export default function TeamTypePanel({
  invokeActivity,
  invokeType,
}: TeamTypePanelProps) {
  const [selectedWeb, setSelectedWeb] = useState(false);
  const [selectedMobile, setSelectedMobile] = useState(false);
  const [selectedGrowth, setSelectedGrowth] = useState(false);
  const [selectedMarketingWebsite, setSelectedMarketingWebsite] =
    useState(false);
  const [selectedPrototyping, setSelectedPrototyping] = useState(false);
  const [selectedData, setSelectedData] = useState(false);
  const [selectedCustomTeam, setSelectedCustomTeam] = useState(false);
  const handleSelectWebPlatform = (): void => {
    invokeType(null, true);
    setSelectedWeb(!selectedWeb);
    setSelectedMobile(false);
    setSelectedGrowth(false);
    setSelectedMarketingWebsite(false);
    setSelectedPrototyping(false);
    setSelectedData(false);
    setSelectedCustomTeam(false);
    if (!selectedWeb) invokeType(null, true);
    else invokeType(null, false);
  };
  const handleSelectMobileApp = (): void => {
    invokeType(null, true);
    setSelectedMobile(!selectedMobile);
    setSelectedWeb(false);
    setSelectedGrowth(false);
    setSelectedMarketingWebsite(false);
    setSelectedPrototyping(false);
    setSelectedData(false);
    setSelectedCustomTeam(false);
    if (!selectedMobile) invokeType(null, true);
    else invokeType(null, false);
  };
  const handleSelectGrowth = (): void => {
    invokeType(null, true);
    setSelectedGrowth(!selectedGrowth);
    setSelectedWeb(false);
    setSelectedMobile(false);
    setSelectedMarketingWebsite(false);
    setSelectedPrototyping(false);
    setSelectedData(false);
    setSelectedCustomTeam(false);
    if (!selectedGrowth) invokeType(null, true);
    else invokeType(null, false);
  };
  const handleSelectMarketingWebsite = (): void => {
    invokeType(null, true);
    setSelectedMarketingWebsite(!selectedMarketingWebsite);
    setSelectedWeb(false);
    setSelectedMobile(false);
    setSelectedGrowth(false);
    setSelectedPrototyping(false);
    setSelectedData(false);
    setSelectedCustomTeam(false);
    if (!selectedMarketingWebsite) invokeType(null, true);
    else invokeType(null, false);
  };
  const handleSelectPrototyping = (): void => {
    invokeType(null, true);
    setSelectedPrototyping(!selectedPrototyping);
    setSelectedWeb(false);
    setSelectedMobile(false);
    setSelectedGrowth(false);
    setSelectedMarketingWebsite(false);
    setSelectedData(false);
    setSelectedCustomTeam(false);
    if (!selectedPrototyping) invokeType(null, true);
    else invokeType(null, false);
  };
  const handleSelectData = (): void => {
    setSelectedData(!selectedData);
    setSelectedWeb(false);
    setSelectedMobile(false);
    setSelectedGrowth(false);
    setSelectedMarketingWebsite(false);
    setSelectedPrototyping(false);
    setSelectedCustomTeam(false);
    if (!selectedData) invokeType(null, true);
    else invokeType(null, false);
  };
  const handleSelectCustomTheme = (): void => {
    invokeType(null, true);
    setSelectedCustomTeam(!selectedCustomTeam);
    setSelectedWeb(false);
    setSelectedMobile(false);
    setSelectedGrowth(false);
    setSelectedMarketingWebsite(false);
    setSelectedPrototyping(false);
    setSelectedData(false);
    if (!selectedCustomTeam) invokeType(null, true);
    else invokeType(null, false);
  };
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
      type: TeamType.WebPlatform,
      selected: selectedWeb,
    },
    {
      type: TeamType.MobileApp,

      selected: selectedMobile,
    },
    {
      type: TeamType.Growth,

      selected: selectedGrowth,
    },
    {
      type: TeamType.MarketingWebsite,
      selected: selectedMarketingWebsite,
    },
    {
      type: TeamType.Prototyping,

      selected: selectedPrototyping,
    },
    {
      type: TeamType.Data,

      selected: selectedData,
    },
    {
      type: TeamType.CustomTeam,

      selected: selectedCustomTeam,
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
            teamType={"Web Platorm"}
            logo={monitor}
            select={handleSelectWebPlatform}
            isSelected={teamTypes[0].selected}
          />
          <TeamTypeSelect
            teamType={"Mobile App"}
            logo={mobile}
            select={handleSelectMobileApp}
            isSelected={teamTypes[1].selected}
          />
          <TeamTypeSelect
            teamType={"Growth"}
            logo={diagram}
            select={handleSelectGrowth}
            isSelected={teamTypes[2].selected}
          />
        </div>
        <div className={styles.row}>
          <TeamTypeSelect
            teamType={"Marketing Website"}
            logo={keyboardOpen}
            select={handleSelectMarketingWebsite}
            isSelected={teamTypes[3].selected}
          />
          <TeamTypeSelect
            teamType={"Prototyping"}
            logo={box}
            select={handleSelectPrototyping}
            isSelected={teamTypes[4].selected}
          />
          <TeamTypeSelect
            teamType={"Data"}
            logo={driver}
            select={handleSelectData}
            isSelected={teamTypes[5].selected}
          />
        </div>
        <div className={styles.row}>
          <TeamTypeSelect
            teamType={"Custom Team"}
            logo={dottedBox}
            select={handleSelectCustomTheme}
            isSelected={teamTypes[6].selected}
          />
        </div>
      </div>
    </div>
  );
}
