const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('.gallery');
const markup = images.map(element =>
  `<li><img src="${element.url}" alt="${element.alt}" height = "600" width = "1000"></li>`
).join("");
galleryListRef.insertAdjacentHTML("beforeend", markup);




/*const gallaryListRef = document.querySelector('.gallery');
const imagesList = images.map(element => {
  const liElem = document.createElement('li');
  liElem.classList.add('image');
  const imgElem = document.createElement('img');
  imgElem.src = element.url;
  imgElem.alt = element.alt;
  imgElem.height = "600";
  imgElem.width = "1000";
  liElem.append(imgElem);
  return liElem;
});
gallaryListRef.append(...imagesList);*/