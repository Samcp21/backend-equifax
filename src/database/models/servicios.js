const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class servicios extends Model { }

    servicios.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            idTypeTours: DataTypes.NUMBER,
            activo: DataTypes.NUMBER,
            price: DataTypes.STRING,
            fechaCreacion: {
                field: 'fechaCreacion',
                type: DataTypes.DATE,
            },
            fechaActualizacion: {
                field: 'fechaActualizacion',
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'servicios',
            tableName: 'servicios',
            timestamps: true,
            updatedAt: 'fechaActualizacion',
            createdAt: 'fechaCreacion',
        }
    )
    return servicios
}
