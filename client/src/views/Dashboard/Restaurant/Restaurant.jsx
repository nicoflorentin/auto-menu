import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Loading from "components/Loading/Loading";
import Subtitle from "components/Subtitle/Subtitle";
import Title from "components/Title/Title";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRestaurantById, fetchRestaurantById } from "redux/slices/restaurantSlice";
import { openWidget } from "utilities/cloudinary";

const Restaurant = () => {

	// const [restaurantLoading, setRestaurantLoading] = useState(false)
	const [loadingPortraitWidget, setLoadingPortraitWidget] = useState(false)
	const [loadingProfileWidget, setLoadingProfileWidget] = useState(false)
	const { restaurantId, token } = useSelector(state => state.login.data)
	const { name, description, image, profileImage, loading: restaurantLoading } = useSelector(state => state.restaurant.data)
	const dispatch = useDispatch()
	const { values, handleChange, handleSubmit, setValues } = useFormik({
		initialValues: {
			name,
			description,
			image,
			profileImage
		},
		onSubmit: (values) => {
			console.log("Submitted form with values:", values)
		},
	})

	console.log(values)

	const fieldsWasChanged = name !== values.name || description !== values.description || image !== values.image || profileImage !== values.profileImage

	useEffect(() => {
		dispatch(fetchRestaurantById({ restaurantId, token }))
	}, [restaurantId])

	useEffect(() => {
		setValues({ name, profileImage, image, description })
	}, [name])

	const widgetHandler = (widgetType) => {
		let setLoadingWidget;
		let imageProperty;

		if (widgetType === 'portrait') {
			setLoadingWidget = setLoadingPortraitWidget;
			imageProperty = 'image';
		} else if (widgetType === 'profile') {
			setLoadingWidget = setLoadingProfileWidget;
			imageProperty = 'profileImage';
		}
		setLoadingWidget(true);

		openWidget((error, result) => {
			if (!error && result && result.event === "success") {
				console.log('Done. Image info: ', result.info);
				setValues({ ...values, [imageProperty]: result.info.secure_url });
			}
			setLoadingWidget(false);
		});
	};

	const submitHandler = () => {
		dispatch(editRestaurantById({ restaurantId, body: { ...values }, token }))
	}

	return (
		<div>
			<Title>Restaurant Configuration</Title>
			<div className="flex flex-col pr-5 gap-5">
				<div className="flex gap-4">
					<div className="grow">
						<Subtitle>Restaurant name</Subtitle>
						<Input
							// className="w-96"
							id='name'
							name='name'
							type='text'
							onChange={handleChange}
							value={values.name}
							isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget}
						/>
					</div>
					<div className="grow">
						<Subtitle>Restaurant description</Subtitle>
						<Input
							className="grow"
							id='description'
							name='description'
							type='text'
							onChange={handleChange}
							value={values.description}
							isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget}
						/>
					</div>
				</div>
				<div>
					<div className="flex gap-10">
						<div className="">
							<Subtitle>Restaurant logo</Subtitle>
							<div className="flex items-center h-40 bg-slate-50 text-center rounded-xl text-black aspect-square">
								{
									!values.profileImage
										? <p className="m-auto">No image yet</p>
										: <img className="w-full object-cover rounded-xl" src={values.profileImage} alt="selected profile image" />
								}
							</div>
							<div className="flex gap-5 items-center">
								<Button className="my-2" color='secondary' onPress={() => widgetHandler('profile')} isDisabled={restaurantLoading || loadingProfileWidget || loadingProfileWidget}>
									Change image
								</Button>
								{/* {loadingProfileWidget && <span className="ml-5"><Loading content='Opening window' /></span>} */}
							</div>
						</div>
						<div className="grow">
							<Subtitle>Portrait image</Subtitle>
							<div className="flex items-center h-40 bg-slate-50 text-center rounded-xl  text-black overflow-hidden">
								{
									!values.image
										? <p className="m-auto">No image yet</p>
										: <img className="w-full h-auto block" src={values.image} alt="selected portrait image" />
								}
							</div>
							<div className="flex gap-5 items-center">
								<Button className="my-2" color='secondary' onPress={() => widgetHandler('portrait')} isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget}>
									Change image
								</Button>
								{(loadingPortraitWidget || loadingProfileWidget) && <span className="ml-auto mr-5"><Loading content='Opening window' /></span>}
							</div>
						</div>
					</div>


				</div>
				<div>
					{name &&
						<div>
							<Subtitle>Restaurant menu</Subtitle>
							<div className="flex flex-col pr-10 ml-auto text-sm gap-1">
								<span>Go to menu: <a className="ml-2 underline underline-offset-4" href={`http://localhost:5173/menu/${name}`}>{name}</a></span>
								<span>Share this link: <span className="ml-2">{`http://localhost:5173/menu/${name?.replaceAll(' ', '%20')}`}</span></span>
							</div>
						</div>}
					<br />
					{
						fieldsWasChanged &&
						<div>
							<Button className="my-2" color='primary' onPress={() => submitHandler()} isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget}>
								Save
							</Button>
							<span className="text-sm ml-2">There are unsaved changes!</span>
						</div>
					}
				</div>
			</div>
		</div>

	)
}

export default Restaurant