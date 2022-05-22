export { Typography } from "./Typography.styles";
export { Palette } from "./Palette.styles";
export { Shadows } from "./Shadows.styles";
export { zIndex } from "./zIndex.styles";

import merge from "merge";
import { Button } from "./Button.styles";
import { CssBaseline } from "./CssBaseline.styles";
import { Link } from "./Link.styles";
import { Table } from "./Table.styles";
import { Pagination } from "./Pagination.styles";
import { Divider } from "./Divider.styles";
import { ListItem } from "./ListItem.styles";
import { Tabs } from "./Tabs.styles";
import { Drawer } from "./Drawer.styles";
import { Input } from "./Input.styles";
import { Stepper } from "./Stepper.styles";
import { Card } from "./Card.styles";
import { Autocomplete } from "./Autocomplete.styles";
import { Dialog } from "./Dialog.styles";

export default merge(
  CssBaseline,
  Button,
  Link,
  Table,
  Pagination,
  Divider,
  ListItem,
  Tabs,
  Drawer,
  Input,
  Stepper,
  Card,
  Autocomplete,
  Dialog
);
