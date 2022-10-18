import React, { useState } from "react";
import { Container, Section } from "../../styles/globalStyles";
import SreachBar from '../Sreach/SreachBar';
import TextErea from "./TextErea";
import CardList from "./CardList";
import useFavorites from "../../hooks/useFavorites";

const Features = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [viewItem, setViewItem] = useState(null);
	const { favorites, addFavotires, removeFavorite } = useFavorites();
	const data = props.items ? props.items : favorites;
	const currentItems = props.currentItems ? props.currentItems : data;
	const openModal = (item) => {
		const find = data.find(val => val._id === item._id);
		if (!find) {
			return
		}
		setIsOpen(true)
		setViewItem(item)
	};

	const closeModal = () => {
		setIsOpen(false)
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container minHeight="70vh">
				<TextErea>
					{!props.isFav && (
						<SreachBar
							keys={props.keys}
							placeholder="Find Product here"
							data={data}
							viewItem={viewItem}
							operation={openModal}
						/>
					)}
				</TextErea>
				<CardList
					data={props.isFav ? favorites : currentItems}
					isFav={props.isFav}
					isOpen={isOpen}
					viewItem={viewItem}
					openModal={openModal}
					closeModal={closeModal}
					addFavotires={favorites && addFavotires}
					removeFavorite={favorites && removeFavorite}
				/>
			</Container>
		</Section>
	);
};

export default Features;