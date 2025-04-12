import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";
import Spinner from "../ui/spinner/Spinner";

const CustomerSchema = Yup.object().shape({
  name: Yup.string().required("Field name is required"),
  company: Yup.string().required("Field company is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Field email is Required"),
  phone: Yup.number()
    .required("Field phone is required")
    .nullable()
    .typeError("Amount must be a number")
    .min(2, "Too little"),
  note: Yup.string().required("Field note is required"),
});

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  note: "",
};

export default function FormCustomer() {
  const { customerId } = useParams();
  const isAddMode = !customerId;
  const { createCustomer, getCustomerById, updateCustomer } = useCustomer();
  const navigate = useNavigate();

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h2 className="text-gray-600 font-bold text-xl uppercase text-center">
        {!customerId ? "Add Customer" : "Update Customer"}
      </h2>

      <Formik
        initialValues={initialValues}
        // enableReinitialize={true}
        validationSchema={CustomerSchema}
        onSubmit={async (fields, { resetForm, setStatus }) => {
          setStatus();
          if (isAddMode) {
            await createCustomer(fields);
          } else {
            await updateCustomer(customerId, fields);
          }
          resetForm();
          navigate("/customers");
        }}
      >
        {({
          values,
          isSubmitting,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldValue,
          setValues,
          initialValues,
        }) => {
          const [loading, setLoading] = useState(false);
          useEffect(() => {
            if (!isAddMode) {
              // get customer and set form fields
              setLoading(true);
              getCustomerById(customerId).then(({ data }) => {
                Object.keys(initialValues).map((field) =>
                  setFieldValue(field, data[field], false)
                );
              });

              setLoading(false);
            } else {
              setValues(initialValues, true);
            }
          }, [customerId]);

          if (loading) return <Spinner />;
          return (
            <Form className="mt-10" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                  placeholder="name customer"
                  autoComplete="off"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && touched.name ? (
                  <div className="text-red-500 font-bold my-2">
                    {errors.name}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="company">
                  Company
                </label>
                <Field
                  id="company"
                  name="company"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                  placeholder="company customer"
                  value={values.company}
                  onChange={handleChange}
                />
                {errors.company && touched.company ? (
                  <div className="text-red-500 font-bold my-2">
                    {errors.company}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                  placeholder="email customer"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500 font-bold my-2">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  Phone
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                  placeholder="phone customer"
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && touched.phone ? (
                  <div className="text-red-500 font-bold my-2">
                    {errors.phone}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="note">
                  Notes
                </label>
                <Field
                  as="textarea"
                  id="note"
                  name="note"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 resize-none rounded-md"
                  placeholder="notes customer"
                  value={values.note}
                  onChange={handleChange}
                />
                {errors.note && touched.note ? (
                  <div className="text-red-500 font-bold my-2">
                    {errors.note}
                  </div>
                ) : null}
              </div>
              <input
                type="submit"
                value={`${!customerId ? "Add Customer" : "Update Customer"}`}
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                disabled={isSubmitting}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
