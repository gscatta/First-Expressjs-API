import Post from '../models/Post.js';

// retrieve all posts
const index = (req, res) => {
    Post.find((err, posts) => {
        if (!err) res.json(posts);
        else console.log(err);
    });
};

// create a new post
const store = (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: req.body.date,
    });
    newPost.save();
    res.json({
        message: 'new post correctly saved :)',
        post: newPost,
    });
};

// show a specific post
const show = (req, res) => {
    const _id = req.params._id;
    Post.findById(_id, (err, post) => {
        if (!err) {
            if (post) res.json(post);
            else res.json({ error: `no saved post has id ${_id}` });
        } else console.log(err);
    });
};

// update a specific post
const update = (req, res) => {
    const _id = req.params._id;

    const updateArgs = {};
    if (req.body.title) updateArgs['title'] = req.body.title;
    if (req.body.content) updateArgs['content'] = req.body.content;
    if (req.body.author) updateArgs['author'] = req.body.author;
    if (req.body.date) updateArgs['date'] = req.body.date;

    Post.findByIdAndUpdate(
        _id,
        updateArgs,
        { new: true, useFindAndModify: false },
        (err, post) => {
            if (!err) {
                if (post)
                    res.json({ message: 'the post has been updated', post });
                else res.json({ error: `no saved post has id ${_id}` });
            } else console.log(err);
        }
    );
};

// destroy a specific post
const destroy = (req, res) => {
    const _id = req.params._id;
    Post.findByIdAndDelete(_id, { useFindAndModify: false }, (err, post) => {
        if (!err) {
            if (post) res.json({ message: 'the post has been deleted', post });
            else res.json({ error: `no saved post has id ${_id}` });
        } else console.log(err);
    });
};

export { index, store, show, update, destroy };
