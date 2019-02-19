import axios from "axios";

export default class ProfileService {

    signup(profile, username, password, onSuccess, onError) {
        profile.email = username;
        axios.post("http://localhost:8080/api/cli/profiles/signup", {
            profile: profile,
            username: username,
            password: password
        }).then(function (result) {
            if (result.data.responseCode === 0) {
                onSuccess(result.data);
            } else {
                onError(result.data);
            }
        }, function (error) {
            onError(error.response.data);
        });
    }

    login(data, onSuccess, onError) {
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(data.username + ":" + data.password));
        fetch('http://localhost:8080/api/cli/profiles/login', {
            method: 'GET',
            headers: headers,
            credentials: 'include'
        }).then((response) => response.json())
            .then((responseData) => {
                if (responseData.responseCode === 0) {
                    onSuccess(responseData);
                } else {
                    onError(responseData);
                }
            }).catch((error) => {
            onError(error)
        });
    }

    update(data) {
        fetch('http://localhost:8080/api/cli/profiles/update', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:8080"
            },
            mode: "cors",
            credentials: 'same-origin',
            body: data
        }).then((response) => response.json())
            .then((responseData) => {
                if (responseData.responseCode === 0) {
                    console.log("update succesful");
                } else {
                    console.log("error updating profile");
                }
            }).catch((error) => {
            console.log("error updating profile");
        });
    }
}