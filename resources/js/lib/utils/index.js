import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes) => twMerge(clsx(...classes));

export const registerChannels = (userIds, user, channelName) => {
    // let channels = [];
    // let data = null;
    //
    // if (!user.is_admin) {
    //     channels.push(window.Echo.private(`${channelName}.${user.id}`));
    // } else {
    //     channels = userIds.map(userId => window.Echo.private(`${channelName}.${userId}`));
    // }
    //
    // return channels;
}
