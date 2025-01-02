import React from 'react'

export default function ProductPreviewCard() {
  return (
    <section className="bg-white max-w-[500px] sm:max-w-[700px] overflow-hidden rounded-lg grid grid-cols-1 sm:grid-cols-2">
        
        {/* product image */}
        <picture className='w-full h-full object-center'>
            <source srcSet='/icons/product-preview-card/image-product-mobile.jpg' media="(max-width:639px)" className='w-full h-full object-cover' />
            <img src='/icons/product-preview-card/image-product-desktop.jpg' alt="Product Image" className='w-full h-full object-cover' />
        </picture>

        {/* text content */}
        <article className="p-6 sm:p-8 flex flex-col justify-between">
            <p className='uppercase text-productPreview-grayish_blue font-medium tracking-[0.3em]'>Perfume</p>
            <h1 className='mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold'>Gabrielle Essence Eau De Parfum</h1>
            <p className='mt-4 sm:mt-6 text-base text-productPreview-grayish_blue font-medium'>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.</p>

            <div className="flex items-center gap-4 mt-6 sm:mt-8">
                <h2 className='text-productPreview-dark_cyan font-bold text-3xl'>$149.99</h2>
                <p className='text-sm line-through text-productPreview-grayish_blue font-medium'>$169.99</p>
            </div>

            <button type='button' className='bg-productPreview-dark_cyan rounded-lg p-4 text-base text-white flex items-center gap-2 justify-center w-full mt-8'>
                <img src='/icons/product-preview-card/icon-cart.svg' alt='cart icon' />
                <span>Add to Cart</span>
            </button>

        </article>

    </section>
  )
}
