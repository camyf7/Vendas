import './Categories.css';
import Celular from '../../assets/aplicativo-movel.png';
import Carro from '../../assets/carro.png';
import Decoracao from '../../assets/decoracao-da-casa.png';
import Eletro from '../../assets/eletrodomestico.png';
import Esporte from '../../assets/esporte.png';
import Habitacao from '../../assets/habitacao.png';

const categories = [
  { name: 'Celular', img: Celular },
  { name: 'Carro', img: Carro },
  { name: 'Decoracao', img: Decoracao },
  { name: 'Eletro', img: Eletro },
  { name: 'Esporte', img: Esporte },
  { name: 'Habitacao', img: Habitacao },
];

export default function Categories({ selectedBtn, onSelect }) {
  return (
    <section className="categories">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className={`btn ${selectedBtn === cat.name ? 'selectedBtn' : ''}`}
        >
          <img src={cat.img} alt={cat.name} />
          <span>{cat.name}</span>
        </button>
      ))}
    </section>
  );
}
