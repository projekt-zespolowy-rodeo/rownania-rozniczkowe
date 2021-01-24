let n = document.getElementById("n");
let b = document.getElementById("b");
let solve = document.getElementById("solve");
let solution = document.getElementById("solution");
const eulerMethod = (n,a,b)=>{
    // Euler method
    solution.appendChild(document.createTextNode("Euler method"));
    solution.appendChild(document.createElement('br'));
    h = countH(a,b,n);
    list_of_x =[];
    list_of_x.push(a);
    solution.appendChild(document.createTextNode("x"+0+" = "+list_of_x[0]));
    solution.appendChild(document.createElement('br'));
    for(var i=1;i<=n;i++){
        list_of_x.push(list_of_x[i-1]+h);
        solution.appendChild(document.createTextNode("x"+i+" = "+list_of_x[i]));
        solution.appendChild(document.createElement('br'));
    }
    list_of_y = [];
    list_of_y.push(funct(a));
    for(var i=1;i<=n;i++){
        list_of_y.push(list_of_y[i-1]+h*dfunct(list_of_x[i-1],list_of_y[i-1]));
    }
    for(var i=0;i<=n;i++){
        solution.appendChild(document.createTextNode("y"+i+" = "+list_of_y[i]));
        solution.appendChild(document.createElement('br'));
    }
    list_of_underestimates = []
    for(var i=1;i<=n;i++){
        var blad = Math.abs(list_of_y[i] - funct(list_of_x[i]));
        list_of_underestimates.push(blad);
        solution.appendChild(document.createTextNode("Blad y(x"+i+") = "+blad));
        solution.appendChild(document.createElement('br'));
    }

    solution.appendChild(document.createElement('br'));

}   

const modifiedEulerMethod = (n,a,b)=>{
    // Modified Euler method
    solution.appendChild(document.createTextNode("Modified Euler method"));
    solution.appendChild(document.createElement('br'));
    h = countH(a,b,n);
    list_of_x =[];
    list_of_x.push(a);
    solution.appendChild(document.createTextNode("x"+0+" = "+list_of_x[0]));
    solution.appendChild(document.createElement('br'));
    for(var i=1;i<=n;i++){
        list_of_x.push(list_of_x[i-1]+h);
        solution.appendChild(document.createTextNode("x"+i+" = "+list_of_x[i]));
        solution.appendChild(document.createElement('br'));
    }
    list_of_y = [];
    list_of_y.push(funct(a));
    for(var i=1;i<=n;i++){
        list_of_y.push(list_of_y[i-1]+h*dfunct(list_of_x[i-1]+(h/2),(h/2)*dfunct(list_of_x[i-1],list_of_y[i-1])));
    }
    for(var i=0;i<=n;i++){
        solution.appendChild(document.createTextNode("y"+i+" = "+list_of_y[i]));
        solution.appendChild(document.createElement('br'));
    }
    list_of_underestimates = []
    for(var i=1;i<=n;i++){
        var blad = Math.abs(list_of_y[i] - funct(list_of_x[i]));
        list_of_underestimates.push(blad);
        solution.appendChild(document.createTextNode("(Blad y(x"+i+") = "+blad));
        solution.appendChild(document.createElement('br'));
    }
    solution.appendChild(document.createElement('br'));

}

const heunsMethod = (n,a,b)=>{
    // Modified Euler method
    solution.appendChild(document.createTextNode("Heun's method"));
    solution.appendChild(document.createElement('br'));
    h = countH(a,b,n);
    list_of_x =[];
    list_of_x.push(a);
    solution.appendChild(document.createTextNode("x"+0+" = "+list_of_x[0]));
    solution.appendChild(document.createElement('br'));
    for(var i=1;i<=n;i++){
        list_of_x.push(list_of_x[i-1]+h);
        solution.appendChild(document.createTextNode("x"+i+" = "+list_of_x[i]));
        solution.appendChild(document.createElement('br'));
    }
    list_of_y = [];
    list_of_y.push(funct(a));
    for(var i=1;i<=n;i++){
        list_of_y.push(list_of_y[i-1]+(h/2)*(dfunct(list_of_x[i-1],list_of_y[i-1])+dfunct(list_of_x[i-1]+h,h*dfunct(list_of_x[i-1],list_of_y[i-1]))));
    }
    for(var i=0;i<=n;i++){
        solution.appendChild(document.createTextNode("y"+i+" = "+list_of_y[i]));
        solution.appendChild(document.createElement('br'));
    }
    list_of_underestimates = []
    for(var i=1;i<=n;i++){
        var blad = Math.abs(list_of_y[i] - funct(list_of_x[i]));
        list_of_underestimates.push(blad);
        solution.appendChild(document.createTextNode("(Blad y(x"+i+") = "+blad));
        solution.appendChild(document.createElement('br'));
    }
    solution.appendChild(document.createElement('br'));

}     

const countH=(a,b,n)=>{
    return (b-a)/n;
}

const dfunct = (x,y)=>{
    return 2*(y-2*x-1)+2;
}

const funct = (x) =>
{
    return 3*x*x+2*x+1;
}

solve.addEventListener('click', event =>{
    eulerMethod(n,1,b);
    modifiedEulerMethod(n,1,b);
    heunsMethod(n,1,b);
})
