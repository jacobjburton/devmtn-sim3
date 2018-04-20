module.exports =
{
    registerUser: (req, res, next) =>
    {
        const db = req.app.get('db');

        const {username, password} = req.body;

        db.add_User([username, password]).then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    },
    loginUser: (req, res, next) =>
    {
        const db = req.app.get('db');
        
        const {username, password} = req.body;
        console.log("username:", username, "password:", password);

        db.login_User([username, password]).then(() => res.status(200).send()).catch(() => res.status(500).send());

        
    }
}