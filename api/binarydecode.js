function BinaryDecode(text) {
    return binaryStr.split(' ').map(bin => {
        if (/^[01]{8}$/.test(bin)) { 
            return String.fromCharCode(parseInt(bin, 2));
        }
        return ''; 
    }).filter(Boolean).join('');
}

export default async function handler(req, res) {
    try {
        const data = await BinaryDecode(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message || String(error) });
    }
}
