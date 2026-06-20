function Base64Decode(text) {
    try {
        return decodeURIComponent(escape(atob(text))); 
    } catch (e) {
        throw new Error("Failed to decode base64. Error: "+e);
    }
}

export default async function handler(req, res) {
    try {
        const data = await Base64Decode(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message || String(error) });
    }
}
