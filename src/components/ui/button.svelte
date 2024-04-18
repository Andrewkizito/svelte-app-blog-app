<script lang="ts">
	import classNames from 'classnames';

	export let disabled: boolean;
	export let variant: 'primary' | 'secondary' | 'success' = 'primary';
	const btnStyles = classNames(
		'flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm duration-400 disabled:cursor-not-allowed disabled:bg-opacity-50',
		{
			'bg-indigo-600 text-white hover:bg-indigo-500': variant === 'primary',
			'bg-gray-100 text-gray-900 hover:bg-gray-200': variant === 'secondary',
			'bg-green-600 text-white hover:bg-green-500': variant === 'success'
		}
	);
</script>

<button
	type="submit"
	{disabled}
	class={btnStyles}
>
	<slot></slot>
</button>
