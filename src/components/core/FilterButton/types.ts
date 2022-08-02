import { iMenuProps } from "../../navigation/Menu";
import { iButtonProps } from "../Button";

export interface iFilterButtonProps {
  activeFilters: number;
  buttonProps?: Partial<iButtonProps>;
  menuProps?: Partial<iMenuProps>;
}
