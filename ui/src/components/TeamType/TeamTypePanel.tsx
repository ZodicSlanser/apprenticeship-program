import React, { useState } from 'react'
import styles from './TeamTypePanel.module.css';
import monitor from '../../assets/monitor.svg';
import mobile from '../../assets/mobile.svg';
import diagram from '../../assets/diagram.svg';
import keyboardOpen from '../../assets/keyboard-open.svg';
import driver from '../../assets/driver.svg';
import dottedBox from '../../assets/dotted-box.svg';
import box from '../../assets/box.svg';
import infoCircle from '../../assets/info-circle.svg';
import TeamTypeSelect from './TeamTypeSelect';

export default function TeamType() {
  const [selectedWeb, setSelectedWeb] = useState(false)
  const [selectedMobile, setSelectedMobile] = useState(false)
  const [selectedGrowth, setSelectedGrowth] = useState(false)
  const [selectedMarketingWebsite, setSelectedMarketingWebsite] = useState(false)
  const [selectedPrototyping, setSelectedPrototyping] = useState(false)
  const [selectedData, setSelectedData] = useState(false)
  const [selectedCustomTeam, setSelectedCustomTeam] = useState(false)

  const handleSelectWebPlatform = (): void => {
    setSelectedWeb(!selectedWeb)
    setSelectedMobile(false)
    setSelectedGrowth(false)
    setSelectedMarketingWebsite(false)
    setSelectedPrototyping(false)
    setSelectedData(false)
    setSelectedCustomTeam(false)
  }
  const handleSelectMobileApp = (): void => {
    setSelectedMobile(!selectedMobile)
    setSelectedWeb(false)
    setSelectedGrowth(false)
    setSelectedMarketingWebsite(false)
    setSelectedPrototyping(false)
    setSelectedData(false)
    setSelectedCustomTeam(false)


  }
  const handleSelectGrowth = (): void => {
    setSelectedGrowth(!selectedGrowth)
    setSelectedWeb(false)
    setSelectedMobile(false)
    setSelectedMarketingWebsite(false)
    setSelectedPrototyping(false)
    setSelectedData(false)
    setSelectedCustomTeam(false)

  }
  const handleSelectMarketingWebsite = (): void => {
    setSelectedMarketingWebsite(!selectedMarketingWebsite)
    setSelectedWeb(false)
    setSelectedMobile(false)
    setSelectedGrowth(false)
    setSelectedPrototyping(false)
    setSelectedData(false)
    setSelectedCustomTeam(false)
  }
  const handleSelectPrototyping = (): void => {
    setSelectedPrototyping(!selectedPrototyping)
    setSelectedWeb(false)
    setSelectedMobile(false)
    setSelectedGrowth(false)
    setSelectedMarketingWebsite(false)
    setSelectedData(false)
    setSelectedCustomTeam(false)

  }
  const handleSelectData = (): void => {
    setSelectedData(!selectedData)
    setSelectedWeb(false)
    setSelectedMobile(false)
    setSelectedGrowth(false)
    setSelectedMarketingWebsite(false)
    setSelectedPrototyping(false)
    setSelectedCustomTeam(false)

  }
  const handleSelectCustomTheme = (): void => {
    setSelectedCustomTeam(!selectedCustomTeam)
    setSelectedWeb(false)
    setSelectedMobile(false)
    setSelectedGrowth(false)
    setSelectedMarketingWebsite(false)
    setSelectedPrototyping(false)
    setSelectedData(false)
  }
  enum TeamType {
    WebPlatform,
    MobileApp,
    Growth,
    MarketingWebsite,
    Prototyping,
    Data,
    CustomTeam
  }
  const teamTypes = [ // array of objects defining the team types along with their logo
    {
      type: TeamType.WebPlatform,
      selected: selectedWeb
    },
    {
      type: TeamType.MobileApp,

      selected: selectedMobile
    },
    {
      type: TeamType.Growth,

      selected: selectedGrowth
    },
    {
      type: TeamType.MarketingWebsite,
      selected: selectedMarketingWebsite
    },
    {
      type: TeamType.Prototyping,

      selected: selectedPrototyping

    },
    {
      type: TeamType.Data,

      selected: selectedData
    },
    {
      type: TeamType.CustomTeam,

      selected: selectedCustomTeam
    }
  ]


  return (

    <div onMouseEnter={(e) => e.currentTarget.className = styles['panel-selected']} onMouseLeave={(e) => e.currentTarget.className = styles['panel']} >
      <div className={styles.panelHeader}>
        Team Type
        <img src={infoCircle} alt="info-circle" onMouseEnter={() => { setTimeout(() => console.log('Team type'), 1000) }}
        />
      </div>
      <div className={styles.row}>

        <TeamTypeSelect teamType={"Web Platorm"} logo={monitor} select={handleSelectWebPlatform} isSelected={teamTypes[0].selected} />
        <TeamTypeSelect teamType={"Mobile App"} logo={mobile} select={handleSelectMobileApp} isSelected={teamTypes[1].selected} />
        <TeamTypeSelect teamType={"Growth"} logo={diagram} select={handleSelectGrowth} isSelected={teamTypes[2].selected} />

      </div>
      <div className={styles.row}>
        <TeamTypeSelect teamType={"Marketing Website"} logo={keyboardOpen} select={handleSelectMarketingWebsite} isSelected={teamTypes[3].selected} />
        <TeamTypeSelect teamType={"Prototyping"} logo={box} select={handleSelectPrototyping} isSelected={teamTypes[4].selected} />
        <TeamTypeSelect teamType={"Data"} logo={driver} select={handleSelectData} isSelected={teamTypes[5].selected} />


      </div>
      <div className={styles.row}>
        <TeamTypeSelect teamType={"Custom Team"} logo={dottedBox} select={handleSelectCustomTheme} isSelected={teamTypes[6].selected} />

      </div>

    </div>


  )
}
