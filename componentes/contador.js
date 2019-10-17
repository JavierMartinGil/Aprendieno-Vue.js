Vue.component('contador', {
    template: `
    <div>
    <h3>{{numero}}</h3>
    <button @click="numero++">+</button>
    `,
    data() {
        return {
            numero: 0
        }
    }
})