import Comment from "../model/comment.js";

export const newComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);

    comment.save();

    return res.status(200).json({ msg: "comment saved successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id });

    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ msg: "comment not found" });
    }

    await comment.deleteOne();

    return res.status(200).json({ msg: "comment deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
