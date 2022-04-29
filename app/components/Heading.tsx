import Button from "./Button";
import ArrowDown from "public/assets/icon-arrow-down.svg";

function Heading({ count }) {
  return (
    <div className="heading-grid">
      <div>
        <h1 className="text-xxxl">Invoices</h1>
        <p className="text-sm color-secondary-100">
          {count > 0 ? `There are ${count} total invoices.`: "No Invoices" }
        </p>
      </div>
      <div className="heading-right-grid">
        <div className="filter-dropdown">
          <p>Filter by status</p>
          <img className="svg-icon" src={ArrowDown} alt="arrow down" />
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Heading;
