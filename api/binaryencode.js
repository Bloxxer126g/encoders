function BinaryEncode(text) {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

export default async function handler(req, res) {
    try {
        const data = await BinaryEncode(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message || String(error) });
    }
}
