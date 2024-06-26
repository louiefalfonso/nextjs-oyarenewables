import "../style/index.scss";

export const metadata = {
  title:
    "Renewable Energy Company - Solar & Renewable Energy React Next js Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <head>
        <meta
          name="description"
          content="The Solar Panel React Next js template is a modern and responsive design specifically created for websites related to solar energy and renewable energy solutions"
        />
        <link rel="icon" href="cropped-oya-favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" href="cropped-oya-favicon-192x192.png" sizes="192x192"/>
        <link rel="apple-touch-icon" href="cropped-oya-favicon-180x180.png"/>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
      </head>

      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
