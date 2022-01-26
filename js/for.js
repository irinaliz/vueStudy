window.onload = function(){
    new Vue({
        el: "#app",
        data: {
            header: ['프로그래밍 언어',2018,2013,2008,2003,1998],
            ob: [
                ['java',1,2,1,1,16],
                ['C',2,1,2,2,1],
                ['C++',3,4,3,3,2],
                ['Python',4,7,6,11,23],
                ['javaScript',7,10,20,10,5]
            ]
        } ,
        methods: {
            add:function(){
                this.ob.push(['test',1,2,3,4,5]);
            },
            sort:function(){
                this.ob.sort();
            }
        }
    })
    new Vue({
        el: "#app2",
        data: {
            array: [1,2,3,4,5,6,7,8,9,10]
        }
    })

    new Vue({
        el: "#app3",
        data: {
            array: [1,2,3,4,5,6,7,8,9,10]
        },
        methods: {
            evenData: function(){
                this.array = this.array.filter(item => item % 2 ==0);
                console.log(this.array);
            }
        }
    })
}