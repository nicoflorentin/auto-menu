import defaultImage from 'assets/page-logo.png'

const MenuDishItem = ({dish}) => {
	const {title, description, price, image} = dish
	return (
		<div>
			<img className="h-32 drop-shadow-lg" src={defaultImage} alt={image} />
			<p>{title}</p>
			<p>{description}</p>
			<p>{price}</p>
		</div>
	)
}

export default MenuDishItem