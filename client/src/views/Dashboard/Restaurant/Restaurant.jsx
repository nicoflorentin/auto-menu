import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { CopyIcon, DeleteIcon } from "assets/icons";
import Loading from "components/Loading/Loading";
import Subtitle from "components/Subtitle/Subtitle";
import Title from "components/Title/Title";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editRestaurantById, fetchRestaurantById } from "redux/slices/restaurantSlice";
import { openWidget } from "utilities/cloudinary";
import { DEPLOY_URL } from "services/const";
import { copyToClipboard } from "utilities/copyToClipBoard";
import toast, { Toaster } from "react-hot-toast";

const Restaurant = () => {

	const [loadingPortraitWidget, setLoadingPortraitWidget] = useState(false)
	const [loadingProfileWidget, setLoadingProfileWidget] = useState(false)
	const { restaurantId, token } = useSelector(state => state.login.data)
	const { name, description, image, profileImage } = useSelector(state => state.restaurant.data)
	const { loading: restaurantLoading, error } = useSelector(state => state.restaurant)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { values, handleChange, handleSubmit, setValues } = useFormik({
		initialValues: {
			name: 'Loading...',
			description: 'Loading...',
			image: 'Loading...',
			profileImage: 'Loading...',
		},
		onSubmit: (values) => {
			console.log("Submitted form with values:", values)
		},
	})

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

	const deleteImageHandler = (property) => {
		setValues({ ...values, [property]: '' })
	}

	const copyToClipboardHandler = (text) => {
		copyToClipboard(text).then(toast(
			`Copied to clipboard`, {
			position: 'bottom-center'
		}))
	}

	console.log(values)

	return (
		<>
			<Title>Restaurant Configuration</Title>
			<div className="flex flex-col gap-5 sm:pr-5">
				<div className="flex gap-4 flex-col sm:flex-row">
					<div className="grow">
						<Subtitle>Restaurant name</Subtitle>
						<Input
							id='name'
							name='name'
							type='text'
							onChange={handleChange}
							value={values.name}
							isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget || error}
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
							isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget || error}
						/>
					</div>
				</div>
				<div>
					<div className="flex flex-col sm:flex-row sm:gap-10">
						<div className="">
							<Subtitle>Restaurant logo</Subtitle>
							<div className="flex items-center h-40 bg-slate-300 text-center rounded-xl text-black aspect-square">
								{
									!values.profileImage
										? <p className="m-auto">{restaurantLoading && 'Loading...'}</p>
										: <img className="w-full object-cover rounded-xl" src={values.profileImage} alt="selected profile image" />
								}
							</div>
							<div className="flex w-48 items-center gap-1">
								<Button className="my-2" color='secondary' onPress={() => widgetHandler('profile')} isDisabled={restaurantLoading || loadingProfileWidget || loadingProfileWidget || error}>
									Change image
								</Button>
								<button onClick={() => deleteImageHandler('profileImage')} isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget || error}>
									<DeleteIcon size='23' className='text-red-500 hover:scale-110 duration-[.15s]' />
								</button>
							</div>
						</div>
						<div className="grow">
							<Subtitle>Portrait image</Subtitle>
							<div className="flex items-center h-40 bg-slate-300 text-center rounded-xl  text-black overflow-hidden">
								{
									!values.image
										? <p className="m-auto">{restaurantLoading && 'Loading...'}</p>
										: <img className="w-full h-auto block" src={values.image} alt="selected portrait image" />
								}
							</div>
							<div className="flex items-center gap-1">
								<Button className="my-2" color='secondary' onPress={() => widgetHandler('portrait')} isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget || error}>
									Change image
								</Button>
								<button onClick={() => deleteImageHandler('image')} isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget || error}>
									<DeleteIcon size='23' className='text-red-500 hover:scale-110 duration-[.15s]' />
								</button>
								{(loadingPortraitWidget || loadingProfileWidget) && <span className="mr-5"><Loading content='Opening window' /></span>}
							</div>
						</div>
					</div>


				</div>
				<div>
					{name &&
						<div>
							<Subtitle>Restaurant menu</Subtitle>
							<div className=" flex sm:justify-start gap-5 justify-between ml-auto text-sm sm:pr-10">
								<div className="">
									<p className="">Go to menu: </p><p className="underline underline-offset-4 cursor-pointer" onClick={() => navigate(`/menu/${name}`)}>{name}</p>
								</div>
								<div className="flex gap-3">
									{/* <span className="">Share this link: </span><span className="ml-2">{`${DEPLOY_URL}/menu/${name?.replaceAll(' ', '%20')}`}</span> */}
									<button className="flex gap-1 items-center bg-zinc-800 rounded-xl self-start shadow-lg p-1
									hover:bg-slate-800 transition-background
									sm:flex-col"
										onClick={() => copyToClipboardHandler(`${DEPLOY_URL}/menu/${name?.replaceAll(' ', '%20')}`)}>
										<p className="text-[12px]">Copy link to clipboard</p>
										<CopyIcon className={'text-slate-400'} secondaryClassName={'text-slate-500'} size={30} />
									</button>
								</div>
							</div>
						</div>}
					<br />
					{
						fieldsWasChanged &&
						<div>
							<Button className="my-2" color='primary' onPress={() => submitHandler()} isDisabled={restaurantLoading || loadingPortraitWidget || loadingProfileWidget || error}>
								Save
							</Button>
							<span className="text-sm ml-2">There are unsaved changes</span>
						</div>
					}
				</div>
			</div>
			<Toaster></Toaster>
		</>

	)
}

export default Restaurant