<template>
  <div class="add-message">
    <form class="add-message__form" @submit.prevent="addMessage">
      <input class="add-message__input" v-model="message" type="text"  placeholder="Type your message..." required>
      <button class="add-message__btn">Send</button>
    </form>
  </div>
</template>

<script>
import database from '@/firebase/init'

export default {
  name: 'AddMessage',
  props: ['username'],
  data() {
    return {
      message: null
    }
  },
  methods: {
    addMessage(){
      if (this.message) {

        database.collection("messages").add({
          message: this.message,
          username: this.username,
          time: Date.now()
        }).catch(err => {
          console.log(err)
          console.log("sad :(")
        })

        console.log("success :)")

        this.message = null

      }
    }
  }
}
</script>

<style>
.add-message__form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 65px;
}
.add-message__input {
  background: none;
  border: 0;
  font-size: 1.8rem;
  color: var(--text-light);
  padding: 2rem;
  flex-grow: 1;
  outline: none;
}
.add-message__input::placeholder {
  font-size: 1.8rem;
  color: currentColor;
  font-family: "Karla", Arial, sans-serif;
}
.add-message__btn {
  background: none;
  border: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fcbab5;
  padding: 1rem 2rem;
  cursor: pointer;
  outline: none;
  transition: .2s;
  font-family: "Karla", Arial, sans-serif;
}
.add-message__btn:hover,
.add-message__btn:focus {
  color: var(--text-light);
}
</style>

