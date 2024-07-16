function palindrome()
{
    let j = parseInt(document.getElementById("n").value);
    let res=" ",i,rem,a1,a2;
    for(i=1;i<=j;i++)
    {   a1=i;
        rev=0,
        a2 =i;
        while(a1!=0)
            { rem = parseInt(a1%10);
                rev = parseInt(rev*10+rem);
              a1 = parseInt(a1/10);
            }
            if(rev==a2)          
            {	res = res + a2+" ";
            }      
        }
    document.getElementById("r").innerHTML = res;
}
