import '@/styles/globals.css';
import { QueryProvider } from '@/providers/QueryProvider';
import { LenisProvider } from '@/providers/LenisProvider';
import { MotionProvider } from '@/providers/MotionProvider';
import { TransitionOverlay } from '@/components/sections/TransitionOverlay';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <a href='#main-content'>Skip to content</a>
        <QueryProvider><LenisProvider><MotionProvider><nav>AscentEscapes</nav><TransitionOverlay /><main id='main-content'>{children}</main></MotionProvider></LenisProvider></QueryProvider>
      </body>
    </html>
  );
}
