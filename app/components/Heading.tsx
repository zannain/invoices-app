import Button from "./Button";

function Heading({count}) {
  return (
    <div className="heading-grid">
      <div>
        <h1 className="text-xxxl">Invoices</h1>
        <p className="text-sm color-secondary-100">There are {count} total invoices </p>
      </div>
      <div className="heading-right-grid">
        <p className="filter-status">
          Filter by status
          <span className="m-l-10 caret bottom"></span>
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Heading;
