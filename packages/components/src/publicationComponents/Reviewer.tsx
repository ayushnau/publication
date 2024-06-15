import React from "react";
import { Reviewers } from "utils";

const Reviewer = () => {
	return (
		<div>
			<ul role="list" className="divide-y divide-gray-200">
				{Reviewers.map((item) => (
					<li className="py-4 shadow-md">{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Reviewer;
