import Footer from "./Menu/Footer/Footer";
import Menu from "./Menu/Menu";
import { useSelector } from 'react-redux'

const ClientView = () => {
	const { data: restaurantData } = useSelector(state => state.restaurant)

	console.log(restaurantData.image)

	return (
		<div className="max-w-[425px] m-auto min-h-screen bg-[#FAFAFA] flex flex-col">
			<div className={`h-32 shadow-md shadow-zinc-300`}> <img className="h-full w-full object-cover" src={restaurantData.image}></img></div>
			<div className="flex flex-col grow">
				<div className="relative bottom-20">
					<Menu restaurantData={restaurantData} />
				</div>
				<div className="mt-auto">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default ClientView;