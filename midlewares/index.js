
const ObjectId = require('mongoose').Types.ObjectId;

const validateDbId = (req, res, next) => {
    if(ObjectId.isValid(req.params.id) == false)
        res.status(400).json({
            error: `Given Object id (${req.params.id}) is not valid.`
        })
    else
        next();
}

const raiseRecord404Error = (req, res, next) => {
    res.status(404).json({
        error: 'No record with the given _id :' + req.params.id
    })
}

const errorHandler = (error, req, res, next) => {
    res.status(500).json({
        error: error
    })
}

module.exports = {
    validateDbId,
    raiseRecord404Error,
    errorHandler
}