import Connection from "../Connection";

export default {
    set: (params) => {
        const config = [
            {
                url: "/recipe/store",
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json:charset=UTF-8",
                },
                data: params,
            },
            null,
        ]

        return Connection.makeApiResult(...config);
    }, 
    get: () => {
        const config = [
            {
                url: "/recipe/store",
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json:charset=UTF-8",
                },
                params: {},
            },
            null,
        ]

        return Connection.makeApiResult(...config);
    }
};