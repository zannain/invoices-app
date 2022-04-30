import PlusIcon from "public/assets/icon-plus.svg";
function Button() {
  return (
    <div className="button-wrapper">
      <img src={PlusIcon} alt="check icon" className="check-icon" />
      <button className="button color-white">New Invoice</button>
    </div>
  );
}

export default Button;
