import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const data = [
  { date: "Aug 01", recurring: 280, oneShot: 180 },
  { date: "Aug 02", recurring: 220, oneShot: 160 },
  { date: "Aug 03", recurring: 320, oneShot: 200 },
  { date: "Aug 04", recurring: 270, oneShot: 140 },
  { date: "Aug 05", recurring: 230, oneShot: 190 },
  { date: "Aug 06", recurring: 310, oneShot: 210 },
  { date: "Aug 07", recurring: 290, oneShot: 170 },
  { date: "Aug 08", recurring: 260, oneShot: 160 },
  { date: "Aug 09", recurring: 320, oneShot: 190 },
  { date: "Aug 10", recurring: 280, oneShot: 150 },
  { date: "Aug 11", recurring: 230, oneShot: 170 },
  { date: "Aug 12", recurring: 310, oneShot: 190 },
  { date: "Aug 13", recurring: 300, oneShot: 180 },
  { date: "Aug 14", recurring: 230, oneShot: 160 },
  { date: "Aug 15", recurring: 320, oneShot: 200 }
];

const formatYAxis = (value) => `${value / 100} hour${value / 100 > 1 ? "s" : ""}`;

const StudentTypesChart = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-xl shadow-md min-h-[320px]">
      <div className=" md:w-1/2 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Students Types</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip formatter={(value) => `${value / 100} hours`} />
            <Legend />
            <Bar dataKey="recurring" fill="#00C49F" name="Recurring" />
            <Bar dataKey="oneShot" fill="#0088FE" name="One Shot" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Calendar</h2>
        <div className="flex-1">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default StudentTypesChart;
