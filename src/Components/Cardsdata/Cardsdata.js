import BudgetingLogo from "file:///D:/VS%20Code/React%20Projects/easybank-landing-page-master/easybank-landing-page-master/easybank-landing/src/images/icon-budgeting.svg";
import OnlineLogo from "../../images/icon-online.svg";
import OnboardingLogo from "../../images/icon-onboarding.svg";
import ApiLogo from "../../images/icon-api.svg";

const cardData = [
    {
        id: 1,
        logo: OnlineLogo,
        heading: "Online Banking",
        description: "Our modern web and mobile applications allow you to keep track of your finances whenever you are in the world.",

    },
    {
        id: 2,
        logo: BudgetingLogo,
        heading: "Simple Budgeting",
        description: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
        id: 3,
        logo: OnboardingLogo,
        heading: "Fast Onboarding",
        description: "We don't do brances. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
        id: 4,
        logo: ApiLogo,
        heading: "Open API",
        description: "Manage your savings, investment, pension and much more from one account. Tacking your money has never been easier.",
    }
]

export default cardData;