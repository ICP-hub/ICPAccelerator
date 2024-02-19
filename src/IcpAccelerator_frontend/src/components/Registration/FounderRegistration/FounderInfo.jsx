import React, { useEffect, useState } from "react";
import { formFields } from "../../Utils/Data/founderFormField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { allHubHandlerRequest } from "../../Redux/Reducers/All_IcpHubReducer";
// import { AuthClient } from "@dfinity/auth-client";


const today = new Date();
const startDate = new Date('1900-01-01');

const schema = yup.object({
  full_name: yup.string().required().test("is-non-empty", null, (value) => value && value.trim().length > 0),
  date_of_birth: yup.date().required().min(startDate, 'Date of birth cannot be before January 1, 1900').max(today, 'Date of birth cannot be in the future').typeError('Invalid date format, please use YYYY-MM-DD'),
  email: yup.string().email().required(),
  phone_number: yup.string().required().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, null),
  linked_in_profile: yup.string().required().url(),
  telegram_id: yup.string().required().url(),
  twitter_id: yup.string().required().url(),
  hub: yup.string().required("Selecting a hub is required."),
});

const FounderInfo = () => {
  const getAllIcpHubs = useSelector((currState) => currState.hubs.allHubs);
  const actor = useSelector((currState) => currState.actors.actor);
  const [inputType, setInputType] = useState("date");

  const dispatch = useDispatch();

  // console.log("actor aa ja =>", actor);
  // console.log("getAllIcpHubs", getAllIcpHubs);

  useEffect(() => {
    dispatch(allHubHandlerRequest());
  }, [actor, dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    console.log("data aaya data aaya ", data);

    const founderData = {
      full_name: [data.full_name],
      date_of_birth: [data.date_of_birth.toISOString().split('T')[0]],
      email: [data.email],
      phone_number: [data.phone_number],
      linked_in_profile: [data.linked_in_profile.toString()],
      telegram_id: [data.telegram_id.toString()],
      twitter_id: [data.twitter_id.toString()],
      preferred_icp_hub:[ data.hub],
    };


    console.log('founderdata => ', founderData)

    try {
      await actor.register_founder_caller(founderData);
      console.log("data passed to backend");
    } catch (error) {
      console.error("Error sending data to the backend:", error);
    }
  };

  const handleFocus = (field) => {
    if (field.onFocus) {
      setInputType(field.onFocus);
    }
  };

  const handleBlur = (field) => {
    if (field.onBlur) {
      setInputType(field.onBlur);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="w-full px-4">
        {formFields?.map((field) => (
          <div key={field.id} className="relative z-0 w-full mb-5 group">
            <input
              {...register(field.name)}
              type={field.id === "date_of_birth" ? inputType : field.type}
              name={field.name}
              id={field.id}
              className="block pb-2.5 pt-6 font-bold px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
              placeholder=" "
              onFocus={() => handleFocus(field)}
              onBlur={() => handleBlur(field)}
            />
            <label
              htmlFor={field.id}
              className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-80 top-6 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-300 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {field.label}
            </label>
            {errors[field.name] && (
              <p className="text-red-500 text-xs italic">
                {errors[field.name].message}
              </p>
            )}
          </div>
        ))}

        <div className="relative z-0 w-full mb-5 group">
          <select
            {...register("hub")}
            className="block pb-2.5 pt-6 font-bold px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer mb-4"
          >
            <option value="">Select Hub</option>
            {getAllIcpHubs?.map((hub) => (
              <option key={hub.id} value={`${hub.name} ,${hub.region}`}>
                {hub.name} , {hub.region}
              </option>
            ))}
          </select>
          {errors.hub && (
            <p className="text-red-500 text-xs italic">{errors.hub.message}</p>
          )}
        </div>

        <div className="flex flex-row-reverse ">
          <button
            disabled={isSubmitting}
            type="submit"
            className="text-black font-bold hover:text-white bg-white hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 fon rounded-md w-auto sm:w-auto px-5 py-2 text-center mb-4"
          >
            {isSubmitting ? "Loading..." : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FounderInfo;
