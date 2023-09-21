"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import {
  MdOutlineNavigateNext,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { motion } from "framer-motion";
import { months } from "./constants";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
const DailyExpense = () => {
  const [currentDay, setCurrentDay] = useState(dayjs());

  function addNextDay() {
    setCurrentDay(currentDay.add(1, "day"));
  }

  function getPrevDay() {
    setCurrentDay(currentDay.subtract(1, "day"));
  }

  const getCurrentDate = (dateObj: any) => {
    const date = dateObj.date();
    const day = dateObj.day();
    const month = dateObj.month();
    const year = dateObj.year();
    return {
      date,
      day,
      month,
      year,
    };
  };
  const { date, month, year } = getCurrentDate(currentDay);

  return (
    <>
      <main className="p-1 ">
        <section className="bg-black p-2 rounded-lg flex items-center justify-between">
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
          >
            <Button
              onClick={getPrevDay}
              className="bg-white"
              variant="outline"
              size="icon"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </motion.button>
          <div className="flex items-center justify-center gap-2">
            <span className="text-white">{date}</span>
            <span className="text-white">{months[month]}</span>
            <span className="text-white">{year}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white">Balance</span>
            <span className="text-white">56,000</span>
          </div>
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
          >
            <Button
              onClick={addNextDay}
              className="bg-white"
              variant="outline"
              size="icon"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </motion.button>
        </section>
      </main>
      <IncomeSection />
    </>
  );
};

const IncomeSection = () => {
  return (
    <>
      <div className="flex mt-10 bg-[#020617] text-white justify-between p-3 rounded-md">
        <span>Total Income (Credit)</span>
        <p>600</p>
      </div>
    </>
  );
};
export default DailyExpense;
