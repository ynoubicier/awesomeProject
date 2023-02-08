import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, delay, map, Observable, tap } from "rxjs";
import { environment } from "src/environment/environment.prod";
import { Candidate } from "../models/candidate.model";

@Injectable()

export class CandidatesService {
    constructor(private http: HttpClient) { }

    private _loading$ = new BehaviorSubject<boolean>(false);

    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    private _candidates$ = new BehaviorSubject<Candidate[]>([]);

    get candidates$(): Observable<Candidate[]> {
        return this._candidates$.asObservable();
    }

    private lastCandidatesLoad = 0;

    private setLoadingStatus(loading: boolean) {
        this._loading$.next(loading);
    }

    getCandidatesFromServer() {
        if (Date.now() - this.lastCandidatesLoad <= 300000) {
            return;
        }
        this.setLoadingStatus(true);
        this.http.get<Candidate[]>(`${environment.apiUrl}/candidates`).pipe(
            delay(1000),
            tap(candidates => {
                this.lastCandidatesLoad = Date.now();
                this._candidates$.next(candidates);
                this.setLoadingStatus(false);
            })
        ).subscribe();
    }

    getCandiadateById(id: number): Observable<Candidate> {
        return this.candidates$.pipe(
            map(candidates => candidates.filter(candidate => candidate.id === id)[0])
        );
    }

}