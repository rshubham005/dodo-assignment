// BarGraph.js
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { referrer: "YouTube", value: 2000, color: "rgba(82, 96, 98, 1)" },
  { referrer: "Twitter", value: 2500, color: "rgba(239, 142, 91, 1)" },
  { referrer: "Reddit", value: 2200, color: "rgba(11, 100, 104, 1)" },
  { referrer: "Indiehacker", value: 1200, color: "rgba(82, 96, 98, 1)" },
];

const BarGraph = () => (
  <ResponsiveBar
    data={data}
    keys={["value"]}
    indexBy="referrer"
    margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
    padding={0.45}
    layout="vertical"
    colors={{ scheme: "set2" }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Value",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    borderRadius={8}
    labelSkipWidth={12}
    labelSkipHeight={12}
    enableLabel={false}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default BarGraph;
