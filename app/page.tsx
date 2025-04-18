import React from "react";
import CssAnimate from "./components/animate";

export default function Page() {
	return <>

		<div className="container-fluid">
			<div className="row full-animation">
				<div className="col-10 offset-1">
					<CssAnimate />
				</div>
			</div>
		</div>

	</>
}
