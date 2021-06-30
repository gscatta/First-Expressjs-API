import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now },
});

export default mongoose.model('Post', postSchema);
