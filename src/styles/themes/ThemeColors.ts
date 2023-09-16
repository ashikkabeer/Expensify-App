type Color = string;

type ThemeColorsWithoutPageBackgroundColors = {
    // Figma keys
    appBG: Color;
    splashBG: Color;
    highlightBG: Color;
    border: Color;
    borderLighter: Color;
    borderFocus: Color;
    icon: Color;
    iconMenu: Color;
    iconHovered: Color;
    iconSuccessFill: Color;
    iconReversed: Color;
    iconColorfulBackground: Color;
    textSupporting: Color;
    text: Color;
    link: Color;
    linkHover: Color;
    buttonDefaultBG: Color;
    buttonHoveredBG: Color;
    buttonPressedBG: Color;
    danger: Color;
    dangerHover: Color;
    dangerPressed: Color;
    warning: Color;
    success: Color;
    successHover: Color;
    successPressed: Color;
    transparent: Color;
    signInPage: Color;

    // Additional keys
    overlay: Color;
    inverse: Color;
    shadow: Color;
    componentBG: Color;
    hoverComponentBG: Color;
    activeComponentBG: Color;
    signInSidebar: Color;
    sidebar: Color;
    sidebarHover: Color;
    heading: Color;
    textLight: Color;
    textDark: Color;
    textReversed: Color;
    textBackground: Color;
    textMutedReversed: Color;
    textError: Color;
    offline: Color;
    modalBackdrop: Color;
    modalBackground: Color;
    cardBG: Color;
    cardBorder: Color;
    spinner: Color;
    unreadIndicator: Color;
    placeholderText: Color;
    heroCard: Color;
    uploadPreviewActivityIndicator: Color;
    dropUIBG: Color;
    dropTransparentOverlay: Color;
    checkBox: Color;
    pickerOptionsTextColor: Color;
    imageCropBackgroundColor: Color;
    fallbackIconColor: Color;
    reactionActiveBackground: Color;
    reactionActiveText: Color;
    badgeAdHoc: Color;
    badgeAdHocHover: Color;
    mentionText: Color;
    mentionBG: Color;
    ourMentionText: Color;
    ourMentionBG: Color;
    tooltipSupportingText: Color;
    tooltipPrimaryText: Color;
    skeletonLHNIn: Color;
    skeletonLHNOut: Color;
    QRLogo: Color;
};

type ThemeColors = ThemeColorsWithoutPageBackgroundColors & {
    PAGE_BACKGROUND_COLORS: Record<string, Color>;
};

export {type Color, type ThemeColors, type ThemeColorsWithoutPageBackgroundColors};
