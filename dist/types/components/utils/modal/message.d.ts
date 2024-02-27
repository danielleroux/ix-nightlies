import { TypedEvent } from '../typed-event';
export type MessageContent = {
    icon: string;
    iconColor?: string;
    messageTitle: string;
    message: string;
    actions: {
        id: string;
        type: 'button-primary' | 'button-secondary' | 'okay' | 'cancel';
        text: string;
        payload?: any;
    }[];
    ariaLabelledby?: string;
    ariaDescribedby?: string;
};
export declare function showMessage<T>(config: MessageContent): Promise<TypedEvent<{
    actionId: string;
    payload: T;
}>>;
export declare namespace showMessage {
    var info: (title: string, message: string, textOkay: string, textCancel?: string, payloadOkay?: any, payloadCancel?: any) => Promise<TypedEvent<{
        actionId: string;
        payload: unknown;
    }>>;
    var warning: (title: string, message: string, textOkay: string, textCancel?: string, payloadOkay?: any, payloadCancel?: any) => Promise<TypedEvent<{
        actionId: string;
        payload: unknown;
    }>>;
    var error: (title: string, message: string, textOkay: string, textCancel?: string, payloadOkay?: any, payloadCancel?: any) => Promise<TypedEvent<{
        actionId: string;
        payload: unknown;
    }>>;
    var success: (title: string, message: string, textOkay: string, textCancel?: string, payloadOkay?: any, payloadCancel?: any) => Promise<TypedEvent<{
        actionId: string;
        payload: unknown;
    }>>;
    var question: (title: string, message: string, textOkay: string, textCancel?: string, payloadOkay?: any, payloadCancel?: any) => Promise<TypedEvent<{
        actionId: string;
        payload: unknown;
    }>>;
}
