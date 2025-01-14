import React from "react";
import "./DataPicker.css";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
// const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
// const weekFormat = "MM/DD";
// const monthFormat = "YYYY/MM";

// const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
// const customWeekStartEndFormat = (value) =>
//   `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
//     .endOf("week")
//     .format(weekFormat)}`;

const PickerData = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      defaultValue={dayjs("2025/01/11", dateFormat)}
      format={dateFormat}
    />
  </Space>
);
export default PickerData;
