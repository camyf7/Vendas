import { Link } from 'react-router-dom'
import Categories from '../../components/Categories'
import Card  from '../../components/Card'
import './Home.css'
import { useState, useEffect } from 'react'


export default function Page() {
  const [selectedBtn, setSelectedBtn] = useState('');
  const [products, setProducts] = useState([]);

  //Carregar produtos ao iniciar
  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();

      setProducts(data.slice(0, 8));
    }

    loadProducts();

  }, []);

  return (
    <div>
      <Categories selectedBtn={selectedBtn} onSelect={selectedBtn}/>

      <div className='card-container'>
        {products.map((item) => (
          <Card 
            name = { item.title}
            image = { item.image }
            category = {item.category}
            description = {item.description}
            price = {item.price}
            />
           
        ))}
      </div>

</div>
)
}