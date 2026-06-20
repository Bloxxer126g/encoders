export default function(req, res) {
    try {
        text = req.body;

        res.body = text.split('').map(char => {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');
    
        res.statuscode = 200;
    } catch {
        res.statuscode = 500;
    }
    
    return {res}
}