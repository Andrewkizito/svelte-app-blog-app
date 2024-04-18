<script lang="ts">
	import Button from '../ui/button.svelte';
	import Input from '../ui/input.svelte';
	import Spinner from '../ui/spinner.svelte';

	let email = '';
	let password = '';
	let loading = false;

	function handleFormSubmit(e: any) {
		e.preventDefault();
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 5000);
	}
</script>

<div class="h-screen w-screen relative flex items-center justify-center bg-gray-100">
	<div
		class="flex h-auto max-sm:w-[90%] sm:w-[400px] bg-white border border-gray-100 rounded-md flex-col justify-center px-6 py-8 lg:px-8 shadow-md"
	>
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<img
				class="mx-auto h-10 w-auto"
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
				alt="Your Company"
			/>
			<h2 class="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
				Sign in to your account
			</h2>
		</div>
		<div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
			<form class="space-y-6" on:submit={handleFormSubmit}>
				<Input
					label="Email"
					onValueChange={(value) => (email = value)}
					inputProps={{
						placeholder: 'Enter email',
						type: 'email',
						required: true,
						value: email,
						disabled: loading
					}}
				/>
				<Input
					label="Password"
					onValueChange={(value) => (password = value)}
					inputProps={{
						placeholder: 'Enter password',
						type: 'password',
						required: true,
						value: password,
						disabled: loading
					}}
				/>
				<Button disabled={loading}>
					{#if loading}
						<div class="flex items-center gap-1">
							<span>Signing in... </span>
							<Spinner size="small" />
						</div>
					{:else}
						Sign in
					{/if}
				</Button>
			</form>
		</div>
	</div>
</div>
