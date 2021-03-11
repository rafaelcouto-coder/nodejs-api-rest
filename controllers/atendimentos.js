module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('vc está na rota de atendimentos'));

}