import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import clsx from "clsx";
import * as React from "react";
import { NumberUtils } from "../../../utils";
import { FormHelperText } from "../FormHelperText";
import { Label } from "../Label";
import { iTextFieldProps } from "./types";

const TextField: React.VFC<iTextFieldProps> = ({
  id,
  label,
  labelInline = false,
  formControlProps = {},
  formHelperTextProps = {},
  StartIcon,
  EndIcon,
  errorText,
  error = false,
  ErrorTextIcon,
  helperText,
  HelperTextIcon,
  disabled,
  onChange,
  onBlur,
  name,
  value,
  inputMode,
  defaultValue,
  className,
  classes,
  inputProps,
  type,
  allowDecimal = false,
  ...outlinedInputProps
}) => {
  const isError = Boolean(errorText) || error;
  const showHelperText = helperText !== undefined && helperText !== errorText;
  const inputValue = value ?? defaultValue;

  const onChangeText: iTextFieldProps["onChange"] = (evt) => {
    let val = evt.target.value;
    if (!allowDecimal) {
      val = NumberUtils.getNonDecimalNumber(val);
    }
    return onChange?.({ ...evt, target: { ...evt.target, value: val } });
  };

  return (
    <div
      className={clsx("flex", labelInline ? "flex-row" : "flex-col", className)}
    >
      {label && (
        <Label className={clsx(labelInline ? "mr-2" : "mb-2")}>{label}</Label>
      )}
      <FormControl error={isError} {...formControlProps} disabled={disabled}>
        <OutlinedInput
          id={id}
          startAdornment={
            StartIcon && (
              <InputAdornment position="start">
                {<StartIcon width={24} height={24} />}
              </InputAdornment>
            )
          }
          endAdornment={
            EndIcon && (
              <InputAdornment position="end">
                {<EndIcon width={24} height={24} />}
              </InputAdornment>
            )
          }
          inputProps={{
            name,
            value:
              type === "number" && inputValue
                ? NumberUtils.numberFormatter(inputValue as string)
                : inputValue,
            inputMode,
            onBlur,
            ...inputProps,
          }}
          onChange={onChangeText}
          error={isError}
          classes={classes}
          {...outlinedInputProps}
        />
        {showHelperText && (
          <FormHelperText
            id={id}
            error={false}
            Icon={HelperTextIcon}
            className="mt-2"
          >
            {helperText}
          </FormHelperText>
        )}
        {errorText && (
          <FormHelperText id={id} error Icon={ErrorTextIcon} className="mt-2">
            {errorText}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export default TextField;
