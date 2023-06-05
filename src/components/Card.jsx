import React from "react";

// Components
import Icon from "./../components/Icon";

// Constants
import { cardStyle, textStyle, textHoverStyle } from "./../constants/theme";

const Card = ({ item, theme }) => {
	return (
		<div className="flex flex-col ">
			<div
				className={`pt-3 pb-3 pl-3 pr-3 text-red-800 flex items-center hover:text-white h-32 ${cardStyle[theme]}`}
			>
				<div className="justify-center m-auto">
					{!!item?.iconName && (
						<div className="flex justify-center hover:text-white">
							<Icon
								name={item?.iconName ?? ""}
								width="50"
								height="50"
								className="flex mb-3 fill-current"
							/>
						</div>
					)}

					{!!item?.title && (
						<h3
							className={`flex-1 text-md font-medium leading-4 text-center ${textStyle[theme]} ${textHoverStyle[theme]}`}
						>
							{item?.title}
						</h3>
					)}

					{!!item?.description && (
						<p className="mt-2 text-gray-500 break-all">{item?.description}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
