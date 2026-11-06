import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import BlueScreen404 from "./blueScreen404.container";
import LockScreen from "./lockScreen.container";
import ShutDown from "./shutDown.container";

const DesktopContainer = lazy(() => import("./desktop.container"));

function Windows() {
	const systemState = useSelector((state) => state.systemState);

	return (
		<div className="uk-width-expand">
			{(() => {
				if (systemState.isLocked) {
					return <LockScreen />;
				} else if (systemState.isShutDown) {
					return <ShutDown />;
				} else if (systemState.isDesktop) {
					return (
						<Suspense fallback={null}>
							<DesktopContainer />
						</Suspense>
					);
				} else {
					return <BlueScreen404 />;
				}
			})()}
		</div>
	);
}

export default Windows;
