// import { useState } from "react";
import PropTypes from "prop-types";

import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const InnerForm = ({ isSubmitting, status }) => {
	// Utilisation de status pour afficher un message de succès
	return (
		<Form>
			<div className="mb-3">
				<label htmlFor="nom" className="form-label">
					Nom
				</label>
				<Field type="text" className="form-control" id="nom" name="nom" />
				<ErrorMessage name="nom" component="div" className="text-danger" />
			</div>

			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<Field type="email" className="form-control" id="email" name="email" />
				<ErrorMessage name="email" component="div" className="text-danger" />
			</div>

			<div className="mb-3">
				<label htmlFor="message" className="form-label">
					Message
				</label>
				<Field
					as="textarea"
					className="form-control"
					id="message"
					name="message"
					rows="3"
				/>
				<ErrorMessage name="message" component="div" className="text-danger" />
			</div>

			<button type="submit" className="btn btn-primary" disabled={isSubmitting}>
				Envoyer
			</button>

			{status && status.msg && (
				<div className="alert alert-success mt-3">{status.msg}</div>
			)}
		</Form>
	);
};

const FormulaireContact = withFormik({
	mapPropsToValues: () => ({
		nom: "",
		email: "",
		message: "",
	}),

	validationSchema: Yup.object().shape({
		nom: Yup.string()
			.min(5, "Le nom doit avoir plus de 5 caractères")
			.required("Le nom est obligatoire !"),
		email: Yup.string()
			.email("L'email n'a pas le bon format")
			.required("L'email est obligatoire"),
		message: Yup.string()
			.min(50, "Le message doit faire plus de 50 caractères")
			.max(200, "Le message doit faire moins de 200 caractères")
			.required("Le message est obligatoire"),
	}),

	handleSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
		// Simulez un envoi de formulaire asynchrone
		setTimeout(() => {
			alert("Message envoyé : " + JSON.stringify(values, null, 2));
			setSubmitting(false); // Réinitialise l'état de soumission
			resetForm(); // Réinitialise les champs du formulaire
			setStatus({ msg: "Votre message a été envoyé avec succès !" }); // Affiche un message de succès
		}, 400);
	},
})(InnerForm);

InnerForm.propTypes = {
	isSubmitting: PropTypes.bool,
	status: PropTypes.shape({
		msg: PropTypes.string,
	}),
};

InnerForm.defaultProps = {
	isSubmitting: false,
	status: { msg: "" },
};

export default FormulaireContact;
