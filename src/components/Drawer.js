function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            onClick={onClose}
            width={25}
            height={25}
            className="removeBtn"
            src="images/btn-remove.svg"
            alt=""
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <div
                style={{ backgroundImage: "url(${obj.imageUrl" }}
                className="cartItemImg"
              ></div>
              <div className="item-info">
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                width={25}
                height={25}
                className="removeBtn"
                src="images/btn-remove.svg"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>50 000 руб.</b>
            </li>
            <li>
              <span>Скидка 15%</span>
              <div></div>
              <b>7 500 руб.</b>
            </li>
          </ul>
          <button className="purpleButton">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
