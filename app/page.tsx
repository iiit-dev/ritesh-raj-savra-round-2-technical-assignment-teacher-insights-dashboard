import React from "react";
import ChartBarInteractive from "@/components/ChartBarInteractive";
import ChartPieLabelList from "@/components/ChartPieLabelList";
import ChartAreaDefault from "@/components/ChartAreaDefault";
const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 2xl:col-span-4">
        <ChartBarInteractive />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <ChartPieLabelList />
      </div>
         <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <ChartAreaDefault />
      </div>
    </div>
  );
};

export default Homepage;