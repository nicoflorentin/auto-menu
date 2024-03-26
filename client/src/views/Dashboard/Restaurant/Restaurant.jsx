import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Subtitle from "components/Subtitle/Subtitle";
import Title from "components/Title/Title";
import { useFormik } from "formik";
import { useState } from "react";

const initialValues = {
	name: '',
	description: '',
	image: ''
}

const Restaurant = () => {

	const [loading, setLoading] = useState(false)
	const { values, handleChange, handleSubmit, setValues } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log("Submitted form with values:", values)
		},
	})

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
					console.log('Done! Here is the image info: ', result.info);
					setValues({ ...values, image: result.info.secure_url })
					setLoading(false)
				}
			}
		)
		myWidget.open()
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
					<Button className="my-2" color='primary' onPress={() => widgetHandler()}>
						Upload and change
					</Button>
				</div>

			</div>
		</div>
	)
}

export default Restaurant