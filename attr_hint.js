/**
 * setOverWidthHint("td",25,"info");
 * <td onclick="setVal('entryWayId',undefined,'indexGrid')" info="无入口">美甲</td>
 * @param targ
 * @param height
 * @param attr
 */
function setOverWidthHint(targ,height,attr){
	$(document).ready(function(){		
		if($("#ow_hint_parent").length==0){
			$("body").prepend("<div style=\"position:relative;display:none;\" id=\"ow_hint_parent\"><span id=\"ow_hint_info\" style=\"position: absolute;background-color: #f0c53a;padding:5px;border-radius: 2px;\"></span></div>");
		}
		
		
		var targs=$(targ);
		
		
		for(var i=0;i<targs.size();i++){
			var obj=targs.get(i);
			var jObj=$(obj);
			var txt=jObj.html();
			
			
			jObj.mouseenter(function(curObj){
				
				var x=$(curObj.target).offset().top;
				var y=$(curObj.target).offset().left;
				var owHintInfo=$("#ow_hint_info");
				owHintInfo.css("top",x+height);
				owHintInfo.css("left",y);
				if(typeof($(curObj.target).attr(attr))=="undefined"){
					owHintInfo.html($(curObj.target).html());
				}else{
					owHintInfo.html($(curObj.target).attr(attr));
				}				
				//owHintInfo.html($(curObj.target).html());
				$("#ow_hint_parent").show();
			});
			jObj.mouseleave(function(curObj){
				$("#ow_hint_parent").hide();
			});				
		   
		}
	});
}
	
