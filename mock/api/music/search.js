module.exports = (req, res) => {
    res.send({
        code: 0,
        msg: 'ok',
        data: {
            list: [
                {
                    id: '1',
                    src: 'http://7xthm1.com1.z0.glb.clouddn.com/wedont.mp3',
                    name: 'we dont talk anymore',
                    time: 180
                },
                {
                    id: '2',
                    src: 'http://7xthm1.com1.z0.glb.clouddn.com/Taylor%20Swift%20-%20Getaway%20Car.mp3',
                    name: 'Getaway Car',
                    time: 190
                },
                {
                    id: '3',
                    src: 'http://7xthm1.com1.z0.glb.clouddn.com/%E9%99%88%E6%99%93%E7%90%AA%20-%20%E4%B8%83%E5%B9%B4%E6%BB%8B%E9%A4%8A.mp3',
                    name: '七年滋養',
                    time: 200
                }
            ]
        }
    })
}