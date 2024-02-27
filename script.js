document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll(".add").forEach(button => {
        button.addEventListener('click', () => update(button, 1))
    })

    document.querySelectorAll(".sub").forEach(button => {
        button.addEventListener('click', () => update(button, -1))
    })
    
    function changeHeight(div, num){
        div.style.height = `${80 + (num * 5)}px`;
    }

    function update(button, inc) {
        const numDiv = button.parentElement.querySelector('.num');
        let num = parseInt(numDiv.textContent) + inc;
        num = Math.max(0, num);
        const div = button.parentElement.parentElement;
        numDiv.textContent = num;
        changeHeight(div, num)
    }
});
