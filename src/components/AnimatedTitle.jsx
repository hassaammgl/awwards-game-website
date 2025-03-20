import gsap from 'gsap'
import React, { useRef } from 'react'
import { useEffect } from 'react'

const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => { }, containerRef)
    }, [])

    return (
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
            {title.split("<br />").map((line, index) => {
                return (
                    <div key={index} className={"flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"}>
                        {line.split(" ").map((word, i) => {
                            return (
                                <span
                                    key={i}
                                    className={`animated-word`}
                                    dangerouslySetInnerHTML={{ __html: word }}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default AnimatedTitle
