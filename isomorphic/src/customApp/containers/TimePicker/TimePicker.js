import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

const now = moment().hour(0).minute(0);

const DeliTimePicker = ({ className, onChange, value, ...rest }) => (
  <TimePicker
    {...rest}
    className={className}
    defaultOpenValue={now}
    popupClassName={className}
    showSecond={false}
    onChange={onChange}
    hideDisabledOptions
    minuteStep={5}
    value={value}
  />
);

DeliTimePicker.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(moment)
};

export default DeliTimePicker;
