
function requestUserRepos(){
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/jonomh2/repos`;
    xhr.open('GET', url, true);
    xhr.onload = function () {
        const data = JSON.parse(this.response);
        for (let i in data) {
            let ul = document.getElementById('userRepos');
            let li = document.createElement('li');
            li.classList.add('list-group-item')
            li.innerHTML = (`
                <p><strong> ${data[i].name}</strong></p>
                <p>${data[i].description}</p>
                <p> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
                <p>${data[i].language}</p>
            `);
            ul.appendChild(li);

        }

    }

    // Send the request to the server
    xhr.send();

}

requestUserRepos();
