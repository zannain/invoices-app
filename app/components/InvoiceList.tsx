import InvoiceComponent from "./Invoice";
import type { Invoice } from "~/models/Invoice";
import PropTypes from 'prop-types'

export default function InvoiceList(props: any) {
  const { invoices } = props;
  return invoices.map((invoice: Invoice) => <InvoiceComponent key={invoice.id} invoice={invoice} /> )
}

InvoiceList.prototype = {
  props: PropTypes.object,
  invoices: PropTypes.object
}