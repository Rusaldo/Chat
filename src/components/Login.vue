<template>
  <div class="login">
    <a class="logo login__logo" href="/">
      <img class="logo__img" src="../assets/logo.png" alt="Logo"> 
      <h1 class="logo__caption">Chat</h1>
    </a>
    <form class="login__form form" @submit.prevent="loginChat">
      <div class="form__input-wrapper">
        <label class="form__label" for="username">Username</label>
        <input class="form__text-input" type="text" name="username" v-model="username" placeholder="Rusaldo" required>
      </div>
      <button class="form__btn">Get Started</button>
    </form> 
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: null
    }
  },
  methods: {
    loginChat() {
      if (this.username) {
        this.$router.push({ name: "Chat", params: {username: this.username}})
      } 
    }
  }
}
</script>

<style>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  padding: 5rem 2rem 4rem;
  background: #fed3d0 url("../assets/bg-start.jpg") no-repeat center / cover;
}
.login__logo {
  display: block;
  text-align: center;
}
.logo__img {
  width: 100px;
  height: 124px;
}
.logo__caption {
  font-size: 4.5rem;
}
.form__input-wrapper {
  padding: 3rem;
  background-color: #fff;
}
.form__label {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-secondary);
  letter-spacing: 2px;
  text-transform: uppercase;
}
.login__form {
  background-color: #fff;
}
.form__text-input {
  background: none;
  border: 0;
  display: block;
  width: 100%;
  font-size: 2rem;
  padding: 1.7rem 0 2.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  outline: none;
  transition: .3s;
}
.form__text-input:focus {
  border-color: var(--accent);
}
.form__btn {
  background: none;
  border: 0;
  text-align: left;
  width: 100%;
  background-color: var(--accent);
  font-weight: 700;
  font-size: 1.6rem;
  padding: 2.5rem 3rem;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: .3s;
  font-family: "Karla", Arial, sans-serif;
}
.form__btn:hover,
.form__btn:focus {
  background-color: var(--accent-hover);
}
.form__btn:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 3rem;
  transform: translateY(-50%);
  display: block;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 11px solid currentColor;
}

/*-------- MEDIA ---------*/
@media screen and (min-width: 768px) {
  .login__form {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1024px) {
  .login {
    justify-content: center;
    background: #fed3d0 url("../assets/bg-start-big.jpg") no-repeat center / cover;
  }
  .login__form {
    margin-top: 100px;
  }
}  
</style>