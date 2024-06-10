import Skeleton from "@/components/Skeleton/Skeleton";
import React from "react";

const TransactionListFallBack = () => {
  return (
    <div>
      <TransactionSeleckton />
      <TransactionSeleckton />
      <TransactionSeleckton />
      <TransactionSeleckton />
    </div>
  );
};

export default TransactionListFallBack;

const TransactionSeleckton = () => {
  return (
    <div className="w-full flex items-center space-x-4">
      <div className="flex items-center mr-4 grow">
        <Skeleton />
      </div>
      <div className="min-w-[150px] items-center hidden md:flex">
        <Skeleton />
      </div>
      <div className="min-w-[70px] text-right">
        <Skeleton />
      </div>
      <div className="min-w-[50px] flex justify-end items-center">
        <Skeleton />
      </div>
    </div>
  );
};
