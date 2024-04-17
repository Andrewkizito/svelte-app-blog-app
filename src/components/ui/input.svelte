<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let label: string;
	export let inputProps: HTMLInputAttributes;
    export let onValueChange: (value: string) => void

    function handleInputChange(e: any){
        inputProps.value = e
        onValueChange(e)
    }
</script>

<div class="flex flex-col gap-1">
	<label for="input" class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
	<div class="mt-2">
		<input
			class="block px-2 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			{...inputProps}
            on:input={(e) => handleInputChange(e.currentTarget.value)}
		/>
	</div>
</div>
