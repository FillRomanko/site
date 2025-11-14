fetch('vacancies.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('blocks-container');
        data.forEach(item => {
            const block = document.createElement('div');
            block.className = 'vac-block';
            block.innerHTML = `
        <div class="companyinfo">
                <div class="company">${item.company}</div>
            <div class="title">${item.title}</div>
            <div class="location">${item.location}</div>
        </div>
        <div class="details">
            <div class="salary">${item.salary}</div>
            <div class="format">${item.format}</div>
            <div class="level">${item.level}</div>  
        </div>
      `;
            container.appendChild(block);
        });
    });
