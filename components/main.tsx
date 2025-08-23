import React from 'react'
import Card from './card'

const Main = () => {
  return (
    <div className='max-w-screen-xl py-6 px-20 pb-4 mx-auto'>
        <div className='grid gap-7 md:grid-cols-3'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Main