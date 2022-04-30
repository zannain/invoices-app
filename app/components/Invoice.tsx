import ArrowDown from "public/assets/icon-arrow-down.svg";
import Status from "./Status";
import type { Invoice } from "~/models/Invoice";
import PropTypes from 'prop-types'
function InvoiceComponent(props: {invoice: Invoice}) {
  const formattedDate = (invoice: Invoice) => {
    let d = new Date(invoice.paymentDue);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da} ${mo} ${ye}`
  }
  var invoice = props["invoice"];
    return (
      <div className="invoice-row">
        <h4>
          <span className="color-secondary-100">#</span>
          {invoice.id}
        </h4>
        <p className="color-secondary-100">Due {formattedDate(invoice)}</p>
        <p className="color-secondary-100">{invoice?.clientName}</p>
        <p className="invoice-total">
          {invoice?.currencies?.symbol}
          <span className="m-l-10">{invoice?.total}</span>
        </p>
        <Status status={invoice?.status} />
        <img src={ArrowDown} alt="Arrow Down" className="arrow-down-icon" />
      </div>
    );

  }
InvoiceComponent.propTypes = {
  invoices: PropTypes.object
};
export default InvoiceComponent;