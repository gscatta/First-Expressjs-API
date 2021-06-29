const endpointNotFound = (req, res) => {
    res.json({
        error: 'Endpoint not found! :(',
    });
};

export default endpointNotFound;
