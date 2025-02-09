
"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useRef } from 'react'
import anime from "animejs";

const AboutUs = () => {

    const titleRef= useRef(null)
    const paragraphRef1 = useRef(null);
    const paragraphRef2 = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(()=>{
        anime({
            targets: titleRef.current,
            translateY: [-50, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: 200,
          });

          anime({
            targets: [paragraphRef1.current, paragraphRef2.current],
            translateY: [30, 0], 
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay: anime.stagger(200),
          });

          anime({
            targets: buttonsRef.current.children,
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay: anime.stagger(300), 
          });



    },[])

  return (
    <div className='bg-orange-100 '>
    <div className="mx-auto container text-center py-16 px-6  lg:px-28">
        <h2 ref={titleRef} className="text-2xl lg:text-4xl font-bold text-blue-600 mb-4">
            WELCOME TO TRENDY TRAVEL
        </h2>
        <div className="flex justify-center items-center mb-6">
            <hr className="border-gray-300 w-1/5" />
            <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
            <hr className="border-gray-300 w-1/5" />
        </div>
        <p ref={paragraphRef1} className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi numquam facere facilis rerum fugit eligendi assumenda, ea tempore dolore eius perferendis beatae quae deserunt cupiditate saepe iste delectus, maiores ex, dolorem ad. Suscipit recusandae praesentium fuga ipsa nihil dolore amet voluptatem odit, in animi possimus sint ut, velit omnis!
        </p>
        <p ref={paragraphRef2} className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi numquam facere facilis rerum fugit eligendi assumenda, ea tempore dolore eius perferendis beatae quae deserunt cupiditate saepe iste delectus, maiores ex, dolorem ad. Suscipit recusandae praesentium fuga ipsa nihil dolore amet voluptatem odit, in animi possimus sint ut, velit omnis!
        </p>
        <div ref={buttonsRef} className="flex justify-center gap-4">
            <Button className="bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition">
                Detail
            </Button>
            <Button  className="bg-orange-500 text-white py-6 px-8 rounded-lg hover:bg-orange-600 transition">
                Browse
            </Button>


        </div>


    </div>
</div>
  )
}

export default AboutUs