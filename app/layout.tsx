import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { noto } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto.className} antialiased`}>{children}</body>
    </html>
  );
}
