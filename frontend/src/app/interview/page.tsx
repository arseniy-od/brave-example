"use client"
import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player
export default () => {
    return (
        <div className='h-screen'>
            <ReactPlayer url='https://github.com/arseniy-od/brave-example/blob/main/frontend/public/dummy/DE%20Concepts%20video%20(1).mp4' />
        </div>
        )
        
} 