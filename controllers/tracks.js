const { tracksModel } = require("../models");


const getItems = async (req, res) => {
    // find() función asíncrona que trae todos los datos relacionados al modelo
    try {
        const data = tracksModel.find();
        res.send({ data })
    } catch (error) {
        console.log("ERROR_GET_ITEMS", error)
    }
}

const getItem = () => {
    return null
}   

const createItem = () => {

}

// const updateItem = () => {

// }

// const deleteItem = () => {

// }

module.exports = {
    getItem,
    getItems
}