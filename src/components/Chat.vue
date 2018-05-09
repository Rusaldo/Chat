<template>
  <div class="chat">
    <header class="chat__header">
			<nav class="navbar">
				<button class="navbar__go-back" @click="goBack"></button>
				<h1 class="navbar__heading">Chat</h1>
        <div class="navbar__search"> 
          <span @click="searchVisible = !searchVisible" class="navbar__search-toggle"></span> 
          <input v-if="searchVisible" class="navbar__search-input" type="text" v-model="search" placeholder="Search..."> 
        </div>
			</nav>
		</header>
    <section class="chat__body">
			<ul class="chat__messages" v-chat-scroll>
				<li class="message" v-for="message in filteredMessages" :key="message.id">
					<h3 class="message__author">{{ message.username}}</h3>
					<p class="message__text">{{ message.message}}.</p>
					<time class="message__time">{{ message.time }}</time>
				</li>
			</ul>			
    </section>
		<section class="chat__add-message">
			<AddMessage :username="username" />
		</section>
  </div>
</template>

<script>
import AddMessage from '@/components/AddMessage'
import database from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
	props: ['username'],
	components: {
		AddMessage
	},
  data(){
    return{
      messages: [],
      search: "",
      searchVisible: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
	created() {
		let databaseRef = database.collection("messages").orderBy("time")
		databaseRef.onSnapshot(snapshot => {
			snapshot.docChanges.forEach(change => {
				if (change.type == "added") {
					let doc = change.doc
					this.messages.push({
						id: doc.id,
						username: doc.data().username,
						message: doc.data().message,
						time: moment(doc.data().time).calendar()
					})
				}
			})
    })
  },
  computed: {
    filteredMessages: function() {
      return this.messages.filter((message) => {
        return message.message.match(this.search)
      })
    }
  }
}
</script>

<style>
.chat {	
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--accent) url("../assets/bg-chat.jpg") no-repeat center / cover;
}
.chat__header {
  height: 65px;
  background-color: #000;
	flex-shrink: 0;
}
.navbar {
	color: var(--text-light);
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	position: relative;
}
.navbar__go-back {
	background: none;
	border: 0;
	display: block;
	width: 40px;
	height: 40px;
	position: relative;
	cursor: pointer;
	color: var(--text-light);
	outline: none;
}
.navbar__go-back:before {
	content: '';
	position: absolute;
	top: 15px;
	left: 10px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-right: 11px solid currentColor;
	transition: .2s;
}
.navbar__go-back:hover:before,
.navbar__go-back:focus:before {
	border-right: 11px solid var(--accent);
}
.navbar__heading {
	font-size: 2rem;
	font-weight: 400;
	text-align: center;
	position: absolute;
	left: 50%;
	top: 35px;
	transform: translate(-50%, -50%);
}
.navbar__search {
	z-index: 2;
}
.navbar__search-toggle {
	display: inline-block;
	background: none;
	border: 0;
	width: 20px;
	height: 20px;
	color: var(--text-light);
	background-color: transparent;
	border: 3px solid currentColor;
	border-radius: 50%;
	outline: none;
	cursor: pointer;
	position: relative;
	top: 6px;
	transition: .2s;
}
.navbar__search-toggle:after {
	content: '';
	position: absolute;
	width: 7px;
	height: 3px;
	background-color: currentColor;
	transform: rotate(45deg);
	top: 15px;
	left: 11px;
}
.navbar__search-toggle:hover {
	color: var(--accent);
}
.navbar__search-input {
	border: none;
	background-color: #fff;
	padding: 1rem;
	outline: none;
	font-size: 16px;
	margin-left: 1rem;
}
.navbar__search-input::placeholder {
	font-size: 1.4rem;
	color: var(--text-dark);
}
/*---------------------------------*/
.chat__body {
	flex-grow: 1;
  height: 1px;
}
.chat__messages {
	padding: 3rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
  height: 100%;
  overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
.chat__add-message {
	flex-shrink: 0;
}
/*---------------------------------*/
.message {
	display: block;
	width: 200px;
	padding: 2rem 1rem 1.5rem 2rem;
	background-color: #fff;
	box-shadow: 0 40px 50px rgba(0, 0, 0, 0.2);
	position: relative;
}
.message_user {
  align-self: flex-start;
  margin-left: 2rem;
}
.message:not(:last-child) {
	margin-bottom: 3rem;
}
.message__author {
	display: block;
	position: absolute;
	max-width: 200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	left: -2rem;
	top: -2rem;
	padding: 1rem;
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	background-color: #fff;
}
.message__text {
	font-size: 1.8rem;
	word-wrap: break-word;
}
.message__time {
	margin-top: 2rem;
	font-size: 1.2rem;
	color: var(--text-secondary);
}
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: #ccc; 
}
::-webkit-scrollbar-thumb {
  background: #888; 
}

/*-------- MEDIA ---------*/
@media screen and (min-width: 768px) {
  .message {
		width: 300px;
	}
	.message__author {
		max-width: 300px;
	}
}
@media screen and (min-width: 1024px) {
  .chat {
		max-width: 1024px;
		width: 100%;
		margin: 0 auto;
	}
	.chat__add-message {
		background-color: rgba(0, 0, 0, 0.4);
	}
	.message {
		width: 400px;
	}
}
</style>

