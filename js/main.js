(() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",

            profs: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
                { name: "John", role: "prof", nickname: "super chill" },
                { name: "Joe", role: "prof", nickname: "Teddy Bear" }
            ]
        },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();