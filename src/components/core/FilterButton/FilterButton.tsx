import * as React from "react";
import { FilterIcon } from "../../../assets";
import { Menu } from "../../navigation";
import { StyledFilterButton } from "./styles";
import { iFilterButtonProps } from "./types";

const FilterButton: React.FC<iFilterButtonProps> = ({
  activeFilters,
  menuProps,
  buttonProps,
  children,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = React.useMemo(() => {
    return menuProps?.menuItems?.map((menuItem) => ({
      ...menuItem,
      onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        menuItem.onClick?.(e);
        handleClose();
      },
    }));
  }, [menuProps?.menuItems]);

  const isFilterActive = activeFilters > 0;

  return (
    <>
      <StyledFilterButton
        variant="fab"
        color="primary"
        onClick={handleClick}
        startIcon={<FilterIcon color={isFilterActive ? "white" : "primary"} />}
        isActive={isFilterActive}
        {...buttonProps}
      >
        Filter {activeFilters ? `(${activeFilters})` : ""}
      </StyledFilterButton>

      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        {...menuProps}
        menuItems={menuItems}
      >
        {children}
      </Menu>
    </>
  );
};

export default FilterButton;
