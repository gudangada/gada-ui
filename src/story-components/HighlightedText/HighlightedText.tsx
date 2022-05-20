import * as React from "react";
import { iHighlightedTextProps } from "./types";
import { Text } from "../../components";
import { MarkedText } from "./styles";

const HighlightedText: React.VFC<iHighlightedTextProps> = ({
  text,
  highlight,
  links,
  textVariant = "bodyRegular",
}) => {
  if (!highlight.length) {
    return <Text variant={textVariant}>{text}</Text>;
  }

  const regex = new RegExp(`(${highlight.join("|")})`, "gi");
  const parts = text.split(regex);
  let linkIndex = 0;

  return (
    <span>
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? (
          <MarkedText
            key={i}
            className={links && links[linkIndex] ? "cursor-pointer" : ""}
            onClick={links ? links[linkIndex++] : undefined}
          >
            {part}
          </MarkedText>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};

export default HighlightedText;
