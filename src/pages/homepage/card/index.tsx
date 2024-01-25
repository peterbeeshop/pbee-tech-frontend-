import Button from '../../../components/button';
import stockPic from './iphone-x.jpeg';

const ProductCard = () => {
  return (
    <div>
        <div>
            <img src={stockPic} alt="pic" />
        </div>
        <h5>iphone X</h5>
        <section>
            <span>64GB</span>
            <span>k3800</span>
        </section>
        <Button />
    </div>
  )
}

export default ProductCard