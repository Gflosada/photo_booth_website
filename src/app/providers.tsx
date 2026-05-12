import { type ReactNode } from 'react';
import { BrowserRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { GSAPProvider } from '@/components/animation/GSAPProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GSAPProvider>{children}</GSAPProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
