const copyToClipboard = async (text) => {
	try {
			const permissions = await navigator.permissions.query({name: "clipboard-write"})
			if (permissions.state === "granted" || permissions.state === "prompt") {
					await navigator.clipboard.writeText(text);
			} else {
					throw new Error("Can't access the clipboard. Check your browser permissions.")
			}
	} catch (error) {
			console.log('Error copying to clipboard:', error);
	}
}

export { copyToClipboard }