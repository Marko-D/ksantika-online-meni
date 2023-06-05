import React from "react";
import { Screen, Link } from "react-tiger-transition";

// Components
import CardListItem from "../components/CardListItem";
import Container from "../components/Container";
import Button from "../components/Button";

const List = ({ items, navigateFrom, theme }) => {
	return (
		<Container>
			<div className="flex items-baseline mb-5">
				<Link to={navigateFrom} transition="glide-right">
					<Button title="Назад" />
				</Link>
			</div>
			{!!items && (
				<>
					{items?.map((item) => (
						<CardListItem item={item} key={item?.id} theme={theme} />
					))}
				</>
			)}
		</Container>
	);
};
export default List;
