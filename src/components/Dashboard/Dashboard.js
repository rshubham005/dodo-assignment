import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineFall } from "react-icons/ai";
import LineChart from "../LineChart/LineChart";
import BarGraph from "../BarGraph/BarGraph";
import PieChart from "../PieChart/PieChart";
function Dashboard() {
  const [time, setTime] = useState("Today");
  let revenueData = [
    {
      id: "japan",
      color: "rgba(82, 96, 98, 1)",
      data: [
        {
          x: "Jan",
          y: 10,
        },
        {
          x: "Feb",
          y: 15,
        },
        {
          x: "Mar",
          y: 15,
        },
        {
          x: "Apr",
          y: 19,
        },
        {
          x: "May",
          y: 22,
        },
        {
          x: "Jun",
          y: 24,
        },
        {
          x: "Jul",
          y: 24,
        },
      ],
    },
  ];
  const BarGraphData = [
    { referrer: 'YouTube', value: 200000 },
    { referrer: 'Twitter', value: 250000 },
    { referrer: 'Reddit', value: 220000 },
    { referrer: 'Indiehacker', value: 120000 }
  ];
  let pieChartData = [
    {
      "id": "usa",
      "label": "United States",
      "value": 257,
      "color": "hsla(183, 81%, 23%, 1)"
    },
    {
      "id": "Canada",
      "label": "Canada",
      "value": 316,
      "color": "hsla(80, 94%, 66%, 1)"
    },
    {
      "id": "Europe",
      "label": "Europe",
      "value": 596,
      "color": "hsla(21, 82%, 65%, 1)"
    },
    {
      "id": "Other",
      "label": "Other",
      "value": 366,
      "color": "hsla(188, 9%, 35%, 1)"
    }
  ]
  return (
    <div>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={time}
        variant="standard"
        style={{ border: "none" }}
        onChange={(e) => setTime(e.target.value)}
        label="Age"
      >
        <MenuItem value="Today">Today</MenuItem>
        <MenuItem value="Last Month">Last Month</MenuItem>
        <MenuItem value="Last 30 days">Last 30 Days</MenuItem>
        <MenuItem value="Last 90 days">Last 90 Days</MenuItem>
      </Select>

      <div className="dashboard_box_container">
        <div className="dashboard_box_yellow">
          <p className="box_title">Revenue</p>
          <div className="box_text_box">
            <p className="box_text1">$24M</p>
            <p className="box_text2">
              +11.01% <AiOutlineRise />
            </p>
          </div>
        </div>{" "}
        <div className="dashboard_box">
          <p className="box_title">Transaction</p>
          <div className="box_text_box">
            <p className="box_text1">14K</p>
            <p className="box_text2">
              -0.03%
              <AiOutlineFall />
            </p>
          </div>
        </div>
        <div className="dashboard_box_yellow">
          <p className="box_title">Average transaction</p>
          <div className="box_text_box">
            <p className="box_text1">$2K</p>
            <p className="box_text2">
              +15.03% <AiOutlineRise />
            </p>
          </div>
        </div>
        <div className="dashboard_box">
          <p className="box_title">Refunds</p>
          <div className="box_text_box">
            <p className="box_text1">1K</p>
            <p className="box_text2">
              +6.08%
              <AiOutlineRise />
            </p>
          </div>
        </div>
      </div>
      <div className="line_charts">
        <div className="line_chart_boxes">
          <p className="chart_title">Revenue</p>
          <LineChart data={revenueData} />
        </div>
        <div className="line_chart_boxes">
          <p className="chart_title">Number of Transactions</p>
          <LineChart data={revenueData} />
        </div>
      </div>
      <div className="line_charts">
        <div className="line_chart_boxes">
          <p className="chart_title">Transaction Value by Referrer (in $)</p>
          <BarGraph data={BarGraphData}/>
        </div>
        <div className="line_chart_boxes">
          <p className="chart_title">Number of Transactions</p>
          <PieChart data={pieChartData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
