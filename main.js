window.onload = () => {
    const btn1 = document.getElementById("btn1");
    btn1.style.color = 'red';
    
    const class0 = new Class(btn1);
    
    btn1.addEventListener('click', () => class0.changeColor(btn1));
    btn1.addEventListener('mousemove' , () => class0.changeSize(btn1));
}