import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import Heading from "~/components/Heading";
import stylesUrl from "~/styles/index.css";
import invoices from "~/data.json";
import { useLoaderData } from "@remix-run/react";
import NoInvoices from "~/components/NoInvoices";
import SideNav from "~/components/SideNav";
import type { Invoice } from "~/models/Invoice";
import {InvoiceList} from "~/components/InvoiceList";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async () => {
  const updatedInvoices = invoices.map((i: any) => handleCurrency(i));
  return json(await Promise.all(updatedInvoices));
};

const handleCurrency = async (i: Invoice ) => {
  const country = i.clientAddress.country;
  return await fetch(
    `http://restcountries.com/v2/name/${country}?fullText=true`
  )
    .then((res) => {
      const data = res?.json();
      return data;
    })
    .then((x) => {
      const currency = x[0]?.currencies[0];
      i["currencies"] = currency;
      return i;
    });
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div className="app-grid">
      <SideNav />
      <Heading count={data.length} />
      {data.length > 0 ? <InvoiceList invoices={data} /> : <NoInvoices />}
    </div>
  );
}

