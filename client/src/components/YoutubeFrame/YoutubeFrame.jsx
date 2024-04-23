import { m } from "framer-motion";
import React from "react"
import YouTube from "react-youtube";
import { VIDEO_DEMO_ID } from "services/const";

const YoutubeFrame = () => {

	const options = {
		playerVars: {
			autoplay: 1,
			controls: 1,
			rel: 0,
			color: 'white'

		}
	}

	const onReady = (event) => {
		event.target.setVolume(0)
		console.log(event.target);

		event.target.playVideo();
	}

	return (<YouTube
		videoId={VIDEO_DEMO_ID}
		id={VIDEO_DEMO_ID}
		className={'h-full'}
		iframeClassName={'w-full h-full'}
		// style={{}}
		title={'video-demo'}
		opts={options}
		onReady={onReady}
		// onAutoplayBlocked={}
	/>)
}



export default YoutubeFrame
