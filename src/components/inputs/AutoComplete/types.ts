import { AutocompleteProps, ChipTypeMap } from "@mui/material";

export interface iAutoCompleteProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]
> extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    "renderInput"
  > {
  label?: string;
  errorText?: string;
}
