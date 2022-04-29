import type { LinksFunction } from "@remix-run/node";

function Invoice({ invoice }) {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
      <div className="invoice-row">
        <h4>
          <span className="color-secondary-100">#</span>
          {invoice.id}
        </h4>
        <p className="color-secondary-100">Due {invoice.paymentDue}</p>
        <p className="color-secondary-100">{invoice.clientName}</p>
        <p className="invoice-total">{invoice.total}</p>
        <p className={invoice.status == 'pending'? 'color-warning': 'color-success'}>{capitalizeFirstLetter(invoice.status)}</p>
        <div><span className="caret right"></span></div>
      </div>
  );
}

export default Invoice;
