// JavaScript Documentdefine(function(){	function scrollUp(id){        if(!document.getElementById(id)) return;        var $obj="#"+id;        var str = $($obj).html();        $(str).prependTo($obj);        function marquee(){            var obj = document.getElementById(id)            var h = $($obj).scrollTop();            //滚动到1/2处回到顶部从新滚动            if(parseInt(obj.scrollHeight/2) <= obj.scrollTop){                $(obj).scrollTop(0);            }else{                //obj.scrollTop+=300;                //$($obj).animate({scrollTop:"+=1"})                $($obj).get(0).scrollTop++;            }        }		//设定定时器        var auto = setInterval(marquee,40);    	//鼠标移上时停止，移开开始        $($obj).hover(            function(){                clearInterval(auto);        },function(){    		//从设定时器            auto = setInterval(marquee,40);        })	}		return{		scrollUp:scrollUp		}});