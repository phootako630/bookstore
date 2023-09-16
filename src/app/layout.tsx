import { ReduxProvider } from '@/store/provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Bookstore App',
    description: '',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ReduxProvider>
            {children}
        </ReduxProvider>
        </body>
        </html>
    )
}