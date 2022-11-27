import React from "react";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  // Функция клика на стрелочку, добавляющую товар в корзину
  const onClickPlus = () => {
    onClickArrow(props.title, props.price, props.onClickFavorite);
    setIsAdded(!isAdded);
  };

  // Функция клика, добавляющая товар в избранное
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [cartItems, setCartItems] = React.useState([]);

  const onClickArrow = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{props.title}</h3>
        <div className="card-favorite" onClick={onClickFavorite}>
          {" "}
          <img
            height={32}
            width={32}
            src={
              isFavorite
                ? "/images/heart-liked.svg"
                : "/images/heart-unliked.svg"
            }
            alt="Unliked"
          ></img>
        </div>
      </div>
      <img src={props.imageUrl}></img>
      <div className="card-characteristics">
        <p className="left">Корпус:</p>
        <p className="right">{props.characteristicCor}</p>
      </div>
      <div className="card-characteristics">
        <p className="left">Влагозащита:</p>
        <p className="right">{props.characteristicAqua}</p>
      </div>
      <div className="card-characteristics">
        <p className="left">Цвет:</p>
        <p className="right">{props.characteristicColor}</p>
      </div>
      <div className="card-characteristics">
        <p className="left">Тип экрана: </p>
        <p className="right">{props.characteristicDisplay}</p>
      </div>
      <div className="card-characteristics">
        <p className="left">Размер экрана:</p>
        <p className="right">{props.characteristicSize}</p>
      </div>
      <div className="card-price">
        <div className="price">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          className="card-btn"
          onClick={onClickPlus}
          src={isAdded ? "/images/checked.svg" : "/images/arrow.svg"}
        ></img>
      </div>
    </div>
  );
}

export default Card;
