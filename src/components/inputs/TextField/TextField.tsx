import { FormControl, InputAdornment } from "@mui/material";
import clsx from "clsx";
import * as React from "react";
import { NumberUtils } from "../../../utils";
import { FormHelperText } from "../FormHelperText";
import { Label } from "../Label";
import { StyledOutlinedInput } from "./styles";
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
  onClick,
  filterRegExps,
  multiline = false,
  outlinedInputClassName,
  ...outlinedInputProps
}) => {
  const isError = Boolean(errorText) || error;
  const showHelperText = helperText !== undefined && helperText !== errorText;
  const inputValue = value ?? defaultValue;
  const isDecimalAllowed = type === "number" ? allowDecimal : true;

  const onChangeText: iTextFieldProps["onChange"] = (evt) => {
    let val = evt.target.value;

    val =
      type === "number" && val
        ? NumberUtils.numberFormatter(val as string)
        : val;

    if (!isDecimalAllowed) {
      val = NumberUtils.getNonDecimalNumber(val);
    }

    if (filterRegExps && filterRegExps.length) {
      filterRegExps.forEach((regexp) => {
        val = val.replace(
          new RegExp(regexp.regExp, ...(regexp.regExpParams || [])),
          regexp.replaceParam || ""
        );
      });
    }

    return onChange?.({
      ...evt,
      target: {
        ...evt.target,
        name: evt.target.name,
        inputMode: evt.target.inputMode,
        value: val,
      },
    });
  };

  return (
    <div
      className={clsx("flex", labelInline ? "flex-row" : "flex-col", className)}
    >
      {label && (
        <Label className={clsx(labelInline ? "mr-2" : "mb-2")}>{label}</Label>
      )}
      <FormControl error={isError} {...formControlProps} disabled={disabled}>
        <StyledOutlinedInput
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
          onClick={(evt) => {
            if (!disabled) onClick?.(evt);
          }}
          fieldType={type}
          multiline={type === "textarea" || multiline}
          className={clsx(
            type === "textarea" ? "h-auto max-h-full" : undefined,
            outlinedInputClassName
          )}
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
