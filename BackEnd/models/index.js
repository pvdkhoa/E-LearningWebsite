const dbConfig = require('../config/dbConfig.js');

const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected..')
})
.catch(error=>{

    console.log('Error: ' + error);

})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
//model nào muốn sử dụng database thì khai báo ở đây
db.exams = require('./examModel.js')(sequelize,DataTypes)
db.questions = require('./questionModel.js')(sequelize,DataTypes)


//Mỗi khi khởi động lại server mất toàn bộ data nếu force = false
db.sequelize.sync({force:false})
.then(()=>{
    console.log('yes re-sync done!');
})

module.exports = db