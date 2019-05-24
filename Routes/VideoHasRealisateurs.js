const express = require ("express")

const router = express.Router()

router.get('/adminform/videoHasRealisateurs', (req, res) => {
    connexion.query('SELECT * FROM videoHasRealisateurs', (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération de l\'élément');
        } else {
            res.json (results);
        }
    })
})

router.post('/adminform/videoHasRealisateurs', (req, res) => {
    const formData = req.body;
    connexion.query('INSERT INTO videoHasRealisateurs SET ?', formData, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send ('Erreur lors de l\'enregistrement de l\'élément');
        } else {
            res.sendStatus(200);
        }
    })
})

module.exports = router