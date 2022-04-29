import Invoice from "./Invoice";

export function InvoiceList({ invoices }) {
  return (
    <div className="invoice-grid">
      {invoices?.map((i) => {
        return <Invoice key={i.id} invoice={i} />;
      })}
    </div>
  );
}
