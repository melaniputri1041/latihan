import React from 'react'
import { useParams } from 'react-router-dom'

const products = [
    {
      id: 1,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
    },
    {
      id: 2,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
    },
    {
      id: 3,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
    },
    {
      id: 4,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
    },
    {
      id: 5,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
    },
    {
      id: 6,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
    },
    {
      id: 7,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
    },
    {
      id: 8,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
    },
    {
      id: 9,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
    },
    {
      id: 10,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
    },
    {
      id: 11,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
    },
    {
      id: 12,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
    },
  ];

const DetailProduk = () => {
    const {idproduk} = useParams()
    const produk = products.find((product) => product.id == idproduk);
  return (
    <div>
        <p>{produk.name}</p>
        <p>{produk.price}</p>
    </div>
  )
}


export default DetailProduk