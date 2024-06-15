import React from "react";
import { Editors } from "utils";

const Editor = () => {
	return (
		<div>
			<ul role="list" className="divide-y divide-gray-200">
				{Editors.map((item) => (
					<li className="py-4 shadow-md">{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Editor;
