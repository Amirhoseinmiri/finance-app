import React from "react";
import TrendCom from "@/components/trend/trend";
const Trend = async ({ type }) => {
  const response = await fetch(`http://localhost:3100/trend/${type}`);
  const { amount, prevAmount } = await response.json();
  return <TrendCom type={type} amount={amount} prevAmount={prevAmount} />;
};

export default Trend;
