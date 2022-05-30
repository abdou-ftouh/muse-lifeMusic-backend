const express = require("express");

const {getBands, createBands, updateBands, deleteBands} =require('../controlers/bandControler')
const router =express.Router();

router.get('/',getBands);
router.post('/',createBands);
router.patch('/:id',updateBands);
router.delete('/:id',deleteBands);

module.exports = router;