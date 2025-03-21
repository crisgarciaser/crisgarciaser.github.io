document.getElementById("update-button").addEventListener("click", function () {
    let userInput = document.getElementById("text-input").value;
    if (userInput.trim() !== "") {
        document.getElementById("about-text").textContent = userInput;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    const apiKey = 'fb54f87c44bf41528bb3149b5aca415f';
    const category = 'sports'; 
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;

    
    const fetchNews = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log('Respuesta de la API:', data);
            if (data.articles && data.articles.length > 0) {
                displayNews(data.articles); 
                document.getElementById('no-news-alert').style.display = 'none';
            } else {
                document.getElementById('no-news-alert').style.display = 'block';
            }
        } catch (error) {
            console.error('Error al obtener las noticias:', error);
            document.getElementById('no-news-alert').style.display = 'block';
        }
    };

    
    const displayNews = (articles) => {
        const newsContainer = document.getElementById('news-cards');
        newsContainer.innerHTML = ''; 

        articles.slice(0, 10).forEach(article => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');
            card.innerHTML = `
                <div class="card">
                    <img src="${article.urlToImage}" class="card-img-top" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description}</p>
                        <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>
                    </div>
                </div>
            `;
            newsContainer.appendChild(card); 
        });
    };

    
    fetchNews();
});


