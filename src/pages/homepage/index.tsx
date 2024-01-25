import styles from './index.module.scss'
import Navbar from '../../components/navbar/Navbar';
import ProductCard from './card';
import Carousel from '../../components/carousel';
import bannerImage1 from '../../assets/banner/banner-1.png'
import bannerImage2 from '../../assets/banner/banner-2.png'
import bannerImage3 from '../../assets/banner/banner-3.png'


const Homepage = () => {
  const carouselArray = [bannerImage1, bannerImage2, bannerImage3]

  return (
    <>
        <Navbar />
        <div className={styles.container}>
          {/* banner */}
          <Carousel arr={carouselArray} />
          <h3>All products</h3>
          <ProductCard/>
        </div>
    </>
  )
}

export default Homepage