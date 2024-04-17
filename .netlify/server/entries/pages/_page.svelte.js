import { c as create_ssr_component, e as escape, d as spread, f as escape_object, v as validate_component } from "../../chunks/ssr.js";
import "classnames";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { inputProps } = $$props;
  let { onValueChange } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.inputProps === void 0 && $$bindings.inputProps && inputProps !== void 0)
    $$bindings.inputProps(inputProps);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  return `<div class="flex flex-col gap-1"><label for="input" class="block text-sm font-medium leading-6 text-gray-900">${escape(label)}</label> <div class="mt-2"><input${spread(
    [
      {
        class: "block px-2 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      },
      escape_object(inputProps)
    ],
    {}
  )}></div></div>`;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let loading = false;
  return `<div class="h-screen w-screen relative flex items-center justify-center bg-gray-100"><div class="flex h-auto max-sm:w-[90%] sm:w-[450px] bg-white border border-gray-100 rounded-md flex-col justify-center px-6 py-12 lg:px-8 shadow-md"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-txoh3v"><img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6">${validate_component(Input, "Input").$$render(
    $$result,
    {
      label: "Email",
      onValueChange: (value) => email = value,
      inputProps: {
        placeholder: "Enter email",
        type: "email",
        required: true,
        value: email,
        disabled: loading
      }
    },
    {},
    {}
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      label: "Password",
      onValueChange: (value) => password = value,
      inputProps: {
        placeholder: "Enter password",
        type: "password",
        required: true,
        value: password,
        disabled: loading
      }
    },
    {},
    {}
  )} <div><button type="submit" ${""} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${`Sign in`}</button></div></form></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
