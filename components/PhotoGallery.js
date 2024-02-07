// components/PhotoGallery.js
import { useState, useEffect } from 'react'

const photos = [
  '/assets/logos/logo coreangels.svg',
  '/assets/logos/logo kemtix.svg',
  '/assets/logos/logo kemtech.svg',
  '/assets/logos/oro-vl.svg',
  '/assets/logos/edam.svg',
  '/assets/logos/trade-plus.svg',

  // Add more image URLs as needed
]

const PhotoGallery = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const handlePrev = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    // Automatically shift photos every 4 seconds
    const intervalId = setInterval(() => {
      handleNext()
    }, 4000)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [currentPhotoIndex])

  return (
    <div className="photo-gallery">
      <button
        onClick={handlePrev}
        style={{
          background: 'white',
          color: 'darkblue',
          width: '100px',
          height: '50px',
          fontSize: '50px',
        }}
      >
        &lt;{' '}
      </button>
      <div className="image-container">
        {photos.map((photo, index) => (
          <img
            key={index}
            className={`photo ${
              currentPhotoIndex === index ? 'center-image' : 'off-screen'
            }`}
            src={photo}
            alt={`Photo ${index + 1}`}
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'fill',
              transform: `translateX(${
                (100 / (photos.length - 1)) * (currentPhotoIndex - index)
              }%)`,
              transition: 'transform 1s ease-in-out, opacity 1s ease-in-out', // Set transition duration and easing
              opacity: currentPhotoIndex === index ? 1 : 0,
            }}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        style={{
          background: 'white',
          color: 'darkblue',
          width: '100px',
          height: '50px',
          fontSize: '50px',
        }}
      >
        {' '}
        &gt;
      </button>

      <style jsx>{`
        .photo-gallery {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .image-container {
          display: flex;
          overflow: hidden;
          position: relative;
          width: 300px; /* Adjust this width based on your design */
          height: 300px; /* Adjust this height based on your design */
        }

        .photo {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover; /* or 'contain' based on your preference */
          position: absolute;
          top: 0;
          left: 0;
        }

        .center-image {
          z-index: 1;
        }

        .off-screen {
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}

export default PhotoGallery
