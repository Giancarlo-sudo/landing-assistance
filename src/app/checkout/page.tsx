import { Suspense } from "react";
import { CheckoutClient } from "./components";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <CheckoutClient />
    </Suspense>
  );
}
