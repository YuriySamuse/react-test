import PropTypes from 'prop-types';
import defaultImg from './default.jpg';

export default function Painting(props) {
  const {
    imageUrl = defaultImg,
    title,
    authorName = 'none',
    profileUrl,
    price,
    quantity,
  } = props;
  console.log(props);
  return (
    <div>
      <img src={imageUrl ?? defaultImg} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Avaliable: {quantity < 10 ? 'malo' : 'dostatochno'}</p>
      <button type="button">Add to Basket</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
