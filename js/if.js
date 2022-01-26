window.onload = function(){
    new Vue({
        el: "#app",
        data: {
            bool : false
        }
    })

    new Vue({
        el: "#app2",
        data: {
            isShow : true
        },
        methods: {
            good: function(){
                this.isShow = false;
            }
        }
    })

    new Vue({
        el: "#app3",
        data: {
            cnt : 0
        }
    })
}