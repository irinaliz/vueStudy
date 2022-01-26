window.onload = function(){
    new Vue({
        el: "#app",
        data: {
            num: 100,
            myText: '',
            color: 'green'
        },
        computed: {
            lengthCal: function(e){
                var i = this.num-this.myText.length;
                if(this.num/2 < i) this.color = 'green';
                else if(this.num/4 < i) this.color = 'orange';
                else {
                    this.color = 'red';
                }
                return i;
            }
        }
    })

    new Vue({
        el: "#app2",
        data: {
            num: 150,
            mytext: '',
            realNum: 150,
            color: 'green'
        },
        methods: {
            calData: function(e){
                console.log('a');
                
                this.realNum = this.num - e.target.value.length;

                if(this.num/2 < this.realNum) this.color = 'green';
                else if(this.num/4 < this.realNum) this.color = 'orange';
                else this.color = 'red';
                
                if(this.realNum <= 0) return;
                this.mytext = e.target.value;
            }
        }

    })
}