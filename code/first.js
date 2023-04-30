let t=0;
let a=[[],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
let orig;
function checkWin(r,c)
{
  
  if(a[2][2]!=0 && ((a[1][1]==a[2][2] && a[1][1]==a[3][3]) || (a[1][3]==a[2][2] && a[2][2]==a[3][1])))
  return true;
  if(a[r][1]==a[r][2] && a[r][2]==a[r][3])
  return true;
  if(a[1][c]==a[2][c] && a[2][c]==a[3][c])
  return true;
  return false;
}
function end()
{
  alert("Game over");
}
function set(ele,r,c)
{
  if(t==9)
  {
  end();
  return;
  }
  if(orig!="none")
  return;
  if(t%2==0){
  a[r][c]=1;
  orig="url('X.png')";
  ele.style.backgroundImage="url('X.png')";
  }
  else
  {
  a[r][c]=-1;
  orig="url('O.png')";
  ele.style.backgroundImage="url('O.png')";
  }
  if(checkWin(r,c))
  {
  t=9;
  end();
  return;
  }
  t++;
}

function hover(ele)
{
let style=getComputedStyle(ele);
orig=style.backgroundImage;
if(orig!="none")
{
ele.style.backgroundColor="red";
return;
}
ele.style.backgroundColor="yellowgreen";
if(t==9)
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
  ele.style.backgroundColor="white";
  ele.style.backgroundImage=orig;
}










