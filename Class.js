class Class {

    constructor(elem) {
        this.elem = elem
    }

    changeColor(elem) {
        elem.style.color === 'red' ?
            elem.style.color = 'green' :
            elem.style.color = 'red'
    }

    changeSize(elem) {
        elem.style.width = 200;
        elem.style.height = 200;
    }
}