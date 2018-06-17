module.exports = {
    username:'test',
    database:'test',
    password:'password', 
    params:{
      host: 'mysql.com',
      port:41890,
      dialect: 'mysql',
      operatorsAliases: false
    },
    jwtSecret: "api",
    jwtSession: {session: false},
    localStorage : '../../public/uploads'
  }