require('./models')
const { Toilette } = require('./models')
const toilettesPubliques = require('./sanisettesparis.json')

const createToilette = async () => {
  await Toilette.destroy({ where: {} })

  toilettesPubliques.forEach(async (toilette, i) => {
    const latitude = toilette.fields.geo_point_2d[0]
    const longitude = toilette.fields.geo_point_2d[1]

    const point = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    const newToilette = await Toilette.create({
        adresse : toilette.fields.adresse,
        position: point,
        horaire : toilette.fields.horaire,
        arrondissement :toilette.fields.arrondissement,

        
    })

    console.log(newToilette.adresse)
  })
}

createToilette()