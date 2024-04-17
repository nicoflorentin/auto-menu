import Footer from "./Menu/Footer/Footer";
import Menu from "./Menu/Menu";
import { useSelector } from 'react-redux'

const ClientView = () => {
	const { data: restaurantData } = useSelector(state => state.restaurant)

	console.log(restaurantData.image)

	return (
		<div className="max-w-[425px] m-auto bg-[#FAFAFA]">
			<div className={`h-32 shadow-md shadow-zinc-200`}> <img className="h-full w-full object-cover" src={restaurantData.image}></img></div>
			<div className="relative bottom-20">
				<Menu restaurantData={restaurantData} />
			</div>
			<Footer />
		</div>
	);
};

export default ClientView;