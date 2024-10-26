<template>
  <div :class="$style.wrapper">
    <div><h1>Header</h1></div>
    <div v-if="valueCurrentUser == null">
      <button @click="setLogin">Login</button>
    </div>
    <div v-if="valueCurrentUser != null">
      <button @click="setLogout">Logout</button>
    </div>
    <button @click="showCurrentUser">click</button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'HeaderComponent',
  setup() {
    const valueCurrentUser = inject('valueCurrentUser');
    const setCurrentUser = inject('setCurrentUser');
    const handleDisplayLogin = inject('handleDisplayLogin');

    const showCurrentUser = () => {
      console.log('Current User Value:', valueCurrentUser.value);
    };

    const setLogin = () => {
      handleDisplayLogin(true);
    };

    const setLogout = () => {
      localStorage.removeItem('tokenLogin');
      handleDisplayLogin(false);
      setCurrentUser(null);
    };

    return {
      valueCurrentUser,
      setLogin,
      setLogout,
      showCurrentUser,
    };
  },
};
</script>

<style lang="scss" module>
@import './Header.module.scss'; 
</style>
