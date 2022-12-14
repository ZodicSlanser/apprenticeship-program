import { FC, memo } from "react";
import styles from "./TeamTypePanel.module.css";
import untickCircle from "../../Assets/TeamType/untick-circle.svg";
import tickCircle from "../../Assets/TeamType/tick-circle.svg";
interface TeamTypeSelectProps {
  teamType: string;
  logo: string;
  select: () => void;
  isSelected: boolean;
}
export const TeamTypeSelect: FC<TeamTypeSelectProps> = ({
  teamType,
  logo,
  select,
  isSelected,
}) => {
  return (
    <div className={styles.column}>
      <div
        className={
          isSelected ? styles["team-type-selected"] : styles["type-button"]
        }
        onClick={select}
      >
        <div className={styles.buttonInfo}>
          <img src={logo} alt="logo" />
          {teamType}
        </div>
        <img src={isSelected ? tickCircle : untickCircle} alt="tick-circle" />
      </div>
    </div>
  );
};
export default memo(TeamTypeSelect);
