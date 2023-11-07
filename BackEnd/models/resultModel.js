module.exports = (sequelize, DataTypes) => {
    const Result = sequelize.define("result", {
        resultID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        examID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: {
                field: 'examID',
                references: {
                    model: 'Exam',
                    key: 'examID'
                }
            }

        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    }, {
        timestamps: false,
    });

    return Result;
};