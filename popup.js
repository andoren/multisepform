let popUpsNumber = 0;
class PopUp {
    popUp;
    popUpId;
    popUpPrefix = "jspopup";
    title;
    message;
    answer;
    classCallBack;
    constructor(title = 'No title!', message = "No Message!", closeCallback) {
        this.popUpId = ++popUpsNumber;
        this.title = title;
        this.message = message;
        this.closeCallback = closeCallback;
    }
    get Answer() {
        return this.Answer;
    }
    set Answer(answer) {
        this.answer = answer;
    }
    get Id() {
        return this.popUpPrefix + this.popUpId;
    }
    createPopUp() {
        console.log(!this.popUp);
        if (!this.popUp) {
            const popUpElement = document.createElement('dialog');
            popUpElement.id = this.Id;

            const popUpFormElement = document.createElement('form');
            popUpFormElement.setAttribute('method', 'dialog');

            const popUpTitleElement = this.createPopUpTilte();
            const popUpMessageElement = this.createPopUpMessage();
            const popUpButtonElements = this.createPopUpButtons();

            popUpFormElement.appendChild(popUpTitleElement);
            popUpFormElement.appendChild(popUpMessageElement);
            popUpFormElement.appendChild(popUpButtonElements);

            popUpElement.appendChild(popUpFormElement);
            document.body.appendChild(popUpElement);
            this.popUp = popUpElement;
            popUpElement.addEventListener('close', (event) => {
                this.closeCallback(this.popUp.returnValue);
                this.answer = this.popUp.returnValue;
            });
        }


        this.showPopUp();
    }
    createPopUpTilte() {
        const popUpTitleElement = document.createElement('div');
        popUpTitleElement.classList.toggle('popuptitle');
        popUpTitleElement.innerText = this.title;
        return popUpTitleElement;
    }
    createPopUpMessage() {
        const popUpMessageElement = document.createElement('p');
        popUpMessageElement.classList.toggle('popupmessage');
        popUpMessageElement.innerText = this.message;
        return popUpMessageElement;
    }
    createPopUpButtons() {
        const popUpButtonElement = document.createElement('button');
        popUpButtonElement.classList.toggle('popupbutton');
        popUpButtonElement.innerText = 'OK';
        popUpButtonElement.setAttribute('value', 'OK');
        return popUpButtonElement;
    }

    showPopUp() {

        this.popUp.showModal();
    }
}
class QuestionPopUp extends PopUp {
    yesText
    noText
    constructor(title, message, closeCallback, yesText = 'Igen', noText = 'Nem') {
        super(title, message, closeCallback);
        this.yesText = yesText;
        this.noText = noText;
    }
    createPopUpButtons() {
        const popButtonContainerElement = document.createElement('div');

        const popUpYesButtonElement = document.createElement('button');
        popUpYesButtonElement.classList.toggle('popupbutton');
        popUpYesButtonElement.innerText = this.yesText;
        popUpYesButtonElement.setAttribute('value', 'YES');

        const popUpNoButtonElement = document.createElement('button');
        popUpNoButtonElement.classList.toggle('popupbutton');
        popUpNoButtonElement.innerText = this.noText;
        popUpNoButtonElement.setAttribute('value', 'NO');

        popButtonContainerElement.appendChild(popUpYesButtonElement);
        popButtonContainerElement.appendChild(popUpNoButtonElement);

        return popButtonContainerElement;
    }
}
class DataPopUp extends PopUp {

}
class PopUpService {
    showOkPopup() {

    }
}