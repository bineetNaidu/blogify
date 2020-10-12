import { writable } from 'svelte/store';

const UserStore = writable({
 username: "",
 userJWT: "",
 confirmed: false,
 email: ""
})

export default UserStore;