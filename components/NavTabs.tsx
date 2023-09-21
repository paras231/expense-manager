import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DailyExpense from "./DailyExpense";

const NavTabs = () => {
  return (
    <>
      <Tabs defaultValue="daily" className="">
        <TabsList className="bg-blue-600 w-full">
          <TabsTrigger className="text-white" value="daily">
            Daily
          </TabsTrigger>
          <TabsTrigger className="text-white" value="monthly">
            Monthly
          </TabsTrigger>
          <TabsTrigger className="text-white" value="yearly">
            Yearly
          </TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <DailyExpense />
        </TabsContent>
        <TabsContent value="monthly">monthly expense</TabsContent>
        <TabsContent value="yearly">yearly expense</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
};

export default NavTabs;
