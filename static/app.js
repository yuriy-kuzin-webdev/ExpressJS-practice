const App = {
    data() {
        return {
            servers: []
        }
    },
    async mounted() {
        const res = await fetch('/api/server')
        const servers = await res.json()
    }
}

Vue.createApp(App).mount('#app')