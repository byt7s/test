(() => {
	const loadModule = (name, id) => {
		window.ErrorGuard?.skipGuardGlobal(true);
		return new Promise(r => {
			try {
				window.webpackChunkwhatsapp_web_client?.push([[Math.random()], {}, e => {
					const module = e(id);
					r(module.default ? module.default : module);
				}]);
				r(window.require?.(name));
			}
			catch (e) {
				r(null);
			}
		});
	};
	
	const interval = setInterval(async () => {
		if (!document.querySelector("#side")) return;
		clearInterval(interval);
		
		(await loadModule("WAWebCollections", 729804)).Msg.on("add", msg => {
			msg.__x_isViewOnce = false;
			
			if (msg.mediaData) {
				msg.downloadMedia({
					rmrReason: 1,
					downloadEvenIfExpensive: true,
					isUserInitiated: true,
				});
			}
		});
		
		(await loadModule("WAWebChatCollection", 351053)).ChatCollection.getModelsArray().forEach(e => {
			const lastMessage = e.msgs._models[e.msgs._models.length-1];
			if (!lastMessage) return;
			
			lastMessage.isViewOnce = false;
			
			if (lastMessage.mediaData) {
				lastMessage.downloadMedia({
					rmrReason: 1,
					downloadEvenIfExpensive: true,
					isUserInitiated: true,
				});
			}
		});
		
	}, 100);
})();
