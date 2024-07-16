function bmi()
{
    let a = parseInt(document.getElementById('a').value);
    let w = parseInt(document.getElementById('w').value);
    let h = parseInt(document.getElementById('h').value);
    let s;

    let b = parseFloat((w/(h*h))*10000).toFixed(2);
    if(b <= 18.5)
        {
            s = "Thin";
        }
    if(b>18.5  && b<=25)
        {
            s = "Congratulations ! You Are Fit !!";
        }
    if(b>25  && b<=30)
        {
            s = "Overweight" ;
        }
    if(b>30  && b<=40)
        {
            s = "Highly Overweight";
        }        
    document.getElementById('res').innerHTML = "BMI : "+b+"<br>"+s;

}
