import Connection from "../Connection";

export default {
    get: (id) => {
        const config = [
            {
                url: "bioimpedance/info/chart/" + id,
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json:charset=UTF-8",
                },
                params: {},
            },
            null,
        ]

        return Connection.makeApiResult(...config);
    },
    set: (params) => {
        const config = [
            {
                url: "bioimpedance/store",
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
    }
};
