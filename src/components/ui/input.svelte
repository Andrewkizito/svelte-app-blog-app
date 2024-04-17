<script>
    /**
     * @typedef {{
     *   label: string,
     *   type: string,
     *   required: boolean,
     *   placeholder: string
     * }} Props
     * @param {Props} props
     */
    export const props = {
        label: 'Label',
        type: 'text',
        required: false,
        placeholder: ''
    };
</script>

<div class="flex flex-col gap-2">
    <label for="input" class="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
    <div class="mt-2">
        <input
            id="input"
            name="input"
            type={props.type}
            required={props.required}
            placeholder={props.placeholder}
            class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
    </div>
</div>

<style>
    /* You can add any custom styles here */
</style>
