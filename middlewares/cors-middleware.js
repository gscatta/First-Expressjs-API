const cors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_DOMAIN);
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
};

export default cors;
