import './Card.css';

export default function Card({ name, image, category, description, price }) {
  // Função para limitar o texto da descrição
  const truncateDescription = (text, maxLength = 200) => {
    if (!text) return '';
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };
  return (
    <div className='card'>
      <div className='card_img'>
        <img src={image} alt={name} />
      </div>

      <div className='card_info'>
        <h3>{name || 'Produto'}</h3>
        <p className='card_category'>{category || 'Categoria'}</p>
        <p className='card_desc'>
          {truncateDescription(description) || 'Descrição do produto aqui.'}
        </p>
        <p className='card_price'>
          R$ {price ? price.toFixed(2).replace('.', ',') : '—'}
        </p>
      </div>
    </div>
  );
}
