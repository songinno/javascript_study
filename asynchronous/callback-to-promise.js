class UserStorage {
    loginUser(id, password, /* onSuccess, onError */) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "ellie" && password === "dream") ||
                    (id === "coder" && password === "academy")
                ) {
                    resolve(id);
                } else {
                    reject(new Error("not found"));
                }
            }, 2000);
        });
        
    }

    getRoles(userId, /* onSuccess, onError */) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId === "ellie") {
                    resolve({ name: "ellie", role: "admin" });
                } else {
                    reject(new Error("no access"));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your ID");
const password = prompt("enter your PW");
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(userInfo => {
        alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role`);
    })
    .catch(console.log);