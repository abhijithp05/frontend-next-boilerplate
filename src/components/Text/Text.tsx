import { Typography, TypographyProps } from "@mui/material";

interface ITextProps extends TypographyProps {
  children?: string;
}

export const Text = ({ children, ...props }: ITextProps) => (
  <Typography {...props}>{children}</Typography>
);
