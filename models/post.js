module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    isSignaled: {
      type: Sequelize.TINYINT,
      defaultValue: 0,
    },
  });

  return Post;
};
