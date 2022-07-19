export declare const agendaItems: ({
    title: string;
    data: {
        hour: string;
        duration: string;
        title: string;
    }[];
} | {
    title: string;
    data: {}[];
})[];
declare type MarkedDate = {
    [key: string]: object;
};
export declare function getMarkedDates(): MarkedDate;
export {};
