import "./globals.css";
import React from "react";


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <title>umedts.com</title>
        <link rel="icon" href="/logo/logo-green.png"/>
        <body>{children}</body>
        </html>
    )
}
