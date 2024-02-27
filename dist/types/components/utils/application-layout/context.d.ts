export declare const closestIxMenu: (element: Element) => HTMLIxMenuElement;
export type AppSwitchConfigurationTarget = '_self' | '_blank' | '_parent' | '_top' | (string & {});
export type AppSwitchConfiguration = {
    currentAppId: string;
    apps: {
        id: string;
        name: string;
        description: string;
        url: string;
        target: AppSwitchConfigurationTarget;
        iconSrc: string;
    }[];
    i18nAppSwitch?: string;
    i18nLoadingApps?: string;
};
export declare const ApplicationLayoutContext: Readonly<import("../context").Context<{
    hideHeader: boolean;
    host: 'basic-navigation' | 'map-navigation' | null;
    appSwitchConfig?: AppSwitchConfiguration;
    sidebar?: boolean;
}>>;
