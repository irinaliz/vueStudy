window.onload = function(){
    new Vue({
        el: "#app",
        data: {
            item : '',
            myList: [],
            search: ''
        },
        methods: {
            inputData: function(e){
                this.item = e.target.value;
            },
            addList: function(){
                this.myList.push(this.item);
                this.item = '';
            },
            inputSearchData: function(e){
                this.search = e.target.value;
            },
            searchBoxInput : function(val){
                this.search = val;
            }
        },
        computed: {
            searchItem: function(){
                if(this.search){
                    return this.myList.filter( a => a.indexOf(this.search) > -1 );
                } else {
                    return this.myList;
                }
            }
        }
    })
}