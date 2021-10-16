var flag=false//全局变量
function show_menu(i){
		var items1=document.getElementsByClassName("items")[i];
		var menu=document.getElementsByClassName("menu_a")[i];
		if(flag){
			items1.style.display="none";
			menu.style.color="black"
			flag=false;
		}else{
			items1.style.display="block";
			menu.style.color="#57ABFC"
			flag=true;
		}
}
function close_menu(i){
		var items1=document.getElementsByClassName("items")[i];
		var menu=document.getElementsByClassName("menu_a")[i];
			items1.style.display="none";
			menu.style.color="black"
			flag=false;
}