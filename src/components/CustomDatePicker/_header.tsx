import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import moment from "moment";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";

const Header = ({
  date,
  decreaseMonth,
  increaseMonth,
  decreaseYear,
  increaseYear,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  showYearPicker,
  setShowYearPicker,
}: ReactDatePickerCustomHeaderProps & {
  showYearPicker: boolean;
  setShowYearPicker: (flag: boolean) => void;
}) => {
  return (
    <div className="text-white">
      <div className="text-left ml-1 mb-6">
        <div className="text-base mb-1">Text</div>
        <div className="text-[2rem] leading-[1.375] font-bold">
          {moment(date).format("MMM, YYYY")}
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={showYearPicker ? decreaseYear : decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => setShowYearPicker(!showYearPicker)}
          className="text-base"
        >
          {moment(date).format(showYearPicker ? "YYYY" : "MMMM YYYY")}
        </button>
        <button
          onClick={showYearPicker ? increaseYear : increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
export default Header;
