import * as React from "react";
import { CrossOutlinedIcon } from "../../../../assets";
import { FormHelperText } from "../../../inputs/FormHelperText";
import { Col } from "../../Col";
import { Row } from "../../Row";
import { Text } from "../../Text";
import { Button } from "../Button";
import {
  ActionContainer,
  ActionContainerCompact,
  CloseButtonContainer,
  CloseButtonContainerCompact,
  Container,
  ImagePreview,
  ImagePreviewContainer,
  ImagePreviewContainerCompact,
  UploadButtonWrapper,
} from "./styles";
import { iFileUploadButtonProps } from "./types";

const FileUploadButton: React.VFC<iFileUploadButtonProps> = ({
  title,
  description,
  variant = "default",
  accept,
  url,
  action,
  errorText,
  onChange,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const hasFile = Boolean(url);
  const hasError = Boolean(errorText);

  const MainLayout = variant === "compact" ? Col : Row;

  const onClickUpload = () => {
    inputRef.current?.click();
  };

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.item(0);

    onChange(file, file ? URL.createObjectURL(file) : undefined);
  };

  const onResetFile = () => {
    if (inputRef.current) inputRef.current.value = "";
    onChange(null, undefined);
  };

  return (
    <Col spacing={8}>
      <Col spacing={8}>
        {title || description ? (
          <Col spacing={4}>
            {title && (
              <Text variant="captionSemiBold" color="interface.black.400">
                {title}
              </Text>
            )}
            {description && (
              <Text variant="captionRegular" color="interface.black.400">
                {description}
              </Text>
            )}
          </Col>
        ) : null}
        <Container
          hasFile={hasFile}
          hasError={hasError}
          spacing={10}
          variant={variant}
        >
          <MainLayout className="relative">
            <input
              ref={inputRef}
              type="file"
              accept={accept}
              hidden
              onChange={onFileChange}
            />
            {variant === "default" ? (
              <>
                <ImagePreviewContainer>
                  {url && <ImagePreview alt="file" src={url} />}
                </ImagePreviewContainer>
                <UploadButtonWrapper flex={1} vCenter>
                  <ActionContainer onClick={onClickUpload}>
                    <Button variant="text" color="primary">
                      {action.action}
                    </Button>
                    {action.description && (
                      <Text
                        variant="captionRegular"
                        color="interface.black.400"
                      >
                        {action.description}
                      </Text>
                    )}
                  </ActionContainer>
                  {url ? (
                    <CloseButtonContainer onClick={onResetFile}>
                      <CrossOutlinedIcon width={12} />
                    </CloseButtonContainer>
                  ) : null}
                </UploadButtonWrapper>
              </>
            ) : (
              <>
                {url && (
                  <ImagePreviewContainerCompact>
                    <ImagePreview alt="file" src={url} />
                  </ImagePreviewContainerCompact>
                )}
                {!url ? (
                  <ActionContainerCompact onClick={onClickUpload}>
                    <>
                      <Button variant="text" color="primary">
                        {action.action}
                      </Button>
                      {action.description && (
                        <Text
                          variant="captionRegular"
                          color="interface.black.400"
                        >
                          {action.description}
                        </Text>
                      )}
                    </>
                  </ActionContainerCompact>
                ) : (
                  <CloseButtonContainerCompact onClick={onResetFile}>
                    <CrossOutlinedIcon width={14} />
                  </CloseButtonContainerCompact>
                )}
              </>
            )}
          </MainLayout>
        </Container>
      </Col>
      {errorText && (
        <FormHelperText error className="mt-0">
          {errorText}
        </FormHelperText>
      )}
    </Col>
  );
};

export default FileUploadButton;
