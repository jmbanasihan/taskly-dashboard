import ProgressCard from "./ProgressCard";
import React from "react";

const Progress = () => (
  <div className="w-full mx-auto p-6 mt-10">
    <div className="flex items-center justify-between font-medium">
      <h2 className="sm:text-xl text-sm text-gray">In Progress</h2>
      <p className="sm:text-sm text-xs text-blue cursor-pointer hover:underline">
        Show all
      </p>
    </div>
    <ProgressCard width="75" bgColor="bg-orange" taskName="Business Proposal" />
    <ProgressCard width="55" bgColor="bg-blue-200" taskName="Meet Investors" />
    <ProgressCard
      width="65"
      bgColor="bg-green"
      taskName="Review Marketing Materials"
    />
    <ProgressCard
      width="70"
      bgColor="bg-purple"
      taskName="Review Business Plan"
    />
  </div>
);

export default Progress;
