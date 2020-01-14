const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        try {
            console.log(req.params.devId)
            console.log(req.headers.user)
            const { devId } = req.params
            const { user } = req.headers

            const loggedDev = await Dev.findById(user);
            const targetDev = await Dev.findById(devId);

            if (!targetDev) {
                res.status(400).json({ error: 'Dev not exists' })
            }

            loggedDev.dislikes.push(targetDev._id);
            await loggedDev.save()

            return res.json(loggedDev);
        } catch (e) {
            return res.status(422).send(e.message)
        }
        
    }
};

