import defaultImage from 'assets/page-logo.png'
import { GlutenFreeIcon, VegetarianIcon } from 'assets/icons'

const currency = 'USD'

const MenuDishItem = ({ dish, ...props }) => {
	const { title, description, price, image, vegetarian, celiac } = dish
	return (
		<div className={`bg-white shadow-md rounded-xl mb-3 border ${props.className}`}>
			{image && <img className="h-28 drop-shadow-lg m-auto object-cover w-full rounded-t-xl" src={image} alt={image} />}
			<div className='px-3 py-3'>
				<div className='flex items-center gap-1'>
					{vegetarian && <VegetarianIcon size='18' className='text-green-500' />}
					{celiac && <GlutenFreeIcon size='20' className='text-zinc-700' />}
					<p className='font-semibold'>{title}</p>
					<p className='ml-auto font-semibold text-sm'>{price} {currency}</p>
				</div>
				<p className='text-sm'>{description}</p>

			</div>
		</div>
	)
}

export default MenuDishItem