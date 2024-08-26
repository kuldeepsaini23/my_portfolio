'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BlogCard = (props: Props) => {
  return (
    <motion.div className='flex flex-col cursor-pointer hover:shadow-2xl' whileHover={{translateY:-10}}>
      <Link href={"/blogs"} className='relative  rounded-2xl transition duration-200 group bg-white dark:bg-black hover:shadow-xl border border-zinc-100 dark:border-zinc-700'>
        <div className='w-full aspect-w-16 aspect-h-10 bg-gray-100 dark:bg-transparent rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative'>
          <Image
            src={"/test.webp"}
            className='w-full h-[250px] transition duration-300 blur-0 group-hover:scale-105 transform object-cover'
            alt='thumbnail'
            width={1000}
            height={700}
          />
        </div>
        {/* Details */}
        <div className='p-4'>
          <h2 className='font-bold my-4 text-lg text-zinc-700 dark:text-gray-100'>Amazing Tracing Beam Effect With Tailwindcss</h2>
          <div className='flex flex-row justify-between items-center mt-10'>
            <span className='text-sm text-gray-500 dark:text-gray-200'>2nd Nov, 2023</span>
            <div className='relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs border border-zinc-700'>Read More</div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default BlogCard