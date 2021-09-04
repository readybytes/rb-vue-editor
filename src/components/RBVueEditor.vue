<template>
	<!-- Proceed only if user provide item prop, text property in item,
       a valid type or not provided any type at all
  -->
	<div class="dropdown-vec" v-if="isValidType">
		<component
			:is="type"
			:value="value"
			class="text-field-vec"
			:placeholder="placeholder"
			:style="styleObj"
			@input="$emit('input', $event.target.value)"
		></component>

		<!-- parent dropdown -->
		<div class="dropdown-content-vec">
			<!-- parent dropdown's features -->
			<div class="btn-group-vec">
				<!-- Background color -->
				<button
					v-if="item.hasOwnProperty('background')"
					class="sub-menu-btn-vec"
				>
					<div class="sub-menu-vec">
						<div
							v-for="(color, index) in COLORS"
							:key="index"
							:class="[
								'colors-square-vec',
								{ 'highlight-border-vec': item.background == color },
							]"
							:style="{ background: color }"
							@click="updateStyle('background', color)"
						></div>
					</div>
					<div
						class="sub-menu-btn-icon-vec colors-square-vec highlight-border-vec"
						:style="{ background: item.background }"
					></div>
				</button>

				<!-- Font Family -->
				<button v-if="item.hasOwnProperty('family')" class="sub-menu-btn-vec">
					<div class="sub-menu-vec">
						<div
							v-for="(family, index) in FONT_FAMILIES"
							:key="index"
							:class="[
								'sub-menu-labels-vec',
								{ 'font-bold-vec': item.family == family },
							]"
							@click="updateStyle('family', family)"
						>
							{{ family }}
						</div>
					</div>
					<span class="sub-menu-btn-icon-vec font-bold-vec">
						F<span class="sub-script-vec ">F</span>
					</span>
				</button>

				<!-- Bold -->
				<button
					style="width:60px"
					v-if="item.hasOwnProperty('bold')"
					@click="updateStyle('bold', !item.bold)"
					:class="{ 'highlight-background-vec': item.bold }"
				>
					<span class="font-bold-vec">B</span>
				</button>

				<!-- Italic -->
				<button
					style="width:60px"
					v-if="item.hasOwnProperty('italic')"
					@click="updateStyle('italic', !item.italic)"
					:class="{ 'highlight-background-vec': item.italic }"
				>
					<span class="font-bold-vec">I</span>
				</button>

				<!-- Font Size -->
				<button v-if="item.hasOwnProperty('size')" class="sub-menu-btn-vec">
					<div class="sub-menu-vec">
						<div
							v-for="(size, index) in FONT_SIZES"
							:key="index"
							@click="updateStyle('size', size)"
							:class="[
								'sub-menu-labels-vec',
								{ 'font-bold-vec': item.size == size },
							]"
						>
							{{ size }}
						</div>
					</div>
					<span class="sub-menu-btn-icon-vec font-bold-vec"
						>T<span class="sub-script-vec">T</span></span
					>
				</button>

				<!-- Font Color -->
				<button v-if="item.hasOwnProperty('color')" class="sub-menu-btn-vec">
					<div class="sub-menu-vec">
						<div
							v-for="(color, index) in COLORS"
							:key="index"
							:class="[
								'colors-square-vec',
								{ 'highlight-border-vec': item.color == color },
							]"
							:style="{ background: color }"
							@click="updateStyle('color', color)"
						></div>
					</div>
					<span
						class="sub-menu-btn-icon-vec font-bold-vec"
						:style="{ borderBottom: `3px solid ${item.color}` }"
						>A</span
					>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { FONT_FAMILIES, FONT_SIZES, COLORS } from "../constants";

export default {
	name: "RBVueEditor",

	data() {
		return {
			FONT_FAMILIES,
			FONT_SIZES,
			COLORS,
			item: this.config ? this.config : {},
		};
	},

	props: {
		value: {},
		type: {
			default: "input",
		},
		config: {
			type: Object,
		},
	},

	computed: {
		placeholder() {
			return this.item.placeholder
				? this.item.placeholder
				: "Type text here...";
		},

		isValidType() {
			return ["textarea", "input"].includes(this.type);
		},

		styleObj() {
			return {
				// font weight
				fontWeight:
					this.item.hasOwnProperty("bold") && this.item.bold ? "bold" : null,

				// font style
				fontStyle:
					this.item.hasOwnProperty("italic") && this.item.italic
						? "italic"
						: null,

				// color
				color: this.item.hasOwnProperty("color") ? this.item.color : null,

				// background
				background: this.item.hasOwnProperty("background")
					? this.item.background
					: null,

				// font size
				fontSize: this.item.hasOwnProperty("size") ? this.item.size : null,

				// font family
				fontFamily: this.item.hasOwnProperty("family")
					? this.item.family
					: null,

				// input box width
				width: this.item.hasOwnProperty("width")
					? `${this.item.width}px`
					: "500px",

				// input box border
				border: `1px solid ${
					this.item.borderColor ? this.item.borderColor : "black"
				}`,
			};
		},
	},
	methods: {
		updateStyle(property, value) {
			// Update at local data
			this.item[property] = value;
			// Emit event to update parent's data
			this.$emit("on-update", this.item);
		},
	},
};
</script>

<style scoped>
@import "../assets/styles/rbve.css";
</style>
