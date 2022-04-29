import EmptyIllustration from 'public/assets/illustration-empty.svg'
export default function NoInvoices() {
  return (
    <div>
      <img src={EmptyIllustration} alt="No invoices" />
    </div>
  );
}
