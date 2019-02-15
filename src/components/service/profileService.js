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
        axios.get("http://localhost:8080/api/cli/profiles/login", {
            auth: {
                username: data.username,
                password: data.password
            },
        }).then(function (result) {
            if (result.data.responseCode === 0) {
                onSuccess(result.data);
            } else {
                onError(result.data);
            }
        }, function (error) {
            onError(error);
        });
    }
}