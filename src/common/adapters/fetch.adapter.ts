import { response } from "express";
import { HttpAdapter } from "../interfaces/http-adapter.interface";

export class FetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    }

}