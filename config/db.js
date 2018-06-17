import Sequelize from 'sequelize'
import auto_load_model from '../src/helpers/auto-load-model'

let db = null

module.exports = app => {
  if (!db) {
    const config = app.config.config
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )
    db = {
      sequelize,
      Sequelize,
      models: {}
    }
    db.models = auto_load_model(sequelize)
    //Só quando em dev
    //sequelize.sync().done(() => db)
  }
  return db
}
