import QRCard from '@/components/challenges/qr-code-component/qr-card'
import Footer from '@/components/layout/footer'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'QR-Code Card Challenges',
    description: 'QR-Code Card Challenges by frontendmentor.io',
}

export default function QRCodeApp() {
    return (
        <main className='qr-wrapper'>
            <div className="container">
                <QRCard />
            </div>
            <Footer />
        </main>
    )
}
