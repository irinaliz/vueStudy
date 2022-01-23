
        window.onload = function(){
            new Vue({
                el : "#app",
                data: {
                    myPrice: 10000,
                    myName : "홍길동"
                }
            })

            new Vue({
                el :"#array"
                ,data:{
                    arrays :[1,2,3,4,5]
                }
            })

            new Vue({
                el:"#object",
                data:{
                    myTea:{name: "다즐링" , price: 1200},
                    myTea2:{name: "다즐링3" , price: 1500}
                }
            })

            var item = [
                {name: "babo1", by:1},
                {name: "babo2", by:2},
                {name: "babo3", by:3}
            ]

            new Vue({
                el: "#objectList",
                data: {
                    myItems: item
                }
            })
        }