import React from "react";
import Clock from "react-live-clock";
import { Icon } from "@fluentui/react";
import "./lockScreen.scss";

function LockWallpaperScreen() {
	return (
		<div className="screenHeight">
			{/* LockScreenIcons */}
			<div className="uk-position-top-center uk-overlay uk-flex uk-flex-column">
				<div className="font-color-white uk-text-meta">
					<p className="uk-text-lead font-color-white">
						Click anywhere to unlock.
					</p>
				</div>
			</div>

			{/* LockScreen Clock */}
			<div className="uk-position-bottom-left uk-overlay uk-flex uk-flex-column">
				<p className="uk-heading-large uk-margin-remove-bottom font-color-white ">
					<Clock ticking={true} />
				</p>
				<p className="uk-heading-small uk-margin-remove-top font-color-white ">
					<Clock format={"dddd,DD MMMM"} ticking={true} />
				</p>
			</div>

			{/* LockScreenIcons */}
			<div className="uk-position-bottom-right uk-overlay uk-flex uk-flex-column">
				<div className="font-color-white uk-text-lead">
					<Icon iconName="WifiEthernet" />
				</div>
			</div>
		</div>
	);
}

export default LockWallpaperScreen;
