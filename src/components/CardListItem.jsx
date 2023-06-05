import React from "react";

// Constants
import { cardListStyle, textStyle } from "../constants/theme";

const CardListItem = ({ item, theme }) => {
	return (
		<div className={`mb-2 pt-3 pb-3 pl-4 pr-4 group hover:text-white ${cardListStyle[theme]}`}>
			<div className="flex flex-wrap">
				{!!item?.title && (
					<div className="flex-1 mr-3">
						<div className="flex">
							<h3 className={`text-md font-medium text-gray-200 leading-5 ${textStyle[theme]}`}>
								{item?.title}
								{!!item?.quantity && (
									<>
										<span className="text-md text-gray-500 ml-2">
											&bull; {item?.quantity}
										</span>
										<span className="text-md text-gray-500">
											{item?.measureType}
										</span>
									</>
								)}
							</h3>
						</div>
					</div>
				)}
				{!!item?.price && (
					<span className="text-md font-medium text-red-700 leading-5">
						{item?.price} ден.
					</span>
				)}
			</div>
			{!!item?.description && (
				<p className={`mt-2 text-gray-500 break-all ${textStyle[theme]}`}>{item?.description}</p>
			)}
				{!!item?.ingredients.length && (		
					<div className="flex flex-wrap mt-1">
						{item?.ingredients?.map((ingredient, index) => {
							return (
								<div className="flex" key={ingredient}>
									<p className={`text-sm leading-4 text-gray-500 tracking-wide font-semibold`}>
										{ingredient}
									</p>
									{item?.ingredients.length !== index + 1 && (
										<p className={`text-sm leading-4 text-gray-500 tracking-wide font-semibold mr-1`}>
											,
										</p>
									)}
								</div>
							);
						})}
					</div>
				)}
		</div>
	);
};

const styles = {
	card: {
		backgroundColor: "white",
		marginBottom: 15,
	},
	brandColor: {
		color: "#AC2426",
	},
};

export default CardListItem;
