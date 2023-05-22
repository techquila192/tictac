let t=0;
let a=[[],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
let origImg,origCol;
let names=".c11,.c12,.c13,.c21,.c22,.c23,.c31,.c32,.c33";

function reset()
{
  location.reload();
}

function checkWin(r,c)
{
    let cells=document.querySelectorAll(names);
    if(a[2][2]!=0)
  {
    if (a[1][1]==a[2][2] && a[1][1]==a[3][3]) 
    {
      cells[0].style.backgroundColor="yellowgreen";
      cells[4].style.backgroundColor="yellowgreen";
      cells[8].style.backgroundColor="yellowgreen";
      origCol="yellowgreen";
      return true;
    }
    if(a[1][3]==a[2][2] && a[2][2]==a[3][1])
    {
      cells[2].style.backgroundColor="yellowgreen";
      cells[4].style.backgroundColor="yellowgreen";
      cells[6].style.backgroundColor="yellowgreen";
      origCol="yellowgreen";
      return true;
    } 
  }
  if(a[r][1]==a[r][2] && a[r][2]==a[r][3])
  {
    cells[(r-1)*3].style.backgroundColor="yellowgreen";
    cells[(r-1)*3+1].style.backgroundColor="yellowgreen";
    cells[(r-1)*3+2].style.backgroundColor="yellowgreen";
    origCol="yellowgreen";
    return true;
  }
  if(a[1][c]==a[2][c] && a[2][c]==a[3][c])
  {
    cells[c-1].style.backgroundColor="yellowgreen";
    cells[c+2].style.backgroundColor="yellowgreen";
    cells[c+5].style.backgroundColor="yellowgreen";
    origCol="yellowgreen";
    return true;
  }
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
  if(origImg!="none")
  return;
  if(t%2==0){
  a[r][c]=1;
  origImg="url('X.png')";
  ele.style.backgroundImage="url('X.png')";
  }
  else
  {
  a[r][c]=-1;
  origImg="url('O.png')";
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
origImg=style.backgroundImage;
origCol=ele.style.backgroundColor;
if(origCol=="yellowgreen")
return;
if(origImg!="none")
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
  if(origCol=="yellowgreen")
  return;

  ele.style.backgroundColor="white";
  ele.style.backgroundImage=origImg;
}





