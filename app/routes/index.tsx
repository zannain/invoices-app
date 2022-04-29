import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import Heading from "~/components/Heading";
import { InvoiceList } from "~/components/InvoiceList";
import stylesUrl from "~/styles/index.css";
import invoices from "~/data.json";
import { useLoaderData } from "@remix-run/react";
import NoInvoices from "~/components/NoInvoices";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async () => {
  const updatedInvoices = invoices.map((i) => handleCurrency(i));
  return json(await Promise.all(updatedInvoices));
};

const handleCurrency = async (i) => {
  const country = i.clientAddress["country"];
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
    <>
      <Heading count={data.length} />
      {data.length > 0 ? <InvoiceList invoices={data} /> : <NoInvoices />}
    </>
  );
}
