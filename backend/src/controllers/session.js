const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { id } = req.body

        const ong = await connection('ongs').where('id', id)
            .select('*').first()

        if (!ong) {
            return res.status(400).json({ error: 'No ong found with this Id' })
        }
        return res.json(ong)

    }
}