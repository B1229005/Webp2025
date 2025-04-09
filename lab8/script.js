const container = document.getElementById('container');
let randChar = add_new_chars();
let wrongCount = 0;  // 紀錄連錯次數

window.onload = function () {
    container.textContent = randChar + container.textContent.slice(randChar.length);
};

function add_new_chars(n = Math.floor(Math.random() * 3) + 1) {
    let newChars = "";
    for (let i = 0; i < n; i++) {
        const ranNum = Math.floor(Math.random() * 26);
        newChars += String.fromCharCode(65 + ranNum);
    }
    return newChars;
}

window.addEventListener("keyup", function (e) {
    let key = e.key.replace(/\s+/g, '');

    if (e.key === 'Escape') {
        container.textContent = "";
        wrongCount = 0;
    }
    else if (e.key === 'Backspace') {
        container.textContent = container.textContent.slice(0, -1);
    }
    else if (container.textContent.length > 0 && e.key.toUpperCase() === container.textContent.charAt(0).toUpperCase()) {
        // 打對
        container.textContent = container.textContent.slice(1);
        wrongCount = 0;  // 重置錯誤次數

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
        // 打錯
        wrongCount++;  // 錯誤次數 +1

        add_new_char();  // 打錯也要加亂數字串

        if (wrongCount >= 3) {
            const extraChars = add_new_chars(6);  // 額外增加6個
            randChar += extraChars;
            container.textContent += extraChars;
            wrongCount = 0;  // 重置錯誤次數
        }
    }
});

function add_new_char() {
    const newChars = add_new_chars();
    randChar += newChars;
    container.textContent += newChars.trim();
}