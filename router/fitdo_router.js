const router = require("express").Router();
const { jwtfilter } = require('../middleware/jwtfilter');

router.get("/", jwtfilter , (req, res) => {
    res.json(getFido(req.decoded.login_id));
});

// router.put()

// router.get()

// router.delete()




module.exports = router;