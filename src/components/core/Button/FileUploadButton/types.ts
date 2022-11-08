export interface iFileUploadAction {
  action: string;
  description?: string;
}

export type iFileUploadVariant = "default" | "compact";

export type iFileChangeHandler = (file?: File | null, url?: string) => void;

export interface iFileUploadButtonProps {
  title?: string;
  description?: string;
  variant?: iFileUploadVariant;
  action: iFileUploadAction;
  url?: string | null;
  accept?: HTMLInputElement["accept"];
  errorText?: string;
  onChange: iFileChangeHandler;
}
