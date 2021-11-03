import * as React from 'react';
import { iButtonProps } from './types';

const Button: React.FC<iButtonProps> = ({onClick, children}) => {
  return <button onClick={onClick}>{children}</button>
}

export default Button;
