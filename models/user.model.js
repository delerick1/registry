const {db, DataTypes} = require('../util/database.util');



const User = db.define('user',{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
            allowNull: false,
        
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    },
    });
    module.exports = {User};
