function fib()
{
    let j = parseInt(document.getElementById("n").value);
    let i,a=0,b=1,c,res=" ";
    for(i=1;i<=j;i++)
        {
            res = res + " " + a;
            c = a+b;
            a=b;
            b=c;
        }
        document.getElementById("r").innerHTML = res;
}
