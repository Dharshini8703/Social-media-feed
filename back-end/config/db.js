import  Sequelize  from "sequelize";

const sequelize = new Sequelize('social_media_feed', 'root', 'Dharshini@2003', {
    host: 'localhost',
    port: 3306,
    dialect : 'mysql'
});

sequelize.sync()
    .then(() => console.log('Database Connected Successfully'))
    .catch((error) => console.error('Database Connection failed.', error));

export default sequelize;