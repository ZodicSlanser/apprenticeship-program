import React, { useState } from 'react'
import styles from '../styles/TeamTypePanel.module.css';
import monitor from '../assets/monitor.svg';
import mobile from '../assets/mobile.svg';
import diagram from '../assets/diagram.svg';
import keyboardOpen from '../assets/keyboard-open.svg';
import driver from '../assets/driver.svg';
import dottedBox from '../assets/dotted-box.svg';
import box from '../assets/box.svg';
import infoCircle from '../assets/info-circle.svg';
import TeamTypeSelect from './TeamTypeSelect';
export default function TeamType() {
  const [selectedWeb, setSelectedWeb] = useState(false)
  const [selectedMobile, setSelectedMobile] = useState(false)
  const [selectedGrowth, setSelectedGrowth] = useState(false)
  const [selectedMarketingWebsite, setSelectedMarketingWebsite] = useState(false)
  const [selectedPrototyping, setSelectedPrototyping] = useState(false)
  const [selectedData, setSelectedData] = useState(false)
  const [selectedCustomTeam, setSelectedCustomTeam] = useState(false)
  const selectedTypes=[selectedWeb,selectedMobile,selectedGrowth,selectedMarketingWebsite,selectedPrototyping,selectedData,selectedCustomTeam]
  const panelHighlight = ():boolean|undefined => {
    
    return selectedTypes.every((type) => !type)
  }
  const handleSelectWebPlatform = (): void => {
    setSelectedWeb(!selectedWeb)

  }
  const handleSelectMobileApp = (): void => {
    setSelectedMobile(!selectedMobile)
  }
  const handleSelectGrowth = (): void => {
    setSelectedGrowth(!selectedGrowth)
  }
  const handleSelectMarketingWebsite = (): void => {
    setSelectedMarketingWebsite(!selectedMarketingWebsite)
  }
  const handleSelectPrototyping = (): void => {
    setSelectedPrototyping(!selectedPrototyping)
  }
  const handleSelectData = (): void => {
    setSelectedData(!selectedData)
  }
  const handleSelectCustomTheme = (): void => {
    setSelectedCustomTeam(!selectedCustomTeam)
  }
  const teamTypes = [ // array of objects defining the team types along with their logo
    {
      type: 'Web Platform',
      logo: monitor,
      selected: false
    },
    {
      type: 'Mobile App',
      logo: mobile,
      selected: false
    },
    {
      type: 'Growth',
      logo: diagram,
      selected: false
    },
    {
      type: 'Marketing Website',
      logo: keyboardOpen,
      selected: false
    },
    {
      type: 'Prototyping',
      logo: box,
      selected: false

    },
    {
      type: 'Data',
      logo: driver,
      selected: false
    },
    {
      type: 'Custom Team',
      logo: dottedBox,
      selected: false
    }
  ]


  return (
    panelHighlight() ? (
      <div className={styles['panel']}>
        <div className={styles.panelHeader}>
          Team Type
          <img src={infoCircle} alt="info-circle" onMouseEnter={() => { setTimeout(() => console.log('Team type'), 1000) }} />
        </div>
        <div className={styles.row}>

          <TeamTypeSelect teamType={teamTypes[0].type} logo={teamTypes[0].logo} select={handleSelectWebPlatform} isSelected={selectedWeb} />
          <TeamTypeSelect teamType={teamTypes[1].type} logo={teamTypes[1].logo} select={handleSelectMobileApp} isSelected={selectedMobile} />
          <TeamTypeSelect teamType={teamTypes[2].type} logo={teamTypes[2].logo} select={handleSelectGrowth} isSelected={selectedGrowth} />

        </div>
        <div className={styles.row}>
          <TeamTypeSelect teamType={teamTypes[3].type} logo={teamTypes[3].logo} select={handleSelectMarketingWebsite} isSelected={selectedMarketingWebsite} />
          <TeamTypeSelect teamType={teamTypes[4].type} logo={teamTypes[4].logo} select={handleSelectPrototyping} isSelected={selectedPrototyping} />
          <TeamTypeSelect teamType={teamTypes[5].type} logo={teamTypes[5].logo} select={handleSelectData} isSelected={selectedData} />


        </div>
        <div className={styles.row}>
          <TeamTypeSelect teamType={teamTypes[6].type} logo={teamTypes[6].logo} select={handleSelectCustomTheme} isSelected={selectedCustomTeam} />

        </div>

      </div>
    ) : (
      <div className={styles['panel-selected']}>
        <div>
          Team Type
          <img onMouseEnter={() => { setTimeout(() => console.log('Team type'), 1000) }} src={infoCircle} alt="info-circle" />
        </div>
        <div className={styles.row}>
          <TeamTypeSelect teamType={teamTypes[0].type} logo={teamTypes[0].logo} select={handleSelectWebPlatform} isSelected={selectedWeb} />
          <TeamTypeSelect teamType={teamTypes[1].type} logo={teamTypes[1].logo} select={handleSelectMobileApp} isSelected={selectedMobile} />
          <TeamTypeSelect teamType={teamTypes[2].type} logo={teamTypes[2].logo} select={handleSelectGrowth} isSelected={selectedGrowth} />



        </div>
        <div className={styles.row}>
          <TeamTypeSelect teamType={teamTypes[3].type} logo={teamTypes[3].logo} select={handleSelectMarketingWebsite} isSelected={selectedMarketingWebsite} />
          <TeamTypeSelect teamType={teamTypes[4].type} logo={teamTypes[4].logo} select={handleSelectPrototyping} isSelected={selectedPrototyping} />
          <TeamTypeSelect teamType={teamTypes[5].type} logo={teamTypes[5].logo} select={handleSelectData} isSelected={selectedData} />


        </div>
        <div className={styles.row}>
          <TeamTypeSelect teamType={teamTypes[6].type} logo={teamTypes[6].logo} select={handleSelectCustomTheme} isSelected={selectedCustomTeam} />

        </div>

      </div>
    )
  )
}