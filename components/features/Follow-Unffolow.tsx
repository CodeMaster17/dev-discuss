"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FollowUser, isUserFollowed } from "@/lib/actions/features.action";

interface Props {
  loggedInUser: string | null;
  user: string;
}

const FollowUnfollow = ({ loggedInUser, user }: Props) => {
  // removing
  console.log(" user", user);
  const [isUserFollowedVariable, setIsUserFollowedVariable] = useState(false);

  const FollowButtonHanlder = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    console.log("Button clicked");
    try {
      const checkIsUserFollowed = await isUserFollowed({
        userId: user,
        loggedInUser,
      });
      console.log("Check is user followed", checkIsUserFollowed);
      if (!checkIsUserFollowed) {
        const result = await FollowUser({ userId: user, loggedInUser });
        if (result) {
          setIsUserFollowedVariable(true);
        }
      } else {
        const result = await FollowUser({ userId: user, loggedInUser });
        if (result) {
          setIsUserFollowedVariable(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkUserFollowed = async () => {
      const checkIsUserFollowed = await isUserFollowed({
        userId: user,
        loggedInUser,
      });
      setIsUserFollowedVariable(checkIsUserFollowed);
    };
    checkUserFollowed();
  }, []);

  return (
    <div className="mt-5">
      {/* <span className="primary-text-gradient max-lg:hidden">
          {isUserFollowedVariable ? "Unfollow" : "Follow"}
        </span> */}
      {isUserFollowedVariable ? (
        <Button
          onClick={FollowButtonHanlder}
          className="small-medium min-h-[41px] w-full rounded-lg bg-primary-100 px-4 py-3 shadow-none"
        >
          <span className="primary-text-gradient max-lg:hidden">Unfollow</span>
        </Button>
      ) : (
        <Button
          onClick={FollowButtonHanlder}
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg  px-4 py-3 shadow-none"
        >
          <span className="primary-text-gradient max-lg:hidden">Follow</span>
        </Button>
      )}
    </div>
  );
};

export default FollowUnfollow;
