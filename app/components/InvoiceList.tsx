import InvoiceComponent from "./Invoice";
import PropTypes from 'prop-types'
import type { Invoice } from "~/models/Invoice";


export function InvoiceList({ invoices }: { invoices: Invoice[] }) {
  return (
    <div className="invoices-grid">
      {invoices?.map((i: Invoice) => {
        return <InvoiceComponent key={i.id} invoice={i} />;
      })}
    </div>
  );
}
InvoiceList.prototype = {
  invoices: PropTypes.array
};