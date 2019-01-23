/*const STORE = 'nuxt-shop';
const PRODUCTS_TABLE = 'products';
console.log('custom sw')*/
/////////////////////////////
/*self.addEventListener('fetch', (event) => {
	console.log('fetch');
	const url = new URL(event.request.url);
	if (url.href == 'http://nuxt-shop-back/api/products') {
		console.log('test');
		//console.log(getAllProducts());
		event.respondWith( getAllProducts() || fetch(event.request));
        event.waitUntil(
            getAllProducts()
            // В конце, после получения "свежих" данных от сервера уведомляем всех клиентов.
                //.then(refresh)
        );

			/////////////////////
		/!*event.respondWith(
			caches.match(event.request).then(function(resp) {

				let arr = [
					{id: 'test1', title: 'Title'},
					{id: 'test2', title: 'Title2'},
					{id: 'test2', title: 'Title3'},
					{id: 'test2', title: 'Title4'},
					{id: 'test2', title: 'Title5'},
					{id: 'test2', title: 'Title6'},
					{id: 'test2', title: 'Title7'},
					{id: 'test2', title: 'Title8'},
					{id: 'test2', title: 'Title9'},
				];
				return new Response(JSON.stringify({data: arr}));
			}).catch(function() {
				return caches.match('/sw-test/gallery/myLittleVader.jpg');
			})*!/

				/!*return event.respondWith(
					fetch(event.request).then(function(response){
						response.json().then(function(res) {
							res.data.forEach(value => saveProduct(value));
						});
					})
				);*!/


	}
});*/
//////////////////////////////////////////////

/*function updateProduct(product) {
	idb.open(STORE, 1, upgradeDB => {
		switch (upgradeDB.oldVersion) {
			case 0:
				upgradeDB.createObjectStore(PRODUCTS_TABLE, { keyPath: 'id' });
		}
	}).then(db => {
		const tx = db.transaction([PRODUCTS_TABLE], 'readwrite');
		tx.objectStore(PRODUCTS_TABLE).put(product);
		return tx.complete;
	}).then(() => console.log('Done !'));
}

function getAllProducts() {
	const dbPromise = idb.open(STORE, 1);
	dbPromise.then(db => {
		db.transaction(PRODUCTS_TABLE)
			.objectStore(PRODUCTS_TABLE).getAll();
	}).then(allObjs => new Response(JSON.stringify({data: allObjs})),
			err => console.log('er4343434234'))
		.catch(() => {
			console.log('error db');
			return false
		})
}*/

/*

Get All
setTimeout(function () {
	const dbPromise = idb.open(STORE, 1, upgradeDB => {
		// Note: we don't use 'break' in this switch statement,
		// the fall-through behaviour is what we want.
	});

	dbPromise.then(db => {
		return db.transaction(PRODUCTS_TABLE)
			.objectStore(PRODUCTS_TABLE).getAll();
	}).then(allObjs => console.log(allObjs));
}, 2000)*/
// При запросе на сервер мы используем данные из кэша и только после идем на сервер.
self.addEventListener('fetch', (event) => {
    // Как и в предыдущем примере, сначала `respondWith()` потом `waitUntil()`
    const url = new URL(event.request.url);
    if (url.href === 'http://nuxt-shop-back/api/products') {
        event.respondWith(fromCache(event.request));
        event.waitUntil(
            update(event.request)
            // В конце, после получения "свежих" данных от сервера уведомляем всех клиентов.
                //.then(refresh)
        );
    }
});

function fromCache(request) {
    const dbPromise = idb.open(STORE, 1);
    return dbPromise.then(db => {
        db.transaction(PRODUCTS_TABLE)
            .objectStore(PRODUCTS_TABLE).getAll();
    }).then(allObjs => new Response(JSON.stringify({data: allObjs}) || Promise.reject('no-match')),
        err => console.log('er4343434234')
	);

    /*return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ));*/
}

function update(request) {
    fetch(request).then(function(response){
        response.json().then(function(res) {
            console.log('567');
            res.data.forEach(value => updateProduct(value));
        });
    })
}

// Шлём сообщения об обновлении данных всем клиентам.
function refresh(response) {
    return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
            // Подробнее про ETag можно прочитать тут
            // https://en.wikipedia.org/wiki/HTTP_ETag
            const message = {
                type: 'refresh',
                url: response.url,
                eTag: response.headers.get('ETag')
            };
            // Уведомляем клиент об обновлении данных.
            client.postMessage(JSON.stringify(message));
        });
    });
}
