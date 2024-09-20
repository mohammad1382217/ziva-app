'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'

type PropType = {
    selected: boolean
    index: number
    onClick: () => void
    src: StaticImageData
    alt: string
}

export const Thumb: React.FC<PropType> = (props) => {
    const { src, alt, selected, index, onClick } = props

    return (
        <div
            className={'embla-thumbs__slide'.concat(
                selected ? ' embla-thumbs__slide--selected ' : ''
            )}
        >
            <button
                onClick={onClick}
                type="button"
                className="embla-thumbs__slide__number relative"
            >
            <Image
                src={src}
                alt={alt}
                onClick={onClick}
                className="rounded-2xl"
                fill
            />
                {/* {index + 1} */}
            </button>
        </div>
    )
}
