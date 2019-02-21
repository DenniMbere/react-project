export default class EcommerceService {

    open(data) {
        return (
            fetch('http://localhost:8080/api/cli/ecommerce/cart/open', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:8080"
                },
                mode: "cors",
                credentials: 'include',
                body: JSON.stringify({
                    title: data.title,
                    storeId: data.storeId,
                    deliveryMode: data.deliveryMode,
                    addressId: "",
                    terminalType: "WEB",
                    terminalId: "9095bfc3-2dad-44dc-89e0-b9f232542f32",
                })
            })
        );
    }

    openCarts() {
        return (
            fetch('http://localhost:8080/api/cli/ecommerce/carts/open', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:8080"
                    },
                    mode: "cors",
                    credentials: 'include',
                }
            )
        );
    }

}