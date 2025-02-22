
const AdminAuth = (req, res, next) => {
    console.log("Admin Auth is getting checked")
    const token = "xyaz";
    const Authenticated = token === "xyz";
    if (!Authenticated) {
        res.status(401).send("Unautherized request")
    }
    else {
        next()
    }
}

const UserAuth = (req, res, next) => {
    console.log("User Auth is getting checked")
    const token = "xyz";
    const Authenticated = token === "xyz";
    if (!Authenticated) {
        res.status(401).send("Unautherized User")
    }
    else {
        next()
    }
}

module.exports = { AdminAuth, UserAuth }