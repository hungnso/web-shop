import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField/InputField";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required("Plese enter title").min(5, "Hay nhap tren 5 ky tu "),
  });
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
    }

    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
