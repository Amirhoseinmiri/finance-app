import { Suspense } from "react";
import TransactionList from "./components/transactionList";
import TransactionListFallBack from "./components/TransactionListFallBack";
import Trend from "./components/trend";

const Page = () => {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense>
          <Trend type={"Income"} />
        </Suspense>
        <Suspense>
          <Trend type={"Expense"} />
        </Suspense>
        <Suspense>
          <Trend type={"Saving"} />
        </Suspense>
        <Suspense>
          <Trend type={"Investment"} />
        </Suspense>
      </section>
      <Suspense fallback={<TransactionListFallBack />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default Page;
