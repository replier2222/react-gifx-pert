import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['One Punch', 'Bola de drack'])

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		console.log(newCategory);
		setCategories([newCategory, ...categories]);
	}
	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory

				onNewCategory={event => onAddCategory(event)}
				currentCategories={categories}
			/>

			{categories.map(category => (
				<GifGrid key={category} category={category} />
				// <li key={category}>{category}</li>

			))}
		</>
	)
}
