import React from "react"
import YouTube from "react-youtube";
import { VIDEO_DEMO_ID } from "services/const";

const YoutubeFrame = () => {

		return <div className="w-full h-full">
		<iframe 
			className="w-full h-full"
			src="https://www.youtube.com/embed/853zmirBDFY"
			title="Auto-menu-app"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen='1'
		/>
	</div>
}



export default YoutubeFrame
