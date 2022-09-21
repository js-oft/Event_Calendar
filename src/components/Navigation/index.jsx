import React from "react";
import { monthAndYear } from "../../utils/formatters";
import { NavigationContainer } from "./style";

const Navigation = ({ date, setDate, setShowingEventForm }) => {
  const newDate = new Date(date);

  return (
    <NavigationContainer>
      <NavigationContainer.DoubleLeft
        onClick={() => {
          newDate.setFullYear(newDate.getFullYear() - 1);

          setDate(newDate);
        }}
      />

      <NavigationContainer.Right
        onClick={() => {
          newDate.setMonth(newDate.getMonth() - 1);
          setDate(newDate);
        }}
      />

      <div>{monthAndYear(newDate)}</div>

      <NavigationContainer.Left
        onClick={() => {
          newDate.setMonth(newDate.getMonth() + 1);
          setDate(newDate);
        }}
      />

      <NavigationContainer.DoubleRight
        onClick={() => {
          newDate.setFullYear(newDate.getFullYear() + 1);
          setDate(newDate);
        }}
      />
    </NavigationContainer>
  );
};
export default Navigation;
