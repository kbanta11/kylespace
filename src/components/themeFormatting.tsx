export class ThemeFormat {
    value: string;
    bgImg: string;
    nameColor: string;
    aboutMeBgColor: string;
    aboutMeTextColor: string;
    aboutMeBannerColor: string;
    aboutMeBannerTextColor: string;
    moodTextColor: string;
    projectTitleTextColorBig: string;
    projectTitleTextColorSmall: string;
    projectBannerColor: string;
    projectBannerTextColor: string;
    contactBoxColor: string;
    contactHeaderTextColor: string;
    contactBoxBgColor: string;
    contactLinkTextColor: string;
    interestsBoxColor: string;
    interestsHeaderTextColor: string;
    interestsBgColor: string;
    interestsTopicTextColor: string;
    interestsMainTextColor: string;
    constructor() {
        this.value='regular';
        this.bgImg = '';
        this.nameColor = '#000000';
        this.aboutMeBgColor = '#00000000';
        this.aboutMeBannerColor = '#FFEAB2';
        this.aboutMeBannerTextColor = '#FF7A00';
        this.aboutMeTextColor = 'black';
        this.moodTextColor = '#000000';
        this.projectTitleTextColorBig = '#000000';
        this.projectTitleTextColorSmall = '#000000';
        this.projectBannerColor = '#FFEAB2';
        this.projectBannerTextColor = '#FF7A00';
        this.contactBoxColor = '#86D3FF';
        this.contactHeaderTextColor = 'white';
        this.contactBoxBgColor = '#00000000';
        this.contactLinkTextColor = 'blue.500';
        this.interestsBoxColor = '#86D3FF';
        this.interestsHeaderTextColor = 'white';
        this.interestsBgColor = '#C1E5FF';
        this.interestsMainTextColor = 'black';
        this.interestsTopicTextColor = 'blue.500';
    }
}

export function getTheme(themeString: string) {
    const theme = new ThemeFormat();
    theme.value = themeString;
    switch(themeString) {
        case 'surfs-up':
            theme.bgImg = 'assets/images/surfboard.jpg';
            theme.aboutMeBgColor = '#FFEAB2';
            theme.moodTextColor = 'white';
            theme.projectTitleTextColorSmall = 'white';
            theme.contactBoxBgColor = '#86D3FF80';
            break;
        case 'titan-up':
            theme.nameColor = 'white';
            theme.moodTextColor = 'white';
            theme.projectTitleTextColorSmall = 'white';
            theme.projectTitleTextColorBig = 'white';
            theme.bgImg = 'assets/images/titans.png';
            theme.projectBannerColor = '#86D3FF';
            theme.projectBannerTextColor = '#de1010';
            theme.aboutMeBannerColor = '#86D3FF';
            theme.aboutMeBannerTextColor = '#de1010';
            theme.aboutMeBgColor = '#86D3FF80';
            theme.contactLinkTextColor = '#de1010';
            theme.contactBoxBgColor = '#86D3FF80';
            break;
        case 'nerd-mode':
            theme.nameColor = 'white';
            theme.moodTextColor = 'white';
            theme.bgImg = 'assets/images/nerd.jpg';
            theme.projectBannerColor = 'Chartreuse';
            theme.projectBannerTextColor = 'Magenta';
            theme.projectTitleTextColorBig = 'white';
            theme.projectTitleTextColorSmall = 'white';
            theme.aboutMeBannerColor = 'chartreuse';
            theme.aboutMeBannerTextColor = 'magenta';
            theme.aboutMeBgColor = 'chartreuse';
            theme.contactBoxColor = 'chartreuse';
            theme.contactBoxBgColor = 'chartreuse';
            theme.contactLinkTextColor = 'purple';
            theme.contactHeaderTextColor = 'magenta';
            theme.interestsBoxColor = 'chartreuse';
            theme.interestsHeaderTextColor = 'magenta';
            theme.interestsBgColor = 'palegreen';
            theme.interestsTopicTextColor = 'darkgreen'
            break;
        case 'lets-hike':
            theme.bgImg = 'assets/images/hiking.jpg';
            theme.aboutMeBgColor = '#FFEAB280'
            break;
        default:
    }
    return theme;
}