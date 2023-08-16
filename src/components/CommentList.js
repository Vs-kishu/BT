import React from "react";
import Comment from "./Comment";

export const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <>
      <Comment data={comment} />
      <div className="ml-3 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </>
  ));
};
