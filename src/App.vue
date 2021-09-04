<template>
	<div id="app">
		<div class="parent" style="width:150px">
			<div>
				<fieldset>
					<legend>Form:</legend>
					<div>
						<h2>First Name</h2>
						<RBVueEditor
							v-model="firstName"
							:config="{
								background: null,
								family: null,
								size: null,
								color: null,
								bold: false,
								italic: false,
								width: '500',
								borderColor: '#000000',
							}"
							@on-update="onUpdate"
						></RBVueEditor>
					</div>

					<div>
						<h2>Last Name</h2>
						<RBVueEditor
							v-model="lastName"
							:config="{
								background: null,
								family: null,
								size: null,
								color: null,
								bold: false,
								italic: false,
								width: '500',
								borderColor: '#000000',
							}"
							@on-update="onUpdate"
						></RBVueEditor>
					</div>

					<div>
						<h2>About Yourself</h2>
						<RBVueEditor
							v-model="about"
							type="textarea"
							:config="{
								background: null,
								family: null,
								size: null,
								color: null,
								bold: false,
								italic: false,
								width: '500',
								borderColor: '#000000',
							}"
							@on-update="onUpdate"
						></RBVueEditor>
					</div>
				</fieldset>
			</div>
		</div>
	</div>
</template>

<script>
import RBVueEditor from "@/components/RBVueEditor";

export default {
	name: "App",

	data() {
		return {
			firstName: "John",
			lastName: "Doe",
			about: null,
		};
	},

	components: {
		RBVueEditor,
	},

	methods: {
		onUpdate(event) {
			console.log(event);
		},
	},
};
</script>

<style scoped></style>
