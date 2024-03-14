import React, { PropsWithChildren } from 'react';
export type IxApplicationContextProps = PropsWithChildren;
export declare class IxApplicationContext extends React.Component<IxApplicationContextProps> {
    private delegate;
    constructor(props: IxApplicationContextProps);
    render(): React.JSX.Element;
}
