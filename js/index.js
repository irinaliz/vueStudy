
        window.onload = function(){
            
            new Vue({
                el: "#app",
                data: {
                    count: 0,
                    babo: 0
                },
                methods: {
                    countUp: function(){
                        this.count++;
                        this.babo++;
                        this.cnt++;
                        console.log(this);
                    }, 
                    countDown : function(){
                        this.count--;
                        this.babo--;
                    }
                }
            })
            
            new Vue({
                el: "#babos",
                data: {
                    cnt: 1
                }
            })

            var abc = new Vue({
                el: "#abc",
                data: {
                    abc: 1
                }
            })

            var a = new Vue({
                el: ".a",
                data: {
                    test: "테스트문구"
                }
            })
        }