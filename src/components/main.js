let app = new Vue ({
    el: `#app`,

    data: {
        images:{
            img1: `/images/menos.png`,
            img2: `/images/mas.png`
        },
        title: "Counter",
        count: 0
    },

    methods: {
        plusCount() {
            this.count++
        },

        minusCount() {
            this.count--
        },

        randomNum() {
            this.count = Math.floor(Math.random() * 200)
        },

        resetNum() {
            this.count = 0
        }
    }
})
