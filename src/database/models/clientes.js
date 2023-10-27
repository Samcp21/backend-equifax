const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class clientes extends Model { }

    clientes.init(
        {
            idTipoDocumento: DataTypes.NUMBER,
            nombreCompletos: DataTypes.STRING,
            activo: DataTypes.NUMBER,
            numeroDocumento: DataTypes.STRING,
            nombres: DataTypes.STRING,
            apellidos: DataTypes.STRING,
            telefono: DataTypes.STRING,
            correo: DataTypes.STRING,
            direccion: DataTypes.STRING,
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
            modelName: 'clientes',
            tableName: 'clientes',
            timestamps: true,
            updatedAt: 'fechaActualizacion',
            createdAt: 'fechaCreacion',
        }
    )
    return clientes
}
