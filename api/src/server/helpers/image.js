const fs = require('fs');

module.exports = {
    process: (req, res, next) => {
        console.log(req);
        const fileName = req.body.fileName;
        const imageBuffer = req.body.image;
        // write file
        fs.writeFile(`tmp/${fileName}`, imageBuffer, (error, result) => {
            if(error) {
                res.status(500).json({result: 'error', error});
            } else {
                res.json({result: 'success', error: null});
            }
        });  
    }
};