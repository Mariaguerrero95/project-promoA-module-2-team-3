"use strict";

const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");
const cardNameAddressee = document.querySelector(".js-card-nameAddressee");
const cardMessage = document.querySelector(".js-card-message");
const cardPhotoImg = document.querySelector(".js-card-photo-img");
const cardPhone = document.querySelector(".js-card-phone");
const cardNameSender = document.querySelector(".js-card-nameSender");
const cardInsta = document.querySelector(".js-card-insta");

fetch(`https://dev.adalab.es/api/info/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const cardData = data.data;
    console.log(cardData);
    cardNameAddressee.innerHTML = cardData.field2;
    cardMessage.innerHTML = cardData.field3;
    cardPhotoImg.style.backgroundImage = `url(${cardData.photo})`;
    cardPhone.innerHTML = cardData.field4;
    cardNameSender.innerHTML = cardData.field5;
    cardInsta.innerHTML = cardData.field6;
  });
