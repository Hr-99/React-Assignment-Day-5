import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
           <Card chosenimg="https://www.humphreysfarm.com/ProductCart/pc/catalog/5952E-lg.jpg"cardTitle="Orange" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pear"/>
           <Card chosenimg="https://www.onnsteps.com/image/cache/catalog/fhal/guavava-1000x1000.jpg" cardTitle="Guava" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Apple"/>
           <Card chosenimg="https://www.pngplay.com/wp-content/uploads/6/Mango-Pieces-PNG.png" cardTitle="Mango" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pineapple"/>
        </div>
      </div>
    </section>
  )
}
export default CardSection