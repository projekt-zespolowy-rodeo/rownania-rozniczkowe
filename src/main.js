
const eulerMethod = (n,a,b)=>{
    // Euler method
    console.log("Euler method");
    h = countH(a,b,n);
    list_of_x =[];
    list_of_x.push(a);
    console.log("x"+0+" = "+list_of_x[0]);
    for(var i=1;i<=n;i++){
        list_of_x.push(list_of_x[i-1]+h);
        console.log("x"+i+" = "+list_of_x[i]);
    }
    list_of_y = [];
    list_of_y.push(funct(a));
    for(var i=1;i<=n;i++){
        list_of_y.push(list_of_y[i-1]+h*dfunct(list_of_x[i-1],list_of_y[i-1]));
    }
    for(var i=0;i<=n;i++){
        console.log("y"+i+" = "+list_of_y[i]);
    }
    list_of_underestimates = []
    for(var i=1;i<=n;i++){
        var blad = Math.abs(list_of_y[i] - funct(list_of_x[i]));
        list_of_underestimates.push(blad);
        console.log("(Blad y(x"+i+") = "+blad);
    }
    console.log(Math.max(...list_of_underestimates));

}   

const modifiedEulerMethod = (n,a,b)=>{
    // Modified Euler method
    console.log("Modified Euler method");
    h = countH(a,b,n);
    list_of_x =[];
    list_of_x.push(a);
    console.log("x"+0+" = "+list_of_x[0]);
    for(var i=1;i<=n;i++){
        list_of_x.push(list_of_x[i-1]+h);
        console.log("x"+i+" = "+list_of_x[i]);
    }
    list_of_y = [];
    list_of_y.push(funct(a));
    for(var i=1;i<=n;i++){
        list_of_y.push(list_of_y[i-1]+h*dfunct(list_of_x[i-1]+(h/2),(h/2)*dfunct(list_of_x[i-1],list_of_y[i-1])));
    }
    for(var i=0;i<=n;i++){
        console.log("y"+i+" = "+list_of_y[i]);
    }
    list_of_underestimates = []
    for(var i=1;i<=n;i++){
        var blad = Math.abs(list_of_y[i] - funct(list_of_x[i]));
        list_of_underestimates.push(blad);
        console.log("(Blad y(x"+i+") = "+blad);
    }
    console.log(Math.max(...list_of_underestimates));

}

const heunsMethod = (n,a,b)=>{
    // Modified Euler method
    console.log("Heun's method");
    h = countH(a,b,n);
    list_of_x =[];
    list_of_x.push(a);
    console.log("x"+0+" = "+list_of_x[0]);
    for(var i=1;i<=n;i++){
        list_of_x.push(list_of_x[i-1]+h);
        console.log("x"+i+" = "+list_of_x[i]);
    }
    list_of_y = [];
    list_of_y.push(funct(a));
    for(var i=1;i<=n;i++){
        list_of_y.push(list_of_y[i-1]+(h/2)*(dfunct(list_of_x[i-1],list_of_y[i-1])+dfunct(list_of_x[i-1]+h,h*dfunct(list_of_x[i-1],list_of_y[i-1]))));
    }
    for(var i=0;i<=n;i++){
        console.log("y"+i+" = "+list_of_y[i]);
    }
    list_of_underestimates = []
    for(var i=1;i<=n;i++){
        var blad = Math.abs(list_of_y[i] - funct(list_of_x[i]));
        list_of_underestimates.push(blad);
        console.log("(Blad y(x"+i+") = "+blad);
    }
    console.log(Math.max(...list_of_underestimates));

}     

const countH=(a,b,n)=>{
    return (b-a)/n;
}

const dfunct = (x,y)=>{
    return (2*x)+1;
}

const funct = (x) =>
{
    return x*x+x-1;
}

//        n,a,b    gdzie a=y(a) = 6
eulerMethod(3,0,1);
modifiedEulerMethod(3,0,1);
heunsMethod(3,0,1);