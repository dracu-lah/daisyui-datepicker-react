import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useFormContext, Controller } from "react-hook-form";

const CustomDatePicker = ({ name, btnText }) => {
  const { control, setValue } = useFormContext();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  useEffect(() => {
    setValue(name, new Date());
  }, [name, setValue]);

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setSelectedYear(year);
    setSelectedMonth(0); // Reset to January when year changes
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month.getMonth());
  };

  const years = Array.from(
    new Array(100),
    (val, index) => new Date().getFullYear() - index,
  );

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {btnText}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1]  p-2 shadow"
      >
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <DayPicker
              mode="single"
              selected={field.value}
              onSelect={(date) => field.onChange(date)}
              onMonthChange={handleMonthChange}
              month={new Date(selectedYear, selectedMonth)}
            />
          )}
        />
      </ul>
    </div>
  );
};

export default CustomDatePicker;
