import React from "react";

export default function Container({ children }) {
	return (
		<div className="max-w-lg mx-auto overflow-hidden">
			<div className="p-5">
				<div className="">{children}</div>
			</div>
		</div>
	);
}
