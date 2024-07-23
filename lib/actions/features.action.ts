"use server";
// features developed

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

// database connection -> current logged in user uski clerkId nikalenge -> fir check krenge uski follow list m ki vo userId h ya ni -> h toh well and good -> ni h toh add krendenge array m id

// schema -> array of id

// follow/unfollow feature

interface FollowUserParams {
  userId: string;
  loggedInUser: string | null;
}
export async function isUserFollowed({
  userId,
  loggedInUser,
}: FollowUserParams) {
  try {
    await connectToDatabase(); 
    const user = await User.findOne({ clerkId: loggedInUser });
    if (!user) {
      throw new Error("User not found");
    }

    return user.followingList.includes(userId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function FollowUser({ userId, loggedInUser }: FollowUserParams) {
  try {
    await connectToDatabase(); 
    const user = await User.findOne({ clerkId: loggedInUser });
    if (!user) {
      throw new Error("User not found");
    }

    const isFollowerExist = await isUserFollowed({ userId, loggedInUser });
    if (isFollowerExist) {
      await User.findOneAndUpdate(
        { clerkId: loggedInUser },
        { $pull: { followingList: userId } },
        { new: true }
      );
    } else {
      await User.findOneAndUpdate(
        { clerkId: loggedInUser },
        { $addToSet: { followingList: userId } },
        { new: true }
      );
    }
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
