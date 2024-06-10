// "use client";

import Separator from "@/components/Seperator/Seperator";
import TransactionItem from "@/components/Transaction-item/Transaction-item";
import TransactionSummaryItem from "@/components/TransactionSummery/TransactionSummery";

// import Button from "@/components/Button/Button";
// import Separator from "@/components/Seperator/Seperator";
// import TransactionItem from "@/components/Transaction-item/Transaction-item";
// import TransactionSummaryItem from "@/components/TransactionSummery/TransactionSummery";
// import { Loader } from "lucide-react";
// import { useState } from "react";

// const groupAndSumTransactionsByDate = (transactions) => {
//   const grouped = {};
//   for (const transaction of transactions) {
//     const date = transaction.created_at.split("T")[0];
//     if (!grouped[date]) {
//       grouped[date] = { transactions: [], amount: 0 };
//     }
//     grouped[date].transactions.push(transaction);
//     const amount =
//       transaction.type === "Expense" ? -transaction.amount : transaction.amount;
//     grouped[date].amount += amount;
//   }
//   return grouped;
// };

// async function fetchTransactions(range, offset = 0, limit = 10) {
//   const supabase = createClient();
//   let { data, error } = await supabase.rpc("fetch_transactions", {
//     limit_arg: limit,
//     offset_arg: offset,
//     range_arg: range,
//   });
//   if (error) throw new Error("We can't fetch transactions");
//   return data;
// }
// export default function TransactionList({ range, initialTransactions }) {
//   const [transactions, setTransactions] = useState(initialTransactions);
//   const [buttonHidden, setButtonHidden] = useState(
//     initialTransactions.length === 0
//   );
//   const [loading, setLoading] = useState(false);
//   const grouped = groupAndSumTransactionsByDate(transactions);

//   const handleClick = async () => {
//     setLoading(true);
//     let nextTransactions = null;
//     try {
//       nextTransactions = await fetchTransactions(
//         range,
//         transactions.length,
//         10
//       );
//       setButtonHidden(nextTransactions.length === 0);
//       setTransactions((prevTransactions) => [
//         ...prevTransactions,
//         ...nextTransactions,
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRemoved = (id) => () => {
//     setTransactions((prev) => [...prev].filter((t) => t.id !== id));
//   };

//   return (
//     <div className="space-y-8">
//       {Object.entries(grouped).map(([date, { transactions, amount }]) => (
//         <div key={date}>
//           <TransactionSummaryItem date={date} amount={amount} />
//           <Separator />
//           <section className="space-y-4">
//             {transactions.map((transaction) => (
//               <div key={transaction.id}>
//                 <TransactionItem
//                   {...transaction}
//                   onRemoved={handleRemoved(transaction.id)}
//                 />
//               </div>
//             ))}
//           </section>
//         </div>
//       ))}
//       {transactions.length === 0 && (
//         <div className="text-center text-gray-400 dark:text-gray-500">
//           No transactions found
//         </div>
//       )}
//       {!buttonHidden && (
//         <div className="flex justify-center">
//           <Button variant="ghost" onClick={handleClick} disabled={loading}>
//             <div className="flex items-center space-x-1">
//               {loading && <Loader className="animate-spin" />}
//               <div>Load More</div>
//             </div>
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }

const groupAndSumTransactionsByDate = (transactions) => {
  const grouped = {};
  for (const transaction of transactions) {
    const date = transaction.created_at.split("T")[0];
    if (!grouped[date]) {
      grouped[date] = { transactions: [], amount: 0 };
    }
    grouped[date].transactions.push(transaction);
    const amount =
      transaction.type === "Expense" ? -transaction.amount : transaction.amount;
    grouped[date].amount += amount;
  }
  return grouped;
};
export default async function TransactionList() {
  const res = await fetch("http://localhost:3100/transactions");
  const transactions = await res.json();
  const grouped = groupAndSumTransactionsByDate(transactions);
  return (
    <div>
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div key={date}>
          <TransactionSummaryItem date={date} amount={amount} />
          <Separator />
          <section className="space-y-4">
            {transactions.map((item) => (
              <div key={item.id}>
                <TransactionItem
                  type={item.type}
                  amount={item.amount}
                  category={item.category}
                  description={item.description}
                />
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
}
