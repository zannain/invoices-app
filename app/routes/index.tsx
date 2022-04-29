import type { LinksFunction } from "@remix-run/node";
import Heading from "~/components/Heading";
import {InvoiceList} from "~/components/InvoiceList";
import stylesUrl from "~/styles/index.css";
import invoices from "~/data.json";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    ];
};

export default function Index() {
  return (
    <div className="app-grid">
      <Heading count={invoices.length} />
      <InvoiceList invoices={invoices} />

    </div>
  );
}
