import IVacation from "./IVacation";

export default interface IDataContext {
    cookies?: Map<string, string>;
    vacations?: IVacation[];
    showedVacs?: number[];
}