import { Dayjs } from "dayjs";
import * as React from "react";
import { DateTimeUtils } from "../../../utils";
import { Col, Row } from "../../core";
import { DateField } from "../DateField";
import { FormHelperText } from "../FormHelperText";
import { Label } from "../Label";
import { TimeField } from "../TimeField";
import { iDateTimeFieldProps } from "./types";

const DateTimeField: React.VFC<iDateTimeFieldProps<any>> = ({
  label,
  dateTimeValue,
  dateFormat = "DD MMM YYYY",
  timeFormat = "HH:mm",
  dateTimeSeparator = ", ",
  dateFieldProps,
  timeFieldProps,
  onChange,
  errorText,
}) => {
  const [date, setDate] = React.useState<string>("");
  const [time, setTime] = React.useState<string>("");
  const inputFormat = `${dateFormat}${dateTimeSeparator}${timeFormat}`;
  const [localDateTimeObject, setLocalDateTimeObject] =
    React.useState<Dayjs | undefined>(undefined);
  const localDateTimeRef = React.useRef(localDateTimeObject);

  const onChangeDate = React.useCallback(
    (date: string) => {
      let dateObj = DateTimeUtils.dayjsInstance(date);
      const timeObj = DateTimeUtils.dayjsInstance(time);
      const timeConfig = { hour: 0, minute: 0, second: 0, millisecond: 0 };
      if (timeObj.isValid()) {
        timeConfig.hour = timeObj.get("hour");
        timeConfig.minute = timeObj.get("minute");
        timeConfig.second = timeObj.get("second");
        timeConfig.millisecond = timeObj.get("millisecond");
      }
      dateObj = dateObj.set("hour", timeConfig.hour);
      dateObj = dateObj.set("minute", timeConfig.minute);
      dateObj = dateObj.set("second", timeConfig.second);
      dateObj = dateObj.set("millisecond", timeConfig.millisecond);
      setLocalDateTimeObject(dateObj);
      setDate(date);
    },
    [time]
  );

  const onChangeTime = React.useCallback(
    (time: string) => {
      let dateObj = DateTimeUtils.dayjsInstance(date);
      const timeObj = DateTimeUtils.dayjsInstance(time);
      const timeConfig = { hour: 0, minute: 0, second: 0, millisecond: 0 };
      if (timeObj.isValid()) {
        timeConfig.hour = timeObj.get("hour");
        timeConfig.minute = timeObj.get("minute");
        timeConfig.second = timeObj.get("second");
        timeConfig.millisecond = timeObj.get("millisecond");
      }
      dateObj = dateObj.set("hour", timeConfig.hour);
      dateObj = dateObj.set("minute", timeConfig.minute);
      dateObj = dateObj.set("second", timeConfig.second);
      dateObj = dateObj.set("millisecond", timeConfig.millisecond);
      setLocalDateTimeObject(dateObj);
      setTime(time);
    },
    [date]
  );

  React.useEffect(() => {
    if (date && time && localDateTimeObject && localDateTimeObject.isValid()) {
      onChange(DateTimeUtils.formatDate(localDateTimeObject, inputFormat));
    }
  }, [date, time, inputFormat, localDateTimeObject]);

  React.useEffect(() => {
    const dateTimeObj = DateTimeUtils.dayjsInstance(dateTimeValue);
    if (dateTimeObj.isSame(localDateTimeRef.current)) return;

    if (dateTimeValue && dateTimeObj.isValid()) {
      setDate(dateTimeObj.toISOString());
      setTime(dateTimeObj.toISOString());
    } else {
      setDate("");
      setTime("");
    }
  }, [dateTimeValue]);

  return (
    <Col spacing={8}>
      {label && <Label>{label}</Label>}
      <Row spacing={16}>
        <div style={{ flex: 0.7 }}>
          <DateField
            {...dateFieldProps}
            inputFormat={dateFormat}
            value={date}
            error={Boolean(errorText)}
            onChange={onChangeDate}
          />
        </div>
        <div style={{ flex: 0.3 }}>
          <TimeField
            {...timeFieldProps}
            inputFormat={timeFormat}
            value={time}
            error={Boolean(errorText)}
            onChange={onChangeTime}
          />
        </div>
      </Row>
      {errorText && <FormHelperText error>{errorText}</FormHelperText>}
    </Col>
  );
};

export default DateTimeField;
