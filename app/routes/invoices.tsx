import { Outlet } from "@remix-run/react";
import Heading from "~/components/Heading";

export default function InvoicesRoute() {
  return (
    <div>
        <Heading />
        <Outlet />
    </div>
  )
}
