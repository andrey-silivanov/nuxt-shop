import idb from 'idb';

self.addEventListener('fetch', (event) => {
	if (new URL(event.request.url).href == 'http://nuxt-back/api/products') {
		event.respondWith(
			fetch(event.request).then(function(response){
				response.json().then(function(res) {
					idb.open('keyval-store', 1, upgradeDB => {
						switch (upgradeDB.oldVersion) {
							case 0:
								upgradeDB.createObjectStore('keyval');
						}
					}).then(db => {
						const tx = db.transaction('keyval', 'readwrite');
						tx.objectStore('keyval').put('hello', 'world');
						return tx.complete;
					}).then(() => console.log("Done!"));
					console.log('fdsfsdf');
					console.log(res.data)
				});
			})
		);
	}
});