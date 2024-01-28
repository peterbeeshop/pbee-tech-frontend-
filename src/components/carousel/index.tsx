import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import styles from './index.module.scss'

interface MyComponentProps {
  arr: string[]
}

const Carousel = ({ arr }: MyComponentProps) => {
  const [index, setIndex] = useState(0)
  const length = arr.length

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex < arr.length ? newIndex : 0)
  }

  return (
    <div>
      <div className={styles.container}>
        <ArrowBackIosIcon
          onClick={handlePrevious}
          className={styles.backArrow}
        />
        <ArrowForwardIosIcon
          onClick={handleNext}
          className={styles.forwardArrow}
        />
        <img src={arr[index]} alt="carouselImage" />
      </div>
    </div>
  )
}

export default Carousel
