
const Desmarcar = () => {

  var boxes = document.getElementsByName("marcar");
  for(var i = 0; i < boxes.length; i++)
      boxes[i].checked = false;
}

export default Desmarcar;