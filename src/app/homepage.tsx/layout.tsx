import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Sharon Mwangi",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="">
        {children}
      </body>
    </html>
  );
}
