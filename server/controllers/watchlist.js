import User from "../models/User.js";

export const getLikedVideos = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", videos: user.likedVideos });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching movies." });
  }
};

export const addToLikedVideos = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const videoAlreadyLiked = likedVideos.find(({ id }) => id === data.id);
      if (!videoAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedVideos: [...user.likedVideos, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "video already added to the liked list." });
    } else await User.create({ email, likedVideos: [data] });
    return res.json({ msg: "video successfully added to liked list." });
  } catch (error) {
    return res.json({ msg: "Error adding video to the liked list" });
  }
};

export const removeFromLikedVideos = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const videos = user.likedVideos;
      const videoIndex = videos.findIndex(({ id }) => id === videoId);
      if (!videoIndex) {
        res.status(400).send({ msg: "video not found." });
      }
      videos.splice(videoIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedVideos: movies,
        },
        { new: true }
      );
      return res.json({ msg: "video successfully removed.", videos });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error removing video to the liked list" });
  }
};