import Menu from "./Menu/Menu";

const ClientView = () => {

	return (
		<div className="max-w-[425px] m-auto min-h-svh bg-[#FAFAFA]">
			<div className="bg-gray-300 h-32"></div>
			<div className="relative bottom-20">
				<Menu />
			</div>
		</div>
	);
};

export default ClientView;