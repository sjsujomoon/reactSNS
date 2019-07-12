module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
      charset: "utf8mb4", // to allow emoticons
      collate: "utf8mb4_general_ci"
    }
  )

  Post.associate = (db) => {
    db.Post.belongsTo(db.User) // to save id from User table
    db.Post.hasMany(db.Comment)
    db.Post.hasMany(db.Image)
    db.Post.belongsToMany(db.Hashtag, ({ through: "PostHashtag" }))
  }

  return Post
}