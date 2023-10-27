const { servicios } = require('../../database/models')

const postProducts = async (req, res) => {
    try {
        const data = await servicios.create({
          ...req.body,
        })
        res.send(data)
    } catch (error) {
        console.log('error', error)
    }
}
const getProducts = async (req, res) => {
    try {
        console.log('getProducts')
        const data = await servicios.findAll({
            where: {
                activo: 1,
            },
        })
        res.send(data)
    } catch (error) {
        console.log('error', error)
    }
}
const putProducts = async (req, res) => {
    try {
      //console.log("req.body",req.body)
      const {name,price,idTypeTours,description}=req.body
      const body ={
        name,
        description,
        idTypeTours,
        price
      }
        const data = await servicios.update(
            body,{
                where: {
                    id: req.body.id,
                },
            })
        res.send(data)
    } catch (error) {
        console.log('error', error)
    }
}

module.exports = {
    postProducts,
    getProducts,
    putProducts,
}
