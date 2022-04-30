import Button from "./Button";
import ArrowDown from "public/assets/icon-arrow-down.svg";
import type { InferProps } from "prop-types";
import PropTypes from "prop-types";

function Heading(props: InferProps<typeof Heading.propTypes>) {
  const {count} = props;
  return (
    <div className="heading-grid">
      <div>
        <h1 className="text-xxxl">Invoices</h1>
        <p className="text-sm color-secondary-100">
          {count && count > 0 ? `There are ${count} total invoices.`: "No Invoices" }
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
Heading.propTypes = {
  count: PropTypes.number
}
export default Heading;
