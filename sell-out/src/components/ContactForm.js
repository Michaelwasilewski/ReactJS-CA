import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string()
		.required('required')
		.email('Invalid Email'),
	message: Yup.string()
		.min(10, 'to short! min 10 chars')
		.required(),
});

const ContactForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema,
		onSubmit: (values) => {
			console.log('values: ', values);
		},
	});
	return (
		<>
			<form
				onSubmit={formik.handleSubmit}
				className="mt-16"
			>
				<div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
					<div className="sm:col-span-2">
						<label
							htmlFor="name"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Name
						</label>
						<div className="mt-2.5">
							<input
								type="text"
								name="name"
								onChange={formik.handleChange}
								value={formik.values.name}
								onBlur={formik.handleBlur}
								id="name"
								className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
							/>
							{formik.touched.name &&
							formik.errors.name ? (
								<div>{formik.errors.name}</div>
							) : null}
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							for="email"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Email
						</label>
						<div className="mt-2.5">
							<input
								id="email"
								name="email"
								onChange={formik.handleChange}
								value={formik.values.email}
								onBlur={formik.handleBlur}
								type="email"
								autocomplete="email"
								className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
							/>
							{formik.touched.email &&
							formik.errors.email ? (
								<div>{formik.errors.email}</div>
							) : null}
						</div>
					</div>
					<div className="sm:col-span-2">
						<div className="flex justify-between text-sm leading-6">
							<label
								for="message"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								How can we help you?
							</label>
							<p
								id="message-description"
								className="text-gray-400"
							>
								Max 500 characters
							</p>
						</div>
						<div className="mt-2.5">
							<textarea
								id="message"
								name="message"
								onChange={formik.handleChange}
								value={formik.values.message}
								onBlur={formik.handleBlur}
								rows="4"
								aria-describedby="message-description"
								className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
							></textarea>
							{formik.touched.message &&
							formik.errors.message ? (
								<div>{formik.errors.message}</div>
							) : null}
						</div>
					</div>
				</div>
				<div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
					<button
						type="submit"
						className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						Send message
					</button>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
