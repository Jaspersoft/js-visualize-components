const i18nLabel = (keyMsg: string): string => {
    const i18nLabelArray: any = {
        'materialUi.component.collapsiblePanel.close': 'Close panel'
    };
    return i18nLabelArray[keyMsg] || keyMsg;
};

export default i18nLabel;