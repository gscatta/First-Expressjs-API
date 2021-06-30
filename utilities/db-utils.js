import mongoose from 'mongoose';

const connectToDb = (callback) => {
    mongoose
        .connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(callback)
        .catch((error) => console.log(error));
};

export { connectToDb };
