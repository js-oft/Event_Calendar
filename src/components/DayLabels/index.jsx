import React from "react";
import { WEEK_DAYS_SHORT } from "../../utils/formatters";
import { HeaderCell } from "./style";

const DayLabels = () => {
  return WEEK_DAYS_SHORT?.map((dayLabel, index) => {
    return <HeaderCell key={index}>{dayLabel}</HeaderCell>;
  });
};

export default DayLabels;
