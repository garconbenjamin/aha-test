import React, { useState } from "react";

import Header from "./_header";
import Footer from "./_footer";
import moment from "moment";
import DatePicker from "react-datepicker";
import Input from "../Input";

const CustomDatePicker = (props: { label: string }) => {
  const { label } = props;
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [open, setOpen] = useState(false);
  const [tempDate, setTempDate] = useState<Date | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <DatePicker
        customInput={<Input label={label} editable={true} />}
        placeholderText="mm/dd/yyyy"
        selected={tempDate}
        value={selectedDate ? moment(selectedDate).format("MM/DD/yyyy") : ""}
        highlightDates={selectedDate && tempDate && [selectedDate]}
        maxDate={new Date()}
        fixedHeight
        onChange={() => null}
        onSelect={(date: Date) => {
          setShowYearPicker(false);
          setTempDate(moment(date).toDate());
        }}
        open={open}
        onInputClick={() => setOpen(!open)}
        onClickOutside={() => setOpen(false)}
        yearItemNumber={20}
        showYearPicker={showYearPicker}
        shouldCloseOnSelect={false}
        renderCustomHeader={(props) => (
          <Header
            {...props}
            showYearPicker={showYearPicker}
            setShowYearPicker={setShowYearPicker}
          />
        )}
      >
        <Footer
          setSelectedDate={setSelectedDate}
          tempDate={tempDate}
          setTempDate={setTempDate}
          setOpen={setOpen}
        />
      </DatePicker>
    </>
  );
};

export default CustomDatePicker;
