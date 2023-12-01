import Connection from "../Connection";

export default {
    get: () => {
        const config = [
            {
                url: "dashboard/chart",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json:charset=UTF-8",
                }
            },
            null,
        ]

        return Connection.makeApiResult(...config);
    }
};