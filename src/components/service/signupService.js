import axios from "axios";

export default class SignupService {
    signup(profile, username, password, onSuccess, onError) {
        profile.email = username;
        axios.post("http://localhost:8080/api/cli/profiles/signup", {
            profile: profile,
            username: username,
            password: password
            }).then(function (result) {
            if(result.data.responseCode === 0) {
                onSuccess(result.data);
            } else {
                onError(result.data);
            }
        }, function (error) {
            onError(error.response.data);
        });
    }
}