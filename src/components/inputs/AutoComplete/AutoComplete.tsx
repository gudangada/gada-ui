import * as React from "react";
import { iAutoCompleteProps } from "./types";
import {
  Autocomplete as MuiAutocomplete,
  ChipTypeMap,
  CircularProgress,
  TextField,
} from "@mui/material";
import { FormHelperText } from "../FormHelperText";
import { StyledAutoCompleteContainer } from "./styles";
import { Label } from "../Label";
import { ArrowUpIcon } from "../../../assets";

const AutoComplete = <
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]
>({
  placeholder = "Select",
  errorText,
  value,
  inputValue,
  onChange,
  onInputChange,
  className,
  label,
  loading,
  disableClearable = true,
  ...props
}: iAutoCompleteProps<
  T,
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
>) => {
  const [selectedValue, setSelectedValue] = React.useState(value);
  const selectedValueRef = React.useRef(selectedValue);
  const [curInputValue, setInputValue] = React.useState(inputValue);
  const curInputValueRef = React.useRef(curInputValue);

  React.useEffect(() => {
    if (selectedValueRef.current !== value) {
      setSelectedValue(value);
      selectedValueRef.current = value;
    }
  }, [value]);

  React.useEffect(() => {
    if (curInputValueRef.current !== inputValue) {
      setInputValue(inputValue);
      curInputValueRef.current = inputValue;
    }
  }, [inputValue]);

  const handleValueChange: iAutoCompleteProps<any>["onChange"] =
    React.useCallback(
      (event, value, reason, details) => {
        setSelectedValue(value);
        selectedValueRef.current = value;
        onChange?.(event, value, reason, details);
      },
      [onChange]
    );

  const handleInputValueChange: iAutoCompleteProps<any>["onInputChange"] =
    React.useCallback(
      (event, value, reason) => {
        setInputValue(value);
        curInputValueRef.current = value;
        onInputChange?.(event, value, reason);
      },
      [onChange]
    );

  return (
    <StyledAutoCompleteContainer
      isError={Boolean(errorText)}
      className={className}
      spacing={8}
    >
      {label && <Label>{label}</Label>}
      <MuiAutocomplete<any, any, any, any>
        value={selectedValue}
        inputValue={curInputValue}
        loading={loading}
        disableClearable={disableClearable}
        onChange={handleValueChange}
        onInputChange={handleInputValueChange}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="primary" size={18} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        popupIcon={
          <div className="py-2 px-1">
            <ArrowUpIcon width={15} height={9} />
          </div>
        }
        {...props}
      />
      {errorText && <FormHelperText error>{errorText}</FormHelperText>}
    </StyledAutoCompleteContainer>
  );
};

export default AutoComplete;
