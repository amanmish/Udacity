//makeGrid Funcion goes here to make the proper grid system
function makeGrid() {
	//select and set current input height and input width 
	let Gridheight=$('#inputHeight').val();
	let GridWidth=$('#inputWeight').val();
	$('#inputHeight').val(Gridheight);
	$('#inputWeight').val(GridWidth);
	//clearing the previous table
	$('table').empty()
	//
	for(let i=0;i<Gridheight;i++){
		$('table').append("<tr>")
		for(let j=0;j<GridWidth;j++){
			$('tr:last-child').append("<td></td>")	
		}
		$('table').append("</tr>")
	}
}
//calling the makeGrid function on submmiting
$('#submit').on('click',function(){
	makeGrid();
});
//set bg color of selected grid to the selected color
$('table').on('click','td',function(){
	//select the color from the colorPickr
	 let colors=$('#colorPicker').val();
	 //set the bg color of selected grid
	$(this).css("background-color",colors);
})