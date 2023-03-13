import mongoose from 'mongoose';

const connect = async () => {
  try {
    const params = {
      dbName: `${process.env.DB_NAME}`,
      useNewUrlParser: true,
    };

    await mongoose.connect(`${process.env.MONGO_URL}`, params);
    console.log('connected');
    console.log(process.env.MONGO_URL);
  } catch (err) {
    console.log(err);
  }
};

const createData = (model: any, data: any) => {
  try {
    return model.create(data);
  } catch (err) {
    return err;
  }
};

const readData = (model: any, data: any, select?: any, sorting?: any) => {
  try {
    return model.find(data, select, { sort: sorting });
  } catch (err: any) {
    return err.message;
  }
};

const readsingleData = (model: any, data: any, select?: any) => {
  try {
    return model.findOne(data, select);
  } catch (err: any) {
    return err.message;
  }
};

const updateData = (model: any, keyword: any, data: any) => {
  try {
    return model.findOneAndUpdate(keyword, data);
  } catch (err: any) {
    return err.message;
  }
};

const updateManyData = (model: any, keyword: any, data: any) => {
  try {
    return model.updateMany(keyword, data);
  } catch (err: any) {
    return err.message;
  }
};

const deleteData = (model: any, keyword: any) => {
  try {
    return model.findByIdAndRemove(keyword);
  } catch (err: any) {
    return err.message;
  }
};

export { connect, createData, readData, readsingleData, updateData, updateManyData, deleteData };
