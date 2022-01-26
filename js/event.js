window.onload = function(){
    new Vue({
        el: "#app",
        data: {
            cnt: 0
        } , 
        methods: {
            some: function(event){
                this.cnt++;
            }
        }
    })

    new Vue({
        el: "#app2",
        data: {
            cnt: 0,
            isOn: false
        } , 
        methods: {
            disable: function(){
                if(this.isOn) {
                    this.isOn = false;
                    this.cnt --;
                }
                else {
                    this.isOn = true;
                    this.cnt ++
                }
            }
        }
    })

    new Vue({
        el: "#app3",
        data: {
            cnt: 0
        },
        methods: {
            count: function(value){
                this.cnt += value;
            }
        }
    })

    new Vue({
        el: "#app4",
        data: {
            mytext: ''
        },
        methods: {
            alert: function(value){
                alert(this.mytext);
            }
        }
    })
    new Vue({
        el: "#app5",
        data: {
            mytext: ''
        },
        methods: {
            alert: function(value){
                alert(this.mytext);
            }
        }
    })
}