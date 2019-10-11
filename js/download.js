$("#qwe").onclick = function(event){
	var evt = event || window.event;

	$("#qw1").style.display = "block";
	$("#qw2").style.display = "block";
	$("#cover1").style.display = "block";
	$("#cursor1").style.display = "block";
	$("#qq1").style.opacity = "1";
	$(".bottom").style.display = "block";
		$(".slideInLeft1").style.display = "block";
	
}
$("#close-btn").onclick = function(event){
	var evt = event || window.event;

	$("#qw1").style.display = "none";
	$("#qw2").style.display = "none";
	$("#cover1").style.display = "none";
	$("#cursor1").style.display = "none";
	$("#qq1").style.opacity = "0.45";
	$("#cover2").style.display = "none";
	$("#cursor2").style.display = "none";
	$("#qq2").style.opacity = "0.45";
	$("#cover3").style.display = "none";
	$("#cursor3").style.display = "none";
	$("#qq3").style.opacity = "0.45";
	
}

$("#ico1").onmouseover = function(event){
	var evt = event || window.event;

	$("#cover1").style.display = "block";
	$("#cursor1").style.display = "block";
	$("#qq1").style.opacity = "1";
	$("#cover2").style.display = "none";
	$("#cursor2").style.display = "none";
	$("#qq2").style.opacity = "0.45";
	$("#cover3").style.display = "none";
	$("#cursor3").style.display = "none";
	$("#qq3").style.opacity = "0.45";
	$(".slideInLeft1").style.display = "block";
	$(".slideInLeft2").style.display = "none";
	$(".slideInLeft3").style.display = "none";


}
// $("#ico1").onmouseout = function(event){
// 	var evt = event || window.event;

// 	$("#cover1").style.display = "none";
// 	$("#cursor1").style.display = "none";
// 	$("#qq1").style.opacity = "0.45";
// }

$("#ico2").onmouseover = function(event){
	var evt = event || window.event;

	$("#cover2").style.display = "block";
	$("#cursor2").style.display = "block";
	$("#qq2").style.opacity = "1";
	$("#cover1").style.display = "none";
	$("#cursor1").style.display = "none";
	$("#qq1").style.opacity = "0.45";
	$("#cover3").style.display = "none";
	$("#cursor3").style.display = "none";
	$("#qq3").style.opacity = "0.45";
	$(".slideInLeft1").style.display = "none";
	$(".slideInLeft2").style.display = "block";
	$(".slideInLeft3").style.display = "none";
}
// $("#ico2").onmouseout = function(event){
// 	var evt = event || window.event;

// 	$("#cover2").style.display = "none";
// 	$("#cursor2").style.display = "none";
// 	$("#qq2").style.opacity = "0.45";
	
// }

$("#ico3").onmouseover = function(event){
	var evt = event || window.event;

	$("#cover3").style.display = "block";
	$("#cursor3").style.display = "block";
	$("#qq3").style.opacity = "1";
	$("#cover1").style.display = "none";
	$("#cursor1").style.display = "none";
	$("#qq1").style.opacity = "0.45";
	$("#cover2").style.display = "none";
	$("#cursor2").style.display = "none";
	$("#qq2").style.opacity = "0.45";
	$(".slideInLeft1").style.display = "none";
	$(".slideInLeft2").style.display = "none";
	$(".slideInLeft3").style.display = "block";
	
}
// $('.platform').onmouseover = function (){
// 	$('.bottom').style.display = 'block';
// 	console.log(1)
// }
// $("#ico3").onmouseout = function(event){
// 	var evt = event || window.event;

// 	$("#cover3").style.display = "none";
// 	$("#cursor3").style.display = "none";
// 	$("#qq3").style.opacity = "0.45";
	
// }
 function $(str){
    if(str[0]=="#"){
        return document.getElementById(str.substring(1));
    }else if(str[0]=="."){
        return document.getElementsByClassName(str.substring(1))[0];
    }else{
        return document.getElementsByTagName(str);
    }
}