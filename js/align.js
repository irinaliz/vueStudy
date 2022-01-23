
        //var align = 'left';
        var align = ['center','left','right']
        var i = 0;
        var last = align.length;
        window.onload = function(){
            new Vue({
                el: "#app",
                data: {
                    myalign: align[i],
                    col: 'red',
                    backcol: 'yellow'
                },
                methods: {
                    move: function(){
                        if(i >= last-1) i = 0;
                        else i++;
                        console.log(i + " / " + last + " / " + align.length + " / " + align[i])
                    }
                }
            })
        }