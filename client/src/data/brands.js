import generateId from "../tools/generateId";

const brands = [
  {
    brand: 'Audi',
    img: "http://oceanparkauto.com/wp-content/uploads/2013/10/800px-Audi_logo_detail_svg.png",
    path: '/brand/Audi'
  },
  {
    brand: 'Cadillac',
    img: "https://media.gm.com/content/dam/Media/images/MX/Vehicles/Cadillac/Logos/logo.cadillac2.jpg",
    path: '/brand/Cadillac'
  },
  {
    brand: 'BMW',
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    path: '/brand/bmw'
  },
  {
    brand: 'Volvo',
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Volvo_Trucks_%26_Bus_logo.jpg",
    path: '/brand/volvo'
  },
  {
    brand: 'Mercedes Benz',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png",
    path: '/brand/mercedes'
  },
  {
    brand: 'Mazerati',
    img: "https://1000logos.net/wp-content/uploads/2018/04/Maserati-Logo-2006.jpg",
    path: '/brand/mazerati'
  },
  {
    brand: 'Bentley',
    img: "https://www.car-brand-names.com/wp-content/uploads/2015/03/Bentley-Logo.png",
    path: '/brand/bentley'
  },
  {
    brand: 'Rolls Royce',
    img: "https://logos-world.net/wp-content/uploads/2021/04/Rolls-Royce-Logo.png",
    path: '/brand/rolls'
  },
];

const data = generateId(brands);

export default data