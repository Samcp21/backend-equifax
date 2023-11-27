const generateReport = async (req, res) => {
    const fs = require('fs')
    const carbone = require('carbone')
    const path = require('path')

    try {
        function numeroAl() {
            return Math.floor(Math.random() * 100000)
        }
        const tasaIGV = 18

        const numeroAleatorio = numeroAl()
        console.log(numeroAleatorio)

        console.log('req.body', req.body)
        const { reservation, precio, colaborador, cliente, fechaCreacion } = req.body
        const igv = precio * (tasaIGV / 100)
        const order = [{ id: 1, colaborador, cliente, price: igv, total: precio }]
        const data = {
            or: reservation,
            date: fechaCreacion,
            cod: numeroAleatorio,
            firstname: colaborador,
            order,
            subtotal: precio,
            igv: igv,
            other: 0,
            total: precio,
        }
        // var data = {
        //     or: 21,
        //     date: '27/11/2023',
        //     cod: 4342,
        //     firstname: 'John',
        //     dni: '73954541',
        //     cargo: 'empleado',
        //     email: 'samir@innout.pe',
        //     telefono: '934054854',
        //     order: [
        //         { id: 1, colaborador: 'Tesla', cliente: 'yoni', price: '20', total: '100' },
        //         { id: 2, colaborador: 'Tesla', cliente: 'yoni', price: '20', total: '140' },
        //         { id: 3, colaborador: 'Tesla', cliente: 'yoni', price: '20', total: '130' },
        //     ],
        //     subtotal: 370,
        //     igv: '18%',
        //     other: 0,
        //     total: 370,
        // }
        const templatePath = path.resolve(__dirname, '../../assets/pdf-reservas.odt')
        const pathDownload = path.resolve(__dirname, '../../../result.odt')
        carbone.render(templatePath, data, function (err, result) {
            if (err) {
                return console.log(err)
            }
            // write the result
            fs.writeFileSync('result.odt', result)
        })
        res.download(pathDownload, 'reserva.odt')
    } catch (error) {
        console.error('Error al enviar el archivo al cliente:', error)
        // Puedes enviar una respuesta de error al cliente si es necesario
        res.status(500).send('Error al descargar el archivo.')
    }
}
module.exports = {
    generateReport,
}
