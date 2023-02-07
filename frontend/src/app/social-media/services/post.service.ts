import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { environment } from "src/environment/environment.prod";
import { Post } from "../models/post.model";

@Injectable()

export class PostService {
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
    }

    addNewComment(postCommented: { comment: string, postId: number }) {
        console.log(postCommented);
    }
}