const app = require('express')();
const PORT = 8080;


app.listen(
    PORT,
    () => console.log(`ca fonctionne sur le port http://localhost!${PORT}`)
)

app.get('/airsoft', (req, res) => {
    res.status(200).send({
        kartoffelnSalad:'@@@ççç',
        length:'3days'
    });
} )


app.post('/airsoft/:camo', (req, res) => {
    const {camo} = req.params;
    const {lieu} = req.body;

    if (!lieu){
        res.status(418).send({message: "Faut qu'on sache ou on va !"})
    }
    res.send({
        airsoft: `kartoffelnsalad a ${lieu} deguisés en ${camo}`
    })
})