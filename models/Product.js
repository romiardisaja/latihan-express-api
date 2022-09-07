module.exports = (DataTypes, DataTypes) => {
    const Product = DataTypes.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
           }, 
           name: {
            type: DataTypes.STRING,
            allowNull: false,        
           },
           brand: {
            type: DataTypes.STRING,
            allowNull: false
           },
           description: {
            type: DataTypes.TEXT
           },
           createdAt: {
            type: DataTypes.DATE,
            allowNull: false
           },
           updateddAt: {
            type: DataTypes.DATE,
            allowNull: false
           }
    }, {
        tableName: 'products'
    })

    return Product;
}