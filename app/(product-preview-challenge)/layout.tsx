import Footer from '@/components/layout/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Product Card Preview Challenge',
    description: 'Product Card Preview Challenges apps by frontendmentor.io',
}

export default function ProductPreviewLayout({ children }: { children: React.ReactNode }) {
    return (        
        <section className="product-preview-container container-lg mx-auto min-h-screen h-full flex flex-col justify-end sm:justify-center">
            {children}
            <Footer />
        </section>
    )
}
