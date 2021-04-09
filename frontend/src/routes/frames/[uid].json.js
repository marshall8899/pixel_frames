export async function get(req, res, next) {
	const { uid } = req.params;
	let thing = await global.models.PixelFrame.findOne({uid})

	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(thing));

}