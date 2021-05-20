import React from 'react';
import './App.css';
import Buttons from './Buttons'
import Product from "./Product";
import Tile from "./Tile";

import TheHandyBag from './assets/bag_1.png';
import TheStylishBag from './assets/bag_2.png';
import TheTrendyBag from './assets/bag_3.png';
import TheSimpleBag from './assets/bag_4.png';
import brand from "./assets/brand.png";
import ourstory from "./assets/our_story.png";


function App() {
  return (
      <div>
          <header>
              <h1>Handbags & Purses</h1>
              <nav>
                  <Buttons content="to the collection" disabled={false}></Buttons>
                  <Buttons content="shop all bags" disabled={false}></Buttons>
                  <Buttons content="pre-orders" disabled={true}></Buttons>
              </nav>
          </header>
          <main>
              <Product
                  label={"Bestseller"}
                  image={TheHandyBag}
                  name={"The handy bag"}
                  price={400}
              />
              <Product
                  label={"Bestseller"}
                  image={TheStylishBag}
                  name={"The stylish bag"}
                  price={250}
              />
              <Product
                  label={"New collection"}
                  image={TheSimpleBag}
                  name={"The simple bag"}
                  price={300}
              />
              <Product
                  label={"New collection"}
                  image={TheTrendyBag}
                  name={"The trendy bag"}
                  price={150}
              />
          </main>
          <footer>
              <Tile
                  title="THE BRAND"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate impedit ipsa ipsum, laboriosam officia porro provident quae quam saepe sapiente voluptas? Ab accusamus at consequuntur corporis cum deserunt eligendi, ex facere id ipsam ipsum iure labore magnam magni maiores modi non quibusdam quis reiciendis repellat reprehenderit sunt suscipit velit."
              />
              <Tile
                  image={brand} altImage={"OUR BRAND"}
              />
              <Tile
                  image={ourstory} altImage={"OUR STORY"}
              />
              <Tile
                  title="OUR STORY"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto assumenda, consequatur, cum cupiditate esse ex id illum inventore itaque laudantium magni molestias neque perferendis, quasi quibusdam rerum temporibus? Ab eaque eos fuga fugiat natus quam quidem tempore tenetur! Cum doloribus eaque illum inventore nulla numquam placeat ratione saepe vitae."
              />
          </footer>
      </div>
  );
}

export default App;



