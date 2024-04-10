import defaultImage from 'assets/page-logo.png'
import { GlutenFreeIcon, VegetarianIcon } from 'assets/icons'

const currency = 'USD'

const MenuDishItem = ({ dish }) => {
	const { title, description, price, image, vegetarian, celiac } = dish
	return (
		<div className='bg-slate-50 shadow-md rounded-xl mb-3'>
			<img className="h-28 drop-shadow-lg m-auto" src={defaultImage} alt={image} />
			<div className='px-3 py-3'>
				<div className='flex items-center gap-2'>
					{vegetarian && <VegetarianIcon size='18' className='text-green-500' />}
					{celiac && <GlutenFreeIcon size='18' className='text-zinc-700' />}
					<p className='font-semibold'>{title}</p>
					<p className='ml-auto font-semibold text-lg'>{price} {currency}</p>
				</div>
				<p className='text-sm'>{description}</p>

			</div>
		</div>
	)
}

export default MenuDishItem