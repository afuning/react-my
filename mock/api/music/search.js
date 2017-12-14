module.exports = (req, res) => {
    res.send({
        code: 0,
        msg: 'ok',
        data: {
            list: [
                {
                    id: '1',
                    src: 'http://7xthm1.com1.z0.glb.clouddn.com/wedont.mp3',
                },
                {
                    id: '2',
                    src: 'http://7xthm1.com1.z0.glb.clouddn.com/Taylor%20Swift%20-%20Getaway%20Car.mp3',
                }
            ]
        }
    })
}