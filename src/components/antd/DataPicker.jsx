import React from "react";
import "./DataPicker.css";
import { DatePicker, Space } from "antd";
import moment from "moment";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const PickerData = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      onChange={onChange}
      defaultValue={moment()} // Sets today's date as the default
      format="YYYY-MM-DD" // Ensures consistent date format
    />
  </Space>
);

export default PickerData;
