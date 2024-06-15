import React from "react";
import { Publishers } from "utils";

const Publisher = () => {
	return (
		<div>
			<ul role="list" className="divide-y divide-gray-200">
				{Publishers.map((item) => (
					<li className="py-4 shadow-md">{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Publisher;
