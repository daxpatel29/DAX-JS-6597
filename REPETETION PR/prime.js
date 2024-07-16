function prime()
{
    let k = parseInt(document.getElementById("n").value);
    let res="",i,j;
    for(i=1;i<=k;i++)
        {       count=0;
            for(j=1;j<=i;j++)
            {
                if(i%j==0)
                {
                    count++;
                }
            }
            if(count==2)
            { res = res +" "+ i;  }
    
        }
        document.getElementById("r").innerHTML = res;
}
