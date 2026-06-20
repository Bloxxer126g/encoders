function Base64Encode(text) {
    try {
        return btoa(unescape(encodeURIComponent(text))); 
    } catch (e) {
        throw new Error("Failed to encode base64. Error: "+e);
    }
}

export default async function handler(req, res) {
    try {
        const data = await Base64Encode(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message || String(error) });
    }
}
