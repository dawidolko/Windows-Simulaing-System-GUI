import default_wallpaper from "../../assets/images/wallpapers/default_wallpaper.webp";
import wallpaper1 from "../../assets/images/wallpapers/wallpaper1.webp";
import wallpaper2 from "../../assets/images/wallpapers/wallpaper2.webp";
import wallpaper3 from "../../assets/images/wallpapers/wallpaper3.webp";

const settings = {
	desktop_wallpapers: [
		{
			id: "default_wall",
			value: default_wallpaper,
		},
		{
			id: "wall_1",
			value: wallpaper1,
		},
		{
			id: "wall_2",
			value: wallpaper2,
		},
		{
			id: "wall_3",
			value: wallpaper3,
		},
	],
	default_wallpaper: default_wallpaper,
};

export default settings;
