import EmptyIllustration from 'public/assets/illustration-empty.svg'
export default function NoInvoices() {
  return (
    <div className="no-invoices">
      <img src={EmptyIllustration} alt="No invoices" />
      <h2 className="text-xxl">There is nothing here</h2>
      <p className="text-sm">
        Create an invoice by clicking the <strong>New Invoice</strong> button and get started
      </p>
    </div>
  );
}
