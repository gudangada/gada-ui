export interface iIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  color?:
    | "currentColor"
    | "default"
    | "primary"
    | "secondary"
    | "white"
    | "destructive";
}

export type iGadaIcon = React.VFC<iIconProps>;
