import { iTextProps } from "../../components";

export interface iHighlightedTextProps {
  text: string;
  highlight: string[];
  links?: VoidFunction[];
  textVariant?: iTextProps["variant"];
}
