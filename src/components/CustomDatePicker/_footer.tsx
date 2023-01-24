import React from "react";
type FooterProps = {
  setSelectedDate: (date?: Date) => void;
  tempDate?: Date;
  setTempDate: (date?: Date) => void;
  setOpen: (open: boolean) => void;
};
const Footer = (props: FooterProps) => {
  const { setSelectedDate, setTempDate, setOpen, tempDate } = props;

  return (
    <div>
      <div className="flex justify-end w-full text-white">
        <button
          className="mr-[70px] text-sm leading-[2]"
          onClick={() => {
            setTempDate(undefined);
            setOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (tempDate) {
              setSelectedDate(tempDate);
              setTempDate(undefined);
            }
            setOpen(false);
          }}
          className="mr-[27px] text-sm leading-loose"
        >
          Ok
        </button>
      </div>
    </div>
  );
};
export default Footer;
