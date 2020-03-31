const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { title, description, value } = req.body
        const ong_id = req.headers.authorization
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return res.json({ id })

    },
    async index(req, res) {
        const [count] = await connection('incidents').count()
        res.header('X-Total-Count', count['count(*)'])

        const { page = 1 } = req.query
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.email'
                , 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])

        return res.json(incidents)

    },
    async delete(req, res) {
        const { id } = req.params//"{id}" same as = req.params.id
        const ong_id = req.headers.authorization

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first() //para não retornar um array, apenas um resultado

        if (incident.ong_id != ong_id) {
            return res.status(401).json({ error: "Operation not authorized" })
        }

        await connection('incidents').where('id', id).delete()

        return res.status(204).send()
        
    }
}