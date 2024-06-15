import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
// import { useOutsideClicker } from "@locoworks/reusejs-toolkit-react-hooks";
import { callback } from "chart.js/dist/helpers/helpers.core";

interface DropdownInterface {
	form: any;
}
const Dropdown: React.FC<DropdownInterface> = ({ form }) => {
	const [className, setClassName] = useState("hidden");

	const toggleDropdown = () => {
		setClassName((prev) => (prev === "hidden" ? "block" : "hidden"));
	};
	return (
		<div className="relative inline-block text-left">
			<div onClick={() => toggleDropdown()}>
				<button
					type="button"
					className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					id="menu-button"
				>
					{form.value.role}
					<svg
						className="-mr-1 h-5 w-5 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<div
				className={twMerge(
					"absolute right-0 z-10 mt-2 w-[200px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
					className,
				)}
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabIndex={-1}
			>
				<div className="py-1" role="none">
					{/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
					<div
						onClick={() => {
							form.setField("role", "publisher");
							toggleDropdown();
						}}
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-0"
					>
						Publisher
					</div>
					<div
						onClick={() => {
							form.setField("role", "admin");
							toggleDropdown();
						}}
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-0"
					>
						Admin
					</div>
					<div
						onClick={() => {
							form.setField("role", "editor");
							toggleDropdown();
						}}
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={0}
						id="menu-item-1"
					>
						Editor
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
