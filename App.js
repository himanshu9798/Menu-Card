import React, { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import monday from "./images/vegan-food.gif";
import tuesday from "./images/healthy-food.gif";
import Wednesday from "./images/fruit.gif";
import thrusday from "./images/stew.gif";
import friday from "./images/frying-pan.gif";
import saturday from "./images/catering.gif";
import sunday from "./images/spaghetti.gif";

function Menu() {
  const [day, setDay] = useState("Monday");
  const [items, setItems] = useState([
    "Tea phapdi",
    "Rice Rotti Kofta",
    "Dabeli",
    "Allo Bhujiya & Rotti Tea",
  ]);
  const [images, setImages] = useState(monday);
  const [outcolor, setOutcolor] = useState("#A8DCAB");
  const [incolor, setIncolor] = useState("#519755");
  const inColor = incolor;

  const change = () => {
    if (day === "Monday") {
      setDay("Tuesday");
      setItems([
        "Moong Puri",
        "Chana Rice Rotti",
        "Steam Dhokla",
        "Panner, sweets, Papad, Rice dal",
      ]);
      setIncolor(" #4F7C82");
      setOutcolor("#B8E3E9");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
      setItems([
        "Thepla, Poha,milk Tea",
        "Soyabin, Rice, Cabbage",
        "Pani puri",
        "Manchuriyan, Rice Rotti Dal",
      ]);
      setIncolor("#e7b5ac");
      setOutcolor("#fde9ea");
      setImages(tuesday);
    } else if (day === "Wednesday") {
      setDay("Thrusday");
      setItems([
        "Bread jam MilK tea",
        "Rice Rotti lauki-chana",
        "Frenkie",
        "mix Veg & Rotti Rice",
      ]);
      setIncolor("#A08963");
      setOutcolor("#C9B194");
      setImages(Wednesday);
    } else if (day === "Thrusday") {
      setDay("Friday");
      setItems([
        "Mendu vada MilK tea",
        "Rice puri Chole",
        "Burger",
        "Kaddhi pakoda  Rotti Rice",
      ]);
      setIncolor("#A35C7A");
      setOutcolor("#C890A7");
      setImages(thrusday);
    } else if (day === "Friday") {
      setDay("Saturday");
      setItems([
        "upma,Toas, MilK, Tea",
        "Rice, Bhindi ,Rooti ,Rajma",
        "Puff",
        "Idli,shmabhar,dosha,Rice",
      ]);
      setIncolor("#80CBC4");
      setOutcolor("#B4EBE6");
      setImages(friday);
    } else if (day === "Saturday") {
      setDay("Sunday");
      setItems([
        "Dal Pakwan MilK, Tea",
        "Rice,Paneer,Rooti,Moong,salad",
        "Maggie/pasta",
        "Allo paratha",
      ]);
      setIncolor("#A294F9");
      setOutcolor("#CDC1FF");
      setImages(sunday);
    }
  };
  const change2 = () => {
    if (day === "Sunday") {
      setDay("Saturday");
      setItems([
        "upma,Toas, MilK, Tea",
        "Rice, Bhindi ,Rooti ,Rajma",
        "Puff",
        "Idli,shmabhar,dosha,Rice",
      ]);
      setImages(saturday);
      setIncolor("#80CBC4");
      setOutcolor("#B4EBE6");
    } else if (day === "Saturday") {
      setDay("Friday");
      setItems([
        "Mendu vada MilK tea",
        "Rice puri Chole",
        "Burger",
        "Kaddhi pakoda  Rotti Rice",
      ]);
      setIncolor("#A35C7A");
      setOutcolor("#C890A7");
      setImages(friday);
    } else if (day === "Friday") {
      setDay("Thrusday");
      setItems([
        "Bread jam MilK tea",
        "Rice Rotti lauki-chana",
        "Frenkie",
        "mix Veg & Rotti Rice",
      ]);
      setImages(thrusday);
      setIncolor("#A08963");
      setOutcolor("#C9B194");
    } else if (day === "Thrusday") {
      setDay("Wednesday");
      setItems([
        "Thepla, Poha,milk Tea",
        "Soyabin, Rice, Cabbage",
        "Pani puri",
        "Manchuriyan, Rice Rotti Dal",
      ]);
      setIncolor("#e7b5ac");
      setOutcolor("#fde9ea");
      setImages(Wednesday);
    } else if (day === "Wednesday") {
      setDay("Tuesday");
      setItems([
        "Moong Puri",
        "Chana Rice Rotti",
        "Steam Dhokla",
        "Panner, sweets, Papad, Rice dal",
      ]);
      setIncolor(" #4F7C82");
      setOutcolor("#B8E3E9");
      setImages(tuesday);
    } else if (day === "Tuesday") {
      setDay("Monday");
      setItems([
        "Fafdi Tea",
        "Rice Rotti Kofta",
        "Dabeli",
        "Allo Bhujiya & Rotti Tea",
      ]);
      setImages(monday);
      setIncolor("#519755");
      setOutcolor("#A8DCAB");
    }
  };

  return (
    <>
      {/* <div className="circle"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div class="square1"></div>
      <div class="square2"></div>
      <div class="square3"></div>
      <div class="square4"></div>
      <div class="square5"></div>
      <div class="square6"></div>
      <div class="square7"></div>
      <div class="square8"></div>
      <div class="square9"></div>
      <div class="square10"></div> */}
      <div class="box box1"></div>
      <div class="box box2"></div>
      <div class="box box3"></div>
      <div class="box box4"></div>
      <div class="box box5"></div>
      <div class="box box6"></div>
      <div class="box box7"></div>
      <div class="box box8"></div>
      <div class="box box9"></div>
      <div class="box box10"></div>
      <div class="box box11"></div>
      <div class="box box12"></div>
      <div class="box box13"></div>
      <div class="box box14"></div>
      <div class="box box15"></div>
      <div class="box box16"></div>
      <div class="box box17"></div>
      <div class="box box18"></div>
      <div class="box box19"></div>
      <div class="box box20"></div>

      <div className="menu">
        <div
          style={{
            textAlign: "center",
            border: `1px solid ${inColor}`,
            backgroundColor: incolor,
            color: "white",
            borderTopRadius: "10px",
          }}
        >
          <h1>
            <img
              style={{
                width: "50px",
                borderRadius: "50%",
                position: "relative",
                top: "17px",
                right: "10px",
              }}
              src={images}
              alt=""
            ></img>
            {day}
          </h1>
        </div>
        <div style={{ backgroundColor: outcolor }}>
          <div style={{ display: "flex" }}>
            <button
              onClick={change2}
              className="next"
              style={{ backgroundColor: outcolor }}
            >
              <BiChevronsLeft style={{ color: incolor }} />
            </button>
            <button
              onClick={change}
              className="previous"
              style={{ backgroundColor: outcolor }}
            >
              <BiChevronsRight style={{ color: incolor }} />
            </button>
          </div>
          <br></br>
          <div className="food" style={{ backgroundColor: incolor }}>
            {items.map((value) => (
              <li style={{ textAlign: "justify" }}>{value}</li>
            ))}
          </div>

          <button style={{ backgroundColor: incolor }} className="order">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
