const container = document.getElementById('container');
let randChar = add_new_chars();

window.onload = function () {
    container.textContent = randChar + container.textContent.slice(randChar.length);
};

function add_new_chars() {
    let newChars = "";
    const n = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < n; i++) {
        const ranNum = Math.floor(Math.random() * 26);
        newChars += String.fromCharCode(65 + ranNum);
    }
    return newChars;
}

window.addEventListener("keyup", function (e) {
    console.log(e.key);
    let key = e.key.replace(/\s+/g, '');

    if (e.key === 'Escape') {
        container.textContent = "";
    }
    else if (e.key === 'Backspace') {
        container.textContent = container.textContent.slice(0, -1);
    }
    else if (container.textContent.length > 0 && e.key.toUpperCase() === container.textContent.charAt(0).toUpperCase()) {
        container.textContent = container.textContent.slice(1);
        if (container.textContent.length === 0) {
            add_new_char();
        } else {
            add_new_char();
            while (e.key.toUpperCase() === container.textContent.charAt(0).toUpperCase()) {
                container.textContent = container.textContent.slice(1);
                add_new_char();
            }
        }
    }
    else {
        container.textContent += e.key;
    }
});

function add_new_char() {
    const newChars = add_new_chars();
    randChar += newChars;
    container.textContent += newChars.trim();
}