import React, { FC, useState } from 'react'
import styles from '../styles/TeamTypePanel.module.css'
import untickCircle from '../assets/untick-circle.svg';
import tickCircle from '../assets/tick-circle.svg';
interface TeamTypeSelectProps {
    teamType: string,
    logo: string,
    select?: () => void,
    isSelected: boolean
}
export const TeamTypeSelect: FC<TeamTypeSelectProps> = ({ teamType, logo, select, isSelected },tickID) => {
    return (
        <div className={styles.column}>
            <div className={isSelected ? styles['team-type-selected'] : styles['type-button']} onClick={select}>
                <img src={isSelected ? tickCircle : untickCircle} alt="tick-circle" />
                <span> <img src={logo} alt="logo" /></span>

                <span>{teamType}</span>
            </div>
        </div>
    )
}
export default TeamTypeSelect
