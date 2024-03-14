import type { JSX } from '@siemens/ix';
import React from 'react';
import { StyleReactProps } from '../react-component-lib/interfaces';
export declare const InternalIxTree: React.ForwardRefExoticComponent<JSX.IxTree & Omit<React.HTMLAttributes<HTMLIxTreeElement>, "style"> & StyleReactProps & React.RefAttributes<HTMLIxTreeElement>>;
export declare const IxTree: (props: Omit<JSX.IxTree, "renderItem"> & Omit<React.HTMLAttributes<HTMLIxTreeElement>, "style"> & StyleReactProps & React.RefAttributes<HTMLIxTreeElement> & {
    renderItem?: ((data: any) => React.ReactNode) | undefined;
}) => React.JSX.Element;
