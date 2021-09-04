import RBVueEditor from "./components/RBVueEditor.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("rb-vue-editor", RBVueEditor);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

RBVueEditor.install = install;

export default RBVueEditor;
