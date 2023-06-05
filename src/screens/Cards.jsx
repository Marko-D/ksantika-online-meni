import React from "react";
import { Link } from "react-tiger-transition";

// Components
import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";

const Cards = ({ items, navigateFrom, theme }) => {
	return (
		<>
			<Container>
				<div className="items-baseline mb-5">
					<Link to={navigateFrom} transition="glide-right">
						<Button title="Назад" />
					</Link>
				</div>
				{!!items && (
					<div className="grid grid-cols-2 flex flex-col gap-3 ">
						{items?.map((item) => (
							<Link key={item.id} to={item.path} transition="glide-left">
								<Card item={item} key={item?.id} theme={theme} />
							</Link>
						))}
					</div>
				)}
			</Container>
		</>
	);
};
export default Cards;
