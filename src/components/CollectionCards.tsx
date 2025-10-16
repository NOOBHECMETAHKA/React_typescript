import { useState, useEffect } from "react"
import Card from "./Card";
import errorPNG from "../assets/errors/error.png"
import axios from "axios";

// {"name":"name 1","price":56,"photo":"photo 1","id":"1"}
interface MebelObjectResponce {
  id: number,
  name: string,
  price: number,
  photo: string
}

export default function CollectionCards() {
  const [ cards, changeCards ] = useState([]);

  function getMebelObjects() {
    let linkAPI:string = "https://68e94cd2f1eeb3f856e3a76a.mockapi.io/Beds";
    axios.get(linkAPI).then(response => {
      changeCards(response.data);
    });
  }

  useEffect(() => {
    getMebelObjects();
  }, []);

  return (
    <div className="m-3">
      <h1 className="mt-1 mb-3 text-secondary text-center">Список товаров</h1>
      <div className="container d-flex flex-row flex-wrap justify-content-between gap-3">
        {
          cards.map((data) => {
            return <Card key={data.id} title={data.name} price={data.price} picture={errorPNG}></Card>;
          })
        }
        {/* <Card title={"Шкаф"} price={100} picture={errorPNG} ></Card> */}
      </div>
    </div>
  )
}
