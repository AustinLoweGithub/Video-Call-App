import {createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react";

const appId = "cac4edc82470476fa7e53e1758aaa9de";
const token = "006cac4edc82470476fa7e53e1758aaa9deIACJA8YBKo1AqoBEzpcB+nE9erFGrUCwmd2p5DxqYjQOo9c7RNwAAAAAEADjTvSOZGM6YgEAAQBiYzpi";


export const config = {mode: "rtc", codec:"vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Test Channel";