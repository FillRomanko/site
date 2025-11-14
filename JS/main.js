fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('tags-container');
        data.forEach(item => {
            const tag = document.createElement('button'); // Кликабельный элемент
            tag.textContent = item.text;
            tag.classList.add('tag', item.type);
            tag.onclick = () => alert(item.text); // обработчик клика
            container.appendChild(tag);
        });
    });