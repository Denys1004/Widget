import React from "react";
import './sass/App.scss';

import Thermometer from "./components/Thermometer";

const App = () => {
	const data = {
		image : "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
        image_bg_color : "#fff",
		title : "The Water Project - Global Water Initiative",
        theme_color: "#794297", 
		goal : 2000,
		amount_raised : 0,
		btn_text : "Give Now!",
		btn_text_color : "#fff",
	};
    const data2 = {
		image : "https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg",
		image_bg_color : "#0f1316",
		title : "Headshot Inc",
        theme_color: "#0f1316",
		goal : 4000,
		amount_raised : 0,
        btn_text : "Donate Now!",
        btn_text_color : "#00aa9e",
	};

	return (
		<div className="App">
			<Thermometer  data={data}/>
			<Thermometer  data={data2}/>
		</div>
	);
}
export default App;