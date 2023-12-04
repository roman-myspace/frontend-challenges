import React from 'react'

export default function QRCard() {
    return (
        <div className="card">
            <figure className="card__image--wrapper">
                <img src="./images/image-qr-code.png" alt='QR-Code Image' className="card__image" />
            </figure>
            <div className="card__body">
                <h6 className="">Improve your front-end skills by building projects</h6>
                <p>
                    Scan the QR code to visit Frontend Mentor and take your coding
                    skills to the next level
                </p>
            </div>
        </div>
    )
}
