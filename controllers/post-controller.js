const posts = [
    {
        title: 'Un primo post',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing' +
            'elit. Doloremque dolorum facere fugit hic minima odio' +
            'pariatur, porro quasi quo, totam veniam, vero? ' +
            'Asperiores dicta numquam porro possimus quos reiciendis' +
            'voluptates.',
        author: 'Tizio',
        date: '12/04/2020',
    },
    {
        title: 'Un secondo post',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing' +
            'elit. Doloremque dolorum facere fugit hic minima odio' +
            'pariatur, porro quasi quo, totam veniam, vero? ' +
            'Asperiores dicta numquam porro possimus quos reiciendis' +
            'voluptates.',
        author: 'Caio',
        date: '11/08/2020',
    },
];

const index = (req, res) => {
    res.json(posts);
};

const store = (req, res) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: req.body.date,
    };
    posts.push(newPost);
    res.json({
        message: 'new post correctly saved :)',
    });
};

export { index, store };
