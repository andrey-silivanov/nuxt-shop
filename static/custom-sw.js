const STORE = 'nuxt-shop';
const PRODUCTS_TABLE = 'products';

self.addEventListener('fetch', (event) => {
	const url = new URL(event.request.url);
	if (url.href == 'http://nuxt-back/api/products') {
		console.log('test');
		console.log(getAllProducts());
		event.respondWith( getAllProducts() || console.log('dasdas'));


			/////////////////////
		/*event.respondWith(
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
			})*/

				/*return event.respondWith(
					fetch(event.request).then(function(response){
						response.json().then(function(res) {
							res.data.forEach(value => saveProduct(value));
						});
					})
				);*/


	}
});


function saveProduct(product) {
	idb.open(STORE, 1, upgradeDB => {
		switch (upgradeDB.oldVersion) {
			case 0:
				upgradeDB.createObjectStore(PRODUCTS_TABLE, { keyPath: 'id' });
		}
	}).then(db => {
		const tx = db.transaction(PRODUCTS_TABLE, 'readwrite');
		tx.objectStore(PRODUCTS_TABLE).put(product);
		return tx.complete;
	}).then(() => console.log('Done !'));
}

function getAllProducts() {
	const dbPromise = idb.open(STORE, 1);
	dbPromise.then(db => {
		db.transaction(PRODUCTS_TABLE)
			.objectStore(PRODUCTS_TABLE).getAll();
	}).then(allObjs => new Response(JSON.stringify({data: allObjs})))
		.catch(() => {
			console.log('error db');
			return false
		})
}

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
