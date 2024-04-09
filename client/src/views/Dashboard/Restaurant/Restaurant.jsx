import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Subtitle from "components/Subtitle/Subtitle";
import Title from "components/Title/Title";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRestaurantById, fetchRestaurantById } from "redux/slices/restaurantSlice";

const Restaurant = () => {

	const [loading, setLoading] = useState(false)
	const { restaurantId, token, loading: restaurantLoading } = useSelector(state => state.login.data)
	const { name, description, image } = useSelector(state => state.restaurant.data)
	const { values, handleChange, handleSubmit, setValues } = useFormik({
		initialValues: {
			name,
			description,
			image
		},
		onSubmit: (values) => {
			console.log("Submitted form with values:", values)
		},
	})

	console.log(name, description, image);

	const dispatch = useDispatch()

	useEffect(() => {
		!name && dispatch(fetchRestaurantById({ restaurantId, token }))
			.then((res) => {
				const { name, image, description } = res.payload.data
				setValues({ name, image, description })
			})
	}, [])

	const widgetHandler = () => {
		setLoading(true)
		const myWidget = cloudinary.createUploadWidget({
			cloudName: 'dp9xjtgsf',
			uploadPreset: 'portrait',
			apiKey: '511867113661765',
			sources: ['local', 'camera']
		},
			(error, result) => {
				console.log(result);
				if (!error && result && result.event === "success") {
					console.log('Done! Here is the image info: ', result.info)
					setValues({ ...values, image: result.info.secure_url })
					setLoading(false)
				}
			}
		)
		myWidget.open()
	}

	const submitHandler = () => {
		dispatch(editRestaurantById({ restaurantId, body: { ...values }, token }))
	}

	return (
		<div className="flex flex-col gap-5">
			<Title>Restaurant Configuration</Title>
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
						isDisabled={loading}
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
						isDisabled={loading}
					/>
				</div>
			</div>
			<div>
				<Subtitle>Portrait image</Subtitle>
				<div className="">
					<div className="flex items-center  h-40 bg-slate-50 text-center rounded-xl  text-black overflow-hidden">
						{
							!values.image
								? <p className="m-auto">No image has been uploaded yet</p>
								: <img className="w-full h-auto block" src={values.image} alt="selected portrait image" />
						}
					</div>
					<Button className="my-2" color='secondary' onPress={() => widgetHandler()}>
						Change image
					</Button>
					<br />
					<Button className="my-2" color='primary' onPress={() => submitHandler()}>
						Submit
					</Button>
				</div>

			</div>
		</div>
	)
}

export default Restaurant