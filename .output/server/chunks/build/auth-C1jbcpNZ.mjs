import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

//#region app/stores/builder.ts
var useBuilderStore = defineStore("builder", () => {
	const isEditMode = ref(false);
	const activeSelectedId = ref(null);
	function toggleEditMode() {
		isEditMode.value = !isEditMode.value;
		if (!isEditMode.value) activeSelectedId.value = null;
	}
	function setEditMode(state) {
		isEditMode.value = state;
		if (!state) activeSelectedId.value = null;
	}
	function setSelectedId(id) {
		activeSelectedId.value = id;
	}
	return {
		isEditMode,
		activeSelectedId,
		toggleEditMode,
		setEditMode,
		setSelectedId
	};
});
//#endregion
//#region app/stores/auth.ts
var useAuthStore = defineStore("auth", () => {
	const user = ref({
		id: "usr-admin-01",
		email: "admin1@yopmail.com",
		name: "Admin Laundry",
		role: "ADMIN",
		outletName: "Laundry Express Pusat"
	});
	const isAuthenticated = computed(() => !!user.value);
	const isAdmin = computed(() => user.value?.role === "ADMIN" || user.value?.role === "SUPERADMIN");
	function updateUser(updated) {
		if (user.value) user.value = {
			...user.value,
			...updated
		};
	}
	return {
		user,
		isAuthenticated,
		isAdmin,
		updateUser
	};
});

export { useAuthStore as a, useBuilderStore as u };
//# sourceMappingURL=auth-C1jbcpNZ.mjs.map
