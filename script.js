//fetch de una imagen
/*function sendApiRequest() {
 const userInput = document.getElementById ("input").value;
 console.log(userInput)
 
 const giphyApiKey = "QGHfeUVs64RuUsdtE6SaaDFxLxc2GrLX"
 const giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}&limit=10`
 
 fetch(giphyApiURL)
   .then(function(data){return data.json()})
   .then(function(json){console.log(json.data[0].images.fixed_height.url)
                       const imgPath = json.data[0].images.fixed_height.url
                       const img = document.createElement("img")
                       img.setAttribute("src", imgPath)
                       document.body.appendChild(img)
                       })
  
}*/

//✅ 10 imágenes
function sendApiRequest() {
    const userInput = document.getElementById("input").value;
    console.log(userInput);

    const giphyApiKey = "QGHfeUVs64RuUsdtE6SaaDFxLxc2GrLX";
    const giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}&limit=10`;

    fetch(giphyApiURL) 
        .then(function (data) {
            return data.json();
        })
        .then(function (json) {
            const categoryResults = document.getElementById("category-results");
            categoryResults.innerHTML = ''; // Limpiar resultados anteriores

            for (let i = 0; i < json.data.length; i++) {
                const imgPath = json.data[i].images.fixed_height.url;
                const img = document.createElement("img");
                img.setAttribute("src", imgPath);
                categoryResults.appendChild(img);
            }
        });
}

// ✅ Categorías
function searchCategory() {
    const userInput = document.getElementById("input").value;
    const giphyApiKey = "QGHfeUVs64RuUsdtE6SaaDFxLxc2GrLX";
    const giphyApiURL = `https://api.giphy.com/v1/gifs/categories?api_key=${giphyApiKey}`;

    fetch(giphyApiURL)
        .then(function (data) {
            return data.json();
        })
        .then(function (json) {
            const categoriesList = document.getElementById("categories-list");

            // Borra cualquier contenido anterior en la lista
            categoriesList.innerHTML = '';

            // Filtra las categorías que coinciden con la búsqueda del usuario
            const filteredCategories = json.data.filter(function (category) {
                return category.name.toLowerCase().includes(userInput.toLowerCase());
            });

            // Si no se encontraron categorías, muestra un mensaje
            if (filteredCategories.length === 0) {
                const noResults = document.createElement("li");
                noResults.textContent = "No se encontraron categorías.";
                categoriesList.appendChild(noResults);
            } else {
                // Recorre y muestra las categorías encontradas como enlaces
                filteredCategories.forEach(function (category) {
                    const listItem = document.createElement("li");
                    const categoryLink = document.createElement("a");
                    categoryLink.textContent = category.name;
                    categoryLink.href = `javascript:getCategoryResults("${category.name}")`;
                    listItem.appendChild(categoryLink);
                    categoriesList.appendChild(listItem);
                });
            }
        });
}

function getCategoryResults(categoryName) {
    const giphyApiKey = "QGHfeUVs64RuUsdtE6SaaDFxLxc2GrLX";
    const giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${categoryName}&rating=g&api_key=${giphyApiKey}&limit=50`;

    // Puedes usar estos resultados como desees, como mostrarlos en tu página.
    fetch(giphyApiURL)
        .then(function (data) {
            return data.json();
        })
        .then(function (json) {
            const categoryResults = document.getElementById("category-results");
            categoryResults.innerHTML = ''; // Limpiar resultados anteriores

            for (let i = 0; i < json.data.length; i++) {
                const imgPath = json.data[i].images.fixed_height.url;
                const img = document.createElement("img");
                img.setAttribute("src", imgPath);
                categoryResults.appendChild(img);
            }
        });
}
//✅ 5 imágenes
function sendApiRequest() {
	const userInput = document.getElementById("input").value;
	console.log(userInput);

	const giphyApiKey = "QGHfeUVs64RuUsdtE6SaaDFxLxc2GrLX";
	const giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}&limit=5`;

	fetch(giphyApiURL)
			.then(function (data) {
					return data.json();
			})
			.then(function (json) {
					const categoryResults = document.getElementById("category-results");
					categoryResults.innerHTML = ''; // Limpiar resultados anteriores

					for (let i = 0; i < json.data.length; i++) {
							const imgPath = json.data[i].images.fixed_height.url;
							const img = document.createElement("img");
							img.setAttribute("src", imgPath);
							categoryResults.appendChild(img);
					}
			});
}

// ✅ Categorías
function searchCategory() {
	const userInput = document.getElementById("input").value;
	const giphyApiKey = "QGHfeUVs64RuUsdtE6SaaDFxLxc2GrLX";
	const giphyApiURL = `https://api.giphy.com/v1/gifs/categories?api_key=${giphyApiKey}`;

	fetch(giphyApiURL)
			.then(function (data) {
					return data.json();
			})
			.then(function (json) {
					const categoriesList = document.getElementById("categories-list");

					// Borra cualquier contenido anterior en la lista
					categoriesList.innerHTML = '';

					// Filtra las categorías que coinciden con la búsqueda del usuario
					const filteredCategories = json.data.filter(function (category) {
							return category.name.toLowerCase().includes(userInput.toLowerCase());
					});

					// Si no se encontraron categorías, muestra un mensaje
					if (filteredCategories.length === 0) {
							const noResults = document.createElement("li");
							noResults.textContent = "No se encontraron categorías.";
							categoriesList.appendChild(noResults);
					} else {
							// Recorre y muestra las categorías encontradas como enlaces
							filteredCategories.forEach(function (category) {
									const listItem = document.createElement("li");
									const categoryLink = document.createElement("a");
									categoryLink.textContent = category.name;
									categoryLink.href = `javascript:getCategoryResults("${category.name}")`;
									listItem.appendChild(categoryLink);
									categoriesList.appendChild(listItem);
							});
					}
			});
}

function getCategoryResults(categoryName) {
	const giphyApiKey = "QGHfeUVs64RuUsdtE6SaaDFxLxc2GrLX";
	const giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${categoryName}&rating=g&api_key=${giphyApiKey}&limit=20`;

	// Puedes usar estos resultados como desees, como mostrarlos en tu página.
	fetch(giphyApiURL)
			.then(function (data) {
					return data.json();
			})
			.then(function (json) {
					const categoryResults = document.getElementById("category-results");
					categoryResults.innerHTML = ''; // Limpiar resultados anteriores

					for (let i = 0; i < json.data.length; i++) {
							const imgPath = json.data[i].images.fixed_height.url;
							const img = document.createElement("img");
							img.setAttribute("src", imgPath);
							categoryResults.appendChild(img);
					}
			});
}
