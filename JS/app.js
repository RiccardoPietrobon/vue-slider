const app = Vue.createApp({

    data() {
        return {
            images: [
                "./img/01.webp", //indice 1
                "./img/02.webp", //indice 2
                "./img/03.webp", //indice 3
                "./img/04.webp", //indice 4
                "./img/05.webp", //indice 5
            ],

            activeImage: 0
        }
    },

    methods: {
        prevImage() {
            if (this.activeImage - 1 < 0) {
                this.activeImage = this.images.length - 1;
            } else {
                this.activeImage--;
            }
        },

        nextImage() {
            if (this.activeImage + 1 >= this.images.length) {
                this.activeImage = 0;
            } else {
                this.activeImage++;
            }
        },

        switchImage(index) {
            this.activeImage = index;
        }

    },

});

app.mount('#app');




//registrazione 32 min!!!!!


