import React from 'react'
import { projects } from '../project'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function page() {

 
  return (
    <>
    <div className='container'>
      <h1 className='text-4xl font-bold text-center bg-[radial-gradient(ellipse_at_center,_var(--primary))] from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text'>Projects</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center mt-10 gap-4 space-y-10'>
        {projects.map((project) => (
          <div key={project.id} className=''>
            <Image src={project.image} alt={project.name} width={100} height={100} className='w-full h-full object-cover' />
            <h2 className='text-2xl font-bold'>{project.name}</h2>
            <p className='text-sm text-gray-500'>{project.description}</p>
            <div className='flex gap-2'>
              <Link href={project.live} target='_blank'>Live</Link>
              <Link href={project.github} target='_blank'>Github</Link>
            </div>
            <Button>View Project</Button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
