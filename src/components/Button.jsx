import React from "react";

const Button = ({title, onClick}) => {
	return (
		<button
			type="button"
      onClick={onClick}
			className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-800 hover:bg-red-900 hover:shadow-lg"
		>
			{title}
		</button>
	);
};

export default Button;
