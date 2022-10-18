export default function endConnection(position) {
  let ms = null;
  let time = 1000;
  position ? ms = "Data inserted" : ms = "Data Destroyed";

  setTimeout(() => {
    console.log(ms);
  }, time * 2);

  setTimeout(() => {
    console.log("Connected ended!")
    process.exit();
  }, time * 4);
};