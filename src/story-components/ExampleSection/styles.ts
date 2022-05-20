import styled from "@emotion/styled";

export const ExampleContainer = styled.div(({ theme: { palette } }) => ({
  border: `1px solid ${palette.interface.black["200"]}`,
  backgroundColor: palette.interface.black["50"],
  padding: 16,
  borderRadius: 8,
  width: "100%",
}));
