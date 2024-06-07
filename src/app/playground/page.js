import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import Select from "@/components/Select/Select";
import TransactionItem from "@/components/Transaction-item/Transaction-item";
import TransactionSummeryItem from "@/components/TransactionSummery/TransactionSummery";
import PageHeader from "@/components/pageHeader/pageHeader";
import Trend from "@/components/trend/trend";
import React from "react";

const Page = () => {
  return (
    <main
      className="space-y-8 mb-32
  "
    >
      <h1 className="text-4xl mt-8">Playground</h1>
      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div>
          <PageHeader />{" "}
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="flex space-x-8">
          <Trend type={"Income"} amount={1000} prevAmount={900} />
          <Trend type={"Expense"} amount={1000} prevAmount={12000} />
          <Trend type={"Investment"} amount={1000} prevAmount={300} />
          <Trend type={"Saving"} amount={1000} prevAmount={5482} />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-mono">Transaction Item</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionItem
            type={"Income"}
            description={"Salary"}
            amount={2000}
          />
          <TransactionItem
            type={"Expense"}
            description={"Going out to eat"}
            category={"Food"}
            amount={50}
          />
          <TransactionItem
            type={"Saving"}
            description={"For children"}
            amount={400}
          />
          <TransactionItem
            type={"Investment"}
            description={"In Microsoft"}
            amount={800}
          />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-mono">Buttons</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-x-4">
          <Button>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>
          <Button size="xs">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="lg">Hello</Button>
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div
          className="grid grid-cols-2 gap-4
        "
        >
          <div>
            <Label>Your name</Label>
            <Input type="text" placeholder="Type SomeThing here..." />
          </div>
          <div>
            <Label>City</Label>
            <Select>
              <option value="Tehran">Tehran</option>
              <option value="Tehran">New York</option>
              <option value="Tehran">Vegas</option>
              <option value="Tehran">London</option>
            </Select>
          </div>
          <div className="flex gap-2 items-center">
            <Input type="checkbox" id="terms" />
            <Label htmlFor="terms">Accept terms</Label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
