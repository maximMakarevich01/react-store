import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import React from "react";
import axios from "axios";

// Рендер карточек товара с использованием массива
const arr = [
  {
    title: "Iphone X",
    price: 50000,
    imageUrl: "/images/Iphone.png",
    characteristicCor: "Стекло",
    characteristicDisplay: 740,
    characteristicColor: "Черный",
    characteristicAqua: "ip67",
    characteristicSize: 520,
  },
  {
    title: "DJI Mavic",
    price: 42000,
    imageUrl: "/images/bayraktar.png",
    characteristicCor: "Пластик",
    characteristicDisplay: 240,
    characteristicColor: "Черный",
    characteristicAqua: "ip67",
    characteristicSize: 920,
  },
  {
    title: "Apple Watch",
    price: 80000,
    imageUrl: "/images/watch.png",
    characteristicCor: "Пластик",
    characteristicDisplay: 100,
    characteristicColor: "Черный",
    characteristicAqua: "ip67",
    characteristicSize: 520,
  },
  {
    title: "Apple Ipad",
    price: 35000,
    imageUrl: "/images/ipad.png",
    characteristicCor: "Пластик",
    characteristicDisplay: 240,
    characteristicColor: "Черный",
    characteristicAqua: "ip67",
    characteristicSize: 520,
  },
];

// Использование хука useState
function App() {
  const [items, setItems] = React.useState([
    {
      title: "Iphone X",
      price: 50000,
      imageUrl: "/images/Iphone.png",
      characteristicCor: "Стекло",
      characteristicDisplay: 740,
      characteristicColor: "Черный",
      characteristicAqua: "ip67",
      characteristicSize: 520,
    },
    {
      title: "DJI Mavic",
      price: 42000,
      imageUrl: "/images/bayraktar.png",
      characteristicCor: "Пластик",
      characteristicDisplay: 240,
      characteristicColor: "Черный",
      characteristicAqua: "ip67",
      characteristicSize: 920,
    },
    {
      title: "Apple Watch",
      price: 80000,
      imageUrl: "/images/watch.png",
      characteristicCor: "Пластик",
      characteristicDisplay: 100,
      characteristicColor: "Черный",
      characteristicAqua: "ip67",
      characteristicSize: 520,
    },
    {
      title: "Apple Ipad",
      price: 35000,
      imageUrl: "/images/ipad.png",
      characteristicCor: "Пластик",
      characteristicDisplay: 240,
      characteristicColor: "Черный",
      characteristicAqua: "ip67",
      characteristicSize: 520,
    },
    {
      title: "Iphone X",
      price: 50000,
      imageUrl: "/images/Iphone.png",
      characteristicCor: "Стекло",
      characteristicDisplay: 740,
      characteristicColor: "Черный",
      characteristicAqua: "ip67",
      characteristicSize: 520,
    },
    {
      title: "DJI Mavic",
      price: 42000,
      imageUrl: "/images/bayraktar.png",
      characteristicCor: "Пластик",
      characteristicDisplay: 240,
      characteristicColor: "Черный",
      characteristicAqua: "ip67",
      characteristicSize: 920,
    },
    {
      title: "Apple Watch",
      price: 80000,
      imageUrl: "/images/watch.png",
      characteristicCor: "Пластик",
      characteristicDisplay: 100,
      characteristicColor: "Черный",
      characteristicAqua: "ip67",
      characteristicSize: 520,
    },
    {
      title: "Apple Ipad",
      price: 35000,
      imageUrl: "/images/ipad.png",
      characteristicCor: "Пластик",
      characteristicDisplay: 240,
      characteristicColor: "Черный",
      characteristicAqua: "ip67",
      characteristicSize: 520,
    },
  ]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  // Использование хука useEffect
  // React.useEffect(() => {
  //   fetch("https://6382431d9842ca8d3ca5353e.mockapi.io")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  // }, []);

  // Запрос и передача данных с импровизированного бэкенда
  axios
    .post("https://6382431d9842ca8d3ca5353e.mockapi.io")
    .then((res) => setItems(res.data));

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  // Верстка с использованием компонентов
  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content-header">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : `Все кроссовки`}
          </h1>
          <div className="search">
            <img src="images/search.svg" alt="Search"></img>
            <input
              onChange={onChangeSearchInput}
              placeholder="Поиск..."
            ></input>
          </div>
        </div>
        <div className="all-items">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={indexedDB}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                characteristicCor={item.characteristicCor}
                characteristicAqua={item.characteristicAqua}
                characteristicColor={item.characteristicColor}
                characteristicDisplay={item.characteristicDisplay}
                characteristicSize={item.characteristicSize}
                onClickFavorite={() => console.log("Добавили в избранное")}
                onClickArrow={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
