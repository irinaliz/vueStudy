window.onload = function(){
    new Vue({
        el: "#app",
        data: {
            price: 0
        },
        methods: {
            testmethod: function(){
                return this.price * 1.5;
            }
        },
        computed: {
            taxIncluded: function(){
                return this.price*1.08;
            }
        }
    })

    new Vue({
        el: "#app2",
        data: {
            price: 0,
            count: 0
        },
        computed: {
            sum : function(){
                return this.price * this.count
            },
            taxIncluded : function(){
                return this.sum * 1.08;
            }
        }
    })

    new Vue({
        el: "#app3",
        data: {
            mytext : ""
        },
        computed : {
            remaining: function(){
                return 140 - this.mytext.length;
            },
            computedColor: function(){
                col = "green";
                if(this.remaining < 20) col="orange";
                if(this.remaining < 1) col = "red";
                return col;
            }
        }
    })

    new Vue({
        el: "#app4",
        data: {
            find: '',
            items:['설악산','한라산','금강산','지리산','백두산','관악산']

        },
        computed: {
            findWord: function(){
                if(this.find) {
                    return this.items.filter(value => value.indexOf(this.find) > -1 );
                } else {
                    return this.items;
                }
            }
        }
        
    })

    new Vue({
        el: "#app5",
        data: {
            r: 0,
            g: 0,
            b: 0
        },
        computed : {
            colormix: function(){
                return "rgb("+this.r +"," + this.g +"," + this.b+")";
            }
        }
    })
}