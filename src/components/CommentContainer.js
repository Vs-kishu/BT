import React from "react";
import { CommentList } from "./CommentList";

const commentData = [
  {
    name: "kishan",
    text: "you doinf est",
    replies: [
      {
        name: "ramesh",
        text: "you doinf est",
        replies: [
          {
            name: "mahesh",
            text: "you doinf est",
            replies: [
              {
                name: "suresh",
                text: "you doinf est",
                replies: [
                  {
                    name: "ram",
                    text: "you doinf est",
                    replies: [
                      {
                        name: "unknown",
                        text: "you doinf est",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "abhishek",
    text: "you awsome",
    replies: [],
  },
  {
    name: "subodh",
    text: "you best",
    replies: [],
  },
  {
    name: "him",
    text: "you badmass!!",
    replies: [],
  },
];

const CommentContainer = () => {
  return (
    <div className="mt-5 w-4/6">
      <h1 className="font-semibold">comments:</h1>
      <div>
        <CommentList comments={commentData} />
      </div>
    </div>
  );
};

export default CommentContainer;
