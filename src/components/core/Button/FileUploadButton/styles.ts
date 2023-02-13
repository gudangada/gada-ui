import styled from "@emotion/styled";
import { pxToRem } from "../../../../styles";
import { Col, iColProps } from "../../Col";
import { Row } from "../../Row";
import { iFileUploadButtonProps } from "./types";

interface iContainerProps
  extends Omit<iColProps, "onChange">,
    Partial<iFileUploadButtonProps> {
  hasFile?: boolean;
  hasError?: boolean;
}

export const Container = styled(Col)<iContainerProps>(
  ({ hasError = false, hasFile = false, variant, theme }) => ({
    height: variant === "compact" ? 140 : 100,
    minHeight: variant === "compact" ? 140 : 100,
    width: variant === "compact" ? 140 : "100%",
    minWidth: variant === "compact" ? 140 : "100%",
    overflow: "hidden",
    borderRadius: pxToRem(8),
    border: `1px dashed ${theme.palette.interface.black[200]}`,
    borderStyle: !hasFile ? "dashed" : "solid",
    borderColor: hasError
      ? theme.palette.interface.red[500]
      : theme.palette.interface.black[200],

    "&>div": {
      height: "100%",
    },
  })
);

export const UploadButtonWrapper = styled(Row)(({ theme }) => ({
  padding: 16,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.interface.black[50],
  },
}));

export const ImagePreviewContainer = styled.div<iColProps>(({ theme }) => ({
  display: "flex",
  flex: 0.3,
  height: "100%",
  position: "relative",
  backgroundColor: theme.palette.interface.black[100],
}));

export const ImagePreviewContainerCompact = styled.div<iColProps>(
  ({ theme }) => ({
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: theme.palette.interface.black[100],
  })
);

export const ImagePreview = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
});

export const ActionContainer = styled(Col)<iColProps>(() => ({
  flex: 1,
  paddingRight: 16,
  height: "100%",
  alignItems: "flex-start",
  justifyContent: "center",
}));

export const ActionContainerCompact = styled(Col)<iColProps>(({ theme }) => ({
  padding: 16,
  height: "100%",
  width: "100%",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: theme.palette.interface.black[50],
  },
}));

export const CloseButtonContainer = styled.div(({ theme }) => ({
  display: "flex",
  width: 24,
  height: 24,
  padding: 4,
  borderRadius: 8,
  justifyContent: "center",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.palette.interface.black[50],
  },

  "&>svg": {
    margin: 0,
  },
}));

export const CloseButtonContainerCompact = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 8,
  right: 8,
  width: 28,
  height: 28,
  borderRadius: "50%",
  backgroundColor: theme.palette.interface.white,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.palette.interface.black[50],
  },
}));
