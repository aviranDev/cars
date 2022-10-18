const fulFill = () => console.log('Connected To MongoDB');

const reject = error => console.log('There is some error occured:', error);

const info = {
  fulFill,
  reject,
};

export default info;