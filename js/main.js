(() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            removeAformat: true,
            showBioData: false,

            profs: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
                { name: "John", role: "prof", nickname: "super chill" },
                { name: "Joe", role: "prof", nickname: "Teddy Bear" }
            ]
        },
        //this is the mounted lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function(){
            console.log("Vue is mounted!");

            this.profs.push({name: "Jarrod", role: "supermodel prof", nickname: "Zoolander"})
        }, //every time you add somehting there needs to be a comma between secitons

        //run a method when we change our view (update the DOM with vue)
        updated: function(){
            console.log('Vue just updated the DOM')
        },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            },

            removeProf(target){
                // remove this prof from the profs array
                console.log('clicked to remove prof', target, target.name);
                //the "this" keyoword inside a vue instance REFERS to the Vue instance itself by default

                //toggle the property between true and false using a ternary event.
                this.showBioData = this.showBioData ? false:true
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();