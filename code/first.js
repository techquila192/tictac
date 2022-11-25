let t=0;
//int a[][]=new int[4][4];
let orig;
function set(ele)
{
  if(t==9)
  {
  alert("Game over");
  return;
  }
  if(orig!="none")
  return;
  if(t%2==0){
  orig="url('X.png')";
  ele.style.backgroundImage="url('X.png')";
  }
  else
  {
  orig="url('O.png')";
  ele.style.backgroundImage="url('O.png')";
  }
  t++;
}
function hover(ele)
{
let style=getComputedStyle(ele);
orig=style.backgroundImage;
if(orig!="none")
return;
if(t%2==0){
  ele.style.backgroundImage="url('X.png')";
  }
  else
  {
  ele.style.backgroundImage="url('O.png')";
  }
}
function away(ele)
{
  ele.style.backgroundImage=orig;
}





