class MultiForm {
    steps = [];
    currentStep = 0;
    nextButton;
    prevButton;
    orderButton;
    stepIndicatorElements;
    stepIndicatorTextElements;
    sideTextElement;
    indicatorTexts = ['Szállítási adatok megadása', 'Megrendelési sorok rögzítése', 'Megrendelés véglegesítése', 'Kész'];
    resetButton;
    constructor() {
        this.init();
        this.hideAllStep();
        this.showStep();

    }
    init() {
        this.steps = document.querySelectorAll('.step');
        this.stepIndicatorElements = document.querySelectorAll('.step-indicator-icon');
        this.stepIndicatorTextElements = document.querySelectorAll('.step-indicator-text');
        this.sideTextElement = document.querySelector('#sideText');
        this.nextButton = document.getElementById('nextButton');
        this.prevButton = document.getElementById('prevButton');
        this.orderButton = document.getElementById('orderButton');
        this.resetButton = document.getElementById('resetButton');
        this.nextButton.addEventListener('click', () => this.nextStep());
        this.prevButton.addEventListener('click', () => this.prevStep());
        this.orderButton.addEventListener('click', () => this.order());
        this.resetButton.addEventListener('click', () => this.resetOrder());
        this.setStepIndicatorsText();
    }
    setStepIndicatorsText() {
        for (let i = 0; i < this.stepIndicatorTextElements.length; i++) {
            this.stepIndicatorTextElements[i].innerText = this.indicatorTexts[i];
        }
    }
    showStep() {
        this.setButtonsVisibility();
        this.setActiveIndicator();
        this.setSideText();
        this.steps[this.currentStep].style.display = 'block';
    }
    setButtonsVisibility() {
        if (this.currentStep == 0 || this.currentStep == this.steps.length - 1) {
            this.prevButton.style.display = 'none';
        } else {
            this.prevButton.style.display = 'block';
        }
        if (this.currentStep == this.steps.length - 2 || this.currentStep == this.steps.length - 1) {
            this.nextButton.style.display = 'none';
        } else {
            this.nextButton.style.display = 'block';
        }
        if (this.currentStep == this.steps.length - 2) {
            this.orderButton.style.display = 'block';
        } else {
            this.orderButton.style.display = 'none';
        }
    }
    setActiveIndicator() {
        this.resetActiveIndicator();
        this.stepIndicatorElements[this.currentStep].classList.add('active');
    }
    resetActiveIndicator() {
        this.stepIndicatorElements.forEach((indicator) => {
            indicator.classList.remove('active');
        });
    }
    setSideText() {
        this.sideTextElement.innerText = `${this.currentStep+1}) ${this.indicatorTexts[this.currentStep]}`;
    }
    hideAllStep() {
        this.steps.forEach((step) => {
            step.style.display = 'none';
        });
    }
    nextStep() {
        this.hideAllStep();
        let nextStepIndex = this.currentStep + 1;
        if (nextStepIndex > this.steps.length - 1) nextStepIndex = this.steps.length - 1;
        this.currentStep = nextStepIndex;

        this.showStep();
    }
    prevStep() {
        this.hideAllStep();
        let nextStepIndex = this.currentStep - 1;
        if (nextStepIndex < 0) nextStepIndex = 0;
        this.currentStep = nextStepIndex;
        this.showStep();
    }
    order() {
        console.log('save order to database and get order number');
        this.nextStep();
    }
    resetOrder() {
        this.resetActiveIndicator();
        this.currentStep = 0;
        this.showStep();
    }
}

function logData(data) {
    console.log(data);
}
//popup3 = new QuestionPopUp('Kérdés?', 'Ez egy jó kis kérdés, de vajon mit fogsz rá válaszolni ?:)', logData);
//popup3.createPopUp();
//popup4 = new PopUp('Figyelmeztetés!', 'Lorem ipsum generator jo volna ide de még nem töltöttem le ilyen addon-t vagy van beépített a VS code-ban?', logData);
//popup4.createPopUp();
multiForm = new MultiForm();