const 
    data = require('./postdata'),
    db = require('../models')

//Go to the models folder match the model being used with the keys of what appears in the data.json
db.Artpost.remove({})
    .then(() => {
        db.Artpost.collection.insert(data)
            .then(seededEntries => {
                console.log(seededEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })