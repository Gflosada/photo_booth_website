declare module 'react-responsive-masonry' {
  import { type ReactNode } from 'react';

  export default function Masonry(props: {
    children: ReactNode;
    columnsCount?: number;
    gutter?: string;
    className?: string;
  }): JSX.Element;
}
