export default class UserInfo {
    constructor(setInfo) {
        this._profileInfo = document.querySelector(setInfo.profileInfoSelector);
        this._profileDescription = document.querySelector(setInfo.profileDescriptionSelector);
    }

    getUserInfo() {
        return {
        user: this._profileInfo.textContent,
        description: this._profileDescription.textContent}
    }

    setUserInfo(dataUser) {
        this._profileInfo.textContent = dataUser.user;
        this._profileDescription.textContent = dataUser.description;
    }
}

