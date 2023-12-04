import React from 'react'

export default function QRCard() {
    return (
        <div className="card">
            <figure className="card__image--wrapper">
                <img src="./images/image-qr-code.png" alt='QR-Code Image' className="card__image" />
            </figure>
            <div className="card__body">
                <h1 className="text-xl font-semibold">Improve your front-end skills by building projects</h1>
                <p className='mt-2'>
                    Scan the QR code to visit Frontend Mentor and take your coding
                    skills to the next level
                </p>
            </div>
        </div>
    )
}
