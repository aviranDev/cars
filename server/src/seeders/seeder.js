import endConnection from './endConnection.js'

const importData = async (props) => {
  try {
    await props.Model.insertMany(props.data)
    endConnection(true)
  } catch (error) {
    console.error(err);
  }
}

const deleteData = async (props) => {
  try {
    await props.Model.deleteMany();
    endConnection(false)
  } catch (err) {
    console.error(err);
  }
};

const seed = {
  importData,
  deleteData
};

export default seed;