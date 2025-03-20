import gsap from 'gsap'
import React, { useRef } from 'react'
import { useEffect } from 'react'

const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse',
                }
            })

            titleAnimation.to(".animated-word", {
                opacity: 1,
                stagger: .02,
                ease: "power2.inOut",
                transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
            })

        }, containerRef)
        return () => ctx.revert()
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
