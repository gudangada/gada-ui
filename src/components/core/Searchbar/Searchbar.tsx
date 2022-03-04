import { Box, FormControl, IconButton, InputAdornment } from "@mui/material";
import * as React from "react";
import { CrossCircleIcon, SearchIcon } from "../../../assets";
import { StyledOutlinedInput } from "./styles";
import { iSearchbarProps } from "./types";

const Searchbar: React.VFC<iSearchbarProps> = (props) => {
  const {
    withEndAdornment = true,
    formControlProps,
    onClickCancel,
    onChangeValue,
    size = "default",
    ...rest
  } = props;

  const inputRef = React.useRef<HTMLInputElement>();

  const handleClickCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClickCancel?.(event);
    inputRef.current?.focus();
  };

  return (
    <FormControl variant="outlined" {...formControlProps}>
      <StyledOutlinedInput
        {...rest}
        size={size === "default" ? undefined : "small"}
        onChange={(event) => onChangeValue(event.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        inputRef={inputRef}
        endAdornment={
          withEndAdornment && (
            <InputAdornment position="end" style={{ paddingRight: 0 }}>
              {props.value ? (
                <IconButton onClick={handleClickCancel}>
                  <CrossCircleIcon />
                </IconButton>
              ) : (
                <Box width={48} />
              )}
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
};

export default Searchbar;
