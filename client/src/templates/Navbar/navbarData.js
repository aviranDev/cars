import { TbHeart } from "react-icons/tb";

export const navbarData = {
  entryTitle: 'Mardi Gras',
  heroTitle: 'E-commerce application of the mardi gras items and online shops',
  buttonOne: 'Top Shops',
  buttonTwo: 'Top Items',
  img: "https://img.freepik.com/premium-vector/sports-car-logo-design-black-background-with-reflection-vector-illustration_73458-1624.jpg"
};

export const collapseData = [
  { id: 1, path: '/', title: 'Models', general: true },
  { id: 2, path: '/brands', title: 'Brands', general: true },
  { id: 3, path: '/favorites', title: <TbHeart />, general: true },
];

export const mainData = [
  { id: 1, path: '/#models', title: 'Models', general: true },
  { id: 2, path: '/brands', title: 'Brands', general: true },
  { id: 3, path: '/favorites', title: <TbHeart />, general: true },
];

export default navbarData