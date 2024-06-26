import { useFormatCurrency } from "@/hooks/use-format-currency";
import { HandCoins, Landmark, PiggyBank, Wallet } from "lucide-react";
import React from "react";

const TransactionItem = ({ type, category, description, amount }) => {
  const formattedAmount = useFormatCurrency(amount);
  const typesMap = {
    Income: {
      icon: HandCoins,
      color: "text-green-500 dark:text-green-400",
    },
    Expense: {
      icon: Wallet,
      color: "text-red-500 dark:text-red-400",
    },
    Saving: {
      icon: PiggyBank,
      color: "text-indigo-500 dark:text-indigo-400",
    },
    Investment: {
      icon: Landmark,
      color: "text-yellow-500 dark:text-yellow-400",
    },
  };

  const IconComponent = typesMap[type].icon;
  const colors = typesMap[type].color;

  return (
    <div className="w-full flex items-center">
      <div className="flex items-center mr-4 grow">
        <IconComponent className={`${colors} mr-2 w-4 h-4 hidden sm:block`} />
        <span>{description}</span>
      </div>
      <div className="min-w-[150px] items-center hidden md:flex">
        {category && (
          <div className="rounded-md text-xs bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
            {category}
          </div>
        )}
      </div>
      <div className="min-w-[70px] text-right">{formattedAmount}</div>
      <div className="min-w-[50px] flex justify-end items-center">...</div>
    </div>
  );
};

export default TransactionItem;
