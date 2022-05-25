import PlusIcon from "public/assets/icon-plus.svg";
import type { InferProps } from "prop-types";
import PropTypes  from "prop-types";


function ButtonComponent({text, action, displayIcon}: InferProps<typeof ButtonComponent.propTypes>)  {
  const getActionStyle = (action: string | null | undefined) => {
    switch(action) {
      case "success":
        return "button bg-success"
        case "warning":
          return "button bg-warning"
        default:
          return "button bg-primary"
    }
  }
  return (
    <div className="button-wrapper">
      {displayIcon && <img src={PlusIcon} alt="check icon" className="check-icon" />}
      <button className={getActionStyle(action)}>{text}</button>
    </div>
  );
}


ButtonComponent.propTypes = {
  text: PropTypes.string,
  action: PropTypes.string,
  displayIcon: false
};
export default ButtonComponent;
